import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-tuxiang',
  templateUrl: 'tuxiang.html',
})
export class TuxiangPage {
  hh;
  price;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TuxiangPage');
    this.hh=this.navParams.data.title;
    this.price=this.navParams.data.price;
    console.log(this.navParams.data.title);
    console.log(this.navParams.data.price);
  };

  alt(){
    let alert = this.alertCtrl.create({
      title: '团购成功!',
      subTitle: '七天若人数未满，自动退款!',
      buttons: ['OK']
    });
    alert.present();
  };
}
