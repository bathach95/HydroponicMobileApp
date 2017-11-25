import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { ActuatorService } from '../../services/actuator.service';
import { ToastService } from '../../services/toast.service';

@Component({
    selector: 'page-actuator',
    templateUrl: 'actuator.html'
})
export class ActuatorPage implements OnInit {
    private mac: string;
    public data: any;

    constructor(private navParams: NavParams, private actuatorService: ActuatorService,
                private toastService: ToastService) {

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
}