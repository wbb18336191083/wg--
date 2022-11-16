/* set rem */
var timer = null;
function setRem() {
    var ui_w = 375;
    var client_w = document.documentElement.clientWidth || document.body.clientWidth;
    //设置最大最小宽度
    client_w = client_w > 940 ? 940 : client_w;
    client_w = client_w < 250 ? 250 : client_w;
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
var list = document.getElementById('list');
var list1 = document.getElementById('list1');
var list2 = document.getElementById('list2');
var list3 = document.getElementById('list3');
var list4 = document.getElementById('list4');
var yinying = document.getElementById('yinying');
var slist = document.getElementById('slist');
// ------------------
var area = document.getElementById('area');
var price = document.getElementById('price');
var house = document.getElementById('house');
var more = document.getElementById('more');
list1.onclick = function () {

    list1.firstElementChild.firstElementChild.setAttribute('class', 'active');
    list2.firstElementChild.firstElementChild.removeAttribute('class', 'active');
    list3.firstElementChild.firstElementChild.removeAttribute('class', 'active');
    list4.firstElementChild.firstElementChild.removeAttribute('class', 'active');
    window.event ? window.event.cancelBubble = true : e.stopPropagation();
    list.style.position = 'fixed';
    list.style.left = 0;
    list.style.top = 0;
    yinying.style.display = 'block';
    area.style.display = 'block';
    price.style.display = 'none';
    house.style.display = 'none';
    more.style.display = 'none';
}
list2.onclick = function () {
    list2.firstElementChild.firstElementChild.setAttribute('class', 'active');
    list1.firstElementChild.firstElementChild.removeAttribute('class', 'active');
    list3.firstElementChild.firstElementChild.removeAttribute('class', 'active');
    list4.firstElementChild.firstElementChild.removeAttribute('class', 'active');
    window.event ? window.event.cancelBubble = true : e.stopPropagation();
    list.style.position = 'fixed';
    list.style.left = 0;
    list.style.top = 0;
    yinying.style.display = 'block';
    price.style.display = 'block';
    area.style.display = 'none';
    house.style.display = 'none';
    more.style.display = 'none';
}
list3.onclick = function () {
    list3.firstElementChild.firstElementChild.setAttribute('class', 'active');
    list1.firstElementChild.firstElementChild.removeAttribute('class', 'active');
    list2.firstElementChild.firstElementChild.removeAttribute('class', 'active');
    list4.firstElementChild.firstElementChild.removeAttribute('class', 'active');
    window.event ? window.event.cancelBubble = true : e.stopPropagation();
    list.style.position = 'fixed';
    list.style.left = 0;
    list.style.top = 0;
    yinying.style.display = 'block';
    house.style.display = 'block';
    area.style.display = 'none';
    price.style.display = 'none';
    more.style.display = 'none';
}
list4.onclick = function () {
    list4.firstElementChild.firstElementChild.setAttribute('class', 'active');
    list2.firstElementChild.firstElementChild.removeAttribute('class', 'active');
    list3.firstElementChild.firstElementChild.removeAttribute('class', 'active');
    list1.firstElementChild.firstElementChild.removeAttribute('class', 'active');
    window.event ? window.event.cancelBubble = true : e.stopPropagation();
    list.style.position = 'fixed';
    list.style.left = 0;
    list.style.top = 0;
    yinying.style.display = 'block';
    more.style.display = 'block';
    area.style.display = 'none';
    price.style.display = 'none';
    house.style.display = 'none';
}
document.onclick = function () {
    window.event ? window.event.cancelBubble = true : e.stopPropagation();
    yinying.style.display = 'none';
    list.style.position = 'relative';
    area.style.display = 'none';
    price.style.display = 'none';
    house.style.display = 'none';
    more.style.display = 'none';
}
slist.onclick = function () {
    window.event ? window.event.cancelBubble = true : e.stopPropagation();
}