// JavaScript Document
var DanhMuc = [
	{name:'Lenovo', key:'LE'},
	{name:'ASUS', key:'AS'},
	{name:'HP', key:'HP'},
	{name:'Dell', key:'DE'},
	{name:'MSI', key:'MSI'}
];

function TaoDanhMuc(){
	var s = "";
	for(var i = 0; i < DanhMuc.length; i++){
		s = s + '<a class="danhmuc" href="index.html?' + DanhMuc[i].key + '&0">' + DanhMuc[i].name + '</a>';
	}
	document.getElementById("danhmuc").innerHTML = s;
}
//SẢN PHẨM

function SanPham(masp, tensp, hinh, matheloai, gia){
		this.masp = masp;
		this.tensp = tensp;
		this.hinh = hinh;
		this.matheloai= matheloai;
		this.gia = gia;
}


	//LENOVO
	var sp = new Array();
	sp[0] = new SanPham("001", "Lenovo ThinkPad Edge E580", "imgs/Lenovo/Thinkpad_EdgeE580.png", "LE", "14500000");
	sp[1] = new SanPham("002", "Lenovo ThinkPad Edge E480", "imgs/Lenovo/Thinkpad-EdgeE480.png", "LE", "15000000");
	sp[2] = new SanPham("003", "Lenovo ThinkPad L380", "imgs/Lenovo/Thinkpad_L380.png", "LE", "16000000");
	sp[3] = new SanPham("004", "Lenovo ThinkPad L480", "imgs/Lenovo/ThinkPad_L480.png", "LE", "16500000");
	sp[4] = new SanPham("005", "Lenovo ThinkPad T480", "imgs/Lenovo/Thinkpad_T480.png", "LE", "17000000");
	sp[5] = new SanPham("006", "Lenovo ThinkPad T480s", "imgs/Lenovo/Thinkpad_T480s.png", "LE", "17500000");
	sp[6] = new SanPham("007", "Lenovo Thinkpad X280", "imgs/Lenovo/Thinkpad_X280.png", "LE", "18000000");
	sp[7] = new SanPham("008", "Lenovo Thinkpad X1 YOGASERIES", "imgs/Lenovo/Thinkpad-X1YogaSeries.png", "LE", "18500000");

	//ASUS
	sp[8] = new SanPham("009", "Asus ROG Strix Scar", "imgs/asus/ROG_Strix_Scar.png", "AS", "21000000");
	sp[9] = new SanPham("010", "Asus Vivobook S15 S530UA", "imgs/asus/Vivobook_A510UF.png", "AS", "2100000");
	sp[10] = new SanPham("011", "Asus Vivobook", "imgs/asus/Vivobook_S15_S510UA.png", "AS", "5500000");
	sp[11] = new SanPham("012", "Asus as", "imgs/asus/Vivobook_S15_S530UA.png", "AS", "6000000");
	sp[12] = new SanPham("013", "Asus ac", "imgs/asus/Vivobook_S510UN.png", "AS", "6500000");
	sp[13] = new SanPham("014", "Asus ad", "imgs/asus/Vivobook_TP410UA.png", "AS", "7000000");
	sp[14] = new SanPham("015", "Asus ae", "imgs/asus/X507UA.png", "AS", "7500000");
	sp[15] = new SanPham("016", "Asus af", "imgs/asus/X507UF.png", "AS", "8000000");

	//HP
	sp[16] = new SanPham("017", "HP Pavilion 15-cs1045TX", "imgs/HP/Pavilion_15-CS.png", "HP", "16390000đ");
	sp[17] = new SanPham("018", "HP Probook 440", "imgs/HP/Probook_440_G5_4SS39PA.png", "HP", "12590000đ");
	sp[18] = new SanPham("019", "HP X360 11-ad104TU", "imgs/HP/Pavilion_X360.png", "HP", "12990000đ");
	sp[19] = new SanPham("020", "HP Pavilion 15-cc157TX", "imgs/HP/Pavilion_15-cc157TX.png	", "HP", "14090000đ");
	sp[20] = new SanPham("021", "HP Pavilion Power 15", "imgs/HP/Pavilion_Power_15-cx0182TX.png", "HP", "16390000đ");
	sp[21] = new SanPham("022", "HP Envy 13", "imgs/HP/Envy 13_ah0027TU.png", "HP", "16390000đ");
	sp[22] = new SanPham("023", "HP 15", "imgs/HP/15_da0036TX.png", "HP", "5990000đ");
	sp[23] = new SanPham("024", "HP Pavilion 14", "imgs/HP/Pavilion_14-bf116TU.png", "HP", "14990000đ");

	//DELL
	sp[24] = new SanPham("025", "Dell Vostro V3568", "imgs/Dell/Vostro_V3568.png", "DE", "11739000đ");
	sp[25] = new SanPham("026", "Dell G7 7588", "imgs/Dell/G7_7588.png", "DE", "27339000đ");
	sp[26] = new SanPham("027", "Dell Inspiron 13", "imgs/Dell/Inspiron_13.png", "DE", "18839000đ");
	sp[27] = new SanPham("028", "Dell latitude 7490", "imgs/Dell/Latitude_7490.png", "DE", "30990000đ");
	sp[28] = new SanPham("029", "Dell Inspiron N3467", "imgs/Dell/Latitude_7490.png", "DE", "10339000đ");
	sp[29] = new SanPham("030", "Dell Inspiron 5379", "imgs/Dell/Inspiron_5379.png", "DE", "21789000đ");
	sp[30] = new SanPham("031", "Dell Inspiron 5570", "imgs/Dell/Inspiron_5570.png", "DE", "22990000đ");
	sp[31] = new SanPham("032", "Dell Inspiron 7570", "imgs/Dell/Inspiron_7570.png", "DE", "21389000đ");

	//MSI
	sp[32] = new SanPham("033", "MSI PS42 8M", "imgs/MSI/PS42.png", "MSI", "20990000đ");
	sp[33] = new SanPham("034", "MSI GF62 7RE", "imgs/MSI/GF62.png", "MSI", "24990000đ");
	sp[34] = new SanPham("035", "MSI GL62M", "imgs/MSI/GL62M.png", "MSI", "21990000đ");
	sp[35] = new SanPham("036", "MSI Gl62M 7RDX", "imgs/MSI/GL62M_7RDX.png", "MSI", "18990000đ");
	sp[36] = new SanPham("037", "MSI GV62 8RC", "imgs/MSI/GV62.png", "MSI", "21490000đ");
	sp[37] = new SanPham("038", "MSI GL72M 7REX", "imgs/MSI/GL72M.png", "MSI", "23990000đ");
	sp[38] = new SanPham("039", "MSI GF63", "imgs/MSI/GF63.png", "MSI", "22490000đ");
	sp[39] = new SanPham("040", "MSI GF63 8RD", "imgs/MSI/GF63_8RD.png", "MSI", "25990000đ");

					 
