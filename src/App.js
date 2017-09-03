import React, { Component } from "react"
import { Provider, connect } from "react-redux"
import Counter from "./components/Counter"
import ButtonIncrement from './components/ButtonIncrement'



class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
          <div style={{
              width: "100%",
              height: "100%",
              padding: "0",
              margin:"0",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              backgroundColor: "#9dccd1"
            }} >
            <div style={{width: "auto", backgroundColor: "white", padding: "100px", borderRadius: "15px"}}>
              <img src={require('./logo-proyecta-uc.png')} />
              <Counter />
              <ButtonIncrement />
            </div>
          </div>
      </Provider>
    )
  }
}

export default connect()(App)
