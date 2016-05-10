package tweetscuttler

import twitter4j.FilterQuery
import twitter4j.StatusListener
import twitter4j.TwitterStream
import twitter4j.TwitterStreamFactory
import twitter4j.conf.ConfigurationBuilder

final class TweetStreamer(val consumerKey: String, val consumerSecret: String, val token: String, val secret: String) {
  val cb: ConfigurationBuilder = new ConfigurationBuilder
  cb.setDebugEnabled(true)
    .setOAuthConsumerKey(consumerKey)
    .setOAuthConsumerSecret(consumerSecret)
    .setOAuthAccessToken(token)
    .setOAuthAccessTokenSecret(secret)
  private var twitterStream: TwitterStream = null
  twitterStream = new TwitterStreamFactory(cb.build).getInstance
  private var filter: FilterQuery = null

  def addListener(sl: StatusListener): TweetStreamer = {
    twitterStream.addListener(sl)
    this
  }

  def applyFilterAndRun(keywords: String) {
    filter = new FilterQuery
    filter.track(keywords)
    twitterStream.filter(filter)
  }
}