//END OF SẢN PHẨM
//var chuoi = "";
//for(var i = 0; i < DanhMuc.length; i++){
//	chuoi = chuoi + "Mã SP: " + sp[i].masp + " Tên SP: " + sp[i].tensp + " Giá: " + sp[i].gia + "<br>";
//}

function ThanhToan(){
	var i;
	if(localStorage.getItem('check') != null && localStorage.getItem('accounts') != null){
		var command = confirm("Bạn có muốn thanh toán ?");
		if(command){
			var max = 0;
			for(i = 0; i < localStorage.length; i++){
				if(localStorage.key(i).indexOf('Order_1') != -1){
					var x = localStorage.key(i);
					var vitri = x.split('_');
					x = parseInt(vitri[1]);
					if(x > max){
						max = x;
					}
				}
			}
			var order = {
				user: '',
				key: [],
				sl: [],
				xuli: 0,
				date: '',
			};
			var accounts = JSON.parse(localStorage.getItem('accounts'));
			var check2 = JSON.parse(localStorage.getItem('check'));
			for(i = 0; i < accounts.length; i++){
				if(check2.currentUsername == accounts[i].username){
					check2 = {
						Login: true,
						currentUsername: accounts[i].username
					};
				}
			}
			order.user = check2.currentUsername;
			var date = new Date();
			var day = date.getDate();
			var month = date.getMonth() + 1;
			var year = date.getFullYear();
			var hour = date.getHours();
			var minutes = date.getMinutes();
			order.date = day + '/' + month + '/' + year + '-' + hour + ':' + minutes;
			var k = 0;
			for(i = 0; i < localStorage.length; i++){
				if(localStorage.key(i) != 'check' && localStorage.key(i).length < 8 && localStorage.key(i).indexOf("Order_") == -1){
					order.key[k] = localStorage.key(i);
					order.sl[k] = localStorage.getItem(localStorage.key(i));
					k++;
				} 
			}
			localStorage.setItem("Order_" + (max + 1), JSON.stringify(order));
		}
		XoaHetSanPham();
		alert("Đã thanh toán");
		window.location.reload();
	}
	else{
		alert("Bạn cần phải đăng nhập mới được thanh toán");
	}
}

