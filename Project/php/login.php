

<?php
	$connection = mysqli_connect("localhost", "root", ""); // Establishing connection with server..
	$db = mysqli_select_db($connection, "project"); // Selecting Database.
	$username=$_POST['username1']; // Fetching Values from URL.
	$password= $_POST['password1']; // Password Encryption, If you like you can also leave sha1.
	// check if e-mail address syntax is valid or not
	
	// Matching user input email and password with stored email and password in database.
	$result = mysqli_query($connection, "SELECT * FROM users2 WHERE username='$username' AND password='$password'");
	$data = mysqli_num_rows($result);
	if($data==1){
		echo "ok";
		//header("location: ../frontpage.html");
	}else{
		echo "error";
	}
	
	mysqli_close ($connection); // Connection Closed.
	 
?>

