import React, { Component } from 'react';

export default class ChatComment extends Component {
    render() {
        return (
            <div className="comment">
                <h2 className="commentUsername">
                    {this.props.username}
                </h2>
                {this.props.children}
            </div>
        )
    }
}