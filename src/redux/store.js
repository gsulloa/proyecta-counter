import {  createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import reducers from "./reducers"

export default function configureStore(
  initialState = {},
) {

  // Setup middleware
  const middleware = [
    thunk
  ]


  // Setup middlewares and enhancers
  const enhancer = applyMiddleware(...middleware)

  // Create redux store
  const store = createStore(reducers, initialState, enhancer)

  return store
}
