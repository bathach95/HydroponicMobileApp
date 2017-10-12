import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CropService } from '../../services/crop.service';
import { DataService } from '../../services/data.service';
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
                private cropService: CropService, private toastService: ToastService,
                private dataService: DataService) {
    }

    public ngOnInit() {
        this.mac = this.navParams.get('deviceMac');
        this.name = this.navParams.get('deviceName');
        this.cropService.getNewestCropByDeviceMac(this.mac).subscribe((res1: any) => {
            if (res1.success){
                this.crop = res1.data;
                this.dataService.getNewestDataByCropId(this.crop.id).subscribe((res2: any) => {
                    if (res2.success){
                        this.data = res2.data;
                    }
                }, (err) => {
                    console.log(err);
                })
            } else {
                this.toastService.showToast("No running crop");
            }
        }, (err) => {
            console.log(err);
        })
    }
}