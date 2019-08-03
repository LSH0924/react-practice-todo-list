import React from "react";

const About = ({match}) => {
    return (
        <div>
            <h2>About</h2>
            <p>리액트 라우터 사용하기 실습</p>
            <p>안녕하세요, {match.params.name}의 연습장입니다.</p>
        </div>
    );
};

export default About;