import React from 'react'
import {connect} from 'react-redux'
const popsicle = require('popsicle')

const ButtonIncrement = ({increment}) => {
  return  <p style={{textAlign: "center"}}>
    <button onClick={increment} style={{padding: "0 20px 0 20px",border: "none",borderRadius:"5px", backgroundColor:"#9dccd1", fontSize:"30px"}}>
      +
    </button>
    </p>
}
const mapDispatchToProps = (dispatch) => {
  return({
    increment: async () =>{
      const response = await popsicle.post('http://104.236.104.14/increment');
      return dispatch({
        type: "INCREMENT_COUNTER",
        amount: JSON.parse(response.body).amount
      })
    }
  })
}
export default connect(null,mapDispatchToProps)(ButtonIncrement);
