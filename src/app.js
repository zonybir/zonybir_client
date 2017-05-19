import React from 'react'
import {render} from 'react-dom'

import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'

import ReduxThunk from 'redux-thunk'

import createHashHistory from 'history/createHashHistory'
import {Router,Route,hashHistory,browserHistory} from 'react-router-dom'

import {routerMiddleware,routerReducer,syncHistoryWithStore} from 'react-router-redux'


import storeData from './reducers'
import appRouter from './router.js'
import Index from './containers/index'
//console.log(Index);
const history = createHashHistory();

const middleware = routerMiddleware(history);

let store = createStore(
    storeData,
    applyMiddleware(ReduxThunk),
    applyMiddleware(middleware)
);
//console.log(syncHistoryWithStore)
//const history = syncHistoryWithStore(hashHistory,store);

render(
    <Provider store={store}>
        <Router history={history} >
            {appRouter}
        </Router>
    </Provider>,
    document.getElementById('app')
)