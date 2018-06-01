import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { DatePage } from '../date/date';
import { CreatePage } from '../create/create';
import { MinePage } from '../mine/mine';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  dataSource:Observable<any>;

  public info;

  public todoList;

  constructor(public navCtrl: NavController, public params: NavParams, private http: HttpClient) {

  }

  pushPage(){
    this.navCtrl.push(DatePage);
  }

  pushMinePage(){
    this.navCtrl.push(MinePage);
  }

  pushCreatePage(){
    this.navCtrl.push(CreatePage);
  }

  // homeContentItemCom(i){

  // }

  homeContentItemDelete(item,i){

    console.log(item._id);
    this.http.post('http://127.0.0.1:3000/update',{_id:item._id},{responseType:"text"}).subscribe((data) => {console.log(data)},(err)=>{console.log(err)});
    this.todoList.splice(i,1);
  }


  ngOnInit(){

    this.http.get('http://127.0.0.1:3000/gettask').subscribe((data) => {this.todoList = data},(err)=>{console.log(err)});

    // this.todoList=[
    //   {time:{start:'07:00',end:'08:00'},desc:'吃饭'},
    //   {time:{start:'08:00',end:'09:00'},desc:'睡觉'},
    //   {time:{start:'09:00',end:'10:00'},desc:'打豆豆'}
    // ];

    // let createItem = this.params.get('createdItem')
    // if(createItem){
    //   this.todoList.push(this.params.get('createdItem'));
    // }

    // this.http.get('http://127.0.0.1:3000/users/dafeige',{ responseType: 'text' }).subscribe((data) => {console.log(data),(err)=>{console.log(err)}});

  }

}
