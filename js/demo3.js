var fs;

function fan()
{
    var f = document.getElementById("fan");

    var dg=0;

    fs = setInterval(function()
    {
        if(dg==360) dg=0;
        dg+=10;
        f.style.transform =`rotate(${dg}deg)`;
    },20);
}

function stopfan()
{
    clearInterval(fs);
}