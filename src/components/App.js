import React from "react";

import {Route} from 'react-router-dom';
import Menu from './Menu';
import {Home, About, TodoList, Posts} from '../pages'
import AsyncSplit from "./AsyncSplit";

const App = () => {
    return (
      <div>
        <Menu />
        <AsyncSplit/>
        <Route exact path="/" component={Home} />
        <Route path="/about/:name?" component={About} />
        <Route path="/todo" component={TodoList} />
        <Route path="/post" component={Posts} />
      </div>
    );
}
export default App;
