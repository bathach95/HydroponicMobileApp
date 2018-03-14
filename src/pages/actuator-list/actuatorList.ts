import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActuatorService } from '../../services/actuator.service';
import { ToastService } from '../../services/toast.service';
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
        private toastService: ToastService, private navCtrl: NavController) { }

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
        let msg = actuator.status === 'on' ? 'turn off' : 'turn on';
        let newStatus = actuator.status === 'on' ? 'off' : 'on';
        if (confirm("Do you want to " + msg + " this ?")) {
            this.actuatorService.changeActuatorStatus(actuator, newStatus, this.mac).subscribe((res: any) => {
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

    public deleteActuator(actuator: any) {
        if (confirm("Do you want to delete this actuator ?")) {
            var actuatorToDelete = {
                id: actuator.id,
                mac: this.mac,
                idonboard: actuator.idonboard,
                priority: actuator.priority
            }

            this.actuatorService.deleteActuator(actuatorToDelete).subscribe((res: any) => {
                this.toastService.showToast(res.message);
                if (res.success) {
                    this.doRefresh(null);
                }
            }, (err: any) => {
                console.log(err);
            })
        }
    }

    public changeMode(actuator: any) {
        let newMode = actuator.mode === 'auto' ? 'manual' : 'auto';
        if (confirm("Do you want to change to " + newMode + " mode ?")) {
            this.actuatorService.changeActuatorMode(this.mac, actuator, newMode).subscribe((res: any) => {
                if (res.success) {
                    actuator.mode = newMode;
                    actuator.status = 'off';
                }
                this.toastService.showToast(res.message);
            }, (err: any) => {
                console.log(err);
            })
        }
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