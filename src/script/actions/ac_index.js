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
            get('/public/list',{page:page})
            .then((d)=>{
                dispatch({
                    type:key+'list',
                    list:d.data.list,
                    pageObj:{count:d.data.count,page:d.data.page}
                })
            })
            
        }
    }
}

export const SkipPage=(page)=>{
    return (dispatch,getState)=>{
        dispatch(GetList(page));
    }
}

export const GetDetail=(id)=>{
    return (dispatch,getState)=>{
        let detailState=getState()[reducer];
        if(detailState.detailId==id && detailState.detailList.length>0){
            console.log('read state');
            dispatch({type:'none'});
            return;
        }
        get('public/detail',{
            id:id
        })
        .then((d)=>{
            dispatch({
                type:key+'_detail',
                detailId:id,
                detailList:d.data
            })
        })
    }
}