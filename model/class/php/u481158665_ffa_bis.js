// Liste des variables 

var redirection_securite = "";
var up =0;
var frmepreuvexx =[
  "110","105","107","120",
  "121","140","141",
  "208","209","210","211","215","230",
  "231","250","260",
  "261","265","271","501",
  "502","503","504","511","512",
  "513","514"
  // debut epreuve iuniquement pour femme 
  //"300","301", "302","305","306","308","310","311","333","340","414","420","431","603","604","608","610", "653","654","660"
  // fin epreuve uniquement pour femme 
];
var tagNameTr = document.getElementsByTagName("tr");
let anne_global = ""; 
var anne_nom_complet_epreuve = tagNameTr[1].innerText;
let mon_epreuve_n = window.location.href;
mon_epreuve_n = parseInt(mon_epreuve_n[164] + mon_epreuve_n[165] + mon_epreuve_n[166]);
 
var nom_complet_epreuve = tagNameTr[2].textContent;
 
var nombreAthlethes = tagNameTr.length; // exemple 235 personnes
monanne = anne_nom_complet_epreuve[37] + anne_nom_complet_epreuve[38] + anne_nom_complet_epreuve[39] + anne_nom_complet_epreuve[40];

var sex_epreuve = "";
function abc() {
  let anne_epreuve = ""; 
  var anne_nom_complet_epreuve_verif = false;  
  var epreuve_verif = false;
  var nom_filtre_epreuve = "";

  var sex_verif = 0;
  var zone_epreuve = 0; 
  var users_nationality = "";
  var users_nationality_verif = 0;
  var nombre_spaces = 0;
  var nombre_spaces_verif = 0;
  var nombre_spaces_verif2 = 0;
  var users_nom = "";
  var users_prenom = "";
  var localhost = "localhost_";// utilisé dans la fonction
  var result_commentaire = "";
  var result_personal_reccord = 0;
  var result_date_perf_add = 0;
  var result_value = "";
 
 
  
  anne_global = monanne; 
 

  /* */
  // BOUCLE POUR OPTENIR L'ANNE DE L'UTILISATEUR #B-1  -------------------------------------------------
  for (var i = 0; i < anne_nom_complet_epreuve.length; i++) //-------------------------------------------
  {
    if (anne_nom_complet_epreuve[i] == ":" && anne_nom_complet_epreuve_verif != -1) {
      anne_nom_complet_epreuve_verif = true;
    } else if (anne_nom_complet_epreuve[i] == ",") {
      anne_nom_complet_epreuve_verif = -1;
    } else if (anne_nom_complet_epreuve_verif == true) {
      if (anne_nom_complet_epreuve[i] != " " && anne_nom_complet_epreuve[i] != ":") {
        anne_epreuve = anne_epreuve + anne_nom_complet_epreuve[i];
      }
    }
  }
  // FIN DE LA BOUBLE #B-1
  for (let i = 0; i < nom_complet_epreuve.length; i++) {
    if (nom_complet_epreuve[i] == "-" || nom_complet_epreuve[i] == "|" && epreuve_verif == false) {
      epreuve_verif = -1;
      if (nom_complet_epreuve[i] == "-") {
        zone_epreuve = "SALLE";
      } else {
        zone_epreuve = "PLEIN AIR";
      }
    } else if (epreuve_verif == false) {
      if (nom_complet_epreuve[i] != " ") {
        nom_filtre_epreuve = nom_filtre_epreuve + nom_complet_epreuve[i];
      }
    }
    if (nom_complet_epreuve[i] == "M") {
      sex_verif++;
    } else {

    }
  }

  if (sex_verif == 0) {
    sex_epreuve = "F";
  } else {
    sex_epreuve = "M";
  }


  for (var i = 3; i < nombreAthlethes - 1; i++) {
    result_perf = tagNameTr[i].children[2].innerText; //result_perf
    tagNameTr[i].children[4].innerText; // ?
    users_nom_complet = tagNameTr[i].children[6].innerText; //users_nom_complet
    club_nom = tagNameTr[i].children[8].innerText; //club_nom
    club_region = tagNameTr[i].children[10].innerText; //club_region
    club_departement = tagNameTr[i].children[12].innerText; //club_departement 
    result_categoti = tagNameTr[i].children[14].innerText; //result_categoti
    users_naissance = tagNameTr[i].children[16].innerText; //users_naissance
    result_date_perf = tagNameTr[i].children[18].innerText; //nom_villes
    nom_villes = tagNameTr[i].children[20].innerText; //result_date_perf
   
    //users_nom_complet.length 
    for (var x = 0; x < users_nom_complet.length; x++) {
      if (users_nom_complet[x] == "(") {
        users_nationality_verif++;
      } else if (users_nationality_verif > 0 && users_nom_complet[x] != " " && users_nom_complet[x] != ")") {
        users_nationality = users_nationality + users_nom_complet[x];
      } else if (users_nom_complet[x] == " ") {
        nombre_spaces++;
      }
    }
    if (users_nationality_verif == 0) {
      users_nationality = "FR";
    }
    if (users_nationality_verif != 0) {}

    for (var z = 0; z < users_nom_complet.length; z++) {

      if (users_nom_complet[z] == " ") {
        nombre_spaces_verif++;
      }

      if (users_nationality == "FR") {
        if (nombre_spaces_verif == nombre_spaces) {

          if (users_nom_complet[z] != " ") {
            users_prenom = users_prenom + users_nom_complet[z];
          }
        } else {
          users_nom = users_nom + users_nom_complet[z];
        }
      } else {
        if (nombre_spaces_verif == nombre_spaces - 1) {
          users_prenom = users_prenom + users_nom_complet[z];

        } else {
          if (users_nom_complet[z] == "(") {
            nombre_spaces_verif2++;
          } else if (nombre_spaces_verif2 == 0) {
            users_nom = users_nom + users_nom_complet[z];
          }
        }
      }
    }
    users_prenom2 = "";

    if (users_nationality != "FR") {
      for (var i_prenom = 1; i_prenom < users_prenom.length; i_prenom++) {
        users_prenom2 = users_prenom2 + users_prenom[i_prenom];
      }
      users_prenom = users_prenom2;
    }    
    var datas = new FormData();
    // all epreuve
    datas.append("nom_complet_epreuve", nom_complet_epreuve);
    datas.append("nom_filtre_epreuve", nom_filtre_epreuve);
    datas.append("sex_epreuve", sex_epreuve);
    datas.append("zone_epreuve", zone_epreuve);
    // liste epreuve ok
    datas.append("users_nom_complet", users_nom_complet);
    datas.append("users_nom", users_nom);
    datas.append("users_prenom", users_prenom);
    //datas.append("users_sex", sex_epreuve);
    datas.append("users_naissance", users_naissance);
    datas.append("users_nationality", users_nationality);
    // en information user
    // country 
    datas.append("result_ville_nom", nom_villes);
    // end country    
    // liste des club
    datas.append("club_nom", club_nom);
    datas.append("club_region", club_region);
    datas.append("club_departement", club_departement);
    datas.append("result_categoti", result_categoti);
    // end club     
    result_perf = result_perf.replace("''", '.');
    result_perf = result_perf.replace("'", '.');
    datas.append("result_perf", result_perf);
   

    var taille_perf = result_perf.length;
    var position_vend = 0;
    var valeur_vend = "";
    for (var h = 0; h < taille_perf; h++) {
      if (result_perf[h] == "R") {
        result_personal_reccord++;
      }
      if (result_perf[h] == " " || result_perf[h] == "(") {
        up++;
      }

      if (result_perf[h] == "+") {
        position_vend++;
      } else if (result_perf[h] == "-") {
        position_vend++;
        result_commentaire = result_commentaire + result_perf[h];
      } else if (result_perf[h] == ")") {
        position_vend = -1;
      } else if (position_vend > 0) {
        result_commentaire = result_commentaire + result_perf[h];
      }
      if (result_perf[h] == "(") {
        result_date_perf_add++;
      }
      if (result_date_perf_add == 0) {
        if (result_perf[h] != " ") {
          result_value = result_value + result_perf[h];
        }
      }
    }
    datas.append("result_commentaire", result_commentaire);
    if (result_personal_reccord != 0) {
      result_personal_reccord = "RP";
    } else {
      result_personal_reccord = "";
    }
    datas.append("result_personal_reccord", result_personal_reccord);
    datas.append("result_commentaire", result_commentaire);
    var jour = "";
    var mois = "";
    var anne = "";
    for (var y = 0; y < result_date_perf.length; y++) {
      if (y < 2) {
        jour = jour + result_date_perf[y];
      } else if (y < 5 && y > 2) {
        mois = mois + result_date_perf[y];
      } else if (y < 8 && y > 5) {
        anne = anne + result_date_perf[y];
      }
    }
    if (anne < 35) {
      anne = parseInt(anne);
      anne = anne + 2000;
    }
    var result_perf_2_verif = 0;
    result_perf_2 = "00:";
    for (var x = 0; x < result_value.length; x++) {

      if (result_perf_2_verif < 5) {
        if (result_value[x] == ".") {
          result_value[x] = ":";
          result_perf_2 = result_perf_2 + ":";
        } else {
          result_perf_2 = result_perf_2 + result_value[x];
        }
      }
      result_perf_2_verif++;
    }
    result_date_perf = anne + "-" + mois + "-" + jour;
    datas.append("result_date_perf", result_date_perf);
    datas.append("result_perf", result_value);
    datas.append("result_perf_2", result_perf_2);

      var reqs = new XMLHttpRequest();
      reqs.open("POST", "https://bokonzi.com/u481158665_ffa_bis/u481158665_ffa_bis.php");
      //reqs.open("POST", "http://bokonzi.com/ffa_datas_version_x/php2.php");
      // Envoi de la requête en y incluant l'objet
      reqs.send(datas);
      console.log(reqs);

 
    // Envoi de la reqsuête en y incluant l'objet


    nombre_spaces_verif = 0;
    users_nationality = "";
    users_nationality_verif = 0;
    nombre_spaces = 0;
    nombre_spaces_verif2 = 0;
    users_nom = "";
    users_prenom = "";
    result_personal_reccord = 0;
    result_date_perf_add = 0;
    result_commentaire = "";
    result_value = "";
  }
}
abc();

