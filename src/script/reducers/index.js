import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import Test from './test'
const routing = routerReducer;

const reducer = combineReducers({
    Test,
    routing
})

export default reducer;