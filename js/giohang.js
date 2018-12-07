// JavaScript Document
function KiemTra(){
	if (localStorage.getItem("check") == null)
	{
		alert("Bạn cần phải đăng nhập mới được mua hàng");
		window.location.assign("Index.html");
	}
	else
	{
		return true;
	}
}
function Mua(pivot){
	alert("Mua thành công");
	localStorage.removeItem(pivot);
	window.location.assign("Index.html?giohang&0");
}
function XoaSanPham(pivot){
	var command = confirm("Bạn muốn xoá sản phẩm này khỏi giỏ hàng ?");
	if(command){
		var get = localStorage.getItem(pivot) - 1;
		if(get == 0){
			localStorage.removeItem(pivot);
		}
		else
			localStorage.setItem(pivot, get);
		alert("Đã xoá");
		window.location.assign("Index.html?giohang&0");
	}
}
function ThemSoLuong(pivot){
		var a = prompt("Nhập vào số lượng sản phẩm: ");
		if(a){
			var i = parseInt(a);
		}
		else{
			i = 0;
		}
		var get = parseInt(localStorage.getItem(pivot));
		localStorage.setItem(pivot, get + i);	
		window.location.reload();
}



function GioHang(loaisp){
	if(localStorage.getItem(loaisp) == null){
		alert("Sản phẩm đã được bạn chọn");
		localStorage.setItem(loaisp, 1);
	}
	else{
		alert("Sản phẩm đã được bạn chọn");
		var x = parseInt(localStorage.getItem(loaisp));
		localStorage.setItem(loaisp, x + 1);
	}
}