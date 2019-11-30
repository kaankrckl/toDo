import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { FunctionsProvider } from '../../providers/functions/functions';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx'; 
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items:any = new Array<any>();

  constructor(public navCtrl: NavController,
    private http: HttpClient,
    public functions: FunctionsProvider) {

  }
  ionViewWillEnter(){
    this.getToDoList();
  }

  public getToDoList(){
    this.http.get('http://localhost/services/service.php').subscribe((response) => {
       this.items=response;
   }); 
  }
  load(){
    this.navCtrl.push(AddItemPage);
  }

}
