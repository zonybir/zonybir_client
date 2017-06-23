import React,{Component} from 'react'
import {Link} from 'react-router-dom'
export default class Page extends  Component{
    constructor(props){
        super(props);
        this.state={
            page:[]
        }
    }
    componentDidMount(){
        let {data,onePage,config}=this.props,
            {page,count}=data,

            maxPage=Math.ceil(count/config.size),
            nowSizeIndex=Math.floor(page/config.page),
            nowIndex=page%config.page,
            tem_num=nowSizeIndex*config.page,
            first_page=nowIndex>1?tem_num:nowIndex==1?nowSizeIndex>0?(tem_num-config.page):tem_num:(tem_num+config.page)<maxPage?(tem_num+config.page):tem_num,
            pageAraay=[];
            first_page=first_page || 1;
            for(let i=1;first_page<=maxPage&&i<6;i++,first_page++) pageAraay.push(first_page);
            this.setState({
                page:pageAraay
            })
    }
    componentWillReceiveProps(nextProps){
        let {data,onePage,config}=nextProps,
            {page,count}=data,

            maxPage=Math.ceil(count/config.size),
            nowSizeIndex=Math.floor(page/config.page),
            nowIndex=page%config.page,
            tem_num=nowSizeIndex*config.page,
            first_page=nowIndex>1?tem_num:nowIndex==1?nowSizeIndex>0?(tem_num-config.page):tem_num:tem_num<maxPage?tem_num:tem_num-config.page,
            pageAraay=[];
            first_page=first_page || 1;
            console.log(maxPage,nowSizeIndex,nowIndex,first_page);
            for(let i=1;first_page<=maxPage&&i<6;i++,first_page++) pageAraay.push(first_page);
            this.setState({
                page:pageAraay
            })
            
    }
    render(){
        let {page}=this.state,
            {dispatch,callback,data}=this.props;
        return(
            <ul className="page_content clearfix">
                <li className="skip_one" onClick={()=>dispatch(callback(parseInt(data.page)-1?parseInt(data.page)-1:parseInt(data.page)))}>{"<上一页"}</li>
                <li className='active' >{data.page}</li>
                <li className='input'> <input type='text' onBlur={(e)=>this.handleBulrInp(e.target.value)}/></li>
                <li className="skip_one" onClick={()=>dispatch(callback(parseInt(data.page)+1))}>{"下一页>"}</li>
                
            </ul>
        )
    }
    handleBulrInp(value){
        if(!value) return;
        value-=0;
        isNaN(value)?'':this.props.dispatch(this.props.callback(value-0));
    }
}