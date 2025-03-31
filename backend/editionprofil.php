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

$newpseudo = $data->data->newpseudo;
$newmail = $data->data->newmail;
$newmdp1 = $data->data->newmdp1;
$newmdp2 = $data->data->newmdp2;
$id = $data->data->id;



if(isset($id)) { 
    $requser = $bdd->prepare("SELECT * FROM Beauvaisiens WHERE id = ?");
    $requser->execute(array($_SESSION['id']));
    $user = $requser->fetch();
     if(isset($newpseudo) AND !empty($newpseudo) AND $newpseudo != $user['pseudo']){
        
         $pseudo = htmlspecialchars($newpseudo);
 
         $reqpseudo = $bdd->prepare("SELECT * FROM Beauvaisiens where pseudo = ?");
         $reqpseudo->execute(array($pseudo));
         $pseudoexist =  $reqpseudo->rowCount();

         
         if($pseudoexist == 0) {
             $newpseudo = htmlspecialchars($newpseudo);
             $insertpseudo = $bdd->prepare("UPDATE Beauvaisiens SET pseudo = ? WHERE id = ?");
             $insertpseudo->execute(array($newpseudo, $id));
             $msg = "Votre pseudo a bien été modifié\n";
             echo "Votre pseudo a bien été modifié\n";
             
         }else{
             $msg = "Pseudo déjà utilisée !\n";
             echo "Pseudo déjà utilisée !\n";
         }
     }
}

    if(isset($newmail) AND !empty($newmail) AND $newmail != $user['mail'] ) {

        $mail = htmlspecialchars($newmail);

        $reqmail = $bdd->prepare("SELECT * FROM Beauvaisiens where mail = ?");
        $reqmail->execute(array($mail));
        $mailexist = $reqmail->rowCount();

        if ($mailexist == 0) {
            $newmail = htmlspecialchars($newmail);
            $insertmail = $bdd->prepare("UPDATE Beauvaisiens SET mail = ? WHERE id = ? ");
            $insertmail->execute(array($newmail, $id));
            $msg = "Votre adresse mail a bien été modifié\n";
            echo "Votre adresse mail a bien été modifié\n";
        } else {
            $msg = "Adresse mail déjà utilisée !\n";
            echo "Adresse mail déjà utilisée !\n";
        }
    }
   if(isset($newmdp1) AND !empty($newmdp1) AND isset($newmdp2) AND !empty($newmdp2)) {
      $mdp1 = sha1($newmdp1);
      $mdp2 = sha1($newmdp2);
      if($mdp1 == $mdp2) {
         $insertmdp = $bdd->prepare("UPDATE Beauvaisiens SET motdepasse = ? WHERE id = ?");
         $insertmdp->execute(array($mdp1, $id));
        $msg = "Votre mot de passe a bien été modfifié !\n";
         echo "Votre mot de passe a bien été modfifié !\n";
      } else {
         $msg = "Vos deux mdp ne correspondent pas !";
         echo "Vos deux mdp ne correspondent pas !";
      }
   }

?>

 