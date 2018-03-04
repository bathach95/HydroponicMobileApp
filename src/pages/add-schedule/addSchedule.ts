import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ScheduleService } from '../../services/schedule.service';
import { ToastService } from '../../services/toast.service';
import { Constant } from '../../utils/constant';
import { ActuatorService } from '../../services/actuator.service';

@Component({
    selector: 'page-add-schedule',
    templateUrl: 'add-schedule.html'
})
export class AddSchedulePage implements OnInit {
    private cropId: number;
    public availableActuator: any[];
    private mac: string;
    private schedulePage: any;
    public actuatorType: any[] = Constant.ACTUATOR_TYPE;

    constructor(private navParams: NavParams, private actuatorService: ActuatorService,
                private scheduleService: ScheduleService, private toastService: ToastService,
                private navCtrl: NavController) { }

    public ngOnInit() {
        this.cropId = this.navParams.get('cropId');
        this.mac = this.navParams.get('deviceMac');
        this.schedulePage = this.navParams.get('schedulePage');

        this.actuatorService.getAllActuator(this.mac).subscribe((res: any) => {
            if (res.success) {
                this.availableActuator = res.data;
            } 
        }, (error: any) => {
            console.log(error)
        })
    }

    public addSchedule(schedule: any) {
        let newSchedule: any = {
            CropId: this.cropId,
            ActuatorId: schedule.actuatorId,
            starttime: schedule.starttime,
            endtime: schedule.endtime,
            intervaltime: Constant.DEFAULT_INTERVAL_TIME,
            delaytime: Constant.DEFAULT_DELAY_TIME
        }
        this.scheduleService.addSchedule(newSchedule).subscribe((res: any) => {
            this.toastService.showToast(res.message);
            if (res.success) {
                this.navCtrl.pop().then(() => {
                    this.schedulePage.loadSchedules(null);
                })
            }
        }, (err: any) => {
            console.log(err)
        })
    }

}