var rN = Math.random();
rN = rN * 100;
rN = parseInt(rN);
console.log(rN);

var kq = prompt("Nhập số bạn thích");
kq = parseInt(kq);

if(kq==rN)
{
    alert("Bạn đã trúng giải");
}
else
{
    alert("Bạn đã mất tiền");
}
