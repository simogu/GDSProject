

<?php
	$connection = mysqli_connect("localhost", "root", ""); // Establishing connection with server..
	$db = mysqli_select_db($connection, "project"); // Selecting Database.
	$username=$_POST['username1']; // Fetching Values from URL.
	$password= $_POST['password1']; 
	
	
	$result = mysqli_query($connection, "SELECT * FROM users2 WHERE username='$username'");
	$data = mysqli_num_rows($result);
	if($data==1){
		echo "Username already in use!";	
	}else{
		
	
		$result2 = mysqli_query($connection, "INSERT INTO users2 values ('$username','$password','FALSE');");
	
		if($result2){
			echo "ok";
			
		}else{
			echo "error";
		}
	}
	mysqli_close ($connection); // Connection Closed.
	 
?>

