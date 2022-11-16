/* set rem */
var timer = null;
function setRem() {
    var ui_w = 375;
    var client_w = document.documentElement.clientWidth || document.body.clientWidth;
    //设置最大最小宽度
    client_w = client_w > 1100 ? 1100 : client_w;
    client_w = client_w < 300 ? 300 : client_w;
    // console.log(ui_w, client_w);
    var html = document.getElementsByTagName("html")[0];
    html.style.fontSize = (client_w / ui_w) * 10 + 'px';
}

//防抖
window.onresize = function () {
    clearTimeout(timer);
    timer = setTimeout(setRem, 500)
}

//节流
// var flg = true;
// window.onresize = function () {
//     if (flg) {
//         flg = false;
//         setTimeout(function () {
//             flg = true;
//             setRem();
//         }, 300)
//     }
// }
window.onload = setRem;