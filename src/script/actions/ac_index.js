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

export const GetList=(type)=>{
    return (dispatch,getState)=>{
        let state=getState()[reducer];
        get('/user/list',{type:type=='2'?'week':type==3?'month':type==4?'year':''})
        .then((d)=>{
            let data=d.data,list=[];
            data.map((v,k)=>{
                let children=v.children.split(','),itemList=[];
                children.map((vi,ki)=>{
                    let obj=vi.split('-');
                    itemList.push({
                        type:obj[0],
                        detail:obj[1],
                        amount:obj[2]
                    })
                })
                list.push({
                    title:v.title,
                    children:itemList
                })
            })
            dispatch({
                type:key+'list',
                list,
                activeType:type||1
            })
        })   
    }
}

export const ChangeCicyl=(type)=>{
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
        
        dispatch({
            type:key+'_detail',
            detailId:id,
            detailList:d.data
        })
    }
}