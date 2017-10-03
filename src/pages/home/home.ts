import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
import { AuthService } from '../../services/auth.service';
import { ToastController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage implements OnInit {

    constructor(private storage: Storage, private navCtrl: NavController,
        private authService: AuthService, private toast: ToastController) {

    }

    public ngOnInit() {
        this.storage.get('token').then((token) => {
            if (!token) {
                this.navCtrl.setRoot(LoginPage);
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    public logout() {
        this.authService.logout().then(() => {

            this.navCtrl.setRoot(LoginPage);

            const toast = this.toast.create({
                message: 'Logout sucess!',
                duration: 3000,
                position: 'middle'
            });

            toast.present();
        }).catch((err) => {
            console.log(err)
        });
    }

    public showConfirm() {
        if (confirm("Do you want to click yes ?")) {
            console.log("You have just click yes");
        } else {
            console.log("You have just click no")
        }
    }
}
