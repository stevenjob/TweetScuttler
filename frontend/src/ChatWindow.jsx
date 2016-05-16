import React, { Component } from 'react';
import ChatList from './ChatList.jsx';
import ChatForm from './ChatForm.jsx';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:9092');

export default class ChatWindow extends Component {
    constructor(props) {
        super(props);

        socket.on('chatevent', (data) => {
            this.addCommentToState(data.username, data.message, Date.now());
        });

        this.state = { data: [] };
    }

    componentDidMount() {
        console.log(this);
        this.loadCommentsFromServer();
    }

    loadCommentsFromServer() {
        this.setState({
            data: [
                { username: 'Rob', text: 'TR 4 lyfe', id: 1 },
                { username: 'Jonny', text: 'TR <3', id: 2 },
            ],
        });
    }

    addCommentToState = (username, text, id) => {
        this.setState({
            data: this.state.data.concat([
                { username, text, id },
            ]),
        });
    }

    formSubmit = (text) => {
        socket.emit('chatevent', {
            username: 'User',
            message: text,
        });
    }

    render() {
        return (
            <div className="chatWindow">
                <ChatForm onSubmit={this.formSubmit} />
                <ChatList data={this.state.data} />
            </div>
        );
    }
}
