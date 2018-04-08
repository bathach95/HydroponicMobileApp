import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CropService } from '../../services/crop.service';
import { DataService } from '../../services/data.service';
import { ThresholdService } from '../../services/threshold.service';
import { ToastService } from '../../services/toast.service';
import { ActuatorListPage } from '../actuator-list/actuatorList';
import { SmartConfigPage } from '../smartconfig/smartconfig';
import { forkJoin } from 'rxjs/observable/forkJoin';
import 'rxjs/add/operator/mergeMap';

@Component({
    selector: 'page-crop',
    templateUrl: 'crop.html'
})
export class CropPage implements OnInit {

    private mac: string;
    private homePage: any;
    public deviceName: any;
    public data: any;
    public dataStatus: any;
    public threshold: any;
    public crop: any;

    constructor(public navCtrl: NavController, private cropService: CropService,
        private dataService: DataService, private thresholdService: ThresholdService,
        private toastService: ToastService, private navParams: NavParams) { }

    public ngOnInit() {
        this.deviceName = this.navParams.get('deviceName');
        this.mac = this.navParams.get('deviceMac');
        this.homePage = this.navParams.get('homePage');
        this.loadCropData(null);
    }

    public loadCropData(refresher) {
        this.cropService.getLatestRunningCropByDeviceMac(this.mac)
            .flatMap((res1: any) => {
                this.crop = res1.data;
                return forkJoin(
                    this.dataService.getLatestDataByCropId(this.crop.id),
                    this.thresholdService.getThreshold(this.crop.id)
                );
            })
            .subscribe(([res2, res3]) => {
                this.data = res2.data;
                this.threshold = res3.data;
                if (this.data && this.threshold) {
                    this.dataStatus = this.dataService.getDataStatus(this.data, this.threshold);
                }
            }, (err: any) => {
                console.log(err);
            }, () => {
                if (refresher) {
                    refresher.complete();
                }
            });
    }

    public deleteCrop() {
        if (confirm("Do you want to delete this crop ?")) {
            this.cropService.deleteCrop(this.crop.id).subscribe((res: any) => {
                if (res.success) {
                    this.loadCropData(null);
                }
                this.toastService.showToast(res.message);
            }, (err: any) => {
                console.log(err);
            })
        }
    }

    public goToActuatorListPage() {
        this.navCtrl.push(ActuatorListPage, {
            deviceMac: this.mac,
            crop: this.crop
        });
    }

    public goToSmartConfigPage() {
        this.navCtrl.push(SmartConfigPage);
    }

}
