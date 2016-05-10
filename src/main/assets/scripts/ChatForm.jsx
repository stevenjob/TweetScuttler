import React, { Component } from 'react';

export default class ChatForm extends Component {
  static propTypes = { onSubmit: React.PropTypes.func };

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (event) => {
    this.setState({ input: event.target.value });
    console.log(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.input);
    this.setState({ input: '' });
  }

  render() {
    return (
      <form className="chatForm" onSubmit={this.handleSubmit}>
        <input
          placeholder="Type something..."
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
