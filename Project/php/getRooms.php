

<?php
	$connection = mysqli_connect("localhost", "root", ""); // Establishing connection with server..
	$db = mysqli_select_db($connection, "project"); // Selecting Database.
	
	
	// Matching user input email and password with stored email and password in database.
	$result = mysqli_query($connection, "Select * from rooms;");
	$message="";
	while($row = mysqli_fetch_assoc($result)){
		 $number = $row['number'];
    $capacity = $row['capacity']; 
		$message.=$number." ".$capacity.";";
		
	}
   
	if($result){
		echo $message;
		//header("location: ../frontpage.html");
	}else{
		echo "error";
	}
	
	mysqli_close ($connection); // Connection Closed.
	 
?>

