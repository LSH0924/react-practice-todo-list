import React, { Component } from "react";
import TodoInput from "../components/TodoInput";

// 스토어와 컴포넌트 연결
import { connect } from "react-redux";
// bindActionCreators를 사용하면 자동으로 아래와 같이 작업해준다.
// {
//    actionCreator: (,,,params)=>dispatch(actionCreator(...params))
// }
// 일일이 dispatch 작업을 해줄 필요가 없음.
// 첫번째 파라미터는 액션 생성 함수들이 들어있는 객체, 두 번째 파라미터는 dispatch 이다.
import { bindActionCreators } from "redux";

// 액션 생성 함수 불러오기
import * as inputActions from "../modules/input";
import * as todosActions from "../modules/todos";

// TodoInput 을 가진 컨테이너 컴포넌트 만들기
class TodoInputContainer extends Component {
  // Key 로 사용할 id값을 반환한다.
  currentId = 1;
  getId = () => {
    return ++this.currentId;
  };

  handleChange = e => {
    const { value } = e.target;
    const { InputActions } = this.props;
    InputActions.setInput(value);
  };

  handleInsert = () => {
    const { value, TodosActions, InputActions } = this.props;
    if (value === "") {
      alert("빈칸은 입력할 수 없어요!");
      return false;
    }
    const item = {
      id: this.getId(),
      contents: value,
      done: false
    };
    TodosActions.insert(item);
    InputActions.setInput("");
  };

  render() {
    const { value } = this.props;
    const { handleChange, handleInsert } = this;
    return (
      <TodoInput
        value={value}
        onChange={handleChange}
        onInsert={handleInsert}
      />
    );
  }
}

// 내보내면서 스토어와 연결
export default connect(
  // mapStateToProps
  state => ({
    value: state.input.get("value")
  }),
  //mapDispatchToProps
  dispatch => ({
    InputActions: bindActionCreators(inputActions, dispatch),
    TodosActions: bindActionCreators(todosActions, dispatch)
    // TodosActions: {
    //      insert: ({id, contents, done}) => dispatch(todoActions.insert({id, contents, done}))
    //      ...
    //    }
    // 와 같음
  })
)(TodoInputContainer);
