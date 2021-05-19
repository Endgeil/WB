// Entscheidungsstrukturen | control structures

/*
// Deklaration
let ageJohn, ageMark;
let isJohnOlder, isJohnEqual, isJohnYounger;

// Wertzuweisung
//ageJohn = 30;
//ageMark = 30;
ageJohn = parseInt(prompt("Bitte geben Sie das alter von John an"));
ageMark = parseInt(prompt("Bitte geben Sie das alter von Mark an"));
console.log("John ist " + ageJohn + " Jahre alt und Mark ist " + ageMark + " Jahre alt.")

// Logische Aussagen | Test(s)
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);
isJohnYounger = (ageJohn < ageMark);

// Ausgabe
//console.log("Is John older: " + isJohnOlder);
//console.log("Is John equal: " + isJohnEqual);
//console.log("Is John younger: " + isJohnYounger);
*/

/***** IF *****/
// alternativlos (TINA)

/*
//if (true)
if (isJohnOlder) {
    console.log("John ist älter");
}
if (isJohnYounger) {
    console.log("John ist jünger");
}
if (isJohnEqual) {
    console.log("John ist gleich alt wie Mark");
}
*/

/***** Ternäre (ternary) Schreibweise *****/
//console.log( (isJohnOlder) ? "John is older" : "Mark is older");


/***** IF - ELSE IF *****/

/*
// mit Alternativen Fällen (älter,jünger,gleich alt)

if (isJohnOlder)
{
    console.log("John ist älter");
}
else if (isJohnEqual)
{
    console.log("John ist gleich alt");
}
else{
    console.log("John ist jünger");
}
*/


/***** Fallunterscheidung / CASE|SWITCH 1 *****/

/*
let firstName, job;
firstName = "Jane";
job = "putze"; // ..putzt!
job = "köchin"; // ..kocht!
job = "pilot"; 
job = "künstlerin"; // ..malt ein Bild!
job = "fluglehrerin"; // .. unterrichtet!
//job = "mathelehrerin"; // .. unterrichtet!

switch (job) {
    case "putze":
        console.log(firstName + " putzt!");
        break;
    case "köchin":
        console.log(firstName + " kocht!");
        break;
    case "künstlerin":
        console.log(firstName + " malt ein Bilde!");
        break;
    case "fluglehrerin":
    case "mathelehrerin":
        console.log(firstName + " unterrichtet!");
        break;
    
    
    default:
        console.log(firstName + " macht was anderes!");
        break;
}
*/

/***** Fallunterscheidung / CASE|SWITCH 2 *****/

let a = 2;

switch (true) {
    case (a == 1):
        console.log("a ist 1!");
        break;
    case (a == 2):
        console.log("a ist 2!");
        break;
    
    default:
        console.log("a hat einen anderen Wert!");
        break;
}







