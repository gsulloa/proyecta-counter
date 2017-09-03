export default function counter(state=0,action){
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return action.amount
    case "FETCH_COUNTER":
      return action.amount
    default:
      return state

  }
}
