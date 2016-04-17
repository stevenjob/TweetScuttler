package tweetscuttler

import com.corundumstudio.socketio.AckRequest
import com.corundumstudio.socketio.SocketIOClient
import com.corundumstudio.socketio.SocketIOServer
import com.corundumstudio.socketio.annotation.{OnConnect, OnEvent}
import org.springframework.beans.factory.annotation.{Autowired, Value}
import org.springframework.stereotype.Component

@Component class ChatEventHandler {

  private final var server: SocketIOServer = null

  @Autowired def this(server: SocketIOServer) {
    this()
    this.server = server
  }

  @Value("${auth.consumer.key}") val consumerKey: String = null
  @Value("${auth.consumer.secret}") val consumerSecret: String = null
  @Value("${auth.token}") val token: String = null
  @Value("${auth.secret}") val secret: String = null

  @OnConnect
  def onConnectEvent(client: SocketIOClient): Unit = {
    println("on connect")
    TweetStreamer.INSTANCE.start(consumerKey, consumerSecret, token, secret)
  }

  @OnEvent(value = "chatevent")
  def onChatEvent(client: SocketIOClient, request: AckRequest, data: ChatObject) {
    println(client)
    println(request)
    println(data)
    server.getBroadcastOperations.sendEvent("chatevent", data)
    server.getBroadcastOperations.sendEvent("chatevent", ChatObject("Twitter", TweetStreamer.INSTANCE.getNextTweet()))
  }
}