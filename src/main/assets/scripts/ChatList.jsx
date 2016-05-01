import React, { Component } from 'react';
import ChatComment from './ChatComment.jsx';

export default class ChatList extends Component {
    render() {
        console.log(this);
        let commentNodes = this.props.data.map(function(comment) {
            return (
                <ChatComment username={comment.username} key={comment.id}>
                    {comment.text}
                </ChatComment>
            );
        });
        return (
            <div className="chatCommentList">
                <ChatComment username="Steven">I am god</ChatComment>
                <ChatComment username="James Hill">I wish i was in TR like jonny</ChatComment>
                {commentNodes}
            </div>
        );
    }
}