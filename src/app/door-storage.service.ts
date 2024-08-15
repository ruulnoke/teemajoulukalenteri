// varastopalvelu
// kalenterin luukkuja säilytetään selaimen muistissa

import { Injectable } from '@angular/core';
import { Door } from './door';

@Injectable({
  providedIn: 'root',
})
export class DoorStorageService {
  constructor() {}

  // tallennetaan doors-taulukko selaimen muistiin
  // tallennetaan avain-arvo-parina, tiedot merkkijonomuodossa
  public saveDoors(doors: Door[]) {
    localStorage.setItem('doors', JSON.stringify(doors));
  }

  // haetaan doors-taulukko selaimen muistista
  // jos taulukkoa ei ole, palautetaan tyhjä olio
  public getDoors() {
    return JSON.parse(localStorage.getItem('doors') || '{}');
  }
}
