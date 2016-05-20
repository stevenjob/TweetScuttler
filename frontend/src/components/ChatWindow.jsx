import React from 'react';
import { connect } from 'react-redux';
import AddComment from '../containers/AddComment.jsx';
import CommentsList from '../containers/CommentsList.jsx';
import { addComment } from '../actions/index.jsx';
import io from 'socket.io-client';

let dispatch;
const socket = io.connect('http://localhost:9092');

class ChatWindow extends React.Component {
  componentDidMount() {
    dispatch = this.props.dispatch;
    socket.on('chatevent', (data) => {
      dispatch(addComment(data.message, data.username));
    });
  }

  onSubmit(text) {
    socket.emit('chatevent', {
      username: 'User',
      message: text,
    });
  }

  render() {
    return (
      <div className="chatWindow">
        <AddComment onSubmit={this.onSubmit} />
        <CommentsList />
      </div>
    );
  }
}

ChatWindow.propTypes = {
  dispatch: React.PropTypes.func,
};

export default connect()(ChatWindow);
