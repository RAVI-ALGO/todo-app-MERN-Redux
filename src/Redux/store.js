import {createStore,combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {todoReducer} from '../Redux/Reducers/todoReducer'
import { tabReducer } from './Reducers/tabReducer'
const reducers = combineReducers({
    todos:todoReducer,
    currentTab:tabReducer,
})

const middleware = [thunk]
const store =createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;