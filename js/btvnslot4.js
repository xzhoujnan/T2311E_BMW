/*Chương trình Vietlot:
Người chơi sẽ mua 1 vé với 1 bộ 6 số khác nhau (từ 0-> 45) với giá 10.000VND

Khi đến kỳ quay, máy tính sẽ tạo ra 1 bộ 6 số ngẫu nhiên khác nhau (từ 0->45).

Hãy kiểm tra 2 bộ số này xem có bao nhiêu số trong đó giống nhau.

Nếu 

1 hoặc 2 số thì không trúng giải

3 số thì trúng 100.000VND

4 số trúng 10.000.000VND

5 số trúng giải Jackpot (100 tỷ) */

function compare(arr1, arr2)
{
    for(var i=1; i < arr1.length; i++)
    {
        for(var j=1; j < arr2.length; j++)
        {
            if(arr1[i] === arr2[j])
            {
                alert(`Các số giống nhau là : ${arr[i]}`);
            }
        }
    }
}

for(var i=1; i<=6; i++)
{
    var arrSelector = [];

    var randomNumber = Math.random() * 45;
    randomNumber = parseInt(randomNumber);
    arrSelector.push(randomNumber);

    var numberSelector = prompt(`Nhập số muốn đặt thứ ${i} : `);
    numberSelector = parseInt(numberSelector);
}

for(var j=1; j<=6; j++)
    {
        var kq = [];

        var kqRandom = Math.random() * 45;
        kqRandom = parseInt(kqRandom);
        kq.push(kqRandom);
    }

compare(arrSelector,kq);