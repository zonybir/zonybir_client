import React from 'react'
import {Router,Route,IndexRoute} from 'react-router'

import Bundle from './bundle.jsx'

import Index from './containers/index'
import IDetail from 'bundle-loader?lazy&name=app-[name]!./containers/i_detail'
import Login from 'bundle-loader?lazy&name=app-[name]!./containers/login'
import A from 'bundle-loader?lazy&name=app-[name]!./containers/a'

import AddItem from 'bundle-loader?lazy&name=app-[name]!./containers/addItem'

const IDetails=()=>(
    <Bundle load={IDetail}>
        {(IDetails) => <IDetails />}
    </Bundle>
)
const AddItems=()=>(
    <Bundle load={AddItem}>
        {(AddItems) => <AddItems />}
    </Bundle>
)
const GetLogin=()=>(
    <Bundle load={Login}>
        {(GetLogind) => <GetLogind />}
    </Bundle>
)
export default 

<div>
    <Route exact path='/' component={Index} />
    <Route path='/add' component={AddItems} />
    <Route path='/i_detail/:id' component={IDetails} />
    <Route path='/login' component={GetLogin} />
</div>