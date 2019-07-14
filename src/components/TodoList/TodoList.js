import React, { Component } from "react";

import TodoItem from "../TodoItem";

class TodoList extends Component {

  render() {
    const {children, onInsert, onToggle, onRemove} = this.props;
    const childrenList = children.map(item => 
      <TodoItem 
      key={item.id} 
      done={item.done} 
      onInsert={onInsert} 
      onToggle={()=> onToggle(item.id)}
      onRemove={()=> onRemove(item.id)}>
        {item.contents}
      </TodoItem>
    );
    return (
      <div>
        {childrenList}
      </div>
    );
  }
}

export default TodoList;