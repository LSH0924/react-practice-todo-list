import React from "react";

const Home = ({history}) => {
    return (
        <div>
            <h2>HOME</h2>
            <button
            onClick = {()=>{
                history.push('/about/Javascript');
            }}>
                자바스크립트를 사용해 이동 - about
            </button>
        </div>
    );
};

export default Home;