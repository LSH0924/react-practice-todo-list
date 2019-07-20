import { createStore, applyMiddleware, compose } from "redux";
import modules from "./modules";
import loggerMiddleware from "./lib/loggerMiddleware";

const store = createStore(
    modules,
    compose(
        applyMiddleware(
            loggerMiddleware
        ),
        window.devToolsExtension && window.devToolsExtension()
    )
  );

export default store;