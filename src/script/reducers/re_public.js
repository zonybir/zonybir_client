const initState={
    list:[],
    pageObj:{count:0,page:0}
}
const key='Public';

function Public(state=initState,action){
    switch(action.type){
        case key+'login':{
            return Object.assign({},state,{
                login:action.data
            })
        }
        default:return state
    }
}

export default Public