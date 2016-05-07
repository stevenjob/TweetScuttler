import React from 'react';

const ChatComment = (props) => (
  <div className="comment">
    <span className="commentUsername">
      {props.username}{': '}
    </span>
    {props.children}
  </div>
);

ChatComment.propTypes = {
  username: React.PropTypes.string.isRequired,
  children: React.PropTypes.element,
};

export default ChatComment;
