import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ScheduleService } from '../../services/schedule.service';
import { ToastService } from '../../services/toast.service';
import { AddSchedulePage } from '../add-schedule/addSchedule';
import { ActionSheetController } from 'ionic-angular';

@Component({
    selector: 'page-schedule',
    templateUrl: 'schedule.html'
})
export class SchedulePage implements OnInit {

    private cropId: number;
    private mac: string;
    public scheduleList: any; 

    constructor(private navParams: NavParams, private scheduleService: ScheduleService,
                private toastService: ToastService, private navCtrl: NavController) { }

    public ngOnInit() {
        this.cropId = this.navParams.get('cropId');
        this.mac = this.navParams.get('deviceMac');
        this.loadSchedules(null);
    }

    public loadSchedules(refresher) {
        this.scheduleService.getScheduleByCropId(this.cropId).subscribe((res: any) => {
            if (res.success) {
                this.scheduleList = res.data;
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

    public goToAddSchedulePage() {
        this.navCtrl.push(AddSchedulePage, {
            cropId: this.cropId,
            deviceMac: this.mac,
            schedulePage: this
        });
    }
}