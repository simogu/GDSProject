$(document).ready(function () {                  

	var cookieInfo = document.cookie;
	username = cookieInfo.substring(cookieInfo.indexOf("username=")+9);
	document.getElementById("username").innerHTML =username;
	
	$.post("php/checkIsAdmin.php",{ username1: username},
		function(data) {
			if(data.trim()=="ok") {
				document.getElementById("registerRoom").style.visibility="visible";
			}
		});
		
	
	$("#logout").click(function(){
		window.location.href="index.html";		
	});
	
	$("#registerRoomBtn").click(function(){
		
		var roomnumber = $("#roomnumber").val();
		var capacity = $("#capacity").val();
		// Checking for blank fields.
		if( roomnumber =='' || capacity ==''){
			//$('input[type="text"],input[type="password"]').css("border","2px solid red");
			//$('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
			alert("Please fill all fields...!!!!!!");
			
		}
		else if( !$.isNumeric(roomnumber) || !$.isNumeric(capacity)){
			//$('input[type="text"],input[type="password"]').css("border","2px solid red");
			//$('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
			alert("Please enter only numbers!!!");
		}else {
			$.post("php/registerRoom.php",{ roomnumber1: roomnumber, capacity1:capacity},
			function(data) {
				if(data.trim()=="ok") {
					//$("form")[0].reset();
					alert("Registration Success!");
					
				}else if(data.trim()=="error"){
					alert("Registration Failed!");
				} else{
					alert(data.trim());
				}
			});
		}
	});
});