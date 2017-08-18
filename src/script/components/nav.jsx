import React,{Component} from 'react'
import {Link} from 'react-router-dom'
export default class Nav extends  Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <div className='nav' id='top_nav_target'>
                <span className='left'>{this.props.left}</span>
                <span className='center'>{this.props.title || '财务记账'}</span>
                <span className='right'></span>
            </div>
        )
    }
    componentDidMount(){
    }
    componentWillReceiveProps(nextProps){
            
    }
}