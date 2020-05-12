import { Component, Input} from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage {

  @Input() nombre: string;
  @Input() edad: number;

  constructor(public navParams: NavParams,
              public modalCtrl: ModalController) { 
    console.log(navParams.get('nombre'));
  }

  cerrar_parametros(){
    let data = {
      nombre: 'Juean Carlos',
      edod: 18,
      coords:{
        lat:10,
        lng:-10
      }
    };

    this.modalCtrl.dismiss({
      'dismissed': true,
      data: data
    });
  }

  cerrar_sin_parametros(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
