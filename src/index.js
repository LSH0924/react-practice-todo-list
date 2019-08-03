import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";

// 리듀서 적용
// default로 내보낸 객체의 이름은 import 할 때 마음대로 지정할 수 있다.
import { Provider } from "react-redux";
import store from "./store"

const renderingComponent = (
<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>
);

ReactDOM.render(renderingComponent, document.getElementById('root'));

serviceWorker.unregister();
