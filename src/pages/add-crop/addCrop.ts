import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Constant } from '../../utils/constant';
import { CropService } from '../../services/crop.service';
import { ToastService } from '../../services/toast.service';
import * as moment from 'moment';

@Component({
    selector: 'page-add-crop',
    templateUrl: 'add-crop.html'
})
export class AddCropPage implements OnInit {

    private mac: string;
    private devicePage: any;
    public hydroponicType: any = Constant.HYDROPONIC_TYPE;
    public reporttime: number = Constant.DEFAULT_REPORT_TIME;

    constructor(public navCtrl: NavController, private navParams: NavParams, 
        private cropService: CropService, private toastService: ToastService) { }

    public ngOnInit() {
        this.mac = this.navParams.get('deviceMac');
        this.devicePage = this.navParams.get('devicePage');
    }

    public addCrop(crop) {

        let newCrop = this.formatCrop(crop);
        this.cropService.addCrop(newCrop).subscribe((res: any) => {
            this.toastService.showToast(res.message);
            if (res.success) {
                this.navCtrl.pop().then(() => {
                    this.devicePage.doRefresh(null);
                });
            }
        }, (err: any) => {
            console.log(err);
        })
    }

    private formatCrop(crop) {
        crop.DeviceMac = this.mac;
        crop.synchronized = true;
        crop.startdate = moment(crop.startdate).format(Constant.PARSE_TIME_FORMAT);
        crop.closedate = moment(crop.closedate).format(Constant.PARSE_TIME_FORMAT);

        crop.status = moment(crop.startdate, Constant.PARSE_TIME_FORMAT) > moment(new Date(), Constant.PARSE_TIME_FORMAT) ?
            'pending' : 'running';

        return crop;
    }
}
