import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import TabTwoReducer from './TabTwoReducers'

const AppReducers = combineReducers({
    TabTwoReducer,
   
});

const rootReducer = (state, action) => {
    return AppReducers(state, action);
}
let store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;