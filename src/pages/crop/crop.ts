import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CropService } from '../../services/crop.service';
import { DataService } from '../../services/data.service';
import { ThresholdService } from '../../services/threshold.service';
import { ToastService } from '../../services/toast.service';

@Component({
    selector: 'page-crop',
    templateUrl: 'crop.html'
})
export class CropPage implements OnInit {

    private mac: string;
    public data: any;
    public dataStatus: any;
    public threshold: any;
    private cropId: number;

    constructor(public navCtrl: NavController, private cropService: CropService,
        private dataService: DataService, private thresholdService: ThresholdService,
        private toastService: ToastService, private navParams: NavParams) { }

    public ngOnInit() {
        this.cropId = this.navParams.get('cropId');
        this.mac = this.navParams.get('deviceMac');
        this.loadCropData(null);
    }

    public loadCropData(refresher) {
        this.dataService.getNewestDataByCropId(this.cropId).subscribe((res: any) => {
            if (res.success) {
                this.data = res.data;
                this.thresholdService.getThreshold(this.cropId).subscribe((threshold: any) => {
                    if (threshold.success) {
                        this.threshold = threshold.data;
                        this.dataStatus = this.dataService.getDataStatus(this.data, threshold.data);
                    } else {
                        this.toastService.showToast("You have not set threshold yet.")
                    }
                }, (err: any) => {
                    console.log(err)
                })
            }
        }, (err: any) => {
            console.log(err);
        }, () => {
            if (refresher) {
                refresher.complete();
            }
        })
    }

}
