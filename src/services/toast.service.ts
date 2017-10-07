import { ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()  
export class ToastService{

    constructor(private toast: ToastController){

    }

    public showToast(message: string) {
        const toast = this.toast.create({
            message: message,
            duration: 3000,
            position: 'middle'
        });

        toast.present();
    }
}

