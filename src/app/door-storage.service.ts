// kalenterin luukkuja säilytetään selaimen muistissa

import { Injectable } from '@angular/core';
import { Door } from './door';

@Injectable({
  providedIn: 'root',
})
export class DoorStorageService {
  constructor() {}

  // tallennetaan doors-taulukko selaimen muistiin
  public saveDoors(doors: Door[]) {
    localStorage.setItem('doors', JSON.stringify(doors));
  }

  // haetaan doors-taulukko selaimen muistista
  public getDoors() {
    // jos taulukkoa ei ole, palautetaan tyhjä olio
    return JSON.parse(localStorage.getItem('doors') || '{}');
  }
}
