import React from "react";
import queryString from "query-string";

const About = ({location, match}) => {
    const query = queryString.parse(location.search);
    console.log(query);
    
    const color = {
        color: query.color
    }
    return (
        <div>
            <h2 style={color}>About</h2>
            <p>리액트 라우터 사용하기 실습</p>
            <p>안녕하세요, {match.params.name}의 연습장입니다.</p>
        </div>
    );
};

export default About;
