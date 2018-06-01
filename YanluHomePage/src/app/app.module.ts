import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DatePage } from '../pages/date/date';
import { CreatePage } from '../pages/create/create';
import { TalklistPage } from '../pages/talklist/talklist';
import { ZiliaoPage } from '../pages/ziliao/ziliao';
import { WtzxqPage } from '../pages/wtzxq/wtzxq';
import { WodetieziPage } from '../pages/wodetiezi/wodetiezi';
import { TzxqPage } from '../pages/tzxq/tzxq';
import { StartPage } from '../pages/start/start';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { FindPage } from '../pages/find/find';
import { TuxiangPage } from '../pages/tuxiang/tuxiang';
import { ZixiangPage } from '../pages/zixiang/zixiang';
import { FileDetailPage } from '../pages/file-detail/file-detail';
import { FilesPage } from '../pages/files/files';
import { ListPage } from '../pages/list/list';
import { PersonsPage } from '../pages/persons/persons';
import { TalkPage } from '../pages/talk/talk';
import { WordsPage } from '../pages/words/words';
import { YanxunPage } from '../pages/yanxun/yanxun';
import { DeletePersonPage} from '../pages/delete-person/delete-person';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { YanxunNewsPage } from '../pages/yanxun-news/yanxun-news'
import { AddPage } from '../pages/add/add';
import { QunPage } from '../pages/qun/qun';
import { PeoplePage } from '../pages/people/people';
import { AddpersonPage } from '../pages/addperson/addperson';
import { HistoryPage } from '../pages/history/history';
import { MinePage } from '../pages/mine/mine';
import { SettingsPage } from '../pages/settings/settings';

import {MultiPickerModule} from 'ion-multi-picker';
import { CityDataProvider } from '../providers/city-data/city-data';

@NgModule({
  declarations: [
    MyApp,
    // AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DatePage,
    TalklistPage,
    CreatePage,
    ZiliaoPage,
    WtzxqPage,
    WodetieziPage ,
    TzxqPage,
    StartPage,
    LoginPage,
    RegisterPage,
    FindPage,
    TuxiangPage,
    ZixiangPage,
    YanxunPage,
    YanxunNewsPage,
    AddPage,
    MinePage,
    SettingsPage,
    // FilesPage,
    // ListPage,
    // PersonsPage,
    // TalkPage,
    // WordsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    MultiPickerModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DatePage,
    TalklistPage,
    CreatePage,
    ZiliaoPage,
    WtzxqPage ,
    WodetieziPage,
    TzxqPage,
    StartPage,
    LoginPage,
    RegisterPage,
    FindPage,
    TuxiangPage,
    ZixiangPage,
    YanxunPage,
    YanxunNewsPage,
    AddPage,
    MinePage,
    SettingsPage,
    // FilesPage,
    // ListPage,
    // PersonsPage,
    // TalkPage,
    // WordsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CityDataProvider,
  ],
})

export class AppModule {

}