function XoaHetSanPham(){
	var i, pivot, dem = 0;
	var j = localStorage.length;
	for(i = 0; i < localStorage.length; i++){
		if(parseInt(localStorage.key(i)) - 0 > 0){
			dem++;
		}
	}
	if(dem == 0){
		return 0;
	}
	for(i = 0; i < j; i++){
		pivot = localStorage.key(i);
		if(parseInt(pivot) - 0 > 0){
			localStorage.removeItem(pivot);
			XoaHetSanPham();
		}
	}
	alert("Đã xoá thành công");
	window.location.reload();
}

function ThemVaoDonHang(){
	
}

function SanPhamDuocChon(){
	var s = "", tongtien = 0;
	if(localStorage.getItem('listsp') != null){
		var dulieu = JSON.parse(window.localStorage.getItem('listsp'));
	}
	for(var i = 0; i < localStorage.length; i++){
		if(localStorage.key(i) >= 0){
			var pivot = parseInt(localStorage.key(i)) - 1;
			//console.log(sp[pivot].gia);
			tongtien = tongtien + parseInt(sp[pivot].gia) * parseInt(localStorage.getItem(localStorage.key(i)));
			//console.log(tongtien);
			s = s +
			'<div class="element" style="clear:both;float:left; width:25%"><img src="' + sp[pivot].hinh + '" height="250px" width="250px"/></div>' + '<div class="element" style="float:left; width:75%"><br/><br/><i>' + sp[pivot].tensp + '</i><p style="color:red">Giá của mỗi sản phẩm: ' + sp[pivot].gia + '</p>' + '<p style="color:red">Số lượng: ' + localStorage.getItem(localStorage.key(i)) + '</p>' + '&emsp; <button onClick="XoaSanPham('+ localStorage.key(i) +')">Xoá</button> &emsp; <button onClick="ThemSoLuong('+ localStorage.key(i) +')">Số lượng</button>' + '</div>';
		}
	}
	s = s + '<br><hr color="black"/><div style="clear:both; padding-left:100px; padding-top:25px"><button onClick="XoaHetSanPham()">Xóa Hết Đơn</button> &emsp; <button onClick="ThanhToan()">Thanh Toán</button></div>';
	document.getElementById("tien").innerHTML = "Tổng tiền: " + tongtien + "VNĐ";
	document.getElementById("HienThiSanPham").innerHTML = s;
}

