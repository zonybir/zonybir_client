import React from 'react'
import ReactRouter,{Router,Route,IndexRoute} from 'react-router'

console.log(ReactRouter);
import Index from './containers/index'


export default 

<div>
    <Router path='*' component={Index} />
    <Router path='/' component={Index} />
</div>