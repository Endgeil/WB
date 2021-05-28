
/***** Variable *****/

/** Btn **/
let btn = document.getElementById("trigBtn");

/*** Status ***/

let status = true;

/***** Event-Listener *****/

window.addEventListener("load",toggleStatus);

// Klick auf Btn --> Zustand umschalten
btn.addEventListener("click",toggleStatus);

function toggleStatus() {
    status = !status;
    //ausgabe(status);
    updateView();
}
/* Tools */
function updateView() {
    if (status) {
        // night-modus
        dayNightSwitch("night");
        btnTextSwitch("day");
    } else {
        // night-modus
        dayNightSwitch("day");
        btnTextSwitch("night");
    }
}

/***** Änderung in View-Schicht *****/

// Modul: Umschaltung Klasse | Test
//dayNightSwitch("night");
//dayNightSwitch("day");
function dayNightSwitch(modeStr) {
    document.body.className = modeStr;
    document.body.children[0].className = modeStr;
    document.body.children[1].className = modeStr;
}


// Modul: Umschaltung BtnText | Test
//btnTextSwitch("night");
//btnTextSwitch("day");
function btnTextSwitch(modeStr) {
    btn.innerHTML = modeStr;
}

/* Tools */
function ausgabe(outputStr) {
    console.log(outputStr);
}
