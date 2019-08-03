import React from "react";

import {Route} from 'react-router-dom';
import {Home, About, TodoList} from '../pages'

const App = () => {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/todo" component={TodoList} />
      </div>
    );
}
export default App;
