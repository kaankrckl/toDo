
import { ModalController,ToastController,AlertController,LoadingController,Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*
  Generated class for the FunctionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FunctionsProvider {

  private baseUrl: string = "http://localhost/services/service.php";
  private gettodolisturl:string;

  constructor(
    private http: HttpClient,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,) {
    console.log('Hello FunctionsProvider Provider');
    //this.initURL(this.baseUrl);
  }

  private initURL(_baseURL: string) {
    //this.gettodolisturl = _baseURL +"service.php";
    
  }
  public getToDoList(){
   this.http.get('http://localhost/services/service.php').subscribe((response) => {
      console.log(response);
  }); 


  }

}
