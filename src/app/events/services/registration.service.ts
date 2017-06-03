import { Injectable } from '@angular/core';

@Injectable()
export class RegistrationService {
    private _sedi: Array<string>;

    constructor() {
        this._sedi = [
            'Roma',
            'Ponte Galeria (RM)',
            'Bari',
            'Bologna',
            'Brescia',
            'Cagliari',
            'Caltanissetta',
            'Carpi (MO)',
            'Catanzaro',
            'Ferentino (FR)',
            'Firenze',
            'Fiume Veneto (PN)',
            'Genova',
            'Lancenigo di Villorba (TV)',
            'Melendugno (LE)',
            'Assago (MI)',
            'Pioltello (MI)',
            'Monteriggioni (SI)',
            'Napoli',
            'Torre Annunziata (NA)',
            'Orvieto (TR)',
            'Osimo (AN)',
            'Padova',
            'Palermo',
            'Pont Saint Martin (AO)',
            'Porto San Giorgio (FM)',
            'Rimini',
            'Taranto',
            'Mosciano Sant’Angelo (TE)',
            'Tortoreto (TE)',
            'Torino',
            'Tremestieri Etneo (CT)',
            'Povo (TN)',
            'Trento',
            'Treviolo (BG)',
            'Udine',
            'ESTERA',
            'ALTRO'
        ];
    }

    get sedi(): Array<string> {
        return this._sedi;
    }
}