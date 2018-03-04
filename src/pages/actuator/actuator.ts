import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActuatorService } from '../../services/actuator.service';
import { ToastService } from '../../services/toast.service';

@Component({
    selector: 'page-actuator',
    templateUrl: 'actuator.html'
})
export class ActuatorPage implements OnInit {
    private actuator: any;

    constructor(private navParams: NavParams, private actuatorService: ActuatorService,
                private toastService: ToastService, private navCtrl: NavController) {}

    public ngOnInit() {
        this.actuator = this.navParams.get('actuator');

        console.log(this.actuator);
    }

    public doRefresh(refresher) {
        
    }

    public changeStatus() {
        let msg = this.actuator.status === 'on' ? 'deactive' : 'active';
        let newStatus = this.actuator.status === 'on' ? 'off' : 'on';
        if (confirm("Do you want to " + msg + " this ?")) {
            this.actuatorService.changeActuatorStatus(this.actuator.id, newStatus, this.actuator.DeviceMac, this.actuator.idonboard).subscribe((res: any) => {
                if (res.success) {
                    this.actuator.status = newStatus;
                }
                this.toastService.showToast(res.message);

            }, (err: any) => {
                console.log(err);
                this.toastService.showToast("Cannot change status of this actuator !")
            })
        }
    }

}