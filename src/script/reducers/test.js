const initState={
    a:1
}

function Test(state=initState,action){
    switch(action.type){
        case 'test':{
            return Object.assign({},state,{
                a:action.data
            })
        }
        default:return state
    }
}

export default Test