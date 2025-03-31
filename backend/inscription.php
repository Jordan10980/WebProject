<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

$host = "mysql-service"; 
$dbname = "Mairie";
$username = "root";
$password = "rootpassword";

$data = json_decode(file_get_contents("php://input")); 


$bdd = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

    $pseudo = $data->data->pseudo;
    $mail = $data->data->mail;
    //$mail2 = $data->data->mail2;
    $mdp = sha1($data->data->mdp);
    $mdp2 = sha1($data->data->mdp2);


    echo empty($pseudo);

    

    if($pseudo != "" AND $mail !="" AND $mdp !="" AND $mdp2 !="" ){



        $pseudolength = strlen($pseudo);

        if($pseudolength <= 255){
            if($mail != ""){
                if(filter_var($mail, FILTER_VALIDATE_EMAIL )) {

                    $reqmail = $bdd->prepare("SELECT * FROM Beauvaisiens where mail = ?");
                    $reqmail->execute(array($mail ));
                    $mailexist =  $reqmail->rowCount();

                    $reqpseudo = $bdd->prepare("SELECT * FROM Beauvaisiens where pseudo = ?");
                    $reqpseudo->execute(array($pseudo ));
                    $pseudoexist =  $reqpseudo->rowCount();

                    if($pseudoexist == 0){
                        if($mailexist == 0) {


                            if ($mdp == $mdp2) {

                                $insertmbr = $bdd->prepare("INSERT INTO Beauvaisiens (pseudo, mail, motdepasse) VALUES (?,?,?)");
                                $insertmbr->execute(array($pseudo, $mail, $mdp));
                                $erreur = "Bravo vous êtes inscrit";
                                //header('Location: index.php');
                                echo "Bravo vous êtes inscrit";

                            } else {
                                $erreur = "Vos mots de passes ne correspondent pas !";
                                echo "Vos mots de passes ne correspondent pas !";
                            }
                        }else{
                            $erreur = "Adresse mail déjà utilisée !";
                            echo "Adresse mail déjà utilisée !";
                        }
                    }else{
                        $erreur = "Pseudo déjà utilisé !";
                        echo "Pseudo déjà utilisé !";
                    }
                }else{
                    $erreur = "Votre adresse mail n'est pas valide !";
                    echo "Votre adresse mail n'est pas valide !";
                }
            }else{
                $erreur ="Vos adresses mail ne correspondent pas !";
                echo "Vos adresses mail ne correspondent pas !";
            }
        }else{
            $erreur = "Votre pseudo ne doit pas dépasser 255 caractères.";
            echo "Votre pseudo ne doit pas dépasser 255 caractères.";
        }


    }
    else{
        $erreur = "Tous les champs doivent être complétés !";
        echo "Tous les champs doivent être complétés !";
    }

?>