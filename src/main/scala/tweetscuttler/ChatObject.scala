package tweetscuttler

class ChatObject {
  private var userName: String = _
  private var message: String = _

  def getUserName: String = {
    userName
  }

  def setUserName(s: String) {
    userName = s
  }

  def getMessage: String = {
    message
  }

  def setMessage(s: String) {
    message = s
  }
}