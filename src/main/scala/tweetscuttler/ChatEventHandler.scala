package tweetscuttler

import com.corundumstudio.socketio.{AckRequest, SocketIOClient, SocketIOServer}
import com.corundumstudio.socketio.annotation.{OnConnect, OnEvent}
import org.springframework.beans.factory.annotation.{Autowired, Value}
import org.springframework.scheduling.annotation.Scheduled
import org.springframework.stereotype.Component

@Component
class ChatEventHandler {

  private final var server: SocketIOServer = null
  private var streamer: TweetStreamer = null
  private val listener = new TweetStatusListener

  @Value("${auth.consumer.key}")
  val consumerKey: String = null

  @Value("${auth.consumer.secret}")
  val consumerSecret: String = null

  @Value("${auth.token}")
  val token: String = null

  @Value("${auth.secret}")
  val secret: String = null

  @Autowired
  def this(server: SocketIOServer) {
    this()
    this.server = server
  }

  @OnConnect
  def onConnectEvent(client: SocketIOClient): Unit = {
    println("on connect")
    if (streamer == null) {
      streamer = new TweetStreamer(consumerKey, consumerSecret, token, secret)
        .addListener(listener)
    }
  }

  @Scheduled(fixedRate = 1000)
  def sendNextStatus() {
    if (listener.statusQueue.nonEmpty)
      server.getBroadcastOperations.sendEvent("chatevent", listener.statusQueue.dequeue())
  }

  @OnEvent(value = "chatevent")
  def onChatEvent(client: SocketIOClient, request: AckRequest, data: ChatObject) {
    server.getBroadcastOperations.sendEvent("chatevent", data)
    listener.statusQueue.clear()
    streamer.applyFilterAndRun(data.getMessage)
  }
}