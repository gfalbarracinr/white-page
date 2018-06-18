import React, { Component } from "react";

class ToDoListItem extends Component {

  render() {
    const { todo } = this.props;
    return (
      <div key="toDoName" className="col s10 offset-s1 to-do-list-item teal">
        <h4>
          {todo.title}{" "}
          <span
            className="complete-todo-item waves-effect waves-light teal lighten-5 teal-text text-darken-4 btn"
          >
            <i className="large material-icons">done</i>
          </span>
        </h4>
      </div>
    );
  }
}

export default ToDoListItem;
