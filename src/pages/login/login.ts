import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { Network } from '@ionic-native/network';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {

  constructor(public navCtrl: NavController, private toastService: ToastService,
              private authService: AuthService, private network: Network) {}

  public ngOnInit() {
    if (localStorage.getItem('token')) {
      this.navCtrl.setRoot(HomePage);
    }
  }

  public login(user: any) {
    if (user.email && user.password) {

      this.authService.login(user).subscribe((res: any) => {

        if (res.success) {
          localStorage.setItem('token', res.data.token);
          this.navCtrl.setRoot(HomePage);
          this.toastService.showToast(res.message);
        } else {
          alert(res.message);
        }
      }, (err: any) => {
        console.log(err);
      })
    } else {
      alert('You have to enter email and password')
    }
  }

  public register() {
    this.navCtrl.push(RegisterPage);
  }

}
