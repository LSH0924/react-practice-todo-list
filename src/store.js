import { createStore, applyMiddleware, compose } from "redux";
import modules from "./modules";
// createLogger 는 옵션을 지정해 로거를 생성할 수 있다.
// 사용하려면 import { createLogger } from "redux-logger";
// https://github.com/LogRocket/redux-logger#options createLogger에서 사용하는 옵션. 책에 있던 주소가 바뀌었다.
import logger from "redux-logger";


const store = createStore(
    modules,
    compose(
        applyMiddleware(
            logger
        ),
        window.devToolsExtension && window.devToolsExtension()
    )
  );

export default store;