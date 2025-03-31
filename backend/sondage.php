<?php

error_reporting(E_ALL);
ini_set("display_errors", 1);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: *");

$host = "mysql-service"; 
$dbname = "Mairie";
$username = "root";
$password = "rootpassword";

$data = json_decode(file_get_contents("php://input"));

$bdd = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

$formData = json_decode($_POST['formData'], true);
$selectedOptions = json_decode($_POST['selectedOptions'], true);
$dateNaissance = json_decode($_POST['dateNaissance'], true);
$date = DateTime::createFromFormat('d/m/Y', $dateNaissance);
$dateNaissance = $date->format('Y-m-d');


$nom = $formData['nom'];
$prenom = $formData['prenom'];
$adresse = $formData['adresse'];
$code_postal = $formData['code_postal'];
$ville = $formData['ville'];
$telephone = $formData['telephone'];

if (!isset($nom) || empty($nom) || !is_string($nom) || !preg_match("/^[a-zA-Z]+$/", $nom)) {
    echo "Le nom est vide ou n'est pas une chaîne de caractères.";
    return;
}

if (!isset($prenom) || empty($prenom) || !is_string($prenom) || !preg_match("/^[a-zA-Z]+$/", $prenom)) {
    echo "Le prénom est vide ou n'est pas une chaîne de caractères.";
    return;
}

if (!isset($adresse) || empty($adresse) || !is_string($adresse) || !preg_match("/^[a-zA-Z]+$/", $prenom)) {
    echo "L'adresse est vide ou n'est pas une chaîne de caractères.";
    return;
}

if (!isset($ville) || empty($ville) || !is_string($ville) || !preg_match("/^[a-zA-Z]+$/", $ville)) {
    echo "La ville est vide ou n'est pas une chaîne de caractères.";
    return;
}

if (!isset($code_postal) || empty($code_postal) || !preg_match("/^[1-9][0-9]{4}$/", $code_postal)) {
    echo "Le code postal est vide, n'est pas un nombre à 5 chiffres ou contient des zéros consécutifs.";
    return;
}

if (!isset($telephone) || empty($telephone) || !preg_match("/^(\+33|0)[1-9][0-9]{8}$/", $telephone)) {
    echo "Le numéro de téléphone est vide ou incorrect.";
    return;
}

$aliments = "";
foreach ($selectedOptions as $optionArray) {
    $optionValues = array_values($optionArray);
    $aliments .= implode("= ", $optionValues) . ", ";
}

$insertmbr = $bdd->prepare("INSERT INTO sondage (nom, prenom, dateNaiss, adresse, code_postal, ville, telephone, aliments) VALUES (?,?,?,?,?,?,?,?)");
$insertmbr->execute(array($nom, $prenom, $dateNaissance,$adresse, $code_postal, $ville, $telephone, $aliments ));
echo "Vos données ont bien été envoyé";

?>
