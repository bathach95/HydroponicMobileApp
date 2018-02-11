import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ToastService } from '../../services/toast.service';
import { RegisterService } from '../../services/register.service';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public navCtrl: NavController, private toastService: ToastService,
            private registerService: RegisterService) {}

  public register(user) {
    this.registerService.register(user).subscribe((res:any) => {
        // TODO: verify confirm password
        if (res.success) {
            this.toastService.showToast(res.message);
            this.navCtrl.push(LoginPage);
        } else {
            alert(res.message);
        }
    }, (err: any) => {
        console.log(err);
    })
  }

}
