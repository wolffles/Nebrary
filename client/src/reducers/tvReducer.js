import{
  GET_SHOWS, 
  SHOW_LOADING
} from '../actions/types'

const initialState = {
  shows: [],
  loading: false
}

export default function(state = initialState, action){
  switch(action.type) {
    case SHOW_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_SHOWS:
      return {
        ...state, 
        shows: action.payload,
        loading: false
      }
    default:
      return state
  }
}