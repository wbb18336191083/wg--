/* 验证码 */
var index = 0;
var verification = document.getElementsByClassName('verification')[0];
var num = 60;
var time;
var s1 = parseInt(Math.random() * 10);
var s2 = parseInt(Math.random() * 10);
var s3 = parseInt(Math.random() * 10);
var s4 = parseInt(Math.random() * 10);
var s5 = s1 * 1000 + s2 * 100 + s3 * 10 + s4;

touch.on(verification, 'tap', function () {
    clearInterval(time);
    time = setInterval(function () {
        num--;
        verification.innerHTML = num + 's后重发';
        verification.style.backgroundColor = 'black';
        verification.style.color = 'white';
        if (num == 56) {
            clearInterval(time);
            num = 60;
            verification.innerHTML = '请输入验证码';
            verification.style.backgroundColor = '';
            verification.style.color = '';
            alert(
                '您收到的验证码是:' + s1 + s2 + s3 + s4)

        }

    }, 1000)

})


/* 正则表达式 */
var telspan = document.getElementById('telspan');
var tel = document.getElementById('tel');
var reg = /^1[3-9][0-9]{9}$/;
tel.onblur = function () {
    var reg = /^1[3-9][0-9]{9}$/;
    var t = reg.test(tel.value);
    if (t == false) {
        telspan.innerHTML = '手机号码格式不正确';
        telspan.style.color = 'red';
    } else {
        telspan.innerHTML = '手机号码格式正确';
        telspan.style.color = 'green';
        index++;

    }
}

var codespan = document.getElementById('codespan');
var code = document.getElementById('code');
code.onblur = function () {
    var t = code.value;
    if (t == s5) {
        codespan.innerHTML = '验证码正确';
        codespan.style.color = 'green';
        index++;

    } else {
        codespan.innerHTML = '验证码不正确';
        codespan.style.color = 'red';
    }
}
var newpwdspan = document.getElementById('newpwdspan');
var newpwd = document.getElementById('newpwd');
var reg = /^1[3-9][0-9]{9}$/;
newpwd.onblur = function () {
    var reg = /^[a-zA-Z0-9_-]{8,12}$/;
    var t = reg.test(newpwd.value);
    if (t == false) {
        newpwdspan.innerHTML = '密码格式不正确';
        newpwdspan.style.color = 'red';
    } else {
        newpwdspan.innerHTML = '密码格式正确';
        newpwdspan.style.color = 'green';
        index++;
    }
}

var form = document.getElementById('form');
var register = document.getElementById('register');
register.onclick = function () {
    if (index == 3) {

        form.setAttribute('action', './login.html')
    } else {
        alert('请先注册!!!')
    }
}


/* set rem */
var timer = null;
function setRem() {
    var ui_w = 375;
    var client_w = document.documentElement.clientWidth || document.body.clientWidth;
    //设置最大最小宽度
    client_w = client_w > 625 ? 625 : client_w;
    client_w = client_w < 100 ? 100 : client_w;
    // console.log(ui_w, client_w);
    var html = document.getElementsByTagName("html")[0];
    html.style.fontSize = (client_w / ui_w) * 10 + 'px';
}

//防抖
// window.onresize = function () {
//     clearTimeout(timer);
//     timer = setTimeout(setRem, 500)
// }

//节流
var flg = true;
window.onresize = function () {
    if (flg) {
        flg = false;
        setTimeout(function () {
            flg = true;
            setRem();
        }, 300)
    }
}
window.onload = setRem;
window.onresize = setRem;