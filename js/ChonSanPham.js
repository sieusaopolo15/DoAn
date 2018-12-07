// JavaScript Document
function Check(){
	
}

function ChonSanPham(loaisp){
	if(localStorage.getItem(loaisp) == null){
		alert("Sản phẩm mà bạn vừa chọn đã được đặt vào giỏ hàng");
		localStorage.setItem(loaisp, 1);
	}
	else{
		alert("Sản phẩm mà bạn vừa chọn đã được đặt vào giỏ hàng");
		var x = parseInt(localStorage.getItem(loaisp));
		localStorage.setItem(loai, x + 1);
	}
}