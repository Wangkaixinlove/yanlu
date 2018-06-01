import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TalkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-talk',
  templateUrl: 'talk.html',
})
export class TalkPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  data=this.navParams.data;
  ionViewDidLoad() {
    console.log('ionViewDidLoad TalkPage');
  }
  openHistory(){
    this.navCtrl.push("HistoryPage");
  }
  openQun(){
    this.navCtrl.push("QunPage");
  }
}
