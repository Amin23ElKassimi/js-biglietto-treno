






// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
const km = parseInt (prompt('Type Number of kilometers you want to travel'));
const age = parseInt (prompt('Type the age of the passenger'));

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
const price = (km * 0.21);
document.getElementById("km").innerHTML = km +'km';
if (age => 18 && age <= 65) {
console.log(`The full price is ${price.toFixed(2)}euro`);
document.getElementById("price").innerHTML = 'Full price is '+ price.toFixed(2) +'euro';
document.getElementById("age").innerHTML = "between 18 and 65 years old";
}
// va applicato uno sconto del 20% per i minorenni
if (age < 18) {
    const dicountUnder18 = ((price * 20) / 100);
    const priceUnder18 = (price - dicountUnder18);
    console.log(`The price for under 18 is ${priceUnder18.toFixed(2)}euro`);
    document.getElementById("price").innerHTML = 'Discount of 20%: '+ priceUnder18.toFixed(2) +'euro';
    document.getElementById("age").innerHTML = "under 18 years old";
}

// va applicato uno sconto del 40% per gli over 65.
else if (age > 65) {
    const dicountOver65 = ((price * 40) / 100);
    const priceOver65 = (price - dicountOver65);
    console.log(`The price for over 65 is ${priceOver65.toFixed(2)}euro`);
    document.getElementById("price").innerHTML = 'Discount of 40%: '+ priceOver65.toFixed(2) +'euro';
    document.getElementById("age").innerHTML = "over 65 years old";
}

// L'output del prezzo finale va scritto in pagina in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.

