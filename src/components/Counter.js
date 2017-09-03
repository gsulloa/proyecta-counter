import React from 'react';
import {connect} from 'react-redux'

const Counter = ({number}) => {
    return(
      <div style={{textAlign: "center"}}>
        <small>Le hemos hablado a:</small>
        <h1>{number} </h1><span><small>personas</small></span>

      </div>
    )
}
const mapStateToProps = (state) => {
  return {number: state.counter}
}
export default connect(mapStateToProps,null)(Counter);
