<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: *");

session_start();

$host = "mysql-service"; 
$dbname = "Mairie";
$username = "root";
$password = "rootpassword";

$data = json_decode(file_get_contents("php://input")); 

$bdd = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

include_once('cookieconnect.php');



$mailconnect = $data->data->mailconnect;
$mdpconnect = sha1($data->data->mdpconnect);
$rememberme = $data->data->rememberme;

    if($mailconnect != "" AND $mdpconnect !="") {
        $requser = $bdd->prepare("SELECT * FROM Beauvaisiens WHERE mail = ? AND motdepasse = ?");
        $requser->execute(array($mailconnect, $mdpconnect));
        $userexist = $requser->rowCount();
        
        if($userexist == 1) {
            if(isset($rememberme)){
                setcookie('email',$mailconnect, time()+365*24*3600, null, null, false, true);
                setcookie('password',$mdpconnect, time()+365*24*3600, null, null, false, true);
        
            }
            
            $userinfo = $requser->fetch();
            $_SESSION['id'] = $userinfo['id'];
            $_SESSION['pseudo'] = $userinfo['pseudo'];
            $_SESSION['mail'] = $userinfo['mail'];
            $erreur = "Bravo vous êtes connecté !";
            echo "Bravo vous êtes connecté !";
            echo json_encode($_SESSION['id']);
            
            
        } else {
            $erreur = "Mauvais mail ou mot de passe !";
            echo "Mauvais mail ou mot de passe !";
        }
    } else {
        $erreur = "Tous les champs doivent être complétés !";
        echo "Tous les champs doivent être complétés !";
    }

?>
