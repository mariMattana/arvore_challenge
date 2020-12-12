import { LOAD_DATES } from '../acionTypes'

const initialState = []

export default (state = initialState, action) => {
  switch(action.type){
    case LOAD_DATES:
      return [...action.dateList]
    default:
      return state
  }
}