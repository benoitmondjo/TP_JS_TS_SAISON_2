import {isValidEmail, isValidePassword, isValidFormatDate, getDay, getMoyenne} from './fonctions';



/* --------------- episode 1 -----------------------*/
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




/* --------------- episode 2 -----------------------*/
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




/* --------------- episode 3 -----------------------*/

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




/* --------------- episode 4 -----------------------*/

/*
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
*/







/* --------------- episode 5 -----------------------*/

/*
let nom = prompt("Entrez votre nom :");
let prenom = prompt("Entrez votre prénom :");
let sexe = prompt("Entrez votre sexe (H/F) :");

let errors = []

if( sexe !== null && prenom !== null && nom !== null){
    if(nom.length < 4){
        errors.push("Le nom doit contenir 4 caracters au moins")
    }

    sexe = sexe.toLocaleLowerCase();

    if( sexe !== "m" && sexe !== "monsieur" && sexe !== "f" && sexe !== "madame" && sexe !== "mme"){
        errors.push("Le sexe doit etre sous le format 'M' ou 'F'");
    }

    if(errors.length > 0){
        console.log(errors);
    }

    if(errors.length === 0){
        if(sexe === "m" || sexe === "monsieur"){
            sexe === "m"
        }
        if(sexe === "f" || sexe === "madme" || sexe === "mme"){
            sexe = "f"
        }

        const utilisateur = {
            title: sexe === "m" ? "M" : "Mde",
            nom: nom.toUpperCase(),
            prenom: prenom?.toUpperCase(),
            sexe: sexe.toUpperCase()
        };
        console.log(utilisateur)
    }
}

else{
    alert("Au revoir");
}
*/





/* --------------- episode 6 -----------------------*/

/*
let numero = Number(prompt("Veuillez saisir le numero d'un jour."))

if(!isNaN(numero)){
    const day = getDay(numero);

    if(day){
        alert(day)
    }
    else{
        alert("Aucun jour ne correspond a votre saisis.")
    }
}
else{
    alert("Votre saisis est invalide.")
}
*/



/* --------------- episode 7 -----------------------*/

let notes = [];
let nombreNotes = Number(prompt("Combien de notes voulez-vous saisir ?"));

if(!isNaN(nombreNotes)){

    if(nombreNotes <= 0){
        alert(`Le nombre total de note à saisir ne peut pas être égale à 0.`)
    }

    else{

        for (let i = 0; i < nombreNotes; i++) {
            let note;
            
            do {
                note = Number(prompt(`Entrez la note ${i + 1} (entre 0 et 20) :`));
            }while (note < 0 || note > 20 || isNaN(note));
            
            notes.push(note);
        }
        
        alert("La moyenne est : " + getMoyenne(notes));
    }
}

else{
    alert("Le nombre saisir n'est pas valide.")
}