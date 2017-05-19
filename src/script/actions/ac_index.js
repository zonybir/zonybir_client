export const Test=(data)=>{
    return (dispatch,getState)=>{
        console.log(data);
        dispatch({
            type:'test',
            data:'zonybir'
        })
    }
}