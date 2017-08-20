
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

	
	$.post("php/getRooms.php",
		function(data) {
			var rooms = data.split(";");
			for(var i=0;i<rooms.length;i++)
			{
				if(rooms[i].length>2)
				{
					var roomInfo = rooms[i].split(" ");
					var option = "<option>Room No: "+roomInfo[0]+" Capacity: "+roomInfo[1]+"</option>";
					$('#roomList').append(option);
				}
			}
	});
	
	$("#bookRoom").click(function(){
		var username = document.getElementById("username").innerHTML;
		var roomNo = $("#roomList").val();
		roomNo = roomNo.substring(roomNo.indexOf(":")+2,roomNo.indexOf("Capacity")-1);
		var sDate = $("#startdate").val();
		var sTime = $("#starttime").val();
		var eDate = $("#enddate").val();
		var eTime = $("#endtime").val();
		if( sDate =='' || sTime =='' || eDate =='' || eTime ==''){
			//$('input[type="text"],input[type="password"]').css("border","2px solid red");
			//$('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
			alert("Please fill all fields...!!!!!!");
		}
		else
		{
			var start = convertDate(sDate,sTime);
			var end = convertDate(eDate,eTime);
			
			$.post("php/bookRoom.php",{ username1: username, roomnumber1:roomNo, start1:start, end1:end},
			function(data) {
				if(data.trim()=="ok") {
					alert("Booking Succeeded!");
					
				}else if(data.trim()=="error"){
					alert("Booking failed!");
				} else{
					alert(data.trim());
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
  
 

