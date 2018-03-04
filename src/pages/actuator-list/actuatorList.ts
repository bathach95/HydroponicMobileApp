import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActuatorService } from '../../services/actuator.service';
import { ToastService } from '../../services/toast.service';
import { AlertController } from 'ionic-angular';
import { AddActuatorPage } from '../add-actuator/addActuator';
import { ActuatorPage } from '../actuator/actuator';

@Component({
    selector: 'page-actuator-list',
    templateUrl: 'actuator-list.html'
})
export class ActuatorListPage implements OnInit {
    private mac: string;
    public data: any;

    constructor(private navParams: NavParams, private actuatorService: ActuatorService,
        private toastService: ToastService, private navCtrl: NavController) {}

    public ngOnInit() {
        this.mac = this.navParams.get('deviceMac');

        this.doRefresh(null);
    }

    public doRefresh(refresher) {
        this.actuatorService.getAllActuator(this.mac).subscribe((res: any) => {
            if (res.success) {
                this.data = res.data;
            } else {
                this.toastService.showToast("Cannot load all actuators");
            }
        }, (error: any) => {
            console.log(error)
        }, () => {
            if (refresher) {
                refresher.complete();
            }
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

            }, (err: any) => {
                console.log(err);
                this.toastService.showToast("Cannot change status of this actuator !")
            })
        }
    }

    public deleteActuator(actuatorId: number){
        // TODO
        alert(actuatorId)
    }

    public goToAddActuatorPage() {
        this.navCtrl.push(AddActuatorPage, {
            deviceMac: this.mac,
            actuatorListPage: this
        });
    }

    public goToActuatorPage(actuator: any) {
        this.navCtrl.push(ActuatorPage, {
            actuator: actuator
        })
    }
}