package tweetscuttler

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.EnableAutoConfiguration
import org.springframework.context.annotation.{Configuration, ComponentScan}

@Configuration
@EnableAutoConfiguration
@ComponentScan
class Application

object Application extends App {
  SpringApplication.run(classOf[Application])
}