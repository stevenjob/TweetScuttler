package tweetscuttler

import com.corundumstudio.socketio.{AckRequest, SocketIOClient, SocketIOServer}
import com.corundumstudio.socketio.annotation.{OnConnect, OnEvent}
import org.springframework.beans.factory.annotation.{Autowired, Value}
import org.springframework.stereotype.Component
import twitter4j._

@Component class ChatEventHandler {

  private final var server: SocketIOServer = null
  private var streamer: TweetStreamer = null

  private val listener: StatusListener = new StatusListener() {
    override def onStallWarning(warning: StallWarning): Unit = println("sw")

    override def onDeletionNotice(statusDeletionNotice: StatusDeletionNotice): Unit = println("deletion")

    override def onScrubGeo(userId: Long, upToStatusId: Long): Unit = println("scrub")

    override def onStatus(status: Status): Unit = sendStatus(status)

    override def onTrackLimitationNotice(numberOfLimitedStatuses: Int): Unit = println("tln")

    override def onException(ex: Exception): Unit = println("exception")
  }

  @Value("${auth.consumer.key}") val consumerKey: String = null
  @Value("${auth.consumer.secret}") val consumerSecret: String = null
  @Value("${auth.token}") val token: String = null
  @Value("${auth.secret}") val secret: String = null

  @Autowired def this(server: SocketIOServer) {
    this()
    this.server = server
  }

  def sendStatus(status: Status) = {
    val user = status.getUser.getName
    val text = status.getText
    server.getBroadcastOperations.sendEvent("chatevent", ChatObject(user, text))
  }

  @OnConnect
  def onConnectEvent(client: SocketIOClient): Unit = {
    println("on connect")
    if (streamer == null) {
      streamer = new TweetStreamer(consumerKey, consumerSecret, token, secret)
        .addListener(listener)
    }
  }

  @OnEvent(value = "chatevent")
  def onChatEvent(client: SocketIOClient, request: AckRequest, data: ChatObject) {
    println(client)
    println(request)
    println(data)
    server.getBroadcastOperations.sendEvent("chatevent", data)
    streamer.applyFilterAndRun(Array(data.getMessage))
  }
}