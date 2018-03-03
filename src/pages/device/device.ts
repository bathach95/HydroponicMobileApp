import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CropService } from '../../services/crop.service';
import { DeviceService } from '../../services/device.service';
import { ToastService } from '../../services/toast.service';
import { ActuatorPage } from '../actuator/actuator';
import { AddCropPage } from '../add-crop/addCrop';
import { CropPage } from '../crop/crop';

@Component({
    selector: 'page-device',
    templateUrl: 'device.html'
})
export class DevicePage implements OnInit {
    public mac: string;
    public name: string;
    public cropList: any;

    constructor(private navCtrl: NavController, private navParams: NavParams,
        private cropService: CropService, private toastService: ToastService,
        private deviceService: DeviceService) {
    }

    public doRefresh(refresher){
        this.loadCropList(refresher);
    }

    public ngOnInit() {
        this.mac = this.navParams.get('deviceMac');
        this.name = this.navParams.get('deviceName');
        this.loadCropList(null);
    }

    private loadCropList(refresher) {
        this.cropService.getAllCrop(this.mac).subscribe((res: any) => {
            if (res.success) {
                this.cropList = res.data;
            }
            this.toastService.showToast(res.message);
            
        }, (err: any) => {
            console.log(err);
        }, () => {
            if (refresher) {
                refresher.complete();
            }
        })
    }

    public goToAddCropPage() {
        this.navCtrl.push(AddCropPage, {
            deviceMac: this.mac,
            devicePage: this
        });
    }

    public goToActuatorPage() {
        this.navCtrl.push(ActuatorPage, {
            deviceMac: this.mac
        });
    }

    public goToCropPage(cropId) {
        this.navCtrl.push(CropPage, {
            cropId: cropId,
            deviceMac: this.mac
        })
    }
}