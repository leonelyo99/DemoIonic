import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MutantesService {

  mutante:any[];

  mutantes:any[]=[
    {
      nombre: "Magneto",
      poder: "Controlar metales"
    },
    {
      nombre: "Wolverine",
      poder: "Regeneracion acelerada"
    },
    {
      nombre: "Profresor x",
      poder: "Poderes psiquicos"
    },
    {
      nombre: "Gambito",
      poder: "Cargar objetos inanimados con energia"
    }
  ]

  getMutantes(){
    return this.mutantes;
  }

  setMutante(mutante){
    this.mutante = mutante;
  }

  getMutante(){
    return this.mutante;
  }

  constructor() { }
}
