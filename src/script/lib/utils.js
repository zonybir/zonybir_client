import Promise from 'promise-polyfill';
import 'whatwg-fetch';

window.get=(url,json)=>{
    var i,str='';
    if(json){
        for(i in json){
            if (json.hasOwnProperty(i)) {
                if(!json[i]){continue};
                str+=i+'='+json[i]+'&';
            };
        };
    };
    url=str?url+'?'+str.slice(0,-1):url;
    return send_request('GET',encodeURI(url));
};

window.post=(url,data,json)=>{
    var body=data,i;
    if(json){

    }else if(!(data instanceof FormData)){
        body=new FormData();
        for(i in data){
            if(!data[i]){continue};
            body.append(i,data[i]);
        };
    };
    return send_request('POST',url,body);
};

function send_request(method,url,body){
    var host = '';
    var config={
        method:method,
       // headers:{key:token},
        credentials:'same-origin'
    };
    if(method.toLocaleLowerCase()=='post'){config.body=body};
    return new Promise(function(resolve,reject){
        fetch(host+url,config).then(function(res){
            return res.json();
        }).then(function(res){
            console.log(res);
            if(res.code==403){
                location.hash='login';
                localStorage.user='';
                return;
            };
            if(res.code!=200){
                if(rej){reject(res)};
                alert(res.message);
            }else{
                resolve(res);
            };
        }).catch(function(e){
            alert('连接错误');
        });
    });
}




















(function (doc, win) {
    var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                if(clientWidth>=640){
                    clientWidth=640;
                }
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            };
            recalc();
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

