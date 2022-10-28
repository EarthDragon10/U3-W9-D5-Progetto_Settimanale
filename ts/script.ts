interface ISmartphone {
	carica: number; // credito disponibile per le chiamate
	numeroChiamate: number; // sono il numero di chiamate effettuate
}

abstract class CellPhone implements ISmartphone {
	carica: number = 0; // credito disponibile per le chiamate
	numeroChiamate: number = 0; // sono il numero di chiamate effettuate

	constructor(carica: number) {
		this.carica = carica;
		// this.numeroChiamate = numeroChiamate;
	}

	abstract ricarica(ricaricaEffettuata: number): void; // ricarica il credito del telefono
	abstract chiamata(minutiDurata: number): void; // effettua una chiamata di tot minuti, passato come parametro
	abstract number404(): number; // restituisce il valore del credito disponibile
	abstract getNumeroChiamate(): number; // deve restituire il valore della variabile numeroChiamate
	abstract azzeraChiamate(): void; // azzera il valore della variabile "numeroChiamate"
}

class Motorola extends CellPhone {
	costoSingolaChiamata: number = 0.2;

	constructor(carica: number) {
		super(carica);
	}

	ricarica(ricaricaEffettuata: number): void {
		this.carica += ricaricaEffettuata;
	}

	chiamata(minutiDurata: number): void {
		let costoTotaleChiamata: number =
			minutiDurata * this.costoSingolaChiamata;

		this.numeroChiamate++;

		this.carica -= costoTotaleChiamata;
	} // effettua una chiamata di tot minuti, passato come parametro

	number404(): number {
		// console.log(this.carica);
		return this.carica;
	} // restituisce il valore del credito disponibile

	getNumeroChiamate(): number {
		return this.numeroChiamate;
	} // deve restituire il valore della variabile numeroChiamate

	azzeraChiamate(): void {
		this.numeroChiamate = 0;
	} // azzera il valore della variabile "numeroChiamate"
}

const writeToDisplay = (number: number) => {
	let displayElem = document.querySelector("#display") as HTMLInputElement;
	displayElem.value += number;
};

const deleteNumber = () => {
	let displayElem = document.querySelector("#display") as HTMLInputElement;
	displayElem.value = displayElem.value.slice(0, -1);
};

let phone_1 = new Motorola(10);

console.log(phone_1.carica);

document.addEventListener("DOMContentLoaded", () => {
	showCredito();

	let addCreditoElem = document.querySelector(
		"#btn-add-credito"
	) as HTMLElement;
	addCreditoElem?.addEventListener("click", addCredito);

	let startTimerElem = document.querySelector("#start-time") as HTMLElement;
	// startTimerElem.onclick = startTimer;
	startTimerElem?.addEventListener("click", startTimer);

	let stopTimerElem = document.querySelector("#stop-time") as HTMLElement;
	// console.log(stopTimerElem);
	// stopTimerElem.onclick = stopTimer;
	stopTimerElem?.addEventListener("click", stopTimer);

	let azzeraChiamateElem = document.querySelector(
		"#btn-azzera-chiamate"
	) as HTMLElement;

	azzeraChiamateElem?.addEventListener("click", resetChiamate);
});

const showCredito = () => {
	let showCreditoElem = document.querySelector("#credito") as HTMLSpanElement;
	console.log(showCreditoElem);
	showCreditoElem.innerText = `${phone_1.carica}`;
};

const addCredito = () => {
	let displayElem = document.querySelector("#display") as HTMLInputElement;
	let showCreditoElem = document.querySelector("#credito") as HTMLSpanElement;

	let addedMoney: number = Number(displayElem.value);
	phone_1.ricarica(addedMoney);

	displayElem.value = "";
	showCreditoElem.innerText = `${phone_1.carica}`;
	console.log(phone_1.carica);
};

let seconds: number = 1;
let clearIntervalID: number = 0;

const startTimer = () => {
	console.log("funzione attivata");
	let timerElem = document.querySelector("#timer") as HTMLSpanElement;

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
	phone_1.chiamata(seconds);
	console.log(phone_1);

	showCredito();

	setNumberCalls();

	let timerElem = document.querySelector("#timer") as HTMLSpanElement;
	timerElem.innerHTML = "0:0";

	seconds = 1;
};

const setNumberCalls = () => {
	let quantitaChiamateElem = document.querySelector(
		"#numb-chiamate"
	) as HTMLSpanElement;

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
