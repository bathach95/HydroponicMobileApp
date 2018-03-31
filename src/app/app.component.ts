import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { Network } from '@ionic-native/network';
import { ToastService } from '../services/toast.service';
import { FCM } from '@ionic-native/fcm';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(private platform: Platform, private statusBar: StatusBar,
              private splashScreen: SplashScreen, private network: Network,
              private toastService: ToastService, private fcm: FCM) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // check internet connection
      let disconnectSub = this.network.onDisconnect().subscribe(() => {
        this.toastService.showToast('No internet connection');
      });
      
      let connectSub = this.network.onConnect().subscribe(()=> {
        this.toastService.showToast('Internet connected');
      });

      // on notification of update firmware
      // this.fcm.onNotification().subscribe((res: any) => {
      //   console.log(res);
      // }, (err: any) => {
      //   console.log(err);
      // }) 

    });
  }

} 
