import { Component ,Input,Output} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  @Input() list:Array<any>;
  pet: string = "puppies";
  isAndroid: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,platform: Platform) {
    this.isAndroid = platform.is('android');
  }
data=JSON.parse(localStorage.getItem('temp'));

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
    console.log(this.data);
  }
  openAdd(){
    this.navCtrl.push("AddpersonPage");
  }
  openDelete(){
    this.navCtrl.push("DeletePersonPage",this.data[0].name);
  }
}
