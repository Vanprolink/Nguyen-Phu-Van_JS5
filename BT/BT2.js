

const soTien50kmDauTien = 500;
const soTienTu50KWDen100Kw = 650;
const soTienTu100KWDen200Kw = 850;
const soTienTu200KWDen350Kw = 1100;
const soTienTu350KwTroDi = 1300;





function tinhTienDien(){
    var tinhTienVl = document.getElementById("tienDien").value*1;
    if (tinhTienVl == null)
{
    alert("Bạn Chưa Nhập Số KmW");
}
var tongTien = 0;
 if (tinhTienVl <=50){
    tongTien = tinhTienVl * soTien50kmDauTien;
 }else if(50 < tinhTienVl <=100){
     tongTien = 50 * soTien50kmDauTien + (tinhTienVl-50)*soTienTu50KWDen100Kw;
 }else if (100<tinhTienVl<=200){
     tongTien = 50 * soTien50kmDauTien + 50 * soTienTu50KWDen100Kw + (tinhTienVl -100)*soTienTu100KWDen200Kw;
 }else if (200<tinhTienVl<=350){
    tongTien = 50 * soTien50kmDauTien + 50 * soTienTu50KWDen100Kw + 100*soTienTu100KWDen200Kw + (tinhTienVl-200)*soTienTu200KWDen350Kw;
 }else{
     tongTien = 50 * soTien50kmDauTien + 50 * soTienTu50KWDen100Kw + 100*soTienTu100KWDen200Kw + 150*soTienTu200KWDen350Kw + (tinhTienVl-350)*soTienTu350KwTroDi;
 }
 document.getElementById("xuatKetQua2").innerText = tongTien.toLocaleString() + " VNĐ";

}