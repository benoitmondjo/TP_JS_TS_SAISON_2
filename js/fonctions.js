/**
 * Fonction permetant de verifier la validite d'un email
 * @param {string} email - email saisis par l'utilisateur
 * @returns {boolean} - true si email valide. Sinon false
 */
function isValidEmail(email){

    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) {
        return true;

    } else {
        return false;
    }
}



/**
 * Fonction permetant de valide un mot de passe
 * @param {string} password - mot de passe saisis par le user
 * @returns {boolean | Array} - True si password valié. Sinon un tableau contenant les messages d'erreurs. 
 */
function isValidePassword(password){

    const regexMaj = /[A-Z]/;
    const regexNumber = /[0-9]/
    
    let errors = Array();

    if(password.length < 8){
        errors.push("Le mot de passe doit contenir au moins 8 caracters.")
    }
    else if(!regexMaj.test(password)){
        errors.push("Le mot de passe doit contenir au moins Une lettre majuscule.")
    }
    else if(!regexNumber.test(password)){
        errors.push("Le mot de passe doit contenir au moins un nombre.")
    }

    if(errors.length === 0){
        return true;
    }
    else{
        return errors;
    }
}

export {isValidEmail, isValidePassword}