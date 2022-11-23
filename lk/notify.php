<?php

// connecting to the  database

$servername = "localhost";
$username ="root";
$password = "";
$database = "alnotify";

// craeate the connection

$conn = mysqli_connect($servername,$username,$password,$database);

//Die if coonnection was not successfull
if(!$conn)
{
    die("Sorry the connnection was not created: ".mysqli_connect_error());

}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $sql= "INSERT INTO `waiter`(`Email`) VALUES('$email')";

}


?>