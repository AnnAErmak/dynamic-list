import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {postsReducer} from './reducers/postsReducer'
import {loaderReducer} from './reducers/loaderReducer'

const rootReducer = combineReducers({
    postsReducer,
    loaderReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))