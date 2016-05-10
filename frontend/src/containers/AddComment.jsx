import React from 'react';

let input;
class AddComment extends React.Component {
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(input.value);
    input.value = '';
  }

  onFocus() {
    input.placeholder = '';
  }

  onBlur() {
    input.placeholder = 'Type something...';
  }

  ref(node) {
    input = node;
  }

  render() {
    return (
      <div>
        <form className="chatForm" onSubmit={this.onSubmit}>
          <input
            ref={this.ref}
            placeholder="Type something..."
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          />
        </form>
      </div>
    );
  }
}

AddComment.propTypes = {
  onSubmit: React.PropTypes.func,
};

export default AddComment;
