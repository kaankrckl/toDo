import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FunctionsProvider } from '../../providers/functions/functions';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx'; 
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

/**
 * Generated class for the UpdateItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-item',
  templateUrl: 'update-item.html',
})
export class UpdateItemPage {
  data: Observable<any>;
  item:any = new Array<any>();;
  itemId: any;
  itemDescription: any;
  itemDueDate: any;
  itemPriority: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private http: HttpClient,
    public functions: FunctionsProvider) {
   //console.log("ID BU " + navParams.get('value'));
   this.itemId = navParams.get('value');
   
  }
  ionViewWillEnter(){
    //this.getToDo(this.itemId);
    console.log("ITEM ID"+this.itemId);
    
    //this.getToDo(this.itemId);
    this.getToDo();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad UpdateItemPage');
  }
  getToDo(){
 let postData = new FormData();
 postData.append('itemId', this.itemId);
 this.data = this.http.post("http://localhost/services/gettodo.php", postData);
 this.data.subscribe(data =>{
   this.item=data;
   console.log("GELEN VERİ "+data);
 });

  }
  onChange(value){
    console.log(value);
    this.itemPriority = value;
  }
  updateToDo(a){
    console.log(a);
    let postmanData = new FormData();
    postmanData.append('itemDescription', a);
    postmanData.append('itemPriority', 'Low');
    //postData.append('itemId', '30');
    this.data =this.http.post("http://localhost/services/updatetodo.php", postmanData);
   this.data.subscribe(data =>{
    console.log("GELEN VERİ "+data);
  });


  }
  

}
