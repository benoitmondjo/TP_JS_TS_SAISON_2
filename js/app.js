import {isValidEmail} from './fonctions';

let email = prompt("Entrez votre adresse e-mail :");


if(isValidEmail(email)){
    alert(`Email valide`)
}
else{
    alert(`Votre email est invalide.`)
}