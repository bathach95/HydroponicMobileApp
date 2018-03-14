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
}