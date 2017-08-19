

<?php
	$connection = mysqli_connect("localhost", "root", ""); // Establishing connection with server..
	$db = mysqli_select_db($connection, "project"); // Selecting Database.
	$username=$_POST['username1'];
	$roomnumber=$_POST['roomnumber1'];
	$start= $_POST['start1']; 
	$end= $_POST['end1']; 
	
	$check = mysqli_query($connection, "SELECT * FROM bookings 
	where roomnumber='$roomnumber' AND( STR_TO_DATE('$start','%d-%m-%Y %T') BETWEEN start AND end 
	OR STR_TO_DATE('$end','%d-%m-%Y %T') BETWEEN start AND end
    OR STR_TO_DATE('$start','%d-%m-%Y %T') >= start AND STR_TO_DATE('$end','%d-%m-%Y %T') <= end);");
	
	$data = mysqli_num_rows($check);
	
	if($data>0)
	{
		echo "Booking date time range overlaps previous bookings. Please choose another date time range";
	}
	else{
		// Matching user input email and password with stored email and password in database.
		$result = mysqli_query($connection, "INSERT INTO bookings (username,roomnumber,start,end) values ('$username','$roomnumber',STR_TO_DATE('$start','%d-%m-%Y %T'),STR_TO_DATE('$end','%d-%m-%Y %T'));");
		
		if($result){
			echo "Booking Success!";
			//header("location: ../frontpage.html");
		}else{
			echo "Booking Failed".$result;
		}
	}
	mysqli_close ($connection); // Connection Closed.
	 
?>

