<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $pass = $_POST['password'];
    $num = $_POST['number'];

    $conn = new mysqli('localhost:3306','root','','modern_house');
    if($conn->connect_error)    
    {
        die('Connection Failed : '.$conn->connect_error);
    }
    else    
    {
        $comm = $conn->prepare("INSERT INTO user_details(name, email, pass, number) values(?, ?, ?, ?)");
        $comm->bind_param("sssi",$name, $email, $pass, $num);
        $comm->execute();
        $comm->close();
        $conn->close();
    }
    header("Location: register-success.html");
?>

