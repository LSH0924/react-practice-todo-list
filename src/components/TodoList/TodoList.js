import React, { Component } from "react";

import TodoItem from "../TodoItem";

class TodoList extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    // 현재 props의 아이템배열과 앞으로 바뀔 예정인 props의 아이템배열이 다를때만 컴포넌트를 업데이트한다.
    return this.props.children !== nextProps.children;
  }

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