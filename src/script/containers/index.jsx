import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Nav from '../components/nav'
import Footer from '../components/footer'
import TableData from '../components/tableData'
import {
    GetList
} from '../actions/ac_index';
class Index extends Component{
    constructor(props){
        super(props);
        this.handleStopDefaultAction=this.handleStopDefaultAction.bind(this);
    }
    componentDidMount(){
        this.props.dispatch(GetList());
    }
    render(){
        let {dispatch,list,activeType}=this.props;
        return(
            <div id='index'>
                <div className='drup_dwon_show'></div>
                <Nav />
                <TableData data={list}/>
                <Footer active={activeType} callBack={(type)=>dispatch(GetList(type))}/>
            </div>
        )
    }
    handleStopDefaultAction(e){
        const evt=e.touches[0],
              scrollTop=document.body.scrollTop;
        let moveX=evt.pageX-this.pageX,
            moveY=evt.pageY-this.pageY;
        e.cancelable&&!e.defaultPrevented&&scrollTop<=0&&moveY>0&&e.preventDefault();
        return false;
    }
    handleStartTouch(e){
        this.refs.index_target.removeAttribute('class');
        const evt=e.touches[0];
        this.pageX=evt.pageX;
        this.pageY=evt.pageY;
    }
    handleTouchMove(e){
        e.preventDefault();
        return false;
        const evt=e.touches[0],
              scrollTop=document.body.scrollTop;
        let moveX=evt.pageX-this.pageX,
            moveY=evt.pageY-this.pageY;
        if(moveX<=30 && scrollTop<=0 && moveY>0){
            this.refs.index_target.style.transform='translate(0,'+moveY/10+'px)';
            e.preventDefault();
        }
        
    }
    handleEndTouch(){
        this.refs.index_target.setAttribute('class','animate_scroll');
        //this.refs.index_target.style.transform='translate(0,0)';
    }
}

const selectState = (state,ownProps)=>{
    var thisState=state['iList']
    return{
        list:thisState.list,
        activeType:thisState.activeType
    }
}

export default connect(selectState)(Index)