import React, { Component } from 'react';
import ChatList from './ChatList.jsx';
import ChatForm from './ChatForm.jsx';

export default class ChatWindow extends Component {

  constructor(props) {
    super(props);
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

  formSubmit = (text) => {
    this.setState({
      data: this.state.data.concat([
        { username: 'Jonny', text, id: Date.now() },
      ]),
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
