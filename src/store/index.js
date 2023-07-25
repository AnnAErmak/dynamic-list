import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {postsReducer} from './reducers/postsReducer'

const rootReducer = combineReducers({
    postsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))