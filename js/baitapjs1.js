/* baitapjs1.js 
cho người dùng nhập vào 1 số bất kỳ(0->99)
sinh ra số ngẫu nhiên xem họ có trúng giải hay không */

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
