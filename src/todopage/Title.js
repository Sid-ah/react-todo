import React, {Component} from 'react';

class Title extends Component {
  render() {
    return (
      <div className="header">
        <h1>Todo List (React only)</h1>
        <h3>All To-Do {this.props.countTodo}</h3>
      </div>
    )
  }
}

export default Title;
