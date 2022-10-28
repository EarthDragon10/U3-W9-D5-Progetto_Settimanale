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
        // console.log(this.carica);
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
document.addEventListener("DOMContentLoaded", () => {
    showCredito();
    let addCreditoElem = document.querySelector("#btn-add-credito");
    addCreditoElem === null || addCreditoElem === void 0 ? void 0 : addCreditoElem.addEventListener("click", addCredito);
    let startTimerElem = document.querySelector("#start-time");
    // startTimerElem.onclick = startTimer;
    startTimerElem === null || startTimerElem === void 0 ? void 0 : startTimerElem.addEventListener("click", startTimer);
    let stopTimerElem = document.querySelector("#stop-time");
    // console.log(stopTimerElem);
    // stopTimerElem.onclick = stopTimer;
    stopTimerElem === null || stopTimerElem === void 0 ? void 0 : stopTimerElem.addEventListener("click", stopTimer);
    let azzeraChiamateElem = document.querySelector("#btn-azzera-chiamate");
    azzeraChiamateElem === null || azzeraChiamateElem === void 0 ? void 0 : azzeraChiamateElem.addEventListener("click", resetChiamate);
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
let seconds = 1;
let clearIntervalID = 0;
const startTimer = () => {
    console.log("funzione attivata");
    let timerElem = document.querySelector("#timer");
    console.log(timerElem);
    let changeSeconds = setInterval(() => {
        timerElem.innerHTML = `0:${seconds}`;
        seconds++;
        clearIntervalID = changeSeconds;
        // clearIntervalID = changeSeconds;
        if (seconds === 61) {
            // clearInterval(changeSeconds);
            seconds = 1;
        }
        // console.log(typeof progressTimeElement.innerHTML);
    }, 1000);
};
const stopTimer = () => {
    clearInterval(clearIntervalID);
    phone_1.chiamata(Math.floor(seconds));
    console.log(phone_1);
    showCredito();
    setNumberCalls();
    let timerElem = document.querySelector("#timer");
    timerElem.innerHTML = "0:0";
    seconds = 1;
};
const setNumberCalls = () => {
    let quantitaChiamateElem = document.querySelector("#numb-chiamate");
    quantitaChiamateElem.innerHTML = `${phone_1.getNumeroChiamate()}`;
};
const resetChiamate = () => {
    phone_1.azzeraChiamate();
    setNumberCalls();
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
