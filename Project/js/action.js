$(document).ready(function(){
	$("#login").click(function(){
		
		var username = $("#username").val();
		var password = $("#password").val();
		// Checking for blank fields.
		if( username =='' || password ==''){
			//$('input[type="text"],input[type="password"]').css("border","2px solid red");
			//$('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
			alert("Please fill all fields...!!!!!!");
		}else {
			$.post("php/login.php",{ username1: username, password1:password},
			function(data) {
				if(data.trim()=="ok") {
					//$("form")[0].reset();
					//alert("Login Ok!");
					window.location.href="userPage.html";
					document.cookie = "username="+username;
				}else if(data.trim()=="error"){
					alert("Incorrect username or password!");
				} else{
					alert("\""+data+"\"");
				}
			});
		}
	});
	
	$("#registerUser").click(function(){
		var username = $("#username").val();
		var password = $("#password").val();
		// Checking for blank fields.
		if( username =='' || password ==''){
			//$('input[type="text"],input[type="password"]').css("border","2px solid red");
			//$('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
			alert("Please fill all fields...!!!!!!");
		}else {
			$.post("php/registerUser.php",{ username1: username, password1:password},
			function(data) {
				if(data.trim()=="ok") {
					//$("form")[0].reset();
					alert("Registration Success!");
					
				}else if(data.trim()=="error"){
					alert("Registration Failed!");
				} else{
					alert("\""+data+"\"");
				}
			});
		}
	});
	
	
});