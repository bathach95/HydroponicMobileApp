import { Component,OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DeviceService } from '../../services/device.service';

@Component({
    selector: 'page-device',
    templateUrl: 'device.html'
})
export class DevicePage implements OnInit {
    private mac: any;

    constructor(private navCtrl: NavController, private navParams: NavParams,
                private deviceService: DeviceService) {
    }

    public ngOnInit(){
        this.mac = this.navParams.get('deviceMac');        
        this.deviceService.getDeviceByMac(this.mac).subscribe((res: any) => {
            console.log(res)
        }, (err) => {
            console.log(err);
        })
    }
}