import React from 'react'
import {Router,Route,IndexRoute} from 'react-router'

import Index from './containers/index';
import IDetail from './containers/i_detail';
import A from './containers/a'

export default 

<div>
    <Route exact path='/' component={Index} />
    <Route path='/i_detail' component={IDetail} />
</div>