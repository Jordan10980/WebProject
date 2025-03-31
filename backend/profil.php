<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: *");

$host = "mysql-service"; 
$dbname = "Mairie";
$username = "root";
$password = "rootpassword";

$data = json_decode(file_get_contents("php://input")); 

session_start();

$bdd = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

include_once('cookieconnect.php');

if(isset($_POST['id']) AND $_POST['id'] > 0){
    
    $getid = intval($_POST['id']);
     $requser = $bdd->prepare("SELECT * FROM Beauvaisiens WHERE id = ? ");
     $requser->execute(array($getid));
     $userinfo = $requser->fetch();
}

     $pseudo = $userinfo['pseudo'];
     $avatar = $userinfo['avatar'];
     $mail = $userinfo['mail'];
    echo $pseudo ."\n". $avatar ."\n".$mail ."\n". $getid;
   

?>



