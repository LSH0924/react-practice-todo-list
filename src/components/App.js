import React, { Component } from "react";

import PageTemplate from "./PageTemplate";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

class App extends Component {

  state = {
    input : "", // input 에 입력한 값
    todos : [{
      id: "0",
      contents: "리액트 공부",
      done: true
    },{
      id: "1",
      contents: "TodoList 만들기 두번째...",
      done: false
    }]
  }

  // Key 로 사용할 id값을 반환한다.
  currentId = 1;
  getId = () => {
    return ++this.currentId;
  }

  handleChange = (e) => {
    const {value} = e.target;
    this.setState({
      input : value
    });
  }

  handleInsert = () => {
    const {input, todos} = this.state;
    const item = {
      id: this.getId(),
      contents: input,
      done: false
    }
    
    this.setState({
      input : "",
      todos: [...todos, item]
    });
  }

  handleToggle = (id) => {
    const {todos} = this.state;
    // 리스트 배열에서 이벤트가 일어난 컴포넌트의 인덱스 찾기
    const index = todos.findIndex(item => item.id === id);
    // 찾은 컴포넌트의 done 값을 반전시키기
    const item = {
      ...todos[index],
      done: !todos[index].done
    }
    console.log(index, item);
    // .slice 를 이용해 원래 todos 배열의 index 전후 요소들을 복사하고
    // 그 사이에 편집한 item 을 끼워준다.
    this.setState({
      todos: [
        // 0부터 index까지 slice 한 배열을 가져와 전개시킴
        ...todos.slice(0, index), 
        item, 
        ...todos.slice(index + 1, todos.length)
      ]
    });
  }

  handleRemove = (id) => {
    const {todos} = this.state;
    const index = todos.findIndex(item => item.id === id);
    this.setState({
      todos: [
        ...todos.slice(0, index), 
        ...todos.slice(index + 1, todos.length)
      ]
    });
  }

  render() {
    const {input, todos} = this.state;
    const {handleChange, handleInsert, handleToggle, handleRemove} = this;
    return (
      <PageTemplate>
        <TodoInput 
        onChange={handleChange} 
        value={input} 
        onInsert={handleInsert}/>
        <TodoList 
        children={todos}
        onToggle={handleToggle}
        onRemove={handleRemove}/>
      </PageTemplate>
    );
  }
}

export default App;
