import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {

  public addItem={time:{start:'', end:''}, desc:'', pendding:false};
  public testmanageshow=true;

  public ifAlert:boolean=false;
  public createContentTest:any;
  public createContentCreateText:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }

  createContentCreateTextChange(e){
    let value = e.target.value
    this.http.post('http://localhost:3000/createtaskused',{desc:value}, {responseType:"text"})
      .subscribe((data) => {
        this.createContentTest.push({desc:value});
        this.createContentCreateText=!this.createContentCreateText;
      } ,(err)=>{console.log(err)});
  }

  createSure(){

    this.http.post('http://localhost:3000/create',this.addItem, {
      headers: new HttpHeaders({

      }),
      responseType:"text"
    })
      .subscribe((data) => {
        console.log(data)
        this.navCtrl.push(HomePage, {
          createdItem: this.addItem
        });
      } ,(err)=>{console.log(err)});


    // this.http.get('http://localhost:3000/',{ responseType: 'text' })
    // .subscribe((data) => {console.log(data),(err)=>{console.log(err)}});
  }

  pushContentTest(item){
    this.addItem.desc = item.desc;
  }

  deleteTaskUsed(i){
    this.http.post('http://localhost:3000/deletetaskused',{desc:this.createContentTest[i].desc}, {responseType:"text"})
      .subscribe((data) => {
        this.createContentTest.splice(i,1);
      } ,(err)=>{console.log(err)});
  }

  ngOnInit(){
    // this.createContentTest=['背英语单词','背单词','吃饭','睡觉','带水杯'];

    this.http.get('http://localhost:3000/gettaskused', {})
      .subscribe((data) => {
        this.createContentTest = data;
      } ,(err)=>{console.log(err)});
  }

}
