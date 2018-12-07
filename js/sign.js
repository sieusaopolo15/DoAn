//đăng nhập
var SignInBtn = document.getElementById('sign-in-btn');
var SignInBox = document.getElementById('sign-in-box');
var closeSignInBtn = document.getElementById('close-sign-in');
var cancelSignInBtn = document.getElementById('cancel-sign-in');

SignInBtn.addEventListener('click', openSignInBox);
closeSignInBtn.addEventListener('click', hideSignInBox);
cancelSignInBtn.addEventListener('click', hideSignInBox);

function openSignInBox(){
	SignInBox.style.display = "block";
}
function hideSignInBox(){
	SignInBox.style.display = "none";
}


//đăng kí
var SignUpBtn = document.getElementById('sign-up-btn');
var SignUpBox = document.getElementById('sign-up-box');
var closeSignUpBtn = document.getElementById('close-sign-up');
var cancelSignUpBtn = document.getElementById('cancel-sign-up');

SignUpBtn.addEventListener('click', openSignUpBox);
closeSignUpBtn.addEventListener('click', hideSignUpBox);
cancelSignUpBtn.addEventListener('click', hideSignUpBox);

function openSignUpBox(){
	SignUpBox.style.display = "block";
}
function hideSignUpBox(){
	SignUpBox.style.display = "none";
}


//tài khoản
var SignUpSubmit = document.forms["sign-up-form"];
var SignUpSubmitBtn = document.forms["sign-up-form"]["sign-up-submit"];

SignUpSubmitBtn.addEventListener('click', SaveAccount);

function SaveAccount(){
	var usernameSignUp = document.forms["sign-up-form"]["email"].value;
	var passwordSignUp = document.forms["sign-up-form"]["psw"].value;
	var repasswordSignUp = document.forms["sign-up-form"]["psw-repeat"].value;
	
	var account = {
		username: usernameSignUp,
		password: passwordSignUp
	};
	if(usernameSignUp === "" || passwordSignUp === "" || repasswordSignUp === ""){
		alert("Vui lòng nhập đầy đủ thông tin!!!");
		return false;
	}
	if(usernameSignUp.length <5 ){
		alert("Tên tài khoản phải có 5 ký tự trở lên!!!");
		return false;
	}
	if(usernameSignUp.indexOf(" ") > -1 || passwordSignUp.indexOf(" ") > -1 || repasswordSignUp.indexOf(" ") > -1){
		alert("Tên tài khoản hoặc mật khẩu không được có khoảng trắng!!!");
		return false;
	}
	if(passwordSignUp !== repasswordSignUp){
		alert("Mật khẩu phải giống nhau!!!");
		return false;
	}
	//check if account is null
	if(localStorage.getItem('accounts') === null){
		var accounts = [];
		accounts.push(account);
		localStorage.setItem('accounts', JSON.stringify(accounts));
		alert("Chúc mừng bạn đã đăng kí tài khoản thành công, mời bạn đăng nhập!!!");
		window.location.reload();
	}
	else{
		var accounts = JSON.parse(localStorage.getItem('accounts'));
		var CheckExitUser = true ;
		for( var i=0; i <accounts.length; i++){
			if(accounts[i].username == account.username){
				CheckExitUser = false;
			}
		}
		if(CheckExitUser == false){
			alert("Tên tài khoản đã tồn tại!!!");
		}
		else{
			accounts.push(account);
			localStorage.setItem('accounts', JSON.stringify(accounts));
			alert("Chúc mừng bạn đã đăng kí tài khoản thành công, mời bạn đăng nhập!!!");
			window.location.reload();
		}
	}
}

var SignInSubmit = document.forms["sign-in-form"];
var SignInSubmitBtn = document.forms["sign-in-form"]["sign-in-submit"];
SignInSubmitBtn.addEventListener('click', CheckLogin);

function CheckLogin(){
	var usernameLogin = document.forms["sign-in-form"]["username"].value;
	var passwordLogin = document.forms["sign-in-form"]["psw"].value;
	var accounts = JSON.parse(localStorage.getItem('accounts'));
	
	var AccountExist = false;
	for(var i = 0; i<accounts.length; i++){
		if(usernameLogin == accounts[i].username && passwordLogin == accounts[i].password){
			var check2 = JSON.parse(localStorage.getItem('check'));
			check2 = {
				Login: true,
				currentUsername: accounts[i].username
			};
			localStorage.setItem('check', JSON.stringify(check2));
			alert("Đăng nhập thành công, Xin chào " + '"' + usernameLogin + '" !!!');
            AccountExist = true;
            window.location.reload();
		}
	}
	if(AccountExist == false){
			alert("Tên tài khoản hoặc mật khẩu không chính xác!!!");
	}
}

var UserCategory = document.getElementsByClassName('user-category');
UserCategory[0].style.display = "none";
UserCategory[1].style.display = "none";

function checkLoginStatus(){
	var SignZone = document.getElementById('sign-zone');
    var check  = JSON.parse(localStorage.getItem('check'));
    var LoginCheck;
    if(check !== null){
        LoginCheck = check.Login;
    }
    if(LoginCheck ==  true){
        SignZone.style.display = "none";
        UserCategory[0].style.display = "block";
        UserCategory[1].style.display = "block";
    }
}

UserCategory[0].addEventListener('click',Logout);
function Logout(){
	var CheckLogOut = confirm("Bạn có muốn đăng xuất không?");
    if(CheckLogOut){
        localStorage.removeItem('check');
        document.location.reload();
    }
}

function DisplayUser(){
    var usernameTag = document.getElementById('username-display');
    var check  = JSON.parse(localStorage.getItem('check'));
    if(check !== null){
        var userLogin = check.currentUsername;
        var loginCheck = check.Login;
        if(loginCheck == true){
            usernameTag.innerHTML = userLogin;
        }
    }
}

window.onload = function(){
    checkLoginStatus();
    DisplayUser(); 
}