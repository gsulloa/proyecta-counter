import { combineReducers } from "redux"

import counter from "./modules/counter"


const reducer = combineReducers({
  counter
})

export default reducer
