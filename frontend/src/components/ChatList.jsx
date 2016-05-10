import React from 'react';
import ChatComment from './ChatComment.jsx';

const ChatList = ({ comments }) => {
  let commentNodes = comments.map((comment) =>
    <ChatComment username={comment.username} key={comment.id}>
      {comment.text}
    </ChatComment>
  );
  return (
    <div className="chatCommentList">
      {commentNodes}
    </div>
  );
};

ChatList.propTypes = {
  comments: React.PropTypes.array,
};

export default ChatList;
