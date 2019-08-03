import React from "react";
import PageTemplate from "../components/PageTemplate";
import TodoInputContainer from "../containers/TodoInputContainer";
import TodoListContainer from "../containers/TodoListContainer";

const TodoList = () => {
    return (
      <PageTemplate>
        <TodoInputContainer />
        <TodoListContainer />
      </PageTemplate>
    );
};

export default TodoList;