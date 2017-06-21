import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Test} from '../actions/ac_index'
import {Link} from 'react-router-dom'
import Page from '../components/page'
import {
    GetList,
    SkipPage
} from '../actions/ac_index';
class Index extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.dispatch(GetList());
    }
    render(){
        let {dispatch,list,pageObj}=this.props;
        return(
            <div id='i_list'>
                <div className="list_content">
                    {
                        list.map((v,k)=>{
                            return <Link className="title" to={"i_detail/"+v} key={'IlistIndex_'+k}>{v}</Link>
                        })
                    }
                </div>
                <Page data={pageObj} callback={SkipPage} dispatch={dispatch} config={{size:20,page:5}}/>
            </div>
        )
    }
    hanldeDispatch(){
        console.log(1);
        this.props.dispatch(Test());
    }
}

const selectState = (state,ownProps)=>{
    var thisState=state['iList']
    return{
        list:thisState.list,
        pageObj:thisState.pageObj
    }
}

export default connect(selectState)(Index)