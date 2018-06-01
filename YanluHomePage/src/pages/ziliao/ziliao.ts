import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ZixiangPage} from '../zixiang/zixiang';
import { AlertController } from 'ionic-angular';
import {TuxiangPage} from '../tuxiang/tuxiang';
import {WodeziliaoPage} from '../wodeziliao/wodeziliao';

@IonicPage()
@Component({
  selector: 'page-ziliao',
  templateUrl: 'ziliao.html',
})
export class ZiliaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZiliaoPage');
  }

  goZixiang(){
    
    var biao=document.getElementById('biao').innerHTML;
    var biao2=document.getElementById('biao2').innerHTML;
    var biao3=document.getElementById('biao3').innerHTML;
    var biao4=document.getElementById('biao4').innerHTML;
    this.navCtrl.push(ZixiangPage,{name:biao});
  }

  goTuxiang(){
    var hh=document.getElementById('hh').innerHTML;
    var pri=document.getElementById('pri').innerHTML;
    this.navCtrl.push(TuxiangPage,{title:hh,price:pri});
  }

  goTuxiang2(){
    var hh2=document.getElementById('hh2').innerHTML;
    var pri2=document.getElementById('pri2').innerHTML;
    this.navCtrl.push(TuxiangPage,{title:hh2,price:pri2});
  }

  goTuxiang3(){
    var hh3=document.getElementById('hh3').innerHTML;
    var pri3=document.getElementById('pri3').innerHTML;
    this.navCtrl.push(TuxiangPage,{title:hh3,price:pri3});
  }

  gowodeziliao(){
    this.navCtrl.push(WodeziliaoPage,{name:'liu'});
  }

  alt(){
    let alert = this.alertCtrl.create({
      title: '团购成功!',
      subTitle: '七天若人数未满，自动退款!',
      buttons: ['OK']
    });
    alert.present();
  };

  showRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('选择科目');

    alert.addInput({
      type: 'radio',
      label: '英语一',
      value: '英语一',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: '英语二',
      value: '英语二',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: '数学一',
      value: '数学一',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: '数学二',
      value: '数学二',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: '政治',
      value: '政治',
      checked: false
    });

    alert.addButton('取消');
    alert.addButton({
      text: '确定',
      // handler: data => {
      //   this.testRadioOpen = false;
      //   this.testRadioResult = data;
      // }
    });
    alert.present();
  }
}


