const initState={
    list:[],
    pageObj:{count:0,page:0},
    detailId:-1,
    detailList:[]
}
const key='addItem';

function addItem(state=initState,action){
    switch(action.type){
        case key+'setTypeList':{
            return Object.assign({},state,{
                list:action.data
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

export default addItem