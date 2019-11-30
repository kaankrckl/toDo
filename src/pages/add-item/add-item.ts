import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx'; 
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  data: Observable<any>;
  itemDescription: any;
  itemDueDate: any;
  itemPriority: any;

  constructor(public navCtrl: NavController,
    private http: HttpClient,
     public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
  }
  onChange(value){
    console.log(value);
    this.itemPriority = value;
  }

  addToDo() {
    let postData = new FormData();
    postData.append('itemDescription', this.itemDescription);
    postData.append('itemDueDate','2020/12/1');
    postData.append('itemPriority',this.itemPriority);
    this.data = this.http.post("http://localhost/services/service.php", postData);
    this.data.subscribe(data =>{
      console.log(data);
    });

  }

}
