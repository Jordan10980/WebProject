<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: *");

$host = "mysql-service"; 
$dbname = "Mairie";
$username = "root";
$password = "rootpassword";

$data = json_decode(file_get_contents("php://input"));

$bdd = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

$finalResponse = array();

//date de naissance + âge
$query = $bdd->prepare("SELECT dateNaiss FROM sondage ORDER BY id DESC LIMIT 1");
$query->execute();
$birthdate = $query->fetch(PDO::FETCH_ASSOC)['dateNaiss'];
$finalResponse['age'] = $birthdate;

//aliments
$query = $bdd->prepare("SELECT aliments FROM sondage WHERE id = (SELECT MAX(id) FROM sondage)");
$query->execute();
$foods = $query->fetch(PDO::FETCH_ASSOC)['aliments'];
$finalResponse['aliments'] = explode(",", $foods); // Assuming foods are stored as comma separated values

//ville
$query = $bdd->prepare("SELECT ville FROM sondage ORDER BY id DESC LIMIT 1");
$query->execute();
$city = $query->fetch(PDO::FETCH_ASSOC)['ville'];
$finalResponse['ville'] = $city;

//nombre de personnes total
$query = $bdd->prepare("SELECT COUNT(*) AS count FROM sondage");
$query->execute();
$count = $query->fetch(PDO::FETCH_ASSOC)['count'];
$finalResponse['total'] = $count;

//nom
$query = $bdd->prepare("SELECT nom FROM sondage ORDER BY id DESC LIMIT 1");
$query->execute();
$nom = $query->fetch(PDO::FETCH_ASSOC)['nom'];
$finalResponse['nom'] = $nom;

//prénom
$query = $bdd->prepare("SELECT prenom FROM sondage ORDER BY id DESC LIMIT 1");
$query->execute();
$prenom = $query->fetch(PDO::FETCH_ASSOC)['prenom'];
$finalResponse['prenom'] = $prenom;

//----------------------- répartitions par âge

// enfants 0 à 14 ans inclus
$query = $bdd->prepare("SELECT COUNT(*) AS count FROM sondage WHERE TIMESTAMPDIFF(YEAR, dateNaiss, CURDATE()) BETWEEN 0 AND 14");
$query->execute();
$count = $query->fetch(PDO::FETCH_ASSOC)['count'];
$finalResponse['enfants'] = $count;

// adolescents 15 à 24 ans inclus
$query = $bdd->prepare("SELECT COUNT(*) AS count FROM sondage WHERE TIMESTAMPDIFF(YEAR, dateNaiss, CURDATE()) BETWEEN 15 AND 24");
$query->execute();
$count = $query->fetch(PDO::FETCH_ASSOC)['count'];
$finalResponse['adolescents'] = $count;

// adultes 25 à 64 ans inclus
$query = $bdd->prepare("SELECT COUNT(*) AS count FROM sondage WHERE TIMESTAMPDIFF(YEAR, dateNaiss, CURDATE()) BETWEEN 25 AND 64");
$query->execute();
$count = $query->fetch(PDO::FETCH_ASSOC)['count'];
$finalResponse['adultes'] = $count;

// aînés 65 ans te plus
$query = $bdd->prepare("SELECT COUNT(*) AS count FROM sondage WHERE TIMESTAMPDIFF(YEAR, dateNaiss, CURDATE()) >= 65");
$query->execute();
$count = $query->fetch(PDO::FETCH_ASSOC)['count'];
$finalResponse['aines'] = $count;

echo json_encode($finalResponse);

?>
