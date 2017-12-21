/*
Docux 2 mobile version (prototype) 
By Andreas Valero
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage {

  id: string;
  name: string;
  tipo_tramite: string;
  tipo_documento: string;
  autor: string;
  fecha_creacion: string;
  expediente: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.id = this.navParams.get('id')
    this.name = this.navParams.get('name')
    this.tipo_tramite = this.navParams.get('tipo_tramite')
    this.tipo_documento = this.navParams.get('tipo_documento')
    this.autor = this.navParams.get('autor')
    this.fecha_creacion = this.navParams.get('fecha_creacion')
    this.expediente = this.navParams.get('expediente')
    console.log(this.name)
  }

  back_to_home(){
    this.navCtrl.push(HomePage);
  }
}