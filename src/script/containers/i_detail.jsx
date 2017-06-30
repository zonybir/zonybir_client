import React,{Component} from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import {Link} from 'react-router-dom'
import {RouteTransition } from 'react-router-transition'
import spring from 'react-motion/lib/spring';

import {
    GetDetail
} from '../actions/ac_index'
class Idetail extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        let id=this.props.params.id;
        if(!id) history.go(-1);
        this.props.dispatch(GetDetail(id));
    }
    componentWillReceiveProps(nextProps,nextState) {
        if(this.props.params.id != nextProps.params.id) this.props.dispatch(GetDetail(nextProps.params.id));
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
}

const selectState = (state,ownProps)=>{
    var thisState=state['iList']
    return{
        list:thisState.detailList,
        params:ownProps.match.params
    }
}

export default withRouter(connect(selectState)(Idetail))