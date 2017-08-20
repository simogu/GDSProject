

<?php
	$connection = mysqli_connect("localhost", "root", ""); // Establishing connection with server..
	$db = mysqli_select_db($connection, "project"); // Selecting Database.
	$id = $_POST['id1']; 

	$result = mysqli_query($connection, "DELETE FROM bookings 
	where id='$id';");
	
	if($result){
		echo "ok";
	}else{
		echo "error";
	}
	
	mysqli_close ($connection); // Connection Closed.
	 
?>

