// configures reducers and provides a function that a redux provider could use to configure

import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import categoryReducer from "./categories";
// import productReducer from "./products"

const reducers = combineReducers({
  index: categoryReducer,
  // section: productReducer
})

// pass in reducers to our createStore

const createReduxStore = () => {
  return createStore(reducers, composeWithDevTools());
}

export default createReduxStore;