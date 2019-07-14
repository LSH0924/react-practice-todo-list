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

  render() {
    const {input, todos} = this.state;
    const {handleChange, handleInsert} = this;
    return (
      <PageTemplate>
        <TodoInput 
        onChange={handleChange} 
        value={input} 
        onInsert={handleInsert}/>
        <TodoList children={todos}/>
      </PageTemplate>
    );
  }
}

export default App;
