import React from 'react'
import {Router,Route,IndexRoute} from 'react-router'

import Index from './containers/index'
import A from './containers/a'

export default 

<div>
    <Route exact path='/' component={Index} />
    <Route path='/a' component={A} />
</div>