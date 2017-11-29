import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CropService } from '../../services/crop.service';
import { DataService } from '../../services/data.service';
import { DeviceService } from '../../services/device.service';
import { ThresholdService } from '../../services/threshold.service';
import { ToastService } from '../../services/toast.service';
import { ActuatorPage } from '../actuator/actuator';

@Component({
    selector: 'page-device',
    templateUrl: 'device.html'
})
export class DevicePage implements OnInit {
    public mac: string;
    public name: string;
    public crop: any;
    public data: any;
    public dataStatus: any;
    public threshold: any;

    constructor(private navCtrl: NavController, private navParams: NavParams,
        private cropService: CropService, private toastService: ToastService,
        private dataService: DataService, private thresholdService: ThresholdService,
        private deviceService: DeviceService) {
    }

    public doRefresh(refresher){
        this.cropService.getNewestCropByDeviceMac(this.mac).subscribe((res1: any) => {
            if (res1.success) {
                this.crop = res1.data;
                this.dataService.getNewestDataByCropId(this.crop.id).subscribe((res2: any) => {
                    if (res2.success) {
                        this.thresholdService.getThreshold(this.crop.id).subscribe((threshold: any) => {
                            if (threshold.success) {
                                this.data = res2.data;
                                this.threshold = threshold.data;
                                this.dataStatus = this.dataService.getDataStatus(this.data, threshold.data);
                            } else {
                                this.toastService.showToast("You have to enter threshold to view data!")
                            }
                        }, (err: any) => {
                            console.log(err)
                        })
                    } else {
                        this.toastService.showToast(res2.message);
                    }
                    refresher.complete();
                }, (err: any) => {
                    console.log(err);
                })
            } else {
                this.toastService.showToast("No running crop");
            }
        }, (err: any) => {
            console.log(err);
        })
    }

    public ngOnInit() {
        this.mac = this.navParams.get('deviceMac');
        this.name = this.navParams.get('deviceName');
        this.cropService.getNewestCropByDeviceMac(this.mac).subscribe((res1: any) => {
            if (res1.success) {
                this.crop = res1.data;
                this.dataService.getNewestDataByCropId(this.crop.id).subscribe((res2: any) => {
                    if (res2.success) {
                        this.thresholdService.getThreshold(this.crop.id).subscribe((threshold: any) => {
                            if (threshold.success) {
                                this.data = res2.data;
                                this.threshold = threshold.data;
                                this.dataStatus = this.dataService.getDataStatus(this.data, threshold.data);
                            } else {
                                this.toastService.showToast("You have to enter threshold to view data!")
                            }
                        }, (err: any) => {
                            console.log(err)
                        })
                    }
                }, (err: any) => {
                    console.log(err);
                })
            } else {
                this.toastService.showToast("No running crop");
            }
        }, (err: any) => {
            console.log(err);
        })
    }

    public startDevice() {
        this.deviceService.updateStatus(this.mac, 'running').subscribe((res: any) => {
            this.toastService.showToast(res.message);
        })
    }

    public stopDevice() {
        this.deviceService.updateStatus(this.mac, 'stop').subscribe((res: any) => {
            this.toastService.showToast(res.message);
        })
    }

    public goToActuatorPage() {
        this.navCtrl.push(ActuatorPage, {
            deviceMac: this.mac
        });
    }
}