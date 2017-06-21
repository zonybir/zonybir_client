import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import Test from './test'
import iList from './re_index'
const routing = routerReducer;

const reducer = combineReducers({
    Test,
    iList,
    routing
})

export default reducer;