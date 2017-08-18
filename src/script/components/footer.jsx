import React,{Component} from 'react'
import {Link} from 'react-router-dom'
export default class Footer extends  Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        let {active,callBack}=this.props;
        return(
            <ul className='footer'>
                <li className={active==1?'active':''} onClick={()=>callBack(1)}>今日</li>
                <li className={active==2?'active':''} onClick={()=>callBack(2)}>本周</li>
                <li className={active==3?'active':''} onClick={()=>callBack(3)}>月度</li>
                <li className={active==4?'active':''} onClick={()=>callBack(4)}>年汇</li>
                <li><Link to='add'><i className='add_icon'></i></Link></li>
            </ul>
        )
    }
    componentDidMount(){
    }
    componentWillReceiveProps(nextProps){
            
    }
}