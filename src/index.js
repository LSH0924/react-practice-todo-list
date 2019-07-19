import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// 리듀서 적용
// default로 내보낸 객체의 이름은 import 할 때 마음대로 지정할 수 있다.
import modules from "./modules";
import { createStore } from "redux";
import { Provider } from "react-redux";

// 스토어 만들고 리덕스 개발자도구에 연결하기
const store = createStore(
    modules,
    window.devToolsExtension && window.devToolsExtension()
  );

const renderingComponent = (
<Provider store={store}>
    <App />
</Provider>
);

ReactDOM.render(renderingComponent, document.getElementById('root'));

serviceWorker.unregister();
