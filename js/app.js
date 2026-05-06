import {isValidEmail, isValidePassword, isValidFormatDate} from './fonctions';

// episode 1
/*

let email = prompt("Entrez votre adresse e-mail :");

if(email !== null){

    if(isValidEmail(email)){
        alert(`Email valide`)
    }

    else{
        alert(`Votre email est invalide.`)
    }
}

*/




// episode 2
/*
let password = prompt("Entrer un mot de passe.");


if(password !== null){

    const res = isValidePassword(password);
    
    if(typeof(res)=== "boolean"){
        alert("mot de passe validé.")
    }
    else{
        alert(res)
    }

}
*/


// episode 3
/*
let name = prompt("Quel est votre nom ?")
let childNum = prompt("Combien d'enfants avez-vous ?");

if(name !== null && childNum !== null){
    childNum = parseInt(childNum);
    if(childNum <= 0){
        alert(`${name}, vous n’avez pas d’enfant`)
    }
    else{
        let textChild = childNum === 1 ? "enfant" : "enfants"; 
        alert(`${name}, vous avez ${childNum} ${textChild}.`)
    }
}
*/

// episode 4
let date = prompt("Quel est votre date de naissance. Exemple : 13/05/2020");
// let date = "13/05/2020"

if(date !== null){
   const valideDate = isValidFormatDate(date);

   if(valideDate){
        let {jour,mois, annee} = valideDate;
        alert(`Votre date de naissance est valide: ${jour}/${mois}/${annee}`)
   }
   else{
    alert('Date de naissance invalide')
   }
   
}
else{
    alert("Au revoir !")
}