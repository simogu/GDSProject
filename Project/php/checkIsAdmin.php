

<?php
	$connection = mysqli_connect("localhost", "root", ""); // Establishing connection with server..
	$db = mysqli_select_db($connection, "project"); // Selecting Database.
	$username= $_POST['username1']; 
	
	
	// Matching user input email and password with stored email and password in database.
	$result = mysqli_query($connection, "SELECT * FROM users2
	where username='$username';");
	$message="";
	if($row = mysqli_fetch_assoc($result)){
		if($row['isAdmin']==1)
		{
			echo "ok";	
		}
		else{
			echo "error";
		}
	}
   
	mysqli_close ($connection); // Connection Closed.
	 
?>