function LayURL(){
				var url = window.location.href;
                var params = url.split('?');
                //alert(params[0]);
                //alert(params[1]);
                var chuoicon = params[1];
                var s = "";
                var dem=0;
                var lienket = "", loaisp, vitri, x, k = 0, sotrang, name, t = "", z, y, i;
                var temp = [];
				if (params.length > 1) {
					chuoicon = chuoicon.split('&');
					//alert("chuoi con");
					//alert(chuoicon[1]);
					loaisp = chuoicon[0];//matheloai
					vitri = chuoicon[1];
				}
				if(params.length == 1){
					t = "<div align='center'><h2>Danh sách các sản phẩm</h2></div>";
					document.getElementById("tieude").innerHTML = t;
				}
                //alert("chuoi con");
                //alert(chuoicon[1]);
				//KHI TÌM KIẾM SẼ HIỆN RA KẾT QUẢ TÌM KIẾM
				else if(params[0].indexOf("ChiTietSanPham.html") != -1){
					var w = "";
					for(i = 0; i < sp.length; i++){
						if(sp[i].masp.indexOf(loaisp) != -1){
							temp[k++] = sp[i];
						}
					}
					for(i = 0; i < temp.length; i++){
						w = w + 
						'<hr><div><br/><div style="width:30%; float:left" align="right"><img src="' + temp[i].hinh + '" height="230px"/></div><div style="width: 35%; float:left; margin-top:40px" align="center">' + '<i>' + temp[i].tensp + '</i>' + '<p style="color:red">Giá: ' + '<i>' + temp[i].gia + '</i>' + '<br/><br/><button onClick="GioHang('+ temp[i].tensp +')">Bỏ vào giỏ</button></p></div>' + '<div style="float:left;width:35%" align="center"><b>Danh mục sản phẩm</b><div id="danhmuc"></div></div>' + '</div>';
					}
					document.getElementById("ChiTietSanPham").innerHTML = w;
				}
				else if(chuoicon[0] == 'timkiem'){
					t = "<div align='center'><h2>Kết quả</h2></div>";
					document.getElementById("tieude").innerHTML = t;
					var search = chuoicon[1].split('%20');
					var bien = chuoicon[2];
					var chuoi = "";
					for(i = 0; i < search.length; i++){
						chuoi = chuoi + search[i];
						if(i != search.length - 1){
							chuoi = chuoi + " ";
						}
					}
					for(i = 0; i < sp.length; i++){
						name = sp[i].tensp.toLowerCase();
						if(name.indexOf(chuoi) != -1){
							temp[k++] = sp[i];
							z = i;
						}
					}
					for(i = bien; i < temp.length;i++){
                         		dem++;
								name = temp[i].tensp.toLowerCase();
								if(name.indexOf(chuoi) != -1){

									s = s+'<a class="sanpham" href="ChiTietSanPham.html?'+ temp[i].masp +'&0"><div align="center" style="float:left;width:50%; border:#C90 solid; margin-top:1px;">'+
									'<img src="'+ temp[i].hinh+'" width="200px" height="200px"/></a><br/>'+ '<p>Sản phẩm: ' + temp[i].tensp + '<br/>Giá: ' + temp[i].gia + 
									'</p>' + 
									'<button onClick="GioHang('+temp[i].masp+')">Bỏ vào giỏ</button>' + '</div>';
								}
								if(dem==6){
									break;
								}
                	}
               		document.getElementById("DanhSach").innerHTML=s;
	
						sotrang = Math.ceil(temp.length/4);
						for(i = 1; i<=sotrang ;i++){
							x = (i-1)*4;
							lienket=lienket+'<a style="clear:both" class="sotrang" href="index.html?timkiem' + '&' + search + '&' + x + '">' + i + '</a>';
						}
							document.getElementById("sotrang").innerHTML=lienket;
				}
				else if(chuoicon[0] == 'timkiemnangcao'){
					t = "<div align='center'><h2>Kết quả</h2></div><br><div align='center'>TÌM KIẾM NÂNG CAO<br><select id='theloai'><option value='null'>[Chọn loại sản phẩm]</option><option value='LE'>Lenovo</option><option value='AS'>Asus</option><option value='HP'>HP</option><option value='DE'>Dell</option><option value='MSI'>MSI</option>  </select> &emsp; <select id='giatien'><option value='null'>[Chọn giá tiền]</option><option value='<&6000000'>< 6 triệu</option><option value='<&8000000'>< 8 triệu</option><option value='>&10000000'>> 10 triệu</option><option value='>&15000000'>> 15 triệu</option><option value='>&20000000'>> 20 triệu</option></select> &emsp; <button onClick='Search_NangCao()'>Tìm</button</div><br>";
					document.getElementById("tieude").innerHTML = t;
					var name2 = "", blank = "", str = "", pos, kind;
					//Nếu tìm thấy dấu < trong url và text box tìm kiếm trống thì kiểm tra sp
					if(chuoicon[3] == '%3C' && chuoicon[1] == 'nothing'){
						pos = chuoicon[5]; 
						for(i = 0; i < sp.length; i++){
							if((sp[i].matheloai.indexOf(chuoicon[2]) != -1) && (parseInt(sp[i].gia) <= chuoicon[4])){
								temp[k++] = sp[i];
							}
						}
					}
					//Nếu tìm thấy dấu > trong url và text box tìm kiếm trống thì kiểm tra sp
					else if(chuoicon[3] == '%3E' && chuoicon[1] == 'nothing'){
						//alert(chuoicon[3]);
						pos = chuoicon[5];
						//alert(pos);
						for(i = 0; i < sp.length; i++){
							if((sp[i].matheloai.indexOf(chuoicon[2]) != -1) && (parseInt(sp[i].gia) >= chuoicon[4])){
								temp[k++] = sp[i];
							}
						}
					}
					//Nếu tìm thấy dấu < trong url và text box tìm kiếm có giá trị thì kiểm tra sp
					else if(chuoicon[3] == '%3C' && chuoicon[1] != 'nothing'){
						blank = chuoicon[1].split('%20');
						str = "";
						for(i = 0; i < blank.length; i++){
							str = str + blank[i];
							if(i != blank.length - 1){
								str = str + " ";
							}
						}
						pos = chuoicon[5];
						//alert(pos);
						for(i = 0; i < sp.length; i++){
							name2 = sp[i].tensp.toLowerCase();
							if((name2.indexOf(str) !== -1) && sp[i].matheloai.indexOf(chuoicon[2]) != -1 && parseInt(sp[i].gia) <= chuoicon[4]){
								temp[k++] = sp[i];
							}
						}
					}
					//Nếu tìm thấy dấu > trong url và text box tìm kiếm có giá trị thì kiểm tra sp
					else if(chuoicon[3] == '%3E' && chuoicon[1] != 'nothing'){
						blank = chuoicon[1].split('%20');
						str = "";
						for(i = 0; i < blank.length; i++){
							str = str + blank[i];
							if(i != blank.length - 1){
								str = str + " ";
							}
						}
						pos = chuoicon[5];
						for(i = 0; i < sp.length; i++){
							name2 = sp[i].tensp.toLowerCase();
							if((name2.indexOf(str) !== -1) && sp[i].matheloai.indexOf(chuoicon[2]) != -1 && parseInt(sp[i].gia) >= chuoicon[4]){
								temp[k++] = sp[i];
							}
						}
					}
					if(chuoicon[3] == 'null' && chuoicon[1] == 'nothing'){
						kind = chuoicon[2];
						//alert(chuoicon[3]);
						for(i = 0; i < sp.length; i++){
							if(sp[i].matheloai.indexOf(chuoicon[2]) != -1){
								temp[k++] = sp[i];
							}
						}
						pos = chuoicon[4];
						//alert(temp.length);
					}
					if(chuoicon[2] == 'null' && chuoicon[1] == 'nothing' && chuoicon[3] == '%3C'){
						kind = chuoicon[4];
						for(i = 0; i < sp.length; i++){
							if(parseInt(sp[i].gia) <= chuoicon[4]){
								temp[k++] = sp[i];
							}
						}
						pos = chuoicon[5];
					}
					if(chuoicon[2] == 'null' && chuoicon[1] == 'nothing' && chuoicon[3] == '%3E'){
						kind = chuoicon[4];
						for(i = 0; i < sp.length; i++){
							if(parseInt(sp[i].gia) >= chuoicon[4]){
								temp[k++] = sp[i];
							}
						}
						pos = chuoicon[5];
					}
					
					for(i = pos; i < temp.length; i++){
						dem++;
								if(temp[i].matheloai.indexOf(chuoicon[2]) != -1 && chuoicon[2] != 'null'){ // Ở ĐÂY

									s = s+'<a class="sanpham" href="ChiTietSanPham.html?'+ temp[i].masp +'&0"><div align="center" style="float:left;width:50%; border:#C90 solid; margin-top:1px;">'+
									'<img src="'+ temp[i].hinh+'" width="200px" height="200px"/></a><br/>'+ '<p>Sản phẩm: ' + temp[i].tensp + '<br/>Giá: ' + temp[i].gia + 
									'</p>' + 
									'<button onClick="GioHang('+temp[i].masp+')">Bỏ vào giỏ</button>' + '</div>';
								}
								else if(parseInt(temp[i].gia) <= chuoicon[4] && chuoicon[2] == 'null'){
									s = s+'<a class="sanpham" href="ChiTietSanPham.html?'+ temp[i].masp +'&0"><div align="center" style="float:left;width:50%; border:#C90 solid; margin-top:1px;">'+
									'<img src="'+ temp[i].hinh+'" width="200px" height="200px"/></a><br/>'+ '<p>Sản phẩm: ' + temp[i].tensp + '<br/>Giá: ' + temp[i].gia + 
									'</p>' + 
									'<button onClick="GioHang('+temp[i].masp+')">Bỏ vào giỏ</button>' + '</div>';
								}
								else if(parseInt(temp[i].gia) >= chuoicon[4] && chuoicon[2] == 'null'){
									s = s+'<a class="sanpham" href="ChiTietSanPham.html?'+ temp[i].masp +'&0"><div align="center" style="float:left;width:50%; border:#C90 solid; margin-top:1px;">'+
									'<img src="'+ temp[i].hinh+'" width="200px" height="200px"/></a><br/>'+ '<p>Sản phẩm: ' + temp[i].tensp + '<br/>Giá: ' + temp[i].gia + 
									'</p>' + 
									'<button onClick="GioHang('+temp[i].tensp, temp[i].matheloai+')">Bỏ vào giỏ</button>' + '</div>';
								}
								if(dem==6){
									break;
								}
					}
					document.getElementById("DanhSach").innerHTML=s;
	
					sotrang = Math.ceil(temp.length/6);
					for(i = 1; i <= sotrang ;i++){
						x = (i-1)*6;
						if(chuoicon[3] == 'null' && chuoicon[1] == 'nothing'){
							lienket = lienket+'<a style="clear:both" class="sotrang" href="index.html?timkiemnangcao&' + chuoicon[1] + '&' + chuoicon[2] + '&' + chuoicon[3] + '&' + chuoicon[4] + '&' + pos + '">' + i + '</a>';
						}
						else{
							lienket = lienket+'<a style="clear:both" class="sotrang" href="index.html?timkiemnangcao&' + chuoicon[1] + '&' + 	chuoicon[2] + '&' + chuoicon[3] + '&' + chuoicon[4] + '&' + x + '">' + i + '</a>';
						}
					}
					document.getElementById("sotrang").innerHTML=lienket;
				}
				else if(chuoicon[0] == 'giohang'){
					t = "<div align='center'><h2>Sản phẩm của bạn</h2><hr/></div>";
					document.getElementById("tieude").innerHTML = t;
					var q = "<div align='center' id='tien'></div><br/><div id='product'></div><br><div id='HienThiSanPham' style='height:260px'></div>";
					document.getElementById("DanhSach").innerHTML = q;
					SanPhamDuocChon();
				}
				//KHI CLICK PHẦN DANH MỤC SẼ HIỆN RA SẢN PHẨM	
		       	else{
					   for(var i = 0 ; i < sp.length;i++){
							if(sp[i].matheloai.indexOf(loaisp) != -1){
								temp[k++] = sp[i];
							}
					   }
					t = "<div align='center'><h2>Danh sách các sản phẩm</h2></div><br><div align='center'>TÌM KIẾM NÂNG CAO<br> <select id='theloai'><option value='null'>[Chọn loại sản phẩm]</option><option value='LE'>Lenovo</option><option value='AS'>Asus</option><option value='HP'>HP</option><option value='DE'>Dell</option><option value='MSI'>MSI</option>  </select> &emsp; <select id='giatien'><option value='null'>[Chọn giá tiền]</option><option value='<&6000000'>< 6 triệu</option><option value='<&8000000'>< 8 triệu</option><option value='>&10000000'>> 10 triệu</option><option value='>&15000000'>> 15 triệu</option><option value='>&20000000'>> 20 triệu</option></select> &emsp; <button onClick='Search_NangCao()'>Tìm</button</div><br>";
					document.getElementById("tieude").innerHTML = t;

					for(var i = 0; i < temp.length;i++){
                         		dem++;
                                s = s+'<a class="sanpham" href="ChiTietSanPham.html?'+ temp[i].masp +'&0"><div align="center" style="float:left;width:50%; border:#C90 solid; margin-top:1px;">'+
                                '<img src="'+ temp[i].hinh+'" width="200px" height="200px"/></a><br/>'+ '<p>Sản phẩm: ' + temp[i].tensp + '<br/>Giá: ' + temp[i].gia + 
								'</p>' + 
								'<button onClick="GioHang('+ temp[i].masp+')">Lưu sản phẩm</button>' + '</div>';
                                if(dem==6){
									break;
								}
                	}
               				document.getElementById("DanhSach").innerHTML=s;
	
					sotrang = Math.ceil(temp.length/4);
					for(i = 1;i<=sotrang;i++){
						vitri=(i-1)*4;
						lienket=lienket+'<a style="clear:both" class="sotrang" href="index.html?' + loaisp + '&' + vitri + '">' + i + '</a>';
					}
					document.getElementById("sotrang").innerHTML=lienket;
				}           
}


window.addEventListener('load', function(){
	LayURL();
	TaoDanhMuc();
	
	//test();
}
);