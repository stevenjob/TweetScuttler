package tweetscuttler;

import com.twitter.hbc.ClientBuilder;
import com.twitter.hbc.core.Constants;
import com.twitter.hbc.core.endpoint.StatusesSampleEndpoint;
import com.twitter.hbc.core.processor.StringDelimitedProcessor;
import com.twitter.hbc.httpclient.BasicClient;
import com.twitter.hbc.httpclient.auth.Authentication;
import com.twitter.hbc.httpclient.auth.OAuth1;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Value;

public enum TweetStreamer {
	INSTANCE;

	private static BlockingQueue<String> queue = new LinkedBlockingQueue<>(10000);

	private static BasicClient client;

	public String getNextTweet() {

        String msg = null;
        if (client.isDone()) {
            System.out.println("Client connection closed unexpectedly: " + client.getExitEvent().getMessage());
            return null;
        }

		try {
			msg = queue.poll(5, TimeUnit.SECONDS);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        if (msg == null) {
            System.out.println("Did not receive a message in 5 seconds");
        } else {
            System.out.println(msg);
        }

        return msg;
	}
	
	public void run(String consumerKey, String consumerSecret, String token, String secret) throws InterruptedException {
        // Create an appropriately sized blocking queue
        
        // Define our endpoint: By default, delimited=length is set (we need this for our processor)
        // and stall warnings are on.
        StatusesSampleEndpoint endpoint = new StatusesSampleEndpoint();
        endpoint.stallWarnings(false);

        Authentication auth = new OAuth1(consumerKey, consumerSecret, token, secret);
        //Authentication auth = new com.twitter.hbc.httpclient.auth.BasicAuth(username, password);

        // Create a new BasicClient. By default gzip is enabled.
        client = new ClientBuilder()
                .name("sampleExampleClient")
                .hosts(Constants.STREAM_HOST)
                .endpoint(endpoint)
                .authentication(auth)
                .processor(new StringDelimitedProcessor(queue))
                .build();

        // Establish a connection
        client.connect();

        // Print some stats
        System.out.printf("The client read %d messages!\n", client.getStatsTracker().getNumMessages());
    }



    public void start(String consumerKey, String consumerSecret, String token, String secret) {
	    try {
	        run(consumerKey, consumerSecret, token, secret);
	    } catch (InterruptedException | NullPointerException e) {
	        e.printStackTrace();
	    }
    }
}
