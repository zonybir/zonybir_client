import React,{Component} from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import {Link} from 'react-router-dom'

import Nav from '../components/nav'
import {
    GetTypeList,
    PostItemData
} from '../actions/ac_addItem'
class AddItem extends Component{
    constructor(props){
        super(props);
        this.StartTimeSelct=()=>{}
        this.state={
            step:1,
            scrollContainerHei:300,
            typeSelect:[],
            secList:[],
            secSelect:{},
            finalList:[],
            showAddModle:false
        };
    }
    componentDidMount(){
        this.props.dispatch(GetTypeList())
        this.setState({
            scrollContainerHei:window.screen.availHeight-document.getElementById('top_nav_target').offsetHeight
        })
    }
    componentWillReceiveProps(nextProps,nextState) {}
    render(){
        let {step,typeSelect,secList,secSelect,finalList,showAddModle}=this.state;
        let {list} = this.props;
        return(
            <div id="add_item">
                <Nav title={'添加记录'} left={<i onClick={()=>{this.handleBack()}}>←</i>}/>
                <div className='step_container clearfix' style={{height:this.state.scrollContainerHei+'px'}}>
                    <div className='step'>
                        <ul className='type_content'>
                            {
                                list.map((v,k)=>{
                                    return <li className={typeSelect.indexOf(v.id)<0?'':'active'} key={'add_type_item'+k} onClick={()=>{this.handleAddType(v.id)}}>{v.title}</li>
                                })
                            }
                            <li onClick={()=>{this.handleShowModle(true)}}>+</li>
                        </ul>
                        <div className='btn'>下一步</div>
                    </div>
                    <div className={'step step2 '+(step>=2?'active':'')}>
                        <div className='table_data'>
                            {
                                secList.map((v,k)=>{
                                    let secDom=v.children.map((vi,ki)=>{
                                        let secSelectItem=secSelect[v.id];
                                        return <span key={'sec_type_item_'+ki+'_'+k} 
                                                    className={secSelectItem?secSelectItem.indexOf(vi.id)>=0?'active':'':''}
                                                    onClick={()=>this.handleSelectSec(v.id,vi.id)}
                                                >{vi.type}</span>
                                    })
                                    return(
                                        <div className='class_type' key={'type_class_'+k}>
                                            <div className='title'>{v.title}</div>
                                            <div className='detail type_sec_container'>{secDom}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={'step step2 '+(step>=3?'active':'')}>
                        <div className='table_data'>
                            {
                                finalList.map((v,k)=>{
                                    let secDom=v.children.map((vi,ki)=>{
                                        return <div className='add_item_detail' key={'final_detail_item'+v.id+'-'+k+ki}>
                                                    <div className='sec_type_name'>{vi.type}</div>
                                                    <div className='sec_type_detail'>
                                                        <input className='' type='text' placeholder='输入描述信息（选填）' ref={'add_detail_'+k+'-'+ki}/>
                                                        <input className='pri_inp' type='number' placeholder='金额' ref={'add_amount_'+k+'-'+ki}/>
                                                    </div>
                                                </div>
                                    })
                                    return(
                                        <div className='class_type' key={'finl_type_class_'+k}>
                                            <div className='title'>{v.title}</div>
                                            <div className='detail'>
                                                {secDom}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='btn' onClick={()=>{this.handleNext()}}>{step>=3?'保存':'下一步'}</div>
                <div className='modle' style={{display:showAddModle?'':'none'}} onClick={()=>{this.handleShowModle(false)}}>
                    <div className='content' onClick={(e)=>e.stopPropagation()}>
                        <h3 className='title'>添加分类</h3>
                        <div className='modle_body'>
                            <p className='info'>多个分类请使用逗号(,)分开</p>
                            <input type='text' className='class_inp' ref='add_class_type_inp'/>
                        </div>
                        <div className='modle_footer'><div className='sure_add' onClick={()=>this.handleSureAdd()}>确认</div></div>
                    </div>
                </div>
            </div>
        )
    }
    handleBack(){
        let {step}=this.state;
        if(step==1){history.go(-1);}
        else this.setState({step:step-1},()=>{
            if(step==3) this.StartTimeSelct=setTimeout(()=>this.setState({finalList:[]}),1000)
        })
    }
    handleAddType(id){
        let typeSelect=this.state.typeSelect;
        let index=typeSelect.indexOf(id);
        if(index>=0){
            typeSelect.splice(index,1);
        }else typeSelect.push(id);
        this.setState({typeSelect})
    }
    handleSelectSec(id,k){
        let {secSelect}=this.state,
            index=secSelect[id].indexOf(k);
        index<0?secSelect[id].push(k):secSelect[id].splice(index,1);
        this.setState({
            secSelect
        })
    }
    handleNext(){
        let {step,typeSelect}=this.state;
        let {list}=this.props;
        if(step==1){
            if(typeSelect.length<=0){
                alert('你先选择分类');
                return;
            }
            let secData=[],secSelect={};
            list.map((v,k)=>{
                typeSelect.indexOf(v.id)>=0?secData.push(v):'';
                secSelect[v.id]=[];
            })
            this.setState({
                step:step+1,
                secList:secData,
                secSelect
            })
        }else if(step==2){
            clearTimeout(this.StartTimeSelct);
            let {secSelect}=this.state,hasSelect=false;
            for(let key in secSelect){
                if(secSelect[key].length>0)  hasSelect=true;
            }
            if(hasSelect){
                let finalList=[];
                list.map((v,k)=>{
                    let secSelectItem=secSelect[v.id];
                    if(secSelectItem.length>0){
                        let obj={
                            title:v.title,
                            id:v.id,
                            children:[]
                        };
                        v.children.map((vi,ki)=>{
                            secSelectItem.indexOf(vi.id)>=0?obj.children.push({
                                type:vi.type,
                                id:vi.id
                            }):'';
                        })
                        finalList.push(obj);
                    }
                })
                this.setState({
                    step:step+1,
                    finalList
                })
            }else alert('请选择二级分类')
        }else if(step==3){
            let {finalList}=this.state,detail,amount,data=[],ok=true;
            finalList.map((v,k)=>{
                v.children.map((vi,ki)=>{
                    detail=this.refs['add_detail_'+k+'-'+ki].value;
                    amount=this.refs['add_amount_'+k+'-'+ki].value;
                    if(!amount) ok=false;
                    if(!ok) return;
                    data.push({
                        id:v.id,
                        type_id:vi.id,
                        detail,
                        amount
                    })
                })
            })
            if(ok){
                this.props.dispatch(PostItemData(data))
            }else{
                alert('金额是必填项');
            }
        }else{
            location.reload();
        }
    }
    handleShowModle(show){
        this.setState({
            showAddModle:show
        })
    }
    handleSureAdd(){
        let value=this.refs.add_class_type_inp.value;
        if(!value){
            alert('请填写分类');
            return;
        }else{
            post('/user/add_class',{data:value})
            .then((d)=>{
                this.setState({
                    showAddModle:false
                })
                this.props.dispatch(GetTypeList());
            })
        }
    }
}

const selectState = (state,ownProps)=>{
    var thisState=state['addItem']
    return{
        list:thisState.list
    }
}

export default connect(selectState)(AddItem)