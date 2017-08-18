import React,{Component} from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router-dom'

import {
    Login
} from '../actions/ac_public'
class LoginClass extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="login">
                <div className='info'>懂你所懂</div>
                <div className='form_login'>
                    <input type='text' placeholder='公测账户' ref='user_name_login'/>
                    <input type='password' placeholder='请输入您的密码' ref='user_password_login'/>
                    <div className='submit_btn' onClick={()=>this.props.dispatch(Login(this.refs.user_name_login.value,this.refs.user_password_login.value))}>登录</div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        let user=localStorage.user;
        if(user) location.hash='/';
    }
}

const selectState = (state,ownProps)=>{
    return{}
}

export default connect(selectState)(LoginClass)