import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }
  
  data='';
  fabu(){     
    console.log(this.data);
    
    //发布帖子
    //如内容不为空
    if(this.data&&this.data.trim() != ''){
      let alert = this.alertCtrl.create({
        title: '发布成功!' 
      });
      localStorage.setItem('tiezi',this.data);
      alert.present();
    }
    // 如贴子为空
    else{
      let tip = this.alertCtrl.create({
        title: '还没有写内容哦~~'
      });
      tip.present();
    }
   
   

  }

  
  
}
