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
		console.log(this.carica);
		return this.carica;
	} // restituisce il valore del credito disponibile

	getNumeroChiamate(): number {
		return this.numeroChiamate;
	} // deve restituire il valore della variabile numeroChiamate

	azzeraChiamate(): void {
		this.numeroChiamate = 0;
	} // azzera il valore della variabile "numeroChiamate"
}

let phone_1 = new Motorola(10);

console.log(phone_1);

phone_1.ricarica(20);

console.log(phone_1);

phone_1.chiamata(6);

console.log(phone_1);

phone_1.number404();

phone_1.azzeraChiamate();

console.log(phone_1);
