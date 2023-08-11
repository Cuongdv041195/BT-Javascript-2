// BT1: Tính Lương
function tinhTongLuong() {
    // B1: Input
    var luongMotNgay = +document.getElementById('luongMotNgay').value;
    var soNgayLam = +document.getElementById('soNgayLam').value;
    var tienLuong = 0;
    // B2: Công Thức Tính
    tienLuong = luongMotNgay * soNgayLam;
    // B3: Kết Quả
    document.getElementById('resultTL').innerHTML = tienLuong.toLocaleString();

}
// BT2: Tính Giá Trị Trung Bình
function tinhGTTB() {
    // B1: Input
    var number1 = +document.getElementById('number1').value;
    var number2 = +document.getElementById('number2').value;
    var number3 = +document.getElementById('number3').value;
    var number4 = +document.getElementById('number4').value;
    var number5 = +document.getElementById('number5').value;
    var GTTB;
    // B2: Công Thức Tính
    var GTTB = (number1 + number2 + number3 + number4 + number5) / 5;
    // B3: Kết Quả
    document.getElementById('resultGTTB').innerHTML = GTTB.toLocaleString();

}
// BT3: Quy Đổi Tiền
function quyDoiTien() {
    // B1: Input
    var USD = +document.getElementById('USD').value;
    var tyGia = 23500;
    var VND;
    // B2: Công Thức Tính
    var VND = USD * tyGia;
    // B3: Kết Quả
    document.getElementById('resultQDT').innerHTML = VND.toLocaleString();
}
// BT4: Tính Chu Vi, Diện Tích
function tinhToan() {
    // B1: Input
    var chieuDai = +document.getElementById('chieuDai').value;
    var chieuRong = +document.getElementById('chieuRong').value;
    var chuVi;
    var dienTich;

    // B2: Công Thức Tính
    chuVi = (chieuDai + chieuRong) * 2;
    dienTich = chieuDai * chieuRong;
    // B3: Kết Quả
    document.getElementById('resultChuVi').innerHTML = chuVi.toLocaleString();
    document.getElementById('resultDienTich').innerHTML = dienTich.toLocaleString();
}
// BT5: Tổng 2 ký số
function tongKySo() {
    // B1: Input
    var chuSo = +document.getElementById('chuSo').value;
    var soHangChuc;
    var soHangDonVi;
    var tongKySo;
    // B2: Công Thức Tính
    soHangDonVi = chuSo % 10;
    soHangChuc = Math.floor(chuSo / 10);
    tongKySo = soHangDonVi + soHangChuc;
    // B3: Kết Quả
    document.getElementById('resultTKS').innerHTML = tongKySo.toLocaleString();
}