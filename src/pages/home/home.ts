import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { UpdateItemPage } from '../update-item/update-item';
import { FunctionsProvider } from '../../providers/functions/functions';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx'; 
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  item: any;
  items:any = new Array<any>();
  itemId:any;
  data: Observable<any>;

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
  delete(value) {
    let postData = new FormData();
    postData.append('itemId', value);
    this.data = this.http.post("http://localhost/services/deletetodo.php", postData);
    this.data.subscribe(data =>{
      console.log("GELEN VERİ "+data);
    });
    this.getToDoList();
   // console.log(value);

  }
  load(){
    this.navCtrl.push(AddItemPage);
  }
  update(itemId){
    this.navCtrl.push(UpdateItemPage, {
      value: itemId
    });
  }



}
