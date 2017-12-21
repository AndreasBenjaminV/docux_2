/*
Docux 2 mobile version (prototype) 
By Andreas Valero
 */

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TasksPage } from '../tasks/tasks';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/* Arreglo de prueba */  
const HEROES = [
    {id: 1, name:'RM 2017 - 478', tipo_tramite:'Materia 1', autor:'Superman', fecha_creacion:'12/12/17', tipo_documento:'Carta', expediente:'Secretos X'},
    {id: 2, name:'RM 2017 - 948', tipo_tramite:'Materia 2', autor:'Batman', fecha_creacion:'22/11/17', tipo_documento:'Oficio', expediente:'Secretos X'},
    {id: 3, name:'RM 2017 - 208', tipo_tramite:'Materia 3', autor:'BatGirl', fecha_creacion:'2/10/17', tipo_documento:'Carta', expediente:'Secretos X'},
    {id: 4, name:'RM 2017 - 618', tipo_tramite:'Materia 4', autor:'Robin', fecha_creacion:'1/9/17', tipo_documento:'Oficio', expediente:'Secretos X'},
    {id: 5, name:'RM 2017 - 398', tipo_tramite:'Materia 5', autor:'Flash', fecha_creacion:'18/8/17', tipo_documento:'Carta', expediente:'Secretos X'},
  ];  


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data: object;
  name: string;
  heroes=HEROES;
  constructor(public navCtrl: NavController, public http: Http) {
    /*this.data = this.http.get('http://localhost:8100/assets/json/task_detail.json').map(res => res.json()).subscribe(data => { 
    })
    let usuarios = [];
    for (let i in this.data) {
      usuarios.push({id: i});
    }
    console.log(this.data)*/
  }

  task_page(hero_name: string){
    /* Busca data segun nombre de heroe */ 
    
    var hero = this.heroes.find(x => x.name == hero_name);
   /*
    let data = {
      id: hero.id,
      name: hero_name,
      tipo_tramite: hero.tipo_tramite,
      tipo_documento: hero.tipo_documento,
      autor: hero.autor,
      fecha_creacion: hero.fecha_creacion,
      expediente: hero.expediente
    };
      
    */
    /* Envia la data (JSON) como parametro medriante NavParams */ 

    console.log(hero);
    this.navCtrl.push(TasksPage,hero);
    }
}
