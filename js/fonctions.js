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

export {isValidEmail}