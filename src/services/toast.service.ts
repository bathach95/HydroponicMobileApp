import { ToastController, LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()  
export class ToastService{

    private loading: any;
    constructor(private toastCtrl: ToastController, private loadingCtrl: LoadingController){}

    public showToast(message: string) {
        const toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });

        toast.present();
    }

    public showLoading() {
        this.loading = this.loadingCtrl.create({
            content: "Please wait...",
            dismissOnPageChange: true
        });
        this.loading.present();
    }

    public dismissLoading() {
        this.loading.dismiss();
    }
}

