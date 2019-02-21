import axios from 'axios';
import {
  // GET_ERRORS,
  GET_SHOWS,
  SHOW_LOADING,
  SEARCH_TITLE
} from './types'

//GET TV SHOWS
export const getShows = (searchOptions) => dispatch => {
  dispatch(setShowLoading());
  // console.log(searchOptions)
  axios
    .get(`/api/tv/${searchOptions}`)
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

//GET Search for by title
export const searchTitleTV = (queryObj) => dispatch => {
  dispatch(setShowLoading());
  // console.log(queryObj)
  axios
    .get(`/api/tv/search/${queryObj.query}/${queryObj.page}`)
    .then(res =>
      dispatch({
        type: SEARCH_TITLE,
        payload: res.data
      }))
    .catch(err =>
      dispatch({
        type: SEARCH_TITLE,
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