
/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."
// "Q" (question) --> "?"
// "E" (exclamation) --> "!"


/*** Funktion mit Array als Parameter */
// mögliche Tests:
 ausgabe(getSentence(["Ich","bin","Peter"],"S"));
 ausgabe(getSentence(["Bist","du","Peter"],"Q"));
 ausgabe(getSentence(["Ich","bin"],"E"));
 ausgabe(getSentence(["Ich","bin"],"#"));


function getSentence(arr,end) {
    let str = "";
    let gap = " ";

    for (let i = 0; i < arr.length; i++) {
        if (i != arr.length-1) {
            str += arr[i] + gap;
        } else {
            str += arr[i] + pfa(end);
        }

    }
    return str;
}

function pfa(end) {
    let punkt = ".";
    let frage = "?";
    let ausrufe = "!";

    switch (end) {
        case "S":
            return punkt;
        case "Q":
            return frage;
        case "E":
            return ausrufe;
        default:
            return " fertig"
    }
}

function ausgabe(output) {
    console.log(output);
}








