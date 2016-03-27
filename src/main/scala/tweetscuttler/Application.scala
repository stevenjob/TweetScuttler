package tweetscuttler

import com.corundumstudio.socketio.annotation.SpringAnnotationScanner
import com.corundumstudio.socketio.{Configuration, SocketIOServer}
import org.springframework.boot.SpringApplication
import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.autoconfigure.EnableAutoConfiguration
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.ComponentScan

@EnableAutoConfiguration
@ComponentScan
class Application {

  @Value("${wss.server.host}")
  val host: String = null

  @Value("${wss.server.port}")
  val port: Integer = null

  @Bean def socketIOServer: SocketIOServer = {
    val config = new Configuration
    config.setHostname(host)
    config.setPort(port)
    new SocketIOServer(config)
  }

  @Bean def springAnnotationScanner(ssrv: SocketIOServer): SpringAnnotationScanner = {
    new SpringAnnotationScanner(ssrv)
  }
}

object Application extends App {
  SpringApplication.run(classOf[Application])
}