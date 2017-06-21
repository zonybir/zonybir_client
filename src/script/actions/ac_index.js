const key='IList';
const reducer='iList';
export const Test=(data)=>{
    return (dispatch,getState)=>{
        console.log(data);
        dispatch({
            type:'test',
            data:'zonybir'
        })
    }
}

export const GetList=(page)=>{
    return (dispatch,getState)=>{
        let state=getState()[reducer];
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

export const SkipPage=(page)=>{
    return (dispatch,getState)=>{
        let state=getState()[reducer];
        dispatch({
            type:key+'list',
            list:state.list,
            pageObj:{
                count:state.pageObj.count,
                page:page
            }
        })
        //dispatch(GetList(page));
    }
}