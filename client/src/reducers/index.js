import { combineReducers } from 'redux';
import tvReducer from './tvReducer';
import errorReducer from './errorReducer'

export default combineReducers({
  tvShows: tvReducer,
  errors: errorReducer
});