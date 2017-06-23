import React,{Component} from 'react'
import {connect} from 'react-redux'
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
                            return <Link className="title" to={"i_detail/"+v.id} key={'IlistIndex_'+k}>{v.name}</Link>
                        })
                    }
                </div>
                <Page data={pageObj} callback={SkipPage} dispatch={dispatch} config={{size:20,page:5}}/>
            </div>
        )
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