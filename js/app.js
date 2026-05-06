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
