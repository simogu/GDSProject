

<?php
	$connection = mysqli_connect("localhost", "root", ""); // Establishing connection with server..
	$db = mysqli_select_db($connection, "project"); // Selecting Database.
	$start= $_POST['start1']; 
	$end= $_POST['end1']; 
	
	// Matching user input email and password with stored email and password in database.
	$result = mysqli_query($connection, "SELECT * FROM bookings 
	where start BETWEEN STR_TO_DATE('$start','%d-%m-%Y %T') AND STR_TO_DATE('$end','%d-%m-%Y %T')
	OR end BETWEEN STR_TO_DATE('$start','%d-%m-%Y %T') AND STR_TO_DATE('$end','%d-%m-%Y %T')
    OR start >= STR_TO_DATE('$start','%d-%m-%Y %T') AND end <= STR_TO_DATE('$end','%d-%m-%Y %T');");
	$message="";
	while($row = mysqli_fetch_assoc($result)){
		$id = $row['id'];
		$username = $row['username'];
		$roomnumber = $row['roomnumber'];
		$startDate = $row['start'];
		$endDate = $row['end'];
		$message.="Booking id: ".$id." "."User: ".$username." "."Room Number: ".$roomnumber." ".
		"Start: ".$startDate." "."End: ".$endDate.";";
		
	}
   
	if($result){
		echo $message;
		//header("location: ../frontpage.html");
	}else{
		echo "error";
	}
	
	mysqli_close ($connection); // Connection Closed.
	 
?>

