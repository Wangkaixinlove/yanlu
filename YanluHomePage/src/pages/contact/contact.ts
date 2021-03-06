import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddPage } from "../add/add";
import { TzxqPage } from "../tzxq/tzxq";
import {WodetieziPage} from "../wodetiezi/wodetiezi";
import { StartPage } from "../start/start";
import { Platform } from 'ionic-angular';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  tips: string = "experience";
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController,platform: Platform) { 
    this.isAndroid = platform.is('android');
    localStorage.setItem("items",JSON.stringify(this.items));
    console.log(this.items);
    this.initializeItems();  
  }
   
  goAdd(){
    this.navCtrl.push(AddPage);    
  }
  
  
  goTzxq(){
    var user=document.getElementById("user").innerHTML;
    var img=document.getElementById("img").getAttribute('src');
    this.navCtrl.push(TzxqPage,{name:user,content:this.items,tu:img});
  }

  goWode(){
    this.navCtrl.push(WodetieziPage);
  }

  goStart(){
    this.navCtrl.push(StartPage);
  }
  
  items=[];//搜索列表
  
  
  //搜索列表
  initializeItems() { 
   
    this.items=JSON.parse(localStorage.getItem("items"));
    this.items.unshift(localStorage.getItem("tiezi")); 
    localStorage.setItem('items',JSON.stringify(this.items));
    console.log(this.items);
  } 

  getItems(ev) { 
    
     // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  count=0;
  temp=0;
  zan(index){
    var zan=document.getElementById(index);   
    console.log(index);
    if(this.temp==index){ this.count++; }
    else{ this.count=0;  this.count++;}

    if(this.count%2==0){
      zan.style.color= "rgb(233, 184, 204)";
    }else{
      zan.style.color="rgb(255, 0, 157)";
    } 
    
   
    this.temp=index;
  }
}
