import { Component} from '@angular/core';
import { MutantesService } from 'src/app/services/mutantes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.html'
})
export class Pagina3Page {

  mutante: any;

  constructor(private _mutantes: MutantesService,
              private router: Router) {
    this.mutante = this._mutantes.getMutante();
    console.log(this.mutante);
  }

  irAtras(){
    this.router.navigate(['/pagina2']);
  }

  irRoot(){
    this.router.navigate(['/principal']);
  }

}