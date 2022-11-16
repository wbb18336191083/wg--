var button=document.getElementsByTagName('button')[0]
var succeed=getCookie('succeed')
var user=getCookie('user')

if(succeed){
    document.getElementsByTagName('button')[0].innerHTML=user
}
