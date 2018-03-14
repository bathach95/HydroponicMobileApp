import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastService } from '../../services/toast.service';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import * as _ from 'lodash';

declare var esptouch: any;
declare let WifiWizard: any;
@Component({
    selector: 'page-smartconfig',
    templateUrl: 'smartconfig.html'
})
export class SmartConfigPage implements OnInit {

    public isHidden: boolean = false;
    public count: number = 1;
    public networks: any[] = [];

    constructor(private androidPermissions: AndroidPermissions, private toastService: ToastService,
                private navCtrl: NavController) { }

    private scanNetwork() {
        let failNetwork = (e: any) => {
            console.log("" + e);
        }
        WifiWizard.startScan((e: any) => {
            WifiWizard.getScanResults((scanRes: any) => {
                for (let index in scanRes) {
                    this.networks.push({
                        ssid: scanRes[index].SSID,
                        bssid: scanRes[index].BSSID,
                    });
                }
            }, failNetwork);
        }, failNetwork);
    }

    private requestPermissionAndScanNetWork() {
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(() => {
            this.scanNetwork();
        })
    }

    public ngOnInit() {
        
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then((res: any) => {
            if (res.hasPermission) {
                this.scanNetwork();
            } else {
                this.requestPermissionAndScanNetWork();
            }
        }).catch((err: any) => {
            this.requestPermissionAndScanNetWork();
        })
    }

    public smartConfig(config: any) {
        this.toastService.showLoading();

        let network = _.find(this.networks, ['ssid', config.ssid.trim()]);
        let isHiddenStr = config.isHidden ? "YES" : "NO";

        esptouch.start(network.ssid, network.bssid, config.password, isHiddenStr, config.count, (res: any) => {
            console.log(res);
            this.stopSmartConfig();
            this.toastService.showToast(res);
            this.navCtrl.pop();
        }, (err: any) => {
            console.log(err);
            this.toastService.showToast(err);
            this.stopSmartConfig();
        });
    }

    private stopSmartConfig() {
        esptouch.stop((res: any) => {
            console.log(res);
            this.toastService.showToast(res);
            this.toastService.dismissLoading();
        }, (err: any) => {
            console.log(err);
            this.toastService.showToast(err);
            this.toastService.dismissLoading();
        })
    }
}