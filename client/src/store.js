import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const initialState = {}
const middleware = [thunk];

//use this in development in production safari doesnt work.
// const store = createStore(
//     rootReducer,
//     initialState,
//     compose(
//         applyMiddleware(...middleware),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// );


// in production use this because it works in safari as well
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware))); 

export default store;