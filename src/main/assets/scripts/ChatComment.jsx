import React from 'react';

const ChatComment = (props) => (
  <div className="comment">
    <h2 className="commentUsername">
      {props.username}
    </h2>
    {props.children}
  </div>
);

ChatComment.propTypes = {
  username: React.PropTypes.string.isRequired,
  children: React.PropTypes.element,
};

export default ChatComment;
