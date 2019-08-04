import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
    const activeStyle = {
        color: "green",
        fontSize: "2rem"
    };

    return (
        <div>
            <ul>
                <li><NavLink exact to="/" activeStyle={activeStyle}>홈</NavLink></li>
                <li><NavLink exact to="/about/Sane" activeStyle={activeStyle}>소개</NavLink></li>
                <li><NavLink exact to="/todo" activeStyle={activeStyle}>TodoList</NavLink></li>
            </ul>
        </div>
    );
};

export default Menu;