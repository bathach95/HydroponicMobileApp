import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { ActuatorService } from '../../services/actuator.service';
import { ToastService } from '../../services/toast.service';
import { AlertController } from 'ionic-angular';
@Component({
    selector: 'page-actuator',
    templateUrl: 'actuator.html'
})
export class ActuatorPage implements OnInit {
    private mac: string;
    public data: any;

    constructor(private navParams: NavParams, private actuatorService: ActuatorService,
        private toastService: ToastService, private alertCtrl: AlertController) {

    }

    public ngOnInit() {
        this.mac = this.navParams.get('deviceMac');

        this.actuatorService.getAllActuator(this.mac).subscribe((result: any) => {
            if (result.success) {
                this.data = result.data;

            } else {
                this.toastService.showToast("Cannot load all actuators");
            }
        }, (error: any) => {
            console.log(error)
        })
    }

    public doRefresh(refresher) {

        this.actuatorService.getAllActuator(this.mac).subscribe((result: any) => {
            if (result.success) {
                this.data = result.data;

            } else {
                this.toastService.showToast("Cannot load all actuators");
            }
            refresher.complete();

        }, (error: any) => {
            console.log(error)
        })

    }

    public changeStatus(actuator) {
        let msg = actuator.status === 'on' ? 'deactive' : 'active';
        let newStatus = actuator.status === 'on' ? 'off' : 'on';
        if (confirm("Do you want to " + msg + " this ?")) {
            this.actuatorService.changeActuatorStatus(actuator.id, newStatus, this.mac, actuator.idonboard).subscribe((res: any) => {
                if (res.success) {
                    actuator.status = newStatus;
                }
                this.toastService.showToast(res.message);

            }, (err) => {
                console.log(err);
                this.toastService.showToast("Cannot change status of this actuator !")
            })
        }
    }
}