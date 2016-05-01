package tweetscuttler;

import twitter4j.FilterQuery;
import twitter4j.StatusListener;
import twitter4j.TwitterStream;
import twitter4j.TwitterStreamFactory;
import twitter4j.conf.ConfigurationBuilder;


public final class TweetStreamer {
    private TwitterStream twitterStream;
    private FilterQuery filter;

    public TweetStreamer(String consumerKey, String consumerSecret, String token, String secret) {
        ConfigurationBuilder cb = new ConfigurationBuilder();
        cb.setDebugEnabled(true)
                .setOAuthConsumerKey(consumerKey)
                .setOAuthConsumerSecret(consumerSecret)
                .setOAuthAccessToken(token)
                .setOAuthAccessTokenSecret(secret);

        twitterStream = new TwitterStreamFactory(cb.build()).getInstance();
    }

    public TweetStreamer addListener(StatusListener sl) {
        twitterStream.addListener(sl);
        return this;
    }

    public void applyFilterAndRun(String[] keywords) {
        filter = new FilterQuery();
        filter.track(keywords);
        twitterStream.filter(filter);
    }
}
