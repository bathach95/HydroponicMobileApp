import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ScheduleService } from '../../services/schedule.service';
import { ToastService } from '../../services/toast.service';
import { AddSchedulePage } from '../add-schedule/addSchedule';
import { CropService } from '../../services/crop.service';

@Component({
    selector: 'page-schedule',
    templateUrl: 'schedule.html'
})
export class SchedulePage implements OnInit {

    private crop: any;
    private mac: string;
    private actuator: any;
    public scheduleList: any;
    public synchronized: boolean;

    constructor(private navParams: NavParams, private scheduleService: ScheduleService,
        private toastService: ToastService, private navCtrl: NavController,
        private cropService: CropService) { }

    public ngOnInit() {
        this.crop = this.navParams.get('crop');
        this.mac = this.navParams.get('deviceMac');
        this.actuator = this.navParams.get('actuator');
        this.refresh(null);
    }

    public refresh(refresher) {
        this.scheduleService.getScheduleByCropIdAndActuatorId(this.crop.id, this.actuator.id).subscribe((res: any) => {
            if (res.success) {
                this.scheduleList = res.data;
            }
            this.toastService.showToast(res.message);
        }, (err: any) => {
            console.log(err);
        }, () => {
            this.cropService.getCropById(this.crop.id).subscribe((res) => {
                if (res.success) {
                    this.synchronized = res.data.synchronized;
                }
            }, (err: any) => {
                console.log(err);
            })
            if (refresher) {
                refresher.complete();
            }
        })
    }

    public deleteSchedule(scheduleId) {
        if (confirm("Do you want to delete this schedule ?")) {
            this.scheduleService.deleteSchedule(scheduleId, this.crop.id).subscribe((res) => {
                this.toastService.showToast(res.message);
                if (res.success) {
                    this.refresh(null);
                }
            }, (err) => {
                console.log(err);
            })
        }
    }

    public setThreshold() {
        // TODO: 
    }

    public goToAddSchedulePage() {
        this.navCtrl.push(AddSchedulePage, {
            actuator: this.actuator,
            cropId: this.crop.id,
            deviceMac: this.mac,
            schedulePage: this
        });
    }

    public syncScheduleToDevice() {
        if (confirm("Do you want to send schedule to device ?")) {
            this.scheduleService.syncScheduleToDevice(this.crop.id, this.mac).subscribe((res: any) => {
                if (res.success) {
                    this.refresh(null);
                }
                this.toastService.showToast(res.message);
            }, (err: any) => {
                console.log(err);
            })
        }
    }
}