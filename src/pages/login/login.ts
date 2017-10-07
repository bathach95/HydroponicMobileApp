import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {

  constructor(public navCtrl: NavController, private toastService: ToastService,
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
          this.toastService.showToast(res.message);
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
