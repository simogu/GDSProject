
var username;
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
		
	loadPage();
	
	
	$("#logout").click(function(){
		window.location.href="index.html";		
	});
	

});

  
function addBookingToList(text) {
	
	var bookingID = text.substring(text.indexOf("Booking id:")+11,text.indexOf("Room Number:")-1).trim();
	
	var roomNumber = text.substring(text.indexOf("Room Number:")+12,text.indexOf("Start:")-1);
	var start = text.substring(text.indexOf("Start:")+6,text.indexOf("End:")-1);
	var end = text.substring(text.indexOf("End:")+4);
	var tr = "<tr><td>"+bookingID+"</td><td>"+roomNumber+"</td><td>"+start+"</td><td>"+
	end+"</td><td><input type=\"button\" class=\"btn btn-danger\" id=\"cancel"+bookingID+"\" value=\"Cancel Booking\"></td></tr>";
	
	$('#bookingList tbody').append(tr);

  
  
	$("#cancel"+bookingID).click(function(){
		
		$.post("php/cancelBooking.php",{ id1: bookingID},
			function(data) {
				if(data.trim()=="ok") {
					//$("form")[0].reset();
					alert("Booking Cancelled!");
					loadPage();
				}else if(data.trim()=="error"){
					alert("Error!");
				} else{
					alert("\""+data+"\"");
				}
			});
			
	});
  
  
} 

function loadPage()
{
	
	$('#bookingList tbody').empty();
	
	$.post("php/getUserBookings.php",{username1:username},
	function(data) {
		if(data.trim()=="error"){
			alert("Failed!");
		} else{
			
			var bookings = data.trim().split(";");
			for(var i=0;i<bookings.length-1;i++)
			{
				addBookingToList(bookings[i]);
			}
		}
	});
}
