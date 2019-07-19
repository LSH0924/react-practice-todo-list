import React, { Component } from "react";
import TodoList from "../components/TodoList";

// 스토어와 컴포넌트 연결
import { connect } from "react-redux";
// dispatch와 액션 생성함수 연결
import { bindActionCreators } from "redux";
// 액션 생성 함수 불러오기
import * as todosActions from "../modules/todos";

class TodoListContainer extends Component {
  handleToggle = id => {
    const { TodosActions } = this.props;
    TodosActions.toggle(id);
  };

  handleRemove = id => {
    const { TodosActions } = this.props;
    TodosActions.remove(id);
  };

  render() {
    const { handleToggle, handleRemove } = this;
    const { todos } = this.props;
    return (
      <TodoList
        children={todos}
        onToggle={handleToggle}
        onRemove={handleRemove}
      />
    );
  }
}

export default connect(
  //mapStateToProps : 할 일 리스트를 받아와 props로 넣어주기
  state => ({
    todos: state.todos
  }),
  //mapDispatchToProps : todosActions안에 있는 액션 생성 함수 dispatch와 연결
  dispatch => ({
    TodosActions: bindActionCreators(todosActions, dispatch)
  })
)(TodoListContainer);
