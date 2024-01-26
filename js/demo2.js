/* setTimeout(function()
{
    alert("Hello Everybody");
},2000);// hiển thị alert sau khi delay 2000 milisecond */


// h.innerText = "XIN CHAO CAC BAN";
// var h = document.getElementById("num");

/* var t=10;
var it = setInterval(function()
{
    // alert("Hello T2311E");
    // console.log(t);
    h.innerText = t;
    t--;
    if(t<0)
    {
        clearInterval(it);
    }
},1000); // cứ sau 2s nó sẽ hiển thị alert 1 lần, và nó sẽ hiển thị liên tục không ngừng */

// 2 ví dụ trên là ví dụ về tính năng delay hiển thị của các alert

// var min=10,sec=0;


var span_min = document.getElementById("minute");
var span_sec = document.getElementById("second");
var min = 10, sec = 0;
var timer = setInterval(function()
{
    // console.log(`${min} : ${sec}`);
    span_min.innerText = min;
    span_sec.innerText = sec;
    sec--
    if(sec < 0)
    {
        min--;
        sec=59;
    }
    if(min<0)
    {
        clearInterval(timer);
    }
},100);