import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

/**
 * 페이지 템플릿용 컴포넌트
 * 페이지 레이아웃과 함께 타이틀, 콘텐츠 등의 속성이 설정되어 있다
 * @param {children} props 로 받은 리스트 컴포넌트 
 */
const PageTemplate = ({children}) => {
    return (
        <div className={cx('page-template')}>
            <h1>Todo List</h1>
            <div className={cx('content')}>
                {children}
            </div>
        </div>
    );
}

export default PageTemplate;