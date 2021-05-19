/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Bier

*/

/* Getränke-Challenge */

let eingabeAge,eingabeName;
eingabeName = prompt("Bitte geben Sie Ihren Namen ein");
eingabeAge = prompt("Bitte geben Sie Ihr Alter ein");

/*
switch (true) {
    case (eingabeAge < 6):
        console.log(eingabeName + " bekommt Milch!");
        break;
    case (eingabeAge < 13):
        console.log(eingabeName + " bekommt Saft!");
        break;   
    case (eingabeAge < 18):
        console.log(eingabeName + " bekommt Cola!");
        break;
    default:
        console.log(eingabeName + " bekommt Bier!");
        break;
}
*/


if ((eingabeAge > 0) && (eingabeAge <6)) 
{
    console.log(eingabeName + " bekommt Milch!");
}  
else if ((eingabeAge > 6) && (eingabeAge < 13)) 
{
    console.log(eingabeName + " bekommt Saft!");
}    
else if ((eingabeAge > 12) && (eingabeAge < 18)) 
{
    console.log(eingabeName + " bekommt Cola!");
}    
else {
    console.log(eingabeName + " bekommt Bier!");
}



