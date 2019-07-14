import React from 'react';
import styles from './TodoInput.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

/**
 * input 과 입력 버튼이 함께 있는 컴포넌트
 *
 * @param {value, onChange, onInsert} 
 * value : input에 입력한 값
 * onChange : input변경 이벤트
 * onInsert : 입력 버튼 클릭 이벤트 
 */
const TodoInput = ({value, onChange, onInsert}) => {

    const handleKeyPress = (e) =>{
        // 엔터키가 눌릴때 onInsert 실행
        if(e.key === 'Enter'){
            onInsert();
        }
    }

    return (
        <div className={cx('todo-input')}>
            <input
            onChange={onChange}
            value={value}
            onKeyPress={handleKeyPress}/>
            <button className={cx('add-button')} onClick={onInsert}>
                추가
            </button>
        </div>
    );
}

export default TodoInput;