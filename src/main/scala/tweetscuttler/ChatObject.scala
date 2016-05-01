package tweetscuttler

class ChatObject {
  private var username: String = _
  private var message: String = _

  def getUsername: String = {
    username
  }

  def setUsername(s: String) {
    username = s
  }

  def getMessage: String = {
    message
  }

  def setMessage(s: String) {
    message = s
  }
}

object ChatObject {
  def apply(username: String, message: String): ChatObject = {
    val obj = new ChatObject
    obj.username = username
    obj.message = message
    obj
  }
}