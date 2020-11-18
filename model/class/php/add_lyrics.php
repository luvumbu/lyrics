<?php 

header("Access-Control-Allow-Origin: *");


include("connexion.php");

$servername = "localhost";


$auteur_paroles =  $_POST["auteur_paroles"]; 
$titre_paroles =  $_POST["titre_paroles"];
$nom_album_paroles =  $_POST["nom_album_paroles"];
$text_paroles =  $_POST["text_paroles"];








 
$search  = array("&","'","à","À","á","Á","â","Â","ã","Ã","ä","Ä","å","Å","æ","Æ","è","È","é","É","ê","Ê","ë","Ë","ì","Ì","í","Í","î","Î","ï","Ï","ò","Ò","ó","Ó","ô","Ô","õ","Õ","ö","Ö","ø","Ø","ù","Ù","ú","Ú","û","Û","ü","Ü","ñ","Ñ","ý","Ý");
$replace = array('&amp',"&#039","a","a","a","a","a","a","a","a","a","a","a","a","&aelig","&AElig","&egrave","&Egrave","&eacute","&Eacute","&ecirc","&Ecirc","&euml","&Euml","&igrave","&Igrave","&iacute","&Iacute","&icirc","&Icirc","&iuml","&Iuml","&ograve","&Ograve","&oacute","&Oacute","&ocirc","&Ocirc","&otilde","&Otilde","&ouml","&Ouml","&oslash","&Oslash","&ugrave","&Ugrave","&uacute","&Uacute","&ucirc","&Ucirc","&uuml","&Uuml","&ntilde","&Ntilde","&yacute","&Yacute");


$auteur_paroles = str_replace($search, $replace, $auteur_paroles );
$titre_paroles = str_replace($search, $replace, $titre_paroles );
$nom_album_paroles  = str_replace($search, $replace, $nom_album_paroles  );
$text_paroles = str_replace($search, $replace, $text_paroles );

































$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO paroles (auteur_paroles,titre_paroles,nom_album_paroles,text_paroles)
VALUES ('$auteur_paroles','$titre_paroles','$nom_album_paroles','$text_paroles')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>