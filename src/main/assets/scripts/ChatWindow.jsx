import React, { Component } from 'react';
import ChatList from './ChatList.jsx'
import ChatForm from './ChatForm.jsx'

export default class ChatWindow extends Component {

    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    loadCommentsFromServer() {
        this.setState({
            data: [
                {"username": "Rob", "text": "TR 4 lyfe", id: 1},
                {"username": "Jonny", "text": "TR <3", id: 2}
            ]
        })
    }

    componentDidMount() {
        console.log(this);
        this.loadCommentsFromServer();
    }

    render() {
        return (
            <div className="chatWindow">
                <ChatForm />
                <ChatList data={this.state.data} />
            </div>
        )
    }
}