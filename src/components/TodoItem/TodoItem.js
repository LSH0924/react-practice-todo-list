import React, { Component } from "react";

import styles from "./TodoItem.scss";
import classNames from "classnames/bind";

// styles 의 클래스 이름들을 받아와 cx 안에 집어넣는다.
const cx = classNames.bind(styles);

class TodoItem extends Component {
  render() {
    const { done, children, onToggle, onRemove } = this.props;
    return (
      <div className={cx("todo-item")} onClick={onToggle}>
        {/* 실제로는 이벤트가 일어나지 않는 장식용 체크박스 */}
        <input
          className={cx("tick")}
          type="checkbox"
          checked={done}
          readOnly
        />
        {/* props를 설정할 때 아무 값도 설정하지 않으면 true 를 넣은것과 같은 취급을 한다. */}
        <label className={cx("text", { done })}>{children}</label>
        <button className={cx("delete")} onClick={onRemove}>
          DELETE
        </button>
      </div>
    );
  }
}
export default TodoItem;
