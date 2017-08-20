
$(document).ready(function () {                  

	var cookieInfo = document.cookie;
	var username = cookieInfo.substring(cookieInfo.indexOf("username=")+9);
	document.getElementById("username").innerHTML =username;

	$.post("php/checkIsAdmin.php",{ username1: username},
		function(data) {
			if(data.trim()=="ok") {
				document.getElementById("registerRoom").style.visibility="visible";
			}
		});
		
	$("#checkBooking").click(function(){
		
		var sDate = $("#startdate").val();
		var sTime = $("#starttime").val();
		var eDate = $("#enddate").val();
		var eTime = $("#endtime").val();
		
		if( sDate =='' || sTime =='' || eDate =='' || eTime ==''){
			//$('input[type="text"],input[type="password"]').css("border","2px solid red");
			//$('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
			alert("Please fill all fields...!!!!!!");
		}
		else{
			var start = convertDate(sDate,sTime);
			var end = convertDate(eDate,eTime);
			
			$('#bookingList tbody').empty();

			$.post("php/getBookings.php",{start1:start, end1:end},
			function(data) {
				if(data.trim()=="error"){
					alert("Failed!");
				} 
				else if(data.trim()=="no results"){
					alert("No bookings for this date time range!");
				} 
				else{
					
					var bookings = data.trim().split(";");
					for(var i=0;i<bookings.length-1;i++)
					{
						addBookingToList(bookings[i]);
					}
				}
			});
		}
	});
	
	$("#logout").click(function(){
		window.location.href="index.html";		
	});

});

function convertDate(date,time)
{
	date = date.split("/");
	time = time.split(":");
	if(time[1].includes("pm"))
	{
		var intTime = parseInt(time[0])+12;
		time[0] = intTime.toString();
	}
	if(time[1].includes("am"))
	{
		var intTime = parseInt(time[0]);
		if(intTime == 12)
		{
			intTime =0;
		}
		if(intTime<10)
		{
			time[0] = "0"+intTime.toString();
		}
		else{
			time[0] = intTime.toString();
		}
		
	}
	time[1]=time[1].replace("am",":00").replace("pm",":00");
	var datetime = date[1]+"-"+date[0]+"-"+date[2]+" "+time[0]+":"+time[1];
	return datetime;
}

  $(function() {
    $( "#startdate" ).datepicker();
	$( "#starttime" ).timepicker();
	$( "#enddate" ).datepicker();
	$( "#endtime" ).timepicker();
  });
  
function addBookingToList(text) {
  
  var bookingID = text.substring(text.indexOf("Booking id:")+11,text.indexOf("User:")-1);
  var user = text.substring(text.indexOf("User:")+5,text.indexOf("Room Number:")-1);
  var roomNumber = text.substring(text.indexOf("Room Number:")+12,text.indexOf("Start:")-1);
  var start = text.substring(text.indexOf("Start:")+6,text.indexOf("End:")-1);
  var end = text.substring(text.indexOf("End:")+4);
  var tr = "<tr><td>"+bookingID+"</td><td>"+user+"</td><td>"+roomNumber+"</td><td>"+start+"</td><td>"+end+"</td></tr>";
  $('#bookingList tbody').append(tr);
} 
