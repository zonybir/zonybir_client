import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Test} from '../actions/ac_index'
import {Link} from 'react-router-dom'
import {RouteTransition } from 'react-router-transition'
import spring from 'react-motion/lib/spring';
class Index extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const slideConfig = { stiffness: 33, damping: 100 };
        const fadeConfig = { stiffness: 20, damping: 100 };
        console.log(this.props.location.pathname);
        return(
            <RouteTransition
            component={false}
            pathname={this.props.location.pathname}
            className="transition-wrapper"
            atEnter={{ 
                opacity: 0,
                offset: 100
            }}
            atLeave={{ 
                opacity: spring(0, fadeConfig),
                offset: spring(-100, slideConfig)
             }}
            atActive={{ 
                opacity: spring(1, slideConfig),
                offset: spring(0, slideConfig)
            }}
            mapStyles={(styles)=>{
                return {
                    opacity: styles.opacity,
                    transform: `translateX(${styles.offset}%)`,
                };
            }}
            >
            <div style={{backgrounColor:'#0f0'}}>
                <p onClick={()=>{this.hanldeDispatch()}}>{this.props.data}</p>
                <p><Link to="a">to a</Link></p>
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

export default connect(selectState)(Index)