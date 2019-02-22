import axios from 'axios';
import {
  GET_ERRORS,
  GET_SHOWS,
  SHOW_LOADING,
  SEARCH_TITLE,
  DETAILS_PAGE,
  CLEAR_ERRORS
} from './types'

//GET TV SHOWS
export const getShows = (queryObj) => dispatch => {
  dispatch(setShowLoading());
  dispatch(clearErrors());
  axios
    .get(`/api/tv/`,{
      params: {
        page: queryObj
      }
    })
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

//GET Details for show
export const getDetailsPage = (queryObj) => dispatch => {
  // dispatch(setShowLoading());
  axios
    .get(`/api/tv/details/${queryObj}`)
    .then(res =>
      dispatch({
        type: DETAILS_PAGE,
        payload: res.data
      }))
    .catch(err =>
      dispatch({
        type: DETAILS_PAGE,
        payload: null
      })
    )
}

//GET Search for by title
export const searchTitleTV = (queryObj) => dispatch => {
  dispatch(setShowLoading());
  dispatch(clearErrors());
  axios
    .get(`/api/tv/search/`, {
      params: {
        search: queryObj.search,
        page: queryObj.page
      }
    })
    .then(res =>
      dispatch({
        type: SEARCH_TITLE,
        payload: res.data
      }))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}

// Set loading state
export const setShowLoading = () => {
  return {
    type: SHOW_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};