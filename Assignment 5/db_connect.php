<?php


$servername = "localhost";
$username   = "root";
$password   = "abhishek123";
$database   = "ebookshop_db";

$conn = new mysqli($servername, $username, $password, $database);
6+

if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Connection failed: " . $conn->connect_error]));
}
?>
