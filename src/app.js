import React from 'react'
import ReactDOM,{render} from 'react-dom'
import {createStore,combineReducers,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import ReduxThunk from 'redux-thunk'
import ReactRouter,{Router,Route,hashHistory,browserHistory} from 'react-router'
import {syncHistoryWithStore,routerReducer} from 'react-router-redux'

console.log(ReactRouter)
import storeData from './reducers'
import appRouter from './router.js'

const store = createStore(
    storeData,
    applyMiddleware(ReduxThunk)
);

const history = syncHistoryWithStore(hashHistory,store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routers={appRouter} />
    </Provider>,
    document.getElementById('app')
)