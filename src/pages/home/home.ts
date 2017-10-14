import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { DeviceService } from '../../services/device.service';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { DevicePage } from '../device/device';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage implements OnInit {

    public deviceList: any[];

    constructor(private navCtrl: NavController, private deviceService: DeviceService,
        private authService: AuthService, private toastService: ToastService) {
            

    }

    public ngOnInit() {
        this.deviceService.getAllDevice().subscribe((res: any) => {
            if (res.success) {
                this.deviceList = res.data;
            } else {
                this.toastService.showToast(res.message);
            }
        }, (err: any) => {
            console.log('get all device err: ' + err)
        })
    }

    public logout() {
        this.authService.logout();
        this.navCtrl.setRoot(LoginPage);
        this.toastService.showToast('Logout success!');
    }

    public detail(deviceMac: any, deviceName: any) {
        this.navCtrl.push(DevicePage, {
            deviceMac: deviceMac,
            deviceName: deviceName
        });
    }
}
