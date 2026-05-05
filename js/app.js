let email = prompt("Entrez votre adresse e-mail :");

if (
  email.includes("@") &&
  email.indexOf("@") > 0 &&
  email.includes(".") &&
  email.indexOf(".") > email.indexOf("@")
) {
  alert("Adresse e-mail valide ✅");
} else {
  alert("Adresse e-mail invalide ❌");
}