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
        return this.carica;
    } // restituisce il valore del credito disponibile
    getNumeroChiamate() {
        return this.numeroChiamate;
    } // deve restituire il valore della variabile numeroChiamate
    azzeraChiamate() {
        this.numeroChiamate = 0;
    } // azzera il valore della variabile "numeroChiamate"
}
