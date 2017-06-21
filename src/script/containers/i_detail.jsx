import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Test} from '../actions/ac_index'
import {Link} from 'react-router-dom'
import {RouteTransition } from 'react-router-transition'
import spring from 'react-motion/lib/spring';
class Idetail extends Component{
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
            <div id="i_list">
                <div className="detail_content">
                    <div className="back_box" onClick={()=>history.go(-1)}></div>
                    <h5 className="detail_title">旅行相册</h5>
                    <img src='/img/trivial.jpg' />
                    <img src='/img/trivial.jpg' />
                    <img src='/img/trivial.jpg' />
                    <img src='/img/trivial.jpg' />
                    <img src='/img/trivial.jpg' />
                    <img src='/img/trivial.jpg' />
                    <img src='/img/trivial.jpg' />
                    <img src='/img/trivial.jpg' />
                    <img src='/img/trivial.jpg' />
                    <img src='/img/trivial.jpg' />
                    <img src='/img/trivial.jpg' />
                    
                </div>
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

export default connect(selectState)(Idetail)