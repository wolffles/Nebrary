import axios from 'axios';
import {
  // GET_ERRORS,
  GET_SHOWS,
  SHOW_LOADING

} from './types'

//GET TV SHOWS
export const getShows = (searchOptions) => dispatch => {
  dispatch(setShowLoading());
  axios
    .get('/api/tv', searchOptions)
    .then(res => 
      dispatch({
        type: GET_SHOWS,
        payload: res.data
      }) )
    .catch(err => 
      dispatch({ 
        type: GET_SHOWS,
        payload: null
      })
    )
}

// Set loading state
export const setShowLoading = () => {
  return {
    type: SHOW_LOADING
  };
};