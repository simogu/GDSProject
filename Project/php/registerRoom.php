

<?php
	$connection = mysqli_connect("localhost", "root", ""); // Establishing connection with server..
	$db = mysqli_select_db($connection, "project"); // Selecting Database.
	$roomnumber=$_POST['roomnumber1']; // Fetching Values from URL.
	$capacity= $_POST['capacity1']; // Password Encryption, If you like you can also leave sha1.
	// check if e-mail address syntax is valid or not
	
	// Matching user input email and password with stored email and password in database.
	$result = mysqli_query($connection, "INSERT INTO rooms values ('$roomnumber','$capacity');");
	
	if($result){
		echo "ok";
		//header("location: ../frontpage.html");
	}else{
		echo "error";
	}
	
	mysqli_close ($connection); // Connection Closed.
	 
?>

