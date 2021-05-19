
/*********   CODE CHALLENGE 1 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein
Berechnen Sie die Summe der Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
‘Die Summe der Zahlen ist: summe ‘
*/
/*
let eingabe1, eingabe2;
eingabe1 = prompt("Bitte geben sie eine beliebige Zahl ein");
eingabe2 = prompt("Bitte geben sie eine zweite belibige Zahl ein");
*/

//lösung01
//eingabe1 = parseInt(eingabe1);
//eingabe2 = parseInt(eingabe2);
//ergebniss = eingabe1 + eingabe2;

//lösung02
//ergebniss = Number(eingabe1) + Number(eingabe2);

//lösung03
//ergebniss = +eingabe1 + +eingabe2;

//console.log("Die Summe der Zahlen ist: " + eingabe1 + "+" + eingabe2 + "=" + ergebniss);

//--------------------------------------------------------------------------------------------------

//Vorteil: Gut lesbar  |  Nachteil: Viele Variablen

/***** Variante 1 *****/

/*
// Deklaration
let ziffer1, ziffer2;
let zahl1, zahl2, summe;

// Eingabe :: Ziffern
ziffer1 = prompt("Bitte Zahl 1 eingeben: "); //2
ziffer2 = prompt("Bitte Zahl 2 eingeben: "); //2
console.log(typeof ziffer1);
console.log(typeof ziffer2);

// Typkonvertierung | Ziffer --> Zahl (string --> number)

zahl1 = parseInt(ziffer1);
zahl2 = parseFloat(ziffer2);
console.log(typeof zahl1);
console.log(typeof zahl2);

// Berechnung :: Summe
summe = zahl1 + zahl2;
console.log("Die Summe ist: " + summe);
*/

/***** Variante 2 *****/

//Kompaktere Lösung
/*
let zahl1, zahl2, summe;
zahl1 = parseInt(prompt("Bitte Zahl 1 eingeben"));
zahl2 = parseInt(prompt("Bitte Zahl 2 eingeben"));
summe = zahl1 + zahl2;
console.log("Die Summe ist: " + summe);
*/

/***** Variante 3 ******/

/*
//Kompakt aber schlechter zu lesen
console.log
(
        "Die Summe ist: " +
        (
            parseInt(prompt("Bitte Zahl 1 eingeben")) +
            parseInt(prompt("Bitte Zahl 2 eingeben"))
        )
);
*/






