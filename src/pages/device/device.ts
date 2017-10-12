import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CropService } from '../../services/crop.service';
import { ToastService } from '../../services/toast.service';

@Component({
    selector: 'page-device',
    templateUrl: 'device.html'
})
export class DevicePage implements OnInit {
    public mac: any;
    public name: any;
    public crop: any;
    public data: any;

    constructor(private navCtrl: NavController, private navParams: NavParams,
                private cropService: CropService, private toastService: ToastService) {
    }

    public ngOnInit() {
        this.mac = this.navParams.get('deviceMac');
        this.name = this.navParams.get('deviceName');
        this.cropService.getNewestCropByDeviceMac(this.mac).subscribe((res: any) => {
            if (res.success){
                this.crop = res.data;
            } else {
                this.toastService.showToast("No running crop");
            }
        }, (err) => {
            console.log(err)
        })
    }
}