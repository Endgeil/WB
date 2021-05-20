
/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken
//DRY Regel: Don´t repeat yourself



// Funktionsrumpf -body
function test() {
    console.log("Hallo Deniz");
}

// Funktionsaufruf (call)
//test();

/***** Funktion 02a *****/
// 2a. Parametrisirung + Datenübergabe von INNEN

//ausgabeNamen();
function ausgabeNamens() {
    let firstName = "Stefan"; // Variable --> lokal scope
    console.log("Hallo " + firstName + "!");
}

//ausgabeNamen();
//console.log(firstName) // Fehler --> lokal!!

/***** Funktionen 02b *****/
// 2b. Parametrisirung + Datenübergabe von AUSSEN

function ausgabeNamenParam(firstName) {
    // wenn firstName leer , dann "nobody"
    if (firstName == undefined || firstName == "") {
    firstName = "Gast";
    }

    console.log("Hallo " + firstName + "!");
}

// ausgabeNamenParam("Stefan");
// ausgabeNamenParam("Michi");
// ausgabeNamenParam();
// ausgabeNamenParam(prompt("Bitte Namen eingeben"));

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter

function ausgabeNamenParams(firstName, familyName) {
    // wenn firstName leer , dann "nobody"
    //if (firstName == undefined || firstName == "") {
    //firstName = "Gast";
    //}

    console.log("Hallo " + firstName + " " + familyName + "!");
}

//ausgabeNamenParams(prompt("Bitte Vornamen eingeben"), prompt("Bitte Namen eingeben"));

/***** Funktion 03a *****/
// 03a. Vorbereitung
// Postulat: one function = one job (uncle Bob)
// SRP single reponsibility principle

function ausgabeNamenParams(firstName, familyName) {
    // 1. Job: string composing
    let gap = " ";
    let outoutStr = "Hallo " + firstName + gap + familyName + "!";

    // 2. Job: output
    console.log(outoutStr);
}

//ausgabeNamenParams(prompt("Bitte Vornamen eingeben"), prompt("Bitte Namen eingeben"));

/***** Funktion 03b *****/

/*** Job: String zusammensetzen ***/
//output(getString(prompt("Bitte Vornamen eingeben"), prompt("Bitte Namen eingeben")));
function getString(firstName, familyName) {
    let gap = " ";
    let outputStr = "Hallo " + firstName + gap + familyName + "!";
    return outputStr; // Daten ----> an die Stelle des calls
    console.log("huhu"); // nach return wird die Funktion abgebrochen
}

/*** 2. Job: output ***/

//output("hi"); // Unit-Test  TDD - Test driven Development
function output(outputStr) {
    console.log(outputStr);
}






