interface ISmartphone {
	carica: number; // credito disponibile per le chiamate
	numeroChiamate: number; // sono il numero di chiamate effettuate
}

abstract class CellPhone implements ISmartphone {
	carica: number; // credito disponibile per le chiamate
	numeroChiamate: number; // sono il numero di chiamate effettuate

	constructor(carica: number, numeroChiamate: number) {
		this.carica = carica;
		this.numeroChiamate = numeroChiamate;
	}

	abstract ricarica(ricaricaEffettuata: number): void;
}
