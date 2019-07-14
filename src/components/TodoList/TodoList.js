import React, { Component } from "react";

import TodoItem from "../TodoItem";

class TodoList extends Component {

  render() {
    const {children} = this.props;
    const childrenList = children.map(item => 
      <TodoItem key={item.id} done={item.done}>{item.constents}</TodoItem>
    );
    return (
      <div>
        {childrenList}
      </div>
    );
  }
}

export default TodoList;