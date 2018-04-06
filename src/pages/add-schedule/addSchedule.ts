import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ScheduleService } from '../../services/schedule.service';
import { ToastService } from '../../services/toast.service';
import { Constant } from '../../utils/constant';

@Component({
    selector: 'page-add-schedule',
    templateUrl: 'add-schedule.html'
})
export class AddSchedulePage implements OnInit {
    private cropId: number;
    private actuator: any;
    private mac: string;
    private schedulePage: any;
    public actuatorType: any[] = Constant.ACTUATOR_TYPE;
    public schedule: boolean = false;
    public timer: boolean = false;

    constructor(private navParams: NavParams, private scheduleService: ScheduleService, 
                private toastService: ToastService, private navCtrl: NavController) { }

    public ngOnInit() {
        this.cropId = this.navParams.get('cropId');
        this.mac = this.navParams.get('deviceMac');
        this.actuator = this.navParams.get('actuator');
        this.schedulePage = this.navParams.get('schedulePage');
    }

    public addSchedule(schedule: any) {
        let newSchedule: any = {
            CropId: this.cropId,
            ActuatorId: this.actuator.id,
            starttime: schedule.schedule ? schedule.starttime : Constant.DEFAULT_START_TIME,
            endtime: schedule.schedule ? schedule.endtime : Constant.DEFAULT_STOP_TIME,
            intervaltime: schedule.timer ? schedule.intervaltime : Constant.DEFAULT_INTERVAL_TIME,
            delaytime: schedule.timer ? schedule.delaytime : Constant.DEFAULT_DELAY_TIME
        }

        this.scheduleService.addSchedule(newSchedule).subscribe((res: any) => {
            this.toastService.showToast(res.message);
            if (res.success) {
                this.navCtrl.pop().then(() => {
                    this.schedulePage.refresh(null);
                })
            }
        }, (err: any) => {
            console.log(err)
        })
    }

}