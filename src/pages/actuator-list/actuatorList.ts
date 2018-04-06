import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActuatorService } from '../../services/actuator.service';
import { ToastService } from '../../services/toast.service';
import { AddActuatorPage } from '../add-actuator/addActuator';
import { ActuatorPage } from '../actuator/actuator';
import { SchedulePage } from '../schedule/schedule';
@Component({
    selector: 'page-actuator-list',
    templateUrl: 'actuator-list.html'
})
export class ActuatorListPage implements OnInit {
    private mac: string;
    private crop: any;
    public actuatorList: any;

    constructor(private navParams: NavParams, private actuatorService: ActuatorService,
        private toastService: ToastService, private navCtrl: NavController) { }

    public ngOnInit() {
        this.mac = this.navParams.get('deviceMac');
        this.crop = this.navParams.get('crop');
        this.doRefresh(null);
    }

    public doRefresh(refresher) {
        this.actuatorService.getAllActuator(this.mac).subscribe((res: any) => {
            if (res.success) {
                this.actuatorList = res.data;
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

    // TODO: test swipe 
    public swipe(event: any) {
        /* Name              Value
        DIRECTION_NONE         1
        DIRECTION_LEFT         2
        DIRECTION_RIGHT        4
        DIRECTION_UP           8
        DIRECTION_DOWN         16
        DIRECTION_HORIZONTAL   6
        DIRECTION_VERTICAL     24
        DIRECTION_ALL          30 */
        switch (event.direction) {
            case 2:
                this.toastService.showToast("you have just swipe from right to left");
                break;
            case 4:
                this.toastService.showToast("you have just swipe from left to right");
                break;
            default:
                break;
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

    public goToSchedulePage(actuator: any) {
        this.navCtrl.push(SchedulePage, {
            actuator: actuator,
            crop: this.crop,
            deviceMac: this.mac
        })
    }
}