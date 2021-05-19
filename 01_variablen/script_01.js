/***** Variablen 01 *******/

// Zeilen-Kommentar 

/*

Block-Kommentar

*/

// Ausgabe    
//console.log("Hello World!");
//console.log(firstName);

// Deklaration + Wertzuweisung I
/*
let firstName; // Deklaration (Definition)
firstName = "Max"; // Wertzuweisung
console.log(firstName); // Ausgabe
let familyName = "Musterman"; // Deklaration + Wertzuweisung
console.log(familyName); // Ausgabe 
console.log(firstName + " " +familyName); // Ausgabe
*/

// Deklaration + Wertzuweisung II
/*
let firstName,familyName;
firstName = prompt("Bitte Vornamen eingeben:");
familyName = prompt("Bitte Namen eingeben:");
console.log("Hallo, " + firstName + " " + familyName + "!"); // Ausgabe
*/

// JS ist eine untypische Sprache | untyped
/*
let test; // Deklaration
test = "hi"; //string
test = 2; // number
test = true; //boolean
console.log("Type: " + typeof test);
console.log("Inhalt:  " + test);
*/

/***** Variablen 02 *****/

// Deklaration
/*
let ageJohn, ageMark;
let birthYearJohn, birthYearMark;

// Wertzuweisung | Assignment
let date = new Date();
let year = date.getFullYear();
//console.log(year);
//console.log(date);
ageJohn = 25;
ageMark = 30;

// Operation (Differenz)
birthYearJohn = year - ageJohn;
birthYearMark = year - ageMark;
console.log("Aktuelle Jahr: " + year);
console.log("John ist " + ageJohn + " Jahre alt, er wurde im Jahr " + birthYearJohn + " geboren");
console.log("Mark ist " + ageMark + " Jahre alt, er wurde im Jahr " + birthYearMark + " geboren");
*/

/***** Variable 03 *****/
/*
let ageJohn, ageMark;
ageJohn = 25;
ageMark = 30;

// Operation (Vergleich/Test)
let isJohnOlder = (ageJohn > ageMark);
console.log(isJohnOlder);
*/

/***** Variable 04 *****/
// Zusammenfassung Datentypen

let nix;
let ageJohn = 25
firstName = "Max";
let isJohnOlder = (10 > 5);

console.log("nix: " + typeof nix);
console.log("ageJohn: " + typeof ageJohn);
console.log("firstName: " + typeof firstName);
console.log("isJohnOlder: " + typeof isJohnOlder);






