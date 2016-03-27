package tweetscuttler

import com.corundumstudio.socketio.AckRequest
import com.corundumstudio.socketio.SocketIOClient
import com.corundumstudio.socketio.SocketIOServer
import com.corundumstudio.socketio.annotation.OnEvent
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

@Component class ChatEventHandler {

  private final var server: SocketIOServer = null

  @Autowired def this(server: SocketIOServer) {
    this()
    this.server = server
  }

  @OnEvent(value = "chatevent")
  def onEvent(client: SocketIOClient, request: AckRequest, data: ChatObject) {
    server.getBroadcastOperations.sendEvent("chatevent", data)
  }
}