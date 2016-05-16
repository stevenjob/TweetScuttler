package tweetscuttler

import twitter4j.{StallWarning, Status, StatusDeletionNotice, StatusListener}

import scala.collection.mutable

class TweetStatusListener extends StatusListener {

  val statusQueue = mutable.Queue[ChatObject]()

  override def onStallWarning(warning: StallWarning): Unit = println("sw")

  override def onDeletionNotice(statusDeletionNotice: StatusDeletionNotice): Unit = println("deletion")

  override def onScrubGeo(userId: Long, upToStatusId: Long): Unit = println("scrub")

  override def onStatus(status: Status): Unit = {
      println("Send status to queue")
      val user = status.getUser.getName
      val text = status.getText
      statusQueue += ChatObject(user, text)
  }

  override def onTrackLimitationNotice(numberOfLimitedStatuses: Int): Unit = println("tln")

  override def onException(ex: Exception): Unit = println("exception")
}
