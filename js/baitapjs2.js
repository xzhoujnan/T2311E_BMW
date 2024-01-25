/* tạo ra 1 bộ 23 số từ 0-99
người chơi sẽ chọn 1 số mỗi lần (tối đa 7 lần chơi) 
và số tiền đặt cược của ngày hôm đó (giả sử 22đ/1 điểm -> trúng 1 số đc 80đ)
Sau 7 ngày tính số tiền thu đc và số tiền đã bỏ ra */

var sotien=0;
var doanhthu=0;

for(var i=1; i<=7; i++)
{
    var kq=[];

    for(var j=0; j<23; j++)
    {
        var randomNumber = Math.random() * 100;
        randomNumber = parseInt(randomNumber);
        kq.push(randomNumber);
    }

    var lc = prompt(`Nhập số muốn đặt ngày hôm nay (ngày thứ ${i}) :`);
    lc = parseInt(lc);

    var td = prompt(`Nhập số tiền muốn đặt hôm nay(ngày thứ ${i}):`);
    td = parseInt(td);

    sotien+=td;

    kq.forEach(e=>
        {
            if(e==lc)
            {
                doanhthu+=(td/23)*80;
            }
        })
}
alert(`Tổng số tiền phải bỏ ra : ${sotien} và số tiền thu được ${doanhthu}`);