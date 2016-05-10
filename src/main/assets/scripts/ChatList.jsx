import React from 'react';
import ChatComment from './ChatComment.jsx';

const ChatList = (props) => {
  console.log(this);
  let commentNodes = props.data.map((comment) =>
    <ChatComment username={comment.username} key={comment.id}>
      {comment.text}
    </ChatComment>
  );
  return (
    <div className="chatCommentList">
      <ChatComment username="Steven">I am god</ChatComment>
      <ChatComment username="James Hill">I wish i was in TR like jonny</ChatComment>
      {commentNodes}
    </div>
  );
};

export default ChatList;
