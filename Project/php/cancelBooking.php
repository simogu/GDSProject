

<?php
	$connection = mysqli_connect("localhost", "root", ""); // Establishing connection with server..
	$db = mysqli_select_db($connection, "project"); // Selecting Database.
	$id = $_POST['id1']; 
	
	
	// Matching user input email and password with stored email and password in database.
	$result = mysqli_query($connection, "DELETE FROM bookings 
	where id='$id';");
	
	if($result){
		echo "ok";
		//header("location: ../frontpage.html");
	}else{
		echo "error";
	}
	
	mysqli_close ($connection); // Connection Closed.
	 
?>

