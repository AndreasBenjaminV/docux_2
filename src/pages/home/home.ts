/*
Docux 2 mobile version 
By Andreas Valero
 */

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TasksPage } from '../tasks/tasks';


const HEROES = [
    {id: 1, name:'Tarea 1', tipo_tramite:'Despido', autor:'Superman', fecha_creacion:'12/12/17', tipo_documento:'Carta', expediente:'Secretos X'},
    {id: 2, name:'Tarea 2', tipo_tramite:'Despido', autor:'Batman', fecha_creacion:'22/11/17', tipo_documento:'Oficio', expediente:'Secretos X'},
    {id: 3, name:'Tarea 3', tipo_tramite:'Despido', autor:'BatGirl', fecha_creacion:'2/10/17', tipo_documento:'Carta', expediente:'Secretos X'},
    {id: 4, name:'Tarea 4', tipo_tramite:'Despido', autor:'Robin', fecha_creacion:'1/9/17', tipo_documento:'Oficio', expediente:'Secretos X'},
    {id: 5, name:'Tarea 5', tipo_tramite:'Despido', autor:'Flash', fecha_creacion:'18/8/17', tipo_documento:'Carta', expediente:'Secretos X'},
  ];  
  
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
  }
  heroes = HEROES;  

  task_page(hero_name: string){
    /* Busca data segun nombre de heroe */ 
    var hero = HEROES.find(x => x.name == hero_name);
    
    /* Envia la data (JSON) como parametro medriante NavParams */ 
    let data = {
      id: hero.id,
      name: hero_name,
      tipo_tramite: hero.tipo_tramite,
      tipo_documento: hero.tipo_documento,
      autor: hero.autor,
      fecha_creacion: hero.fecha_creacion,
      expediente: hero.expediente
    };
    this.navCtrl.push(TasksPage,data);
    }
}
