const key='Public';

export const Login=(page)=>{
    return (dispatch,getState)=>{
        
        dispatch({
            type:key+"login",
            data:'ok'
        })
        return;
        if(page || state.list.length<=0){
            post('/login/login',{page:page})
            .then((d)=>{

            })
            dispatch({
                type:key+'list',
                list:[1,1,1,1,1,1,1,1,1,1],
                pageObj:{count:121,page:6}
            })
        }
    }
}