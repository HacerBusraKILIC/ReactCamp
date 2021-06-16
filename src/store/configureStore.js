import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { devToolsEnhancer } from "redux-devtools-extension";

export function configureStore(params) {
  return createStore(rootReducer, devToolsEnhancer());
}
