import React, { Component } from "react";

import TodoItem from "../TodoItem";

class TodoList extends Component {
  render() {
    return (
      <div>
        <TodoItem done>리액트 공부하기</TodoItem>
        <TodoItem>SASS PATH 어떡하냐 해결좀</TodoItem>
      </div>
    );
  }
}

export default TodoList;