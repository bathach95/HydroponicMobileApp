import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Constant } from '../../utils/constant';
import { ActuatorService } from '../../services/actuator.service';
import { ToastService } from '../../services/toast.service';

@Component({
    templateUrl: 'add-actuator.html'
})
export class AddActuatorPage implements OnInit {

    public actuatorType: any[] = Constant.ACTUATOR_TYPE;
    public actuatorPriority: string[] = Constant.ACTUATOR_PRIORITY;
    public mac: string;
    public availableActuator: any;
    private actuatorPage: any;

    constructor(private navParams: NavParams, private actuatorService: ActuatorService,
                private toastService: ToastService, private navCtrl: NavController) { }

    public ngOnInit() {
        this.mac = this.navParams.get('deviceMac');
        this.actuatorPage = this.navParams.get('actuatorPage');

        this.actuatorService.getAvailableActuator(this.mac).then((res: any) => {
            this.availableActuator = res;
        }).catch((err: any) => {
            console.log(err);
        });
    }

    public addActuator(actuator: any) {
        let newActuator: any = {
            devicemac: this.mac,
            actuator: {
                status: 'off',
                type: actuator.type,
                idonboard: actuator.idonboard,
                priority: actuator.priority
            }
        }
        this.actuatorService.addActuator(newActuator).subscribe((res: any) => {
            if (res.success){
                this.navCtrl.pop().then(() => {
                    this.actuatorPage.doRefresh(null);
                })
            }
            this.toastService.showToast(res.messasge);
        }, (err: any) => {
            console.log(err);
        })
    }
}
