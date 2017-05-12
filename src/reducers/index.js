import {combineReducers} from 'redux'
import Rffff,{routerReducer} from 'react-router-redux'
import ReactRouter from 'react-router'
console.log(routerReducer);
console.log(Rffff)
console.log(ReactRouter)
import Test from './test'
const routing = routerReducer;

const reducer = combineReducers({
    Test,
    routing
})

export default reducer;