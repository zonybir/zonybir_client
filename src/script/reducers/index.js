import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import Test from './test'
import iList from './re_index'
import Public from './re_public'
import addItem from './re_addItem'
const routing = routerReducer;

const reducer = combineReducers({
    Test,
    iList,
    routing,
    Public,
    addItem
})

export default reducer;