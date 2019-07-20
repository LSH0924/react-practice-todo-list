import { createStore } from "redux";
import modules from "module";

const store = createStore(
    modules,
    window.devToolsExtension && window.devToolsExtension()
  );

export default store;