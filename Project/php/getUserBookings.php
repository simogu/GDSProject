

<?php
	$connection = mysqli_connect("localhost", "root", ""); // Establishing connection with server..
	$db = mysqli_select_db($connection, "project"); // Selecting Database.
	$username= $_POST['username1']; 

	$result = mysqli_query($connection, "SELECT * FROM bookings 
	where username='$username';");
	$message="";
	while($row = mysqli_fetch_assoc($result)){
		$id = $row['id'];
		$roomnumber = $row['roomnumber'];
		$startDate = $row['start'];
		$endDate = $row['end'];
		$message.="Booking id: ".$id." "."Room Number: ".$roomnumber." ".
		"Start: ".$startDate." "."End: ".$endDate.";";
		
	}
   
	if($result){
		echo $message;
	}else{
		echo "error";
	}
	
	mysqli_close ($connection); // Connection Closed.
	 
?>

