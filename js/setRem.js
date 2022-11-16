function setRem(){
    var ui_w=375
    var client_w=document.documentElement.clientWidth||document.documentElement.clientWidth
  client_w=client_w>900?900:client_w
  client_w=client_w<250?250:client_w
    var html=document.getElementsByTagName('html')[0]
    html.style.fontSize=(client_w/ui_w)*10+'px'
 
  }    
  var timer=null 
  window.onresize=function(){
    clearTimeout(timer)
    timer=setTimeout(setRem,300)
  }
  window.onload=setRem
