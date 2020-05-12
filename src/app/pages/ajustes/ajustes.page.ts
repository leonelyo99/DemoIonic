import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage implements OnInit {

  constructor(private router: Router,
              public modalController: ModalController) { }

  ngOnInit() {
  }

  ActivarPrincipal(){
    this.router.navigate(['/principal']);
  }

  async mostrarModal(){
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        'nombre': 'Leonel',
        'edad': 20
      }
    });
    await modal.present();

    let { data } = await modal.onWillDismiss();
    
    if(data.data){
      console.log("Se cerro el modal con datos", data.data);
    }else{
      console.log("Se cerro sin datos");
    }
  }
}
