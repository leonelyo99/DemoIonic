import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MutantesService } from '../../services/mutantes.service';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  mutantes: any;

  constructor(private router: Router,
              private _mutantes: MutantesService) {}

  ngOnInit() {
    this.mutantes = this._mutantes.getMutantes();
  }

  irPagina3(mutante){
    console.log(mutante);
    this._mutantes.setMutante(mutante);
    this.router.navigate(['/pagina3']);
  }

}
