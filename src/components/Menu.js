import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">홈</Link></li>
                <li><Link to="/about/Sane">소개</Link></li>
                <li><Link to="/todo">TodoList</Link></li>
            </ul>
        </div>
    );
};

export default Menu;