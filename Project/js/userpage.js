$(document).ready(function(){
	
	var cookieInfo = document.cookie;
	var username = cookieInfo.substring(cookieInfo.indexOf("username=")+9);
	document.getElementById("username").innerHTML =username;
	
	$.post("php/checkIsAdmin.php",{ username1: username},
		function(data) {
			if(data.trim()=="ok") {
				document.getElementById("registerRoom").style.visibility="visible";
			}
		});
		
	$("#checkAvail").click(function(){
		window.location.href="checkBookingPage.html";		
	});
	$("#bookRoom").click(function(){
		window.location.href="bookingPage.html";		
	});
	$("#bookingRecord").click(function(){
		window.location.href="bookingRecordPage.html";		
	});
	$("#registerRoom").click(function(){
		window.location.href="roomRegister.html";		
	});
	
	$("#logout").click(function(){
		window.location.href="index.html";		
	});
});