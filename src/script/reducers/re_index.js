const initState={
    list:[],
    pageObj:{count:0,page:0},
    detailId:-1,
    detailList:[]
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
        case key+'_detail':{
            return Object.assign({},state,{
                detailId:action.detailId,
                detailList:action.detailList
            })
        }
        default:return state
    }
}

export default IList