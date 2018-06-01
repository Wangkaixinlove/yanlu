import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PeoplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
})
export class PeoplePage {
list=[];
gets='';
data=this.navParams.data;
person={name:this.data,src:'../assets/imgs/my.jpg',geqian:'让自己发光~'};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
//   ionViewWillEnter(){
//     this.gets=JSON.stringify(window.localStorage.getItem('temp'));
//     console.log(this.data);
// }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PeoplePage');
    console.log(this.data);
  }
// add(){
// this.list.push(this.person);
// localStorage.setItem(this.person.name,JSON.stringify(this.person));
// console.log(localStorage.getItem(this.person.name));

// }
add(){
  this.list.push(this.person);
  localStorage.setItem('temp',JSON.stringify(this.list));
  console.log(localStorage.getItem('temp'));
  
  }
}
