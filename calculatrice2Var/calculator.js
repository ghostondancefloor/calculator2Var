var ecran =document.getElementById("resultat");

function affichage(caractere) {
  if(caractere=='pow'){
    ecran.value= Math.pow(ecran.value);
  }
  else if(caractere=='log')
  {
    ecran.value=Math.log(ecran.value);
  }
  else if(caractere=='sqrt')
  {
    ecran.value=Math.sqrt(ecran.value);  }
  else
   ecran.value=ecran.value+caractere;
 }

function effacer(){
   ecran.value="";
}

function egal(){
   ecran.value= eval(ecran.value);  
 }

