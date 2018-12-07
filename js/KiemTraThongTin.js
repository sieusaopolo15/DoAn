// JavaScript Document
//ĐĂNG KÍ

function DangKi(){
	//Biến trong <span></span>
	var erruser = document.getElementById("erruser");
	var erremail = document.getElementById("erremail");
	var errpass = document.getElementById("errpass");
	var errrepass = document.getElementById("errrepass");
	//Biến trong box
	var username = document.getElementById("username");
	var email = document.getElementById("email");
	var password = document.getElementById("password");
	var repassword = document.getElementById("repassword");
				//
				//USERNAME
				if(username.value == ""){
					document.getElementById("erruser").innerHTML = "Tên đăng nhập không được để trống";
					erruser.style.color = "red";
				}
				else{
					if(CheckKTDB(username) == false){
						document.getElementById("erruser").innerHTML = "Tên đăng nhập không được phép có kí tự đặc biệt";
						erruser.style.color = "red";
				}
				else{
						if(username.value.length > 25){
							document.getElementById("erruser").innerHTML = "Tên đăng nhập không được quá 25 kí tự";
							erruser.style.color = "red";
						}
						else{
							document.getElementById("erruser").innerHTML = "";
						}
					}
				}
				//
				//EMAIL
				if(email.value == ""){
					document.getElementById("erremail").innerHTML = "Bắt buộc phải nhập email";
					erremail.style.color = "red";
				}
				else{
					if(email.value.length > 30){
						document.getElementById("erremail").innerHTML = "Email nhập lại đã quá 30 kí tự";
						errrepass.style.color = "red";
					}
					else{
						document.getElementById("erremail").innerHTML = "";
					}
				}
				//
				//PASSWORD
					if(password.value == ""){
						document.getElementById("errpass").innerHTML = "Mật khẩu không được để trống";
						errpass.style.color = "red";
					}
					else{
						if(CheckKTDB(password) == false){
							document.getElementById("errpass").innerHTML = "Mật khẩu không được phép có kí tự đặc biệt";
							errpass.style.color = "red";
						}
						else{
							if(password.value.length > 25){
								document.getElementById("errpass").innerHTML = "Mật khẩu đã quá 25 kí tự";
								errpass.style.color = "red";
							}
							else{
								document.getElementById("errpass").innerHTML = "";
							}
						}
					}
				//
				//REPASSWORD
				if(repassword.value == ""){
					document.getElementById("errrepass").innerHTML = "Bắt buộc phải nhập lại mật khẩu";
					errrepass.style.color = "red";
				}
				else{
					if(CheckKTDB(repassword) == false){
							document.getElementById("errrepass").innerHTML = "Mật khẩu không được phép có kí tự đặc biệt";
							errrepass.style.color = "red";
					}
					else{
						if(repassword.value.length > 25){
							document.getElementById("errrepass").innerHTML = "Mật khẩu nhập lại đã quá 25 kí tự";
							errrepass.style.color = "red";
						}
						else
							if(repassword.value != password.value){
								document.getElementById("errrepass").innerHTML = "2 Mật khẩu chưa khớp";
								errrepass.style.color = "red";
							}
							else{
								document.getElementById("errrepass").innerHTML = "";
							}
					}
				}
}			
			//KIỂM TRA KÍ TỰ ĐẶC BIỆT
			function CheckKTDB(textName){
				var ichars = /(\w)+$/;
				if(!ichars.test(textName.value))
						return false;
				return true;
			}
			function CheckSubmit(){
					var username = document.getElementById("username");
					var email = document.getElementById("email");
					var password = document.getElementById("password");
					var repassword = document.getElementById("repassword");
					if(username.value == ""){
						alert("Tên đăng nhập không được để trống");
						return false;	
					}
					if(email.value == ""){
						alert("Email của bạn không được để trống");
						return false	
					}
					if(password.value == ""){
						alert("Mật khẩu không được để trống");
						return false;
					}
					if(repassword.value == ""){
						alert("Nhập lại mật khẩu không được để trống");
						return false;
					}
					return true;
			}
function Button(){
		if(CheckSubmit() == true){
			var a = {};
			var username = document.getElementById("username");
			var email = document.getElementById("email");
			var password = document.getElementById("password");
			var repassword = document.getElementById("repassword");
			a.username = username;
			a.email = email;
			a.password = password;
			a.repassword = repassword;
			localStorage.setItem(username, JSON.stringify(a));
			alert("Đăng kí thành công");
			window.location.assign("dangnhap.html");
		}
		else{
			return;
		}
}

window.addEventListener('keypress', function(){
	DangKi();
}
);
window.addEventListener('onclick', function(){
	DangKi();
}
);
window.addEventListener('submit', function(){
	Button();
}
);