var reverse = "";
var varleur_f = "";
for (var i = window.location.href.length - 1; i > 0; i--) {
  if (window.location.href[i] == "=") {
    break;
  }
  reverse = reverse + window.location.href[i];
}
for (var i = reverse.length - 1; i > -1; i--) {
  if (reverse[i] == "=") {
    break;
  }
  varleur_f = varleur_f + reverse[i];
}
var pagesx = document.getElementsByTagName("tr"); // création de la variable de page 
var page_total = pagesx[0].children[5].children[0].length; // nombre de page total 
var varleur_f = parseInt(varleur_f, 10); // convertion en int
// cesi est la page actuelle faire attention a moins 1 
var nombre_epreuve = window.location.href[165] + window.location.href[166] + window.location.href[167]; // donne le numero de lepreuve





if (varleur_f + 1 == page_total) {
  

  var anne_ok ;


  // algo pour savoir lanne en cours 

  var maverif = false ; 
  var valeur1 ="W0";
  var valeur2 ="W0";
  var valeur3 ="W0";
  var valeur4 ="W0";
  var valeur_ff="";
  for(i = 0 ; i<window.location.href.length;i++){
    if(window.location.href[i]=="a" && window.location.href[i+1]=="n" && window.location.href[i+2]=="n" ){
    valeur1 =window.location.href[i+6]; 
    valeur2 =window.location.href[i+7]; 
    valeur3 =window.location.href[i+8]; 
    valeur4 =window.location.href[i+9];  
    maverif = true;  
    }   
  }  
  anne_ok = valeur1+valeur2+valeur3+valeur4;
  var frmepreuve =  window.location.href[120]+window.location.href[121]+window.location.href[122];
  if(anne_ok=="2020"){
    if(frmepreuve=="a=&"){
      frmepreuve = window.location.href[164]+window.location.href[165]+window.location.href[166];
     }

  }
  else{
     var anne_ok = parseInt(anne_ok );
     anne_ok = anne_ok+1;
     

     if(frmepreuve=="a=&"){
      frmepreuve = window.location.href[164]+window.location.href[165]+window.location.href[166];
     } 
//alert("anne "+anne_ok+"epreuve"+f) ; 
  }
var frmepreuvexx_final = frmepreuvexx[frmepreuvexx.indexOf(frmepreuve)+1]; 
frmepreuve = frmepreuvexx_final ; 
var redirection_page_ok = "https://bases.athle.fr/asp.net/liste.aspx?frmpostback=true&frmbase=bilans&frmmode=1&frmespace=0&frmannee=2004&frmepreuve="+frmepreuve+"&frmcategorie=&frmsexe="+sex_epreuve+"&frmnationalite=&frmamini=&frmamaxi=&frmligue=&frmdepartement=&frmclub=&frmvent=&frmathlerama=&frmfcompetition=&frmfepreuve=&frmplaces=&frmposition=0";  
// fin algo pour savoir l'anne 
// 120 a 122 nom epreuve 
// SEX 146
 setTimeout(function(){ 
   window.location.href = redirection_page_ok; 
  }, 12000000);

} else {
  varleur_f = varleur_f + 1 ; 
  var anne_ok ;
  // algo pour savoir lanne en cours
  var maverif = false ; 
  var valeur1 ="W0";
  var valeur2 ="W0";
  var valeur3 ="W0";
  var valeur4 ="W0";
  var valeur_ff="";
  for(i = 0 ; i<window.location.href.length;i++){
    if(window.location.href[i]=="a" && window.location.href[i+1]=="n" && window.location.href[i+2]=="n"){
    valeur1 =window.location.href[i+6]; 
    valeur2 =window.location.href[i+7]; 
    valeur3 =window.location.href[i+8]; 
    valeur4 =window.location.href[i+9];  
    maverif = true;  
    }   
  }  
  anne_ok = valeur1+valeur2+valeur3+valeur4;  
 var frmepreuve= window.location.href[120]+window.location.href[121]+window.location.href[122];
if(frmepreuve=="a=&"){
 
var frmepreuve= +window.location.href[164]+window.location.href[165]+window.location.href[166];
var frmsexe= window.location.href[223];
}
else{
  var frmsexe= sex_epreuve;
} 
 var redirection_page_ok = "https://bases.athle.fr/asp.net/liste.aspx?frmpostback=true&frmbase=bilans&frmmode=1&frmespace=0&frmannee="+anne_ok+"&frmepreuve="+frmepreuve+"&frmcategorie=&frmsexe="+frmsexe+"&frmnationalite=&frmamini=&frmamaxi=&frmligue=&frmdepartement=&frmclub=&frmvent=&frmathlerama=&frmfcompetition=&frmfepreuve=&frmplaces=&frmposition="+varleur_f;  
setTimeout(function(){ 

  window.location.href = redirection_page_ok;

 }, 12000000);

}
//alert(window.location.href[104]+window.location.href[105]+window.location.href[106]+window.location.href[107]+" epreuve numero"+window.location.href[120]+window.location.href[121]+window.location.href[122]);

//http://bases.athle.fr/asp.net/liste.aspx?frmpostback=true&frmbase=bilans&frmmode=1&frmespace=0&frmannee=2004&frmathlerama=&frmfcompetition=&frmfepreuve=&frmepreuve=104&frmplaces=&frmnationalite=&frmamini=&frmamaxi=&frmsexe=M&frmcategorie=&frmvent=VR&frmposition=4

 