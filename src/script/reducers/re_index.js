const initState={
    list:[],
    pageObj:{count:0,page:0}
}
const key='IList';

function IList(state=initState,action){
    switch(action.type){
        case key+'list':{
            return Object.assign({},state,{
                list:action.list,
                pageObj:action.pageObj
            })
        }
        default:return state
    }
}

export default IList