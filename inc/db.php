<?php
$server = "localhost";
$servername = "root";
$serverpass = "";
$dbname = "shope";

$conn = new mysqli($server , $servername , $serverpass , $dbname);
$conn->set_charset("utf-8");
if($conn->connect_error){
    die("Connected Filed" . $conn->connect_error);
}/* else {
    echo "fghdfh";
} */
?>