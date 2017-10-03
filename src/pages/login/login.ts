import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { AuthService } from '../../services/auth.service';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {

  constructor(public navCtrl: NavController, private toast: ToastController,
    private storage: Storage, private authService: AuthService) {

  }

  public ngOnInit() {
    this.storage.get('token').then((token) => {
      if (token) {
        this.navCtrl.setRoot(HomePage);
      }
    }).catch((error) => {
      console.log(error)
    })
  }

  public login(user: any) {
    if (user.email && user.password) {

      this.authService.login(user).subscribe((res: any) => {

        if (res.success){

          this.storage.set('token', res.data.token);
          this.navCtrl.setRoot(HomePage);
          const toast = this.toast.create({
            message: res.message,
            duration: 3000,
            position: 'middle'
          });

          toast.present();
        } else {
          alert(res.message);
        }
      }, (err) => {
        console.log(err)
      })
    } else {
      alert('You have to enter email and password')
    }
  }

  

}
