import React from "react"
import ReactDOM from "react-dom"

import App from "./App"
import configureStore from "./redux/store"

const popsicle = require('popsicle');



const initialState = {}
const store = configureStore(initialState)

store.dispatch(async () => {
  const resp = await popsicle.get('http://localhost:8080/amount')
  const amount = JSON.parse(resp.body).amount
  store.dispatch({type: "FETCH_COUNTER", amount})
})


export default ReactDOM.render(
  <App store={store}/>,
  document.getElementById("root") || document.createElement("root")
)
