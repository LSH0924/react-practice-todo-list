import React from "react";

import {Route} from 'react-router-dom';
import Menu from './Menu';
import {Home, About, TodoList} from '../pages'

const App = () => {
    return (
      <div>
        <Menu />
        <Route exact path="/" component={Home} />
        <Route exact path="/about/:name?" component={About} />
        <Route exact path="/todo" component={TodoList} />
      </div>
    );
}
export default App;
