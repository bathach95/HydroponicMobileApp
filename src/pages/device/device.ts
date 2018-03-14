import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CropService } from '../../services/crop.service';
import { DeviceService } from '../../services/device.service';
import { ToastService } from '../../services/toast.service';
import { ActuatorListPage } from '../actuator-list/actuatorList';
import { AddCropPage } from '../add-crop/addCrop';
import { CropPage } from '../crop/crop';
import { SmartConfigPage } from '../smartconfig/smartconfig';

@Component({
    selector: 'page-device',
    templateUrl: 'device.html'
})
export class DevicePage implements OnInit {
    public mac: string;
    public name: string;
    public cropList: any;
    private homePage: any;

    constructor(private navCtrl: NavController, private navParams: NavParams,
        private cropService: CropService, private toastService: ToastService,
        private deviceService: DeviceService) {
    }

    public doRefresh(refresher) {
        this.loadCropList(refresher);
    }

    public ngOnInit() {
        this.mac = this.navParams.get('deviceMac');
        this.name = this.navParams.get('deviceName');
        this.homePage = this.navParams.get('homePage');
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

    public deleteDevice() {
        if (confirm("Do you want to delete this device ?")) {
            this.deviceService.deleteDevice(this.mac).subscribe((res: any) => {
                if (res.success) {
                    this.navCtrl.pop().then(() => {
                        this.homePage.doRefresh(null);
                    })
                }
                this.toastService.showToast(res.message);
            }, (err: any) => {
                console.log(err);
            })
        }
    }

    public goToAddCropPage() {
        this.navCtrl.push(AddCropPage, {
            deviceMac: this.mac,
            devicePage: this
        });
    }

    public goToActuatorListPage() {
        this.navCtrl.push(ActuatorListPage, {
            deviceMac: this.mac
        });
    }

    public goToCropPage(crop: any) {
        this.navCtrl.push(CropPage, {
            crop: crop,
            deviceMac: this.mac,
            devicePage: this
        })
    }

    public goToSmartConfigPage() {
        this.navCtrl.push(SmartConfigPage);
    }
}