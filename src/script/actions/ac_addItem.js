const key='addItem';
const reducer='addItem';
export const Test=(data)=>{
    return (dispatch,getState)=>{
        console.log(data);
        dispatch({
            type:'test',
            data:'zonybir'
        })
    }
}

export const GetTypeList=()=>{
    return (dispatch,getState)=>{
        get('/user/type_list',{})
        .then((d)=>{
            let list=d.data;
                list.map((v,k)=>{
                    let children=(v.children+'').split(','),
                        children_list=[];
                    if(v.children)
                        children.map((v,k)=>{
                            let itemObj=v.split('-');
                            itemObj={
                                type:itemObj[1],
                                id:itemObj[0]
                            }
                            children_list.push(itemObj);
                        })
                    v.children=children_list;
                })
                dispatch({
                    type:key+'setTypeList',
                    data:list
                })
        })
    }
}

export const PostItemData=(data)=>{
    return (dispatch,getState)=>{
        post('/user/set_item',{data:JSON.stringify(data)})
        .then((d)=>{
            location.hash='/';
        })
    }
}