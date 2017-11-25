import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CropService } from '../../services/crop.service';
import { DataService } from '../../services/data.service';
import { DeviceService } from '../../services/device.service';
import { ThresholdService } from '../../services/threshold.service';
import { ToastService } from '../../services/toast.service';
import { ActuatorPage } from '../actuator/actuator';
import { Paho } from 'ng2-mqtt/mqttws31';

@Component({
    selector: 'page-device',
    templateUrl: 'device.html'
})
export class DevicePage implements OnInit {
    public mac: string;
    public name: string;
    public crop: any;
    public data: any;
    public dataStatus: any;
    public threshold: any;
    private client: Paho.MQTT.Client;


    constructor(private navCtrl: NavController, private navParams: NavParams,
        private cropService: CropService, private toastService: ToastService,
        private dataService: DataService, private thresholdService: ThresholdService,
        private deviceService: DeviceService) {

        this.client = new Paho.MQTT.Client('13.58.114.56', Number(1884), '', "client_" + Math.floor(Math.random() * 1000000000));

        this.client.onConnectionLost = (responseObject: Object) => {
            console.log('Connection lost.');
        };

        this.client.onMessageArrived = (message: Paho.MQTT.Message) => {
            console.log('Message arrived.');
            console.log(this.parseIncomeData(message.payloadString, '04', '0010'));
        };

        this.client.connect({ onSuccess: this.onConnected.bind(this) });
    }

    private onConnected(): void {
        let topic = 'device/' + this.mac + '/server';
        this.client.subscribe(topic, null);
        console.log('Connected to broker.');
    }

    private parseIncomeData(data: string, cmdId: string, dataLength: string): any {
        if (data.length === 33) {
            let dataMac = data.substr(0, 17);
            let dataCmdId = data.substr(17, 2);
            let dataDataLength = data.substr(19, 4);
            if (dataMac === this.mac && dataCmdId === cmdId && dataDataLength === dataLength) {
                let result = data.substr(23, 10);
                return {
                    temp: Number(result.substr(0, 2)),
                    humidity: Number(result.substr(2, 2)),
                    ph: Number(result.substr(4, 2)),
                    ppm: Number(result.substr(6, 4))
                }
            }
        }
        return null;
    }

    public ngOnInit() {
        this.mac = this.navParams.get('deviceMac');
        this.name = this.navParams.get('deviceName');
        this.cropService.getNewestCropByDeviceMac(this.mac).subscribe((res1: any) => {
            if (res1.success) {
                this.crop = res1.data;
                this.dataService.getNewestDataByCropId(this.crop.id).subscribe((res2: any) => {
                    if (res2.success) {
                        this.thresholdService.getThreshold(this.crop.id).subscribe((threshold: any) => {
                            if (threshold.success) {
                                this.data = res2.data;
                                this.threshold = threshold.data;
                                this.dataStatus = this.dataService.getDataStatus(this.data, threshold.data);
                            }
                        }, (err: any) => {
                            console.log(err)
                        })
                    }
                }, (err: any) => {
                    console.log(err);
                })
            } else {
                this.toastService.showToast("No running crop");
            }
        }, (err: any) => {
            console.log(err);
        })
    }

    public startDevice() {

        this.deviceService.updateStatus(this.mac, 'running').subscribe((res: any) => {
            this.toastService.showToast(res.message);
            console.log(res.success);
        })
    }

    public stopDevice() {

        this.deviceService.updateStatus(this.mac, 'stop').subscribe((res: any) => {
            this.toastService.showToast(res.message);
            console.log(res.success);
        })
    }

    public goToActuatorPage(){
        this.navCtrl.push(ActuatorPage, {
            deviceMac: this.mac
        });
    }
}