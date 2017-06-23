import React,{Component} from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router-dom'
import {RouteTransition } from 'react-router-transition'
import spring from 'react-motion/lib/spring';

import {
    Login
} from '../actions/ac_public'
class LoginClass extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <RouteTransition
            component={false}
            pathname={this.props.location.pathname}
            className="transition-wrapper"
            atEnter={{ 
                opacity: 0,
                offset: 40
            }}
            atLeave={{ 
                opacity: 0,
                offset: 10
             }}
            atActive={{ 
                opacity: 1,
                offset: 0
            }}
            mapStyles={(styles)=>{
                return {
                    opacity: styles.opacity,
                    transform: `translateX(${styles.offset}%)`,
                };
            }}
            >
            <div id="i_login_content">
                <input type='text' />
                <input type='text' />
            </div>
            </RouteTransition>
        )
    }
    hanldeDispatch(){
        console.log(1);
        this.props.dispatch(Test());
    }
}

const selectState = (state,ownProps)=>{
    return{
        a:state,
        data:state.Test.a
    }
}

export default connect(selectState)(LoginClass)