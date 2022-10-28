"use strict";
class CellPhone {
    constructor(carica) {
        this.carica = 0; // credito disponibile per le chiamate
        this.numeroChiamate = 0; // sono il numero di chiamate effettuate
        this.carica = carica;
        // this.numeroChiamate = numeroChiamate;
    }
}
class Motorola extends CellPhone {
    constructor(carica) {
        super(carica);
        this.costoSingolaChiamata = 0.2;
    }
    ricarica(ricaricaEffettuata) {
        this.carica += ricaricaEffettuata;
    }
    chiamata(minutiDurata) {
        let costoTotaleChiamata = minutiDurata * this.costoSingolaChiamata;
        this.numeroChiamate++;
        this.carica -= costoTotaleChiamata;
    } // effettua una chiamata di tot minuti, passato come parametro
    number404() {
        console.log(this.carica);
        return this.carica;
    } // restituisce il valore del credito disponibile
    getNumeroChiamate() {
        return this.numeroChiamate;
    } // deve restituire il valore della variabile numeroChiamate
    azzeraChiamate() {
        this.numeroChiamate = 0;
    } // azzera il valore della variabile "numeroChiamate"
}
const writeToDisplay = (number) => {
    let displayElem = document.querySelector("#display");
    displayElem.value += number;
};
const deleteNumber = () => {
    let displayElem = document.querySelector("#display");
    displayElem.value = displayElem.value.slice(0, -1);
};
let phone_1 = new Motorola(10);
console.log(phone_1.carica);
addEventListener("DOMContentLoaded", (event) => {
    showCredito();
    let startTimerElem = document.querySelector(".btn-green");
    startTimerElem.onclick = startTimer;
});
const showCredito = () => {
    let showCreditoElem = document.querySelector("#credito");
    console.log(showCreditoElem);
    showCreditoElem.innerText = `${phone_1.carica}`;
};
const addCredito = () => {
    let displayElem = document.querySelector("#display");
    let showCreditoElem = document.querySelector("#credito");
    let addedMoney = Number(displayElem.value);
    phone_1.ricarica(addedMoney);
    displayElem.value = "";
    showCreditoElem.innerText = `${phone_1.carica}`;
    console.log(phone_1.carica);
};
let seconds = 0;
const startTimer = () => {
    console.log("funzione attivata");
    let timerElem = document.querySelector("durata-chiamata");
    const changeSeconds = setInterval(() => {
        timerElem.innerHTML = `0:${seconds}`;
        seconds++;
        // clearIntervalID = changeSeconds;
        if (seconds === 61) {
            // clearInterval(changeSeconds);
            seconds = 1;
        }
        // console.log(typeof progressTimeElement.innerHTML);
    }, 1000);
};
// showCredito();
// let phone_1 = new Motorola(10);
// console.log(phone_1);
// phone_1.ricarica(20);
// console.log(phone_1);
// phone_1.chiamata(6);
// console.log(phone_1);
// phone_1.number404();
// phone_1.azzeraChiamate();
// console.log(phone_1);
