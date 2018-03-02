import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CropService } from '../../services/crop.service';
import { DataService } from '../../services/data.service';
import { ThresholdService } from '../../services/threshold.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'page-crop',
  templateUrl: 'crop.html'
})
export class CropPage {

  private mac: string;
  private crop: any;
  public data: any;
  public dataStatus: any;
  public threshold: any;

  constructor(public navCtrl: NavController, private cropService: CropService,
              private dataService: DataService, private thresholdService: ThresholdService,
              private toastService: ToastService) {}

  public loadCropData(refresher) {
    this.cropService.getNewestCropByDeviceMac(this.mac).subscribe((res1: any) => {
        if (res1.success) {
            this.crop = res1.data;
            this.dataService.getNewestDataByCropId(this.crop.id).subscribe((res2: any) => {
                if (res2.success) {
                    this.thresholdService.getThreshold(this.crop.id).subscribe((threshold: any) => {
                        this.data = res2.data;
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
            })
        } else {
            this.toastService.showToast("No running crop");
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
