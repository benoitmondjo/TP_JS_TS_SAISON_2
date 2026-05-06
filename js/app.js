import {isValidEmail, isValidePassword} from './fonctions';

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