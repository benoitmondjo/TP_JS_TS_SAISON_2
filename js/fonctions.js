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
 * @returns {true | Array} - True si password valié. Sinon un tableau contenant les messages d'erreurs. 
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

/**
 * Fonction verifiant qu'une date respect le format jour/mois/annee
 * @param {string} date - date a verifier
 * @returns {Object | false} - {jour,mois, annee} si date valide. Sinon false
*/
function isValidFormatDate(date){
    
    // expression regulier pour s'assurer que la date saisis contient 2 chiffres pour les jours, 2 chiffres pour le mois, et 4 chiffres pour l'annee
    let regex = /^\d{2}\/\d{2}\/\d{4}$/;

    // si la date respecte la condition regex, on continue
    if(regex.test(date)){
        
        // la date saisis est de type string.
        // date.splite('/') pour decouper jour, mois, annee par /
        // .map(Number) transforme jour, mois et annnee en type Number
        // [jour, mois, annee] destructuration. On stock les valeurs conrespondantes dans les variable, jour , mois, annee
        let [jour, mois, annee] =  date.split("/").map(Number);

        let jourValide = jour >= 1 && jour <= 31;
        let moisValide = mois >= 1 && mois <= 12;
        let anneeValide = annee >= 1900 && annee <= 2026;

        if(jourValide && moisValide, anneeValide){
            return {jour, mois, annee};
        }
        else{
           return false;
        }
    }
    // Si elle ne respect pas le regex
    else{
       return false;
    }
}

/**
 * Fonction qui donne le nom d'un jour de la semaine a partir d'un numero saisis par un utilisateur
 * @param {Number} numero - le numero saisis
 * @return {string | false}
 */
function getDay(numero){
    const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
    
    if( numero >=1 && numero <= 7){
        return jours[numero - 1]
    }

    else{
        return false;
    }
}

/**
 * Fonction qui calcul la moyenne d'un tableaux de nombre
 * @param {Array} notes - tableau de note
 * @param {Number} precision - le nombre de chiffre apres la virgule
 * @return {Number} - la moyenne
*/
function getMoyenne(notes, precision=2){

    let somme = 0;
        
    for (let i = 0; i < notes.length; i++) {
        somme += notes[i];
    }
    
    let moyenne = somme / notes.length;

    return moyenne.toFixed(precision);
}


/**
 * Fonction pour afficher la table de mutiplication d'un nombre
 * @param {Number} nombre 
 * @returns {void} 
 */
function tableMultiplication(nombre){
    for(let i=1 ; i <= 10; i++){
        console.log(`${nombre} X ${i} = ${nombre*i}`);
    }
}

export {isValidEmail, isValidePassword, isValidFormatDate, getDay, getMoyenne, tableMultiplication}