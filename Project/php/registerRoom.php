

<?php
	$connection = mysqli_connect("localhost", "root", ""); // Establishing connection with server..
	$db = mysqli_select_db($connection, "project"); // Selecting Database.
	$roomnumber=$_POST['roomnumber1']; 
	$capacity= $_POST['capacity1']; 
	
	
	$result = mysqli_query($connection, "SELECT * FROM rooms WHERE number='$roomnumber';");
	$data = mysqli_num_rows($result);
	if($data>0){
		echo "Room number already registered!";	
	}else{
		$result2 = mysqli_query($connection, "INSERT INTO rooms values ('$roomnumber','$capacity');");
		
		if($result2){
			echo "ok";
		}else{
			echo "error";
		}
	}
	mysqli_close ($connection); // Connection Closed.
	 
?>

