var welcome=document.getElementsByClassName('welcome')[0]
var succeed=getCookie('succeed')
var user=getCookie('user')

if(succeed){
    document.getElementsByClassName('welcome')[0].innerHTML=user
}