import React, { Component } from "react";

import PageTemplate from "./PageTemplate";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

class App extends Component {

  state = {
    input : "", // input 에 입력한 값
    todos : [{
      id: "0",
      constents: "리액트 공부",
      done: true
    },{
      id: "1",
      constents: "TodoList 만들기 두번째...",
      done: false
    }]
  }

  handleChange = (e) => {
    const {value} = e.target;
    this.setState({
      input : value
    });
  }

  render() {
    const {input, todos} = this.state;
    const {handleChange} = this;
    return (
      <PageTemplate>
        <TodoInput onChange={handleChange} value={input}/>
        <TodoList children={todos}/>
      </PageTemplate>
    );
  }
}

export default App;
