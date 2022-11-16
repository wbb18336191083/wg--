//创建cookie
function setCookie(key,val,time){
    var date=new Date();
   date.setDate(date.getDate()+time)
    document.cookie=`${key}=${val};expires=${date}`;

}
//获取cookie
function getCookie(key){
    var arr=document.cookie.split('; ')
    for(var item of arr){
        var newAry=item.split('=')
        if(newAry[0]==key){
            return newAry[1]
        }
    }
}
//删除cookie
function removeCookie(key){
    this.setCookie(key,'',-1)
}
//清空cookie
function clearCookie(){
    var arr=document.cookie.split('; ')
    for(var item of arr){
    var newArr=item.split('=');
    this.setCookie(newArr[0],'',-1)
}
}
