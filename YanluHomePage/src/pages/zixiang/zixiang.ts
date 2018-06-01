import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-zixiang',
  templateUrl: 'zixiang.html',
})
export class ZixiangPage {
  biao;
  hh;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZixiangPage');
    this.biao=this.navParams.data.name;
    console.log(this.navParams.data.name);
  }

}
