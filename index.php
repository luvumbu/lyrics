<!DOCTYPE html>
<html lang="fr">
<head>
  
    <title>Bkz-technologie</title>
</head>
<body>
  <?php 
   include("link.html");
  ?>
<div id="body"> 
<?php    
    include("view/header.php");
    include("view/section.php");
    include("view/footer.php");
    include("model/class/php/Class.php");
 
?>
</div>
<script src="vue.js"></script>
<script>


function bdd_exe_test(){
var dbname=     document.getElementById("dbname").value; 
var password=   document.getElementById("password").value; 
var username=   document.getElementById("username").value; 
var ok = new    Information("model/class/php/bdd_exe_test.php"); // création de la classe 
ok.add("dbname", dbname); // ajout de l'information pour lenvoi 
ok.add("password", password); // ajout d'une deuxieme information denvoi  
ok.add("username", username); // ajout d'une deuxieme information denvoi  
console.log(ok.info()); // demande l'information dans le tableau
ok.push(); // envoie l'information au code pkp 
setTimeout(function(){
  document.location.reload(true);
  
  }, 100);
}







function send_paroles(){
 
 



var auteur_paroles=        document.getElementById("auteur_paroles").value;
var titre_paroles=        document.getElementById("titre_paroles").value;
var nom_album_paroles=        document.getElementById("nom_album_paroles").value;
var text_paroles=        document.getElementById("text_paroles").value;

var sen_lyrics = new Information("model/class/php/add_lyrics.php"); // création de la classe 
sen_lyrics.add("auteur_paroles", auteur_paroles); // ajout de l'information pour lenvoi 
sen_lyrics.add("titre_paroles", titre_paroles); // ajout de l'information pour lenvoi 
sen_lyrics.add("nom_album_paroles", nom_album_paroles); // ajout de l'information pour lenvoi 
sen_lyrics.add("text_paroles", text_paroles); // ajout de l'information pour lenvoi 

 



















console.log(sen_lyrics.info()); // demande l'information dans le tableau
sen_lyrics.push(); // envoie l'information au code pkp 
}


















</script>
 

<style>
  #form_paroles{
    width:80%;
    margin:auto;
    margin-top:100px;
  }
</style>
    
</body>
</html>