//Docux 2 mobile version 
//By Andreas Valero

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TasksPage } from '../tasks/tasks';


const HEROES = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
  ];  
  
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
  }
  heroes = HEROES;  

  login(name_hero: any){
    let data = {
      name: name_hero
    };
    this.navCtrl.push(TasksPage,data);
    }
}
