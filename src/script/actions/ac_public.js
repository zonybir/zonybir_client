const key='Public';

export const Login=(name,pwd)=>{
    return (dispatch,getState)=>{
        if(name&&pwd){
            post('/login',{user:name,password:pwd})
            .then((d)=>{
                localStorage.user=JSON.stringify(d.data);
                location.hash='/';
            })
        }else alert('用户名或密码不能为空')
    }
}