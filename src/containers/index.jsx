import React,{Component} from 'react'
import {connect} from 'react-redux'

class Index extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>fjweifjwejfwejfweiof</div>
        )
    }
}

const selectState = (state,ownProps)=>{
    return{

    }
}

export default connect(selectState)(Index)