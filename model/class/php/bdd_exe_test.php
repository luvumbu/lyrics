<?php
header("Access-Control-Allow-Origin: *");
include("Mybdd.php");
$dbname= $_POST["dbname"];
$username= $_POST["username"];
$password= $_POST["password"];
//bokonzi_all
//$dbname
$apple = new Fruit("localhost",$username,$password,$dbname);
$apple->set_select('SELECT * FROM `club` WHERE `club_nom`="alors"');
$apple->set_row_name("club_nom");// demande des information dans le arroow 
$apple->set_row_name("club_region");// demande des information dans le arroow 
$apple->exe(); // execution du programme 
echo $apple->number_row_value(0);  
$nom_file = "connexion.php";
$saut_n = "\n";
$addfile_1="<?php "; 
$addfile_3="?>";
// add_dbname;
// add_username;
// add_password;

$texte1="<?php";
$texte2=$saut_n;
$texte3='$dbname="'.$dbname.'" ;';
$texte4=$saut_n;
$texte5='$username="'.$username.'" ;';
$texte6=$saut_n;
$texte7='$password="'.$password.'" ;'; 
$texte8=$saut_n; 
$texte9="?>";

 


$texte =$texte1.$texte2.$texte3.$texte4.$texte5.$texte6.$texte7.$texte8.$texte9;
 
 
// création du fichier
$f = fopen($nom_file, "x+");
// écriture
fputs($f, $texte );
// fermeture
fclose($f);

?>