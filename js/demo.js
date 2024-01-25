// Đây là ngôn ngữ Logic kiểu dạng ngôn ngữ C
console.log("Hello world!"); // = Print

var x; //x không có kiểu dữ liệu => x=null

x=10; //x = Number

var y="HelloWorld!"; //y = String

var t=true; //Boolean

//khai báo biến kiểu mới :
let n = 20; //liên quan tới biến cục bộ và file,class,hằng số

var z = x + 10; //z=20
var z1= x + y; // "10HelloWorld!"
var z2=y + y; //"HelloWorld!HelloWorld!"
var z3="20" + 10; // "2010" (trong ngoặc kép,ngoặc kép đơn,ngoặc huyền = string)

console.log(x+y+"20"+10); // = 10HelloWorld!2010

if(x>=10)
{

}else{

}

for(var i=0;i<10;i++)
{
    console.log("i"+1);
}

//if,else và vòng lặp for không có gì khác biệt nhiều so với C language 

var arr=[];
arr[0] = 2;
arr[1] = "abc";//Kiểu dữ liệu của các phần tử trong JS ko cần giống nhau

arr.push(135); //arr[2] = 135;
arr.push("hello"); //arr[3] = hello;

console.log("Size of arr : "+arr.length);

for(var i = 0; i < arr.length; i++)
{
    console.log(arr[i]);
}

arr.forEach(e=> //Duyệt mảng đến khi hết thì thôi, e có thể thay đổi thành tên khác, e = arr[i], mean forEach=for từng phần tử 1
{
    console.log(e); // => = arrow function
})

function tinh_tong(a,b)
{
    //return a+b;
    console.log(a+b);
}

tinh_tong(5,7);
tinh_tong(5,"abc");

// alert("Yêu cầu phải trên 18 tuổi");

//var tl = confirm("Bạn chắc chắn chưa"); // trả về boolean  

//if(tl)
//{
    //alert("Người dùng đã chắc chắn với câu trả lời");
//}
//else
//{
    //alert("Người dùng cần tìm hiểu thêm");
//}

/* var kq = prompt("Bạn bao nhiêu tuổi"); // Hàm này sẽ trả về 1 string
var kq2= parseInt(kq)+10; //1810 // hàm parseInt chuyển 1 giá trị chuỗi thành số nguyên */

/*  
    note parseInt :
    "18" = 18
    "18a" = 18
    "18a2" = 18
    "a18" => NaN (not a number)
*/

// alert("Sau 10 năm bạn đã "+kq2+" tuổi");

/* var randomNumber = Math.random(); // 0<randomNumber<1 vd output : 0.00291291923
randomNumber = randomNumber * 100; // 0.01244 = 1.244
randomNumber = parseInt(rd); */


