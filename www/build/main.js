webpackJsonp([0],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constant__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeviceService = /** @class */ (function () {
    function DeviceService(http) {
        this.http = http;
    }
    DeviceService.prototype.getAllDevice = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__utils_constant__["a" /* Constant */].HOST + '/device/all');
    };
    DeviceService.prototype.getDeviceByMac = function (mac) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set('mac', mac);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__utils_constant__["a" /* Constant */].HOST + '/device/one', { params: params });
    };
    DeviceService.prototype.addNewDevice = function (newDevice) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__utils_constant__["a" /* Constant */].HOST + '/device/add', newDevice);
    };
    DeviceService.prototype.updateStatus = function (mac, status) {
        var body = {
            mac: mac,
            status: status
        };
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__utils_constant__["a" /* Constant */].HOST + '/device/status', body);
    };
    DeviceService.prototype.deleteDevice = function (deviceMac) {
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set('mac', deviceMac);
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__utils_constant__["a" /* Constant */].HOST + '/device/delete', {
            params: param
        });
    };
    DeviceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], DeviceService);
    return DeviceService;
}());

//# sourceMappingURL=device.service.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_constant__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (user) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__utils_constant__["a" /* Constant */].HOST + '/user/login', user);
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CropPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_crop_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_threshold_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toast_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actuator_list_actuatorList__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__smartconfig_smartconfig__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_forkJoin__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CropPage = /** @class */ (function () {
    function CropPage(navCtrl, cropService, dataService, thresholdService, toastService, navParams) {
        this.navCtrl = navCtrl;
        this.cropService = cropService;
        this.dataService = dataService;
        this.thresholdService = thresholdService;
        this.toastService = toastService;
        this.navParams = navParams;
    }
    CropPage.prototype.ngOnInit = function () {
        this.deviceName = this.navParams.get('deviceName');
        this.mac = this.navParams.get('deviceMac');
        this.homePage = this.navParams.get('homePage');
        this.loadCropData(null);
    };
    CropPage.prototype.loadCropData = function (refresher) {
        var _this = this;
        this.cropService.getLatestRunningCropByDeviceMac(this.mac)
            .flatMap(function (res1) {
            _this.crop = res1.data;
            return Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_observable_forkJoin__["forkJoin"])(_this.dataService.getLatestDataByCropId(_this.crop.id), _this.thresholdService.getThreshold(_this.crop.id));
        })
            .subscribe(function (_a) {
            var res2 = _a[0], res3 = _a[1];
            _this.data = res2.data;
            _this.threshold = res3.data;
            if (_this.data && _this.threshold) {
                _this.dataStatus = _this.dataService.getDataStatus(_this.data, _this.threshold);
            }
        }, function (err) {
            console.log(err);
        }, function () {
            if (refresher) {
                refresher.complete();
            }
        });
    };
    CropPage.prototype.deleteCrop = function () {
        var _this = this;
        if (confirm("Do you want to delete this crop ?")) {
            this.cropService.deleteCrop(this.crop.id).subscribe(function (res) {
                if (res.success) {
                    _this.loadCropData(null);
                }
                _this.toastService.showToast(res.message);
            }, function (err) {
                console.log(err);
            });
        }
    };
    CropPage.prototype.goToActuatorListPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__actuator_list_actuatorList__["a" /* ActuatorListPage */], {
            deviceMac: this.mac,
            crop: this.crop
        });
    };
    CropPage.prototype.goToSmartConfigPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__smartconfig_smartconfig__["a" /* SmartConfigPage */]);
    };
    CropPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-crop',template:/*ion-inline-start:"/Users/admin/Documents/IoT-Agriculture/HydroponicMobileApp/src/pages/crop/crop.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{deviceName}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n  <ion-refresher (ionRefresh)="loadCropData($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n\n  <div text-center>\n    <button ion-button block color="primary" round (click)="goToActuatorListPage()">Actuator list</button>\n  </div>\n\n  <!-- <div text-center> TODO: set threshold for data\n    <button (click)="setThreshold()" block round ion-button>Set threshold for data</button>\n  </div> -->\n\n  <div *ngIf="crop" id="device-container3">\n    <div id="crop-heading7">\n      {{crop.name}}\n    </div>\n    <ion-grid>\n      <ion-row>\n        <div id="device-heading13">\n          Start date: {{crop.startdate | date: \'MM/dd/yyyy HH:mm:ss\'}}\n        </div>\n      </ion-row>\n\n      <ion-row>\n        <div id="device-heading13">\n          Close date: {{crop.closedate | date: \'MM/dd/yyyy HH:mm:ss\'}}\n        </div>\n      </ion-row>\n\n      <ion-row>\n        <div id="device-heading13">\n          Tree type: {{crop.treetype}}\n        </div>\n      </ion-row>\n\n      <ion-row>\n        <div id="device-heading13">\n          Hydroponic type: {{crop.type}}\n        </div>\n      </ion-row>\n\n      <ion-row>\n        <div id="device-heading13">\n          Latest data:\n          <span *ngIf="data">{{data.createdAt | date: \'dd/MM/yyyy hh:mm:ss\'}}</span>\n        </div>\n      </ion-row>\n    </ion-grid>\n    <ion-grid *ngIf="data" id="info-table">\n      <ion-row>\n        <ion-col>\n          <div [class.danger-info]="dataStatus && dataStatus.badStatus.temp">\n            <span>Temperature</span>\n            <br>\n            <span *ngIf="threshold" class="threshold">({{threshold.temperatureLower}} - {{threshold.temperatureUpper}})</span>\n            <br>\n            <span>{{data.temperature}} °C</span>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div [class.danger-info]="dataStatus && dataStatus.badStatus.humidity">\n            <span>Humidity</span>\n            <br>\n            <span *ngIf="threshold" class="threshold">({{threshold.humidityLower}} - {{threshold.humidityUpper}})</span>\n            <br>\n            <span>{{data.humidity}} %</span>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <div [class.danger-info]="dataStatus && dataStatus.badStatus.ppm">\n            <span>ppm</span>\n            <br>\n            <span *ngIf="threshold" class="threshold">({{threshold.ppmLower}} - {{threshold.ppmUpper}})</span>\n            <br>\n            <span>{{data.ppm}}</span>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div [class.danger-info]="dataStatus && dataStatus.badStatus.light">\n            <span>Light</span>\n            <br>\n            <span *ngIf="threshold" class="threshold">({{threshold.lightLower}} - {{threshold.lightUpper}})</span>\n            <br>\n            <span>{{data.light}} lux</span>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <ion-fab *ngIf="crop" bottom left>\n    <button ion-fab color="danger" (click)="deleteCrop()">\n      <ion-icon name="trash"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <ion-fab *ngIf="!crop" center middle>\n    <button ion-fab add (click)="addCrop()">Add new crop</button>\n  </ion-fab>\n\n  <ion-fab bottom right>\n    <button ion-fab color="primary" (click)="goToSmartConfigPage()">\n        <ion-icon name="settings"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/Users/admin/Documents/IoT-Agriculture/HydroponicMobileApp/src/pages/crop/crop.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_crop_service__["a" /* CropService */],
            __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_4__services_threshold_service__["a" /* ThresholdService */],
            __WEBPACK_IMPORTED_MODULE_5__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], CropPage);
    return CropPage;
}());

//# sourceMappingURL=crop.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActuatorListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_actuator_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_actuator_addActuator__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actuator_actuator__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__schedule_schedule__ = __webpack_require__(345);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ActuatorListPage = /** @class */ (function () {
    function ActuatorListPage(navParams, actuatorService, toastService, navCtrl) {
        this.navParams = navParams;
        this.actuatorService = actuatorService;
        this.toastService = toastService;
        this.navCtrl = navCtrl;
    }
    ActuatorListPage.prototype.ngOnInit = function () {
        this.mac = this.navParams.get('deviceMac');
        this.crop = this.navParams.get('crop');
        this.doRefresh(null);
    };
    ActuatorListPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.actuatorService.getAllActuator(this.mac).subscribe(function (res) {
            if (res.success) {
                _this.actuatorList = res.data;
            }
            else {
                _this.toastService.showToast("Cannot load all actuators");
            }
        }, function (error) {
            console.log(error);
        }, function () {
            if (refresher) {
                refresher.complete();
            }
        });
    };
    ActuatorListPage.prototype.changeStatus = function (actuator) {
        var _this = this;
        var msg = actuator.status === 'on' ? 'turn off' : 'turn on';
        var newStatus = actuator.status === 'on' ? 'off' : 'on';
        if (confirm("Do you want to " + msg + " this ?")) {
            this.actuatorService.changeActuatorStatus(actuator, newStatus, this.mac).subscribe(function (res) {
                if (res.success) {
                    actuator.status = newStatus;
                }
                _this.toastService.showToast(res.message);
            }, function (err) {
                console.log(err);
                _this.toastService.showToast("Cannot change status of this actuator !");
            });
        }
    };
    ActuatorListPage.prototype.deleteActuator = function (actuator) {
        var _this = this;
        if (confirm("Do you want to delete this actuator ?")) {
            var actuatorToDelete = {
                id: actuator.id,
                mac: this.mac,
                idonboard: actuator.idonboard,
                priority: actuator.priority
            };
            this.actuatorService.deleteActuator(actuatorToDelete).subscribe(function (res) {
                _this.toastService.showToast(res.message);
                if (res.success) {
                    _this.doRefresh(null);
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    ActuatorListPage.prototype.changeMode = function (actuator) {
        var _this = this;
        var newMode = actuator.mode === 'auto' ? 'manual' : 'auto';
        if (confirm("Do you want to change to " + newMode + " mode ?")) {
            this.actuatorService.changeActuatorMode(this.mac, actuator, newMode).subscribe(function (res) {
                if (res.success) {
                    actuator.mode = newMode;
                    actuator.status = 'off';
                }
                _this.toastService.showToast(res.message);
            }, function (err) {
                console.log(err);
            });
        }
    };
    // TODO: test swipe 
    ActuatorListPage.prototype.swipe = function (event) {
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
    };
    ActuatorListPage.prototype.goToAddActuatorPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__add_actuator_addActuator__["a" /* AddActuatorPage */], {
            deviceMac: this.mac,
            actuatorListPage: this
        });
    };
    ActuatorListPage.prototype.goToActuatorPage = function (actuator) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__actuator_actuator__["a" /* ActuatorPage */], {
            actuator: actuator
        });
    };
    ActuatorListPage.prototype.goToSchedulePage = function (actuator) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__schedule_schedule__["a" /* SchedulePage */], {
            actuator: actuator,
            crop: this.crop,
            deviceMac: this.mac
        });
    };
    ActuatorListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-actuator-list',template:/*ion-inline-start:"/Users/admin/Documents/IoT-Agriculture/HydroponicMobileApp/src/pages/actuator-list/actuator-list.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Actuator List\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <div text-center>\n        <button ion-button block color="primary" round (click)="goToAddActuatorPage()">Add new actuator</button>\n    </div>\n    <div>\n        <ion-grid id="info-table">\n            <div class="table-header">\n                <ion-row>\n                    <ion-col>\n                        <span>Type</span>\n                    </ion-col>\n                    <ion-col>\n                        <span>Auto</span>\n                    </ion-col>\n                    <ion-col>\n                        <span>Active</span>\n                    </ion-col>\n                </ion-row>\n            </div>\n            <div *ngIf="actuatorList" class="table-content">\n                <ion-row *ngFor="let actuator of actuatorList" class="actuator-row" (click)="goToSchedulePage(actuator)">\n                    <ion-col>\n                        {{actuator.type}} {{actuator.idonboard.toString()[1]}}\n                    </ion-col>\n                    <ion-col>\n                        <button *ngIf="actuator.mode === \'auto\'" (click)="changeMode(actuator)" class="custome btn btn-success">On</button>\n                        <button *ngIf="actuator.mode !== \'auto\'" (click)="changeMode(actuator)" class="custome btn btn-danger">Off</button>\n                    </ion-col>\n                    <ion-col>\n                        <button [disabled]="actuator.mode === \'auto\'" *ngIf="actuator.status === \'on\'" (click)="changeStatus(actuator)" class="custome btn btn-success">On</button>\n                        <button [disabled]="actuator.mode === \'auto\'" *ngIf="actuator.status !== \'on\'" (click)="changeStatus(actuator)" class="custome btn btn-danger">Off</button>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </ion-grid>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/admin/Documents/IoT-Agriculture/HydroponicMobileApp/src/pages/actuator-list/actuator-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_actuator_service__["a" /* ActuatorService */],
            __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ActuatorListPage);
    return ActuatorListPage;
}());

//# sourceMappingURL=actuatorList.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constant__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduleService = /** @class */ (function () {
    function ScheduleService(http) {
        this.http = http;
    }
    ScheduleService.prototype.getScheduleByCropId = function (cropId) {
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set('cropId', cropId);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__utils_constant__["a" /* Constant */].HOST + '/schedule/all', {
            params: param
        });
    };
    ScheduleService.prototype.getScheduleByCropIdAndActuatorId = function (cropId, actuatorId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__utils_constant__["a" /* Constant */].HOST + '/schedule/crop/' + cropId + '/actuator/' + actuatorId;
        return this.http.get(url);
    };
    ScheduleService.prototype.addSchedule = function (newSchedule) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__utils_constant__["a" /* Constant */].HOST + '/schedule/add', newSchedule);
    };
    ScheduleService.prototype.deleteSchedule = function (scheduleId, cropId) {
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set('scheduleId', scheduleId)
            .append('cropId', cropId);
        ;
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__utils_constant__["a" /* Constant */].HOST + '/schedule/delete', {
            params: param
        });
    };
    ScheduleService.prototype.syncScheduleToDevice = function (cropId, mac) {
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set('cropId', cropId)
            .append('mac', mac);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__utils_constant__["a" /* Constant */].HOST + '/schedule/sync', {
            params: param
        });
    };
    ScheduleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ScheduleService);
    return ScheduleService;
}());

//# sourceMappingURL=schedule.service.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartConfigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toast_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_android_permissions__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_constant__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SmartConfigPage = /** @class */ (function () {
    function SmartConfigPage(androidPermissions, toastService, navCtrl) {
        this.androidPermissions = androidPermissions;
        this.toastService = toastService;
        this.navCtrl = navCtrl;
        this.isHidden = false;
        this.count = 1;
        this.networks = [];
    }
    SmartConfigPage.prototype.scanNetwork = function () {
        var _this = this;
        var failNetwork = function (e) {
            console.log("" + e);
        };
        WifiWizard.startScan(function (e) {
            WifiWizard.getScanResults(function (scanRes) {
                for (var index in scanRes) {
                    _this.networks.push({
                        ssid: scanRes[index].SSID,
                        bssid: scanRes[index].BSSID,
                    });
                }
            }, failNetwork);
        }, failNetwork);
    };
    SmartConfigPage.prototype.requestPermissionAndScanNetWork = function () {
        var _this = this;
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(function () {
            _this.scanNetwork();
        });
    };
    SmartConfigPage.prototype.ngOnInit = function () {
        var _this = this;
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(function (res) {
            if (res.hasPermission) {
                _this.scanNetwork();
            }
            else {
                _this.requestPermissionAndScanNetWork();
            }
        }).catch(function (err) {
            console.log(err);
            _this.requestPermissionAndScanNetWork();
        });
    };
    SmartConfigPage.prototype.smartConfig = function (config) {
        var _this = this;
        this.toastService.showLoading();
        var network = __WEBPACK_IMPORTED_MODULE_5_lodash__["find"](this.networks, ['ssid', config.ssid.trim()]);
        esptouch.start(network.ssid, network.bssid, config.password, __WEBPACK_IMPORTED_MODULE_4__utils_constant__["a" /* Constant */].DEFAULT_TIMEOUT_SMARTCONFIG, config.count, function (res) {
            _this.showToastAndStopSmartConfig(res);
            _this.navCtrl.pop();
        }, function (err) {
            console.log(err);
            _this.showToastAndStopSmartConfig(err);
        });
    };
    SmartConfigPage.prototype.stopSmartConfig = function () {
        var _this = this;
        console.log('smart config stop ....');
        esptouch.stop(function (res) {
            console.log(res);
            _this.toastService.dismissLoading();
        }, function (err) {
            console.log(err);
            _this.toastService.dismissLoading();
        });
    };
    SmartConfigPage.prototype.showToastAndStopSmartConfig = function (msg) {
        this.toastService.showToast(msg);
        this.stopSmartConfig();
    };
    SmartConfigPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-smartconfig',template:/*ion-inline-start:"/Users/admin/Documents/IoT-Agriculture/HydroponicMobileApp/src/pages/smartconfig/smartconfig.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Smart Config\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <div id="register-heading1">\n        Smart Config\n    </div>\n    <div class="spacer" id="register-spacer1"></div>\n    <form #smartConfigForm="ngForm" (ngSubmit)="smartConfig(smartConfigForm.value)">\n\n        <ion-item>\n            <ion-label>SSID:</ion-label>\n            <ion-select require name="ssid" #name="ngModel" ngModel>\n                <ion-option *ngFor="let network of networks">\n                    {{network.ssid}}\n                </ion-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Password: </ion-label>\n            <ion-input name="password" #name="ngModel" ngModel></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Task result count:</ion-label>\n            <ion-input type="number" name="count" #name="ngModel" [ngModel]="count"></ion-input>\n        </ion-item>\n\n        <div class="spacer" id="add-schedule-spacer2"></div>\n        <button round type="submit" ion-button color="secondary" block class="btn">\n            Confirm\n        </button>\n    </form>\n</ion-content>'/*ion-inline-end:"/Users/admin/Documents/IoT-Agriculture/HydroponicMobileApp/src/pages/smartconfig/smartconfig.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_android_permissions__["a" /* AndroidPermissions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_android_permissions__["a" /* AndroidPermissions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_toast_service__["a" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_toast_service__["a" /* ToastService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _c || Object])
    ], SmartConfigPage);
    return SmartConfigPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=smartconfig.js.map

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastService = /** @class */ (function () {
    function ToastService(toastCtrl, loadingCtrl) {
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    ToastService.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    ToastService.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: "Please wait...",
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    ToastService.prototype.dismissLoading = function () {
        this.loading.dismiss();
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["d" /* LoadingController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast.service.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constant; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);

var Constant = /** @class */ (function () {
    function Constant() {
    }
    // server IP or domain name
    Constant.HOST = 'http://13.58.114.56:3210';
    // hydroponic types
    Constant.HYDROPONIC_TYPE = [{
            label: "Drip System",
            value: "drip system"
        }, {
            label: "EBB-Flow",
            value: "ebb-flow"
        }, {
            label: "NFT",
            value: "nft"
        }, {
            label: "Water Culture",
            value: "water culture"
        }, {
            label: "Aeroponics",
            value: "aeroponics"
        }, {
            label: "Wick System",
            value: "wick system"
        }];
    // actuator type
    Constant.ACTUATOR_TYPE = [{
            type: 'Water',
            numberOfActuator: [11, 12]
        }, {
            type: 'Fan',
            numberOfActuator: [31, 32]
        }, {
            type: 'Lighting',
            numberOfActuator: [21, 22]
        }, {
            type: 'Oxygen',
            numberOfActuator: [41, 42]
        }];
    // actuator priority
    Constant.ACTUATOR_PRIORITY = ['Primary', 'Secondary'];
    // default report time in second
    Constant.DEFAULT_REPORT_TIME = 3;
    // time format for parsing
    Constant.PARSE_TIME_FORMAT = "MM/DD/YYYY HH:mm A";
    // default interval and delay time for schedule
    Constant.DEFAULT_INTERVAL_TIME = 10;
    Constant.DEFAULT_DELAY_TIME = 0;
    // default start and stop timer
    Constant.DEFAULT_START_TIME = __WEBPACK_IMPORTED_MODULE_0_moment__('00:00', 'HH:mm A').format('HH:mm');
    Constant.DEFAULT_STOP_TIME = __WEBPACK_IMPORTED_MODULE_0_moment__('23:59', 'HH:mm A').format('HH:mm');
    // timeout for smart config in milisecond
    Constant.DEFAULT_TIMEOUT_SMARTCONFIG = 22000;
    return Constant;
}());

//# sourceMappingURL=constant.js.map

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 169;

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage(storage) {
        this.storage = storage;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.loggedIn = false;
    }
    TabsPage.prototype.ngOnInit = function () {
        if (this.storage.get('loggedin')) {
            this.loggedIn = true;
        }
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/admin/Documents/IoT-Agriculture/HydroponicMobileApp/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/admin/Documents/IoT-Agriculture/HydroponicMobileApp/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.items = [];
        for (var i = 0; i < 60; i++) {
            this.items.push(this.items.length);
        }
    }
    AboutPage.prototype.showConfirm = function () {
        if (confirm("Do you want to click yes ?")) {
            console.log("You have just click yes");
        }
        else {
            console.log("You have just click no");
        }
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/admin/Documents/IoT-Agriculture/HydroponicMobileApp/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About us\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n  <ion-list>\n    <ion-list-header>Hydroponic team</ion-list-header>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/admin/Documents/IoT-Agriculture/HydroponicMobileApp/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/admin/Documents/IoT-Agriculture/HydroponicMobileApp/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Contact with us</ion-list-header>\n    <ion-item>\n      <ion-icon name="mail" item-left></ion-icon>\n      bkhydroponic2017@gmail.com\n    </ion-item>\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/admin/Documents/IoT-Agriculture/HydroponicMobileApp/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_device_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toast_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__crop_crop__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_qr_scanner__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_fcm__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, deviceService, authService, toastService, qrScanner, fcm) {
        this.navCtrl = navCtrl;
        this.deviceService = deviceService;
        this.authService = authService;
        this.toastService = toastService;
        this.qrScanner = qrScanner;
        this.fcm = fcm;
        this.topicList = [];
    }
    HomePage.prototype.ngOnInit = function () {
        this.doRefresh(null);
    };
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.deviceService.getAllDevice().subscribe(function (res) {
            if (res.success) {
                _this.deviceList = res.data;
                _this.deviceList.forEach(function (device) {
                    var topic = '/topics/' + device.mac.replace(/[:]/g, '');
                    _this.topicList.push(topic);
                    _this.fcm.subscribeToTopic(topic).then(function () {
                        console.log('subscribe success to ' + device.mac);
                    }).catch(function (err) {
                        console.log(err);
                    });
                });
            }
            else {
                _this.toastService.showToast(res.message);
            }
        }, function (err) {
            console.log('get all device err: ' + err);
        }, function () {
            if (refresher) {
                refresher.complete();
            }
        });
    };
    HomePage.prototype.scan = function () {
        var _this = this;
        // Optionally request the permission early
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                // start scanning
                var scanSub_1 = _this.qrScanner.scan().subscribe(function (text) {
                    _this.deviceService.addNewDevice(JSON.parse(text)).subscribe(function (res) {
                        _this.toastService.showToast(res.message);
                        _this.ngOnInit();
                    }, function (err) {
                        _this.toastService.showToast(err);
                    });
                    _this.qrScanner.hide(); // hide camera preview
                    scanSub_1.unsubscribe(); // stop scanning
                    window.document.querySelector('ion-app').classList.remove('transparent-body');
                });
                // show camera preview
                _this.qrScanner.show();
                window.document.querySelector('ion-app').classList.add('transparent-body');
                // wait for user to scan something, then the observable callback will be called
            }
            else if (status.denied) {
                // camera permission was permanently denied
                // you must use QRScanner.openSettings() method to guide the user to the settings page
                // then they can grant the permission from there
            }
            else {
                // permission was denied, but not permanently. You can ask for permission again at a later time.
            }
        })
            .catch(function (e) { return console.log('Error is', e); });
    };
    HomePage.prototype.logout = function () {
        var _this = this;
        this.authService.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        this.toastService.showToast('Logout success!');
        this.topicList.forEach(function (topic) {
            _this.fcm.unsubscribeFromTopic(topic).then(function (success) {
                console.log("unsub success " + success);
            }).catch(function (err) {
                console.log("unsub fail " + err);
            });
        });
    };
    HomePage.prototype.goToLatestCropPage = function (device) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__crop_crop__["a" /* CropPage */], {
            deviceMac: device.mac,
            deviceName: device.name,
            homePage: this
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/admin/Documents/IoT-Agriculture/HydroponicMobileApp/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Home\n        </ion-title>\n\n        <ion-buttons end>\n            <button color="danger" ion-button (click)="logout()">\n                Logout\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n    <div>\n        <button block (click)="scan()" round id="login-button2" ion-button>\n            Scan QR Code To Add New Device\n        </button>\n    </div>\n    <div id="home-heading3">\n        Your devices\n    </div>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <ion-list>\n        <div *ngFor="let device of deviceList" (click)="goToLatestCropPage(device)" style="margin-left: 10px">\n            <div id="devider1" class="devider"></div>\n            <ion-grid>\n\n                <ion-row>\n                    <div id="home-heading4">\n                        {{device.name}}\n                    </div>\n                </ion-row>\n\n                <ion-row>\n                    <div id="home-heading5">\n                        Installation date: {{device.createdAt | date: \'dd/MM/yyyy\'}}\n                    </div>\n                </ion-row>\n\n                <ion-row>\n                    <div id="home-heading5">\n                        Status: {{device.status}}\n                    </div>\n                </ion-row>\n\n            </ion-grid>\n            <div id="devider2" class="devider"></div>\n        </div>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/admin/Documents/IoT-Agriculture/HydroponicMobileApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_device_service__["a" /* DeviceService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_qr_scanner__["a" /* QRScanner */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_fcm__["a" /* FCM */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constant__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getDataStatus = function (data, threshold) {
        var status = {
            badStatus: {
                temp: data.temperature < threshold.temperatureLower || data.temperature > threshold.temperatureUpper,
                humidity: data.humidity < threshold.humidityLower || data.humidity > threshold.humidityUpper,
                ppm: data.ppm < threshold.ppmLower || data.ppm > threshold.ppmUpper,
                light: data.light < threshold.lightLower || data.light > threshold.lightUpper
            },
            status: true
        };
        status.status = status.badStatus.temp || status.badStatus.humidity || status.badStatus.ppm || status.badStatus.light;
        return status;
    };
    DataService.prototype.getLatestDataByCropId = function (cropId) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set('cropId', cropId);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__utils_constant__["a" /* Constant */].HOST + '/data/newest', { params: params });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], DataService);
    return DataService;
}());

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThresholdService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constant__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThresholdService = /** @class */ (function () {
    function ThresholdService(http) {
        this.http = http;
    }
    ThresholdService.prototype.getThreshold = function (cropId) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set('cropId', cropId);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__utils_constant__["a" /* Constant */].HOST + '/threshold/newest', { params: params });
    };
    ThresholdService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ThresholdService);
    return ThresholdService;
}());

//# sourceMappingURL=threshold.service.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddActuatorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constant__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_actuator_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddActuatorPage = /** @class */ (function () {
    function AddActuatorPage(navParams, actuatorService, toastService, navCtrl) {
        this.navParams = navParams;
        this.actuatorService = actuatorService;
        this.toastService = toastService;
        this.navCtrl = navCtrl;
        this.actuatorType = __WEBPACK_IMPORTED_MODULE_2__utils_constant__["a" /* Constant */].ACTUATOR_TYPE;
        this.actuatorPriority = __WEBPACK_IMPORTED_MODULE_2__utils_constant__["a" /* Constant */].ACTUATOR_PRIORITY;
    }
    AddActuatorPage.prototype.ngOnInit = function () {
        var _this = this;
        this.mac = this.navParams.get('deviceMac');
        this.actuatorListPage = this.navParams.get('actuatorListPage');
        this.actuatorService.getAvailableActuator(this.mac).then(function (res) {
            _this.availableActuator = res;
        }).catch(function (err) {
            console.log(err);
        });
    };
    AddActuatorPage.prototype.addActuator = function (actuator) {
        var _this = this;
        var newActuator = {
            devicemac: this.mac,
            actuator: {
                status: 'off',
                type: actuator.type,
                idonboard: actuator.idonboard,
                priority: this.actuatorPriority[0] // set defalt is Primary
            }
        };
        this.actuatorService.addActuator(newActuator).subscribe(function (res) {
            if (res.success) {
                _this.navCtrl.pop().then(function () {
                    _this.actuatorListPage.doRefresh(null);
                });
            }
            _this.toastService.showToast(res.message);
        }, function (err) {
            console.log(err);
        });
    };
    AddActuatorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/admin/Documents/IoT-Agriculture/HydroponicMobileApp/src/pages/add-actuator/add-actuator.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Add new actuator\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <div class="spacer" id="add-actuator-spacer1"></div>\n    <form #addActuatorForm="ngForm" (ngSubmit)="addActuator(addActuatorForm.value)">\n\n        <ion-item>\n            <ion-label>Actuator type</ion-label>\n            <ion-select require name="type" #name="ngModel" ngModel>\n                <ion-option *ngFor="let type of actuatorType" [value]="type.type">\n                    {{type.type}}\n                </ion-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Available ID</ion-label>\n            <ion-select require name="idonboard" #name="ngModel" ngModel>\n                <ion-option *ngFor="let actuator of availableActuator | actuatorTypeFilter: {type: addActuatorForm.value.type}" [value]="actuator.availableId">\n                    {{actuator.availableId.toString()[1]}}\n                </ion-option>\n            </ion-select>\n        </ion-item>\n\n        <!-- <ion-item>\n            <ion-label>Priority</ion-label>\n            <ion-select require name="priority" #name="ngModel" ngModel>\n                <ion-option *ngFor="let priority of actuatorPriority" [value]="priority">\n                    {{priority}}\n                </ion-option>\n            </ion-select>\n        </ion-item> -->\n        <div class="spacer" id="add-actuator-spacer2"></div>\n        <button round type="submit" ion-button color="secondary" block class="btn">\n            Add\n        </button>\n    </form>\n</ion-content>'/*ion-inline-end:"/Users/admin/Documents/IoT-Agriculture/HydroponicMobileApp/src/pages/add-actuator/add-actuator.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_actuator_service__["a" /* ActuatorService */],
            __WEBPACK_IMPORTED_MODULE_4__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AddActuatorPage);
    return AddActuatorPage;
}());

//# sourceMappingURL=addActuator.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActuatorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_actuator_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActuatorPage = /** @class */ (function () {
    function ActuatorPage(navParams, actuatorService, toastService, navCtrl) {
        this.navParams = navParams;
        this.actuatorService = actuatorService;
        this.toastService = toastService;
        this.navCtrl = navCtrl;
    }
    ActuatorPage.prototype.ngOnInit = function () {
        this.actuator = this.navParams.get('actuator');
        console.log(this.actuator);
    };
    ActuatorPage.prototype.doRefresh = function (refresher) {
    };
    ActuatorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-actuator',template:/*ion-inline-start:"/Users/admin/Documents/IoT-Agriculture/HydroponicMobileApp/src/pages/actuator/actuator.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Actuator\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <div text-center id="actuator-heading1">\n        {{actuator.type}} {{actuator.idonboard.toString()[1]}}\n    </div>\n    <div text-center>\n        <button ion-button block color="primary" round (click)="goToAddSchedulePage()">Add schedule</button>\n    </div>\n    <div>\n        <ion-grid id="info-table">\n            <div class="table-header">\n                <ion-row>\n                    <ion-col>\n                        <span>Type</span>\n                    </ion-col>\n                    <ion-col>\n                        <span>ID</span>\n                    </ion-col>\n                    <ion-col>\n                        <span>Priority</span>\n                    </ion-col>\n                    <ion-col>\n                        <span>Active</span>\n                    </ion-col>\n                    <ion-col>\n                        <span>Action</span>\n                    </ion-col>\n                </ion-row>\n            </div>\n            <div class="table-content">\n                <ion-row>\n                    <ion-col>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </ion-grid>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/admin/Documents/IoT-Agriculture/HydroponicMobileApp/src/pages/actuator/actuator.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_actuator_service__["a" /* ActuatorService */],
            __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ActuatorPage);
    return ActuatorPage;
}());

//# sourceMappingURL=actuator.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_schedule_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_schedule_addSchedule__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_crop_service__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SchedulePage = /** @class */ (function () {
    function SchedulePage(navParams, scheduleService, toastService, navCtrl, cropService) {
        this.navParams = navParams;
        this.scheduleService = scheduleService;
        this.toastService = toastService;
        this.navCtrl = navCtrl;
        this.cropService = cropService;
    }
    SchedulePage.prototype.ngOnInit = function () {
        this.crop = this.navParams.get('crop');
        this.mac = this.navParams.get('deviceMac');
        this.actuator = this.navParams.get('actuator');
        this.refresh(null);
    };
    SchedulePage.prototype.refresh = function (refresher) {
        var _this = this;
        this.scheduleService.getScheduleByCropIdAndActuatorId(this.crop.id, this.actuator.id).subscribe(function (res) {
            if (res.success) {
                _this.scheduleList = res.data;
            }
            _this.toastService.showToast(res.message);
        }, function (err) {
            console.log(err);
        }, function () {
            _this.cropService.getCropById(_this.crop.id).subscribe(function (res) {
                if (res.success) {
                    _this.synchronized = res.data.synchronized;
                }
            }, function (err) {
                console.log(err);
            });
            if (refresher) {
                refresher.complete();
            }
        });
    };
    SchedulePage.prototype.deleteSchedule = function (scheduleId) {
        var _this = this;
        if (confirm("Do you want to delete this schedule ?")) {
            this.scheduleService.deleteSchedule(scheduleId, this.crop.id).subscribe(function (res) {
                _this.toastService.showToast(res.message);
                if (res.success) {
                    _this.refresh(null);
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    SchedulePage.prototype.setThreshold = function () {
        // TODO: 
    };
    SchedulePage.prototype.goToAddSchedulePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__add_schedule_addSchedule__["a" /* AddSchedulePage */], {
            actuator: this.actuator,
            cropId: this.crop.id,
            deviceMac: this.mac,
            schedulePage: this
        });
    };
    SchedulePage.prototype.syncScheduleToDevice = function () {
        var _this = this;
        if (confirm("Do you want to send schedule to device ?")) {
            this.scheduleService.syncScheduleToDevice(this.crop.id, this.mac).subscribe(function (res) {
                if (res.success) {
                    _this.refresh(null);
                }
                _this.toastService.showToast(res.message);
            }, function (err) {
                console.log(err);
            });
        }
    };
    SchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-schedule',template:/*ion-inline-start:"/Users/admin/Documents/IoT-Agriculture/HydroponicMobileApp/src/pages/schedule/schedule.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Schedule of {{actuator.type}} {{actuator.idonboard.toString()[1]}}\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-refresher (ionRefresh)="refresh($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <div text-center>\n        <button [disabled]="synchronized" (click)="syncScheduleToDevice()" ion-button>Send schedule to device</button>\n    </div>\n\n    <div id="schedule-heading">\n        Schedule\n    </div>\n    <div>\n        <ion-grid id="info-table">\n            <div class="table-header">\n                <ion-row>\n                    <ion-col>\n                        <span>Start</span>\n                    </ion-col>\n                    <ion-col>\n                        <span>Stop</span>\n                    </ion-col>\n                    <ion-col>\n                        <span>Interval</span>\n                    </ion-col>\n                    <ion-col>\n                        <span>Delay</span>\n                    </ion-col>\n                    <ion-col>\n                        <span>Action</span>\n                    </ion-col>\n                </ion-row>\n            </div>\n            <div *ngIf="scheduleList" class="table-content">\n                <ion-row *ngFor="let schedule of scheduleList" class="schedule-row">\n                    <ion-col>\n                        {{schedule.starttime}}\n                    </ion-col>\n                    <ion-col>\n                        {{schedule.endtime}}\n                    </ion-col>\n                    <ion-col>\n                        {{schedule.intervaltime}} s\n                    </ion-col>\n                    <ion-col>\n                        {{schedule.delaytime}} s\n                    </ion-col>\n                    <ion-col>\n                        <ion-icon (click)="deleteSchedule(schedule.id)" name="trash" color="danger"></ion-icon>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </ion-grid>\n    </div>\n    <ion-fab bottom right>\n        <button ion-fab (click)="goToAddSchedulePage()">Add</button>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/admin/Documents/IoT-Agriculture/HydroponicMobileApp/src/pages/schedule/schedule.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_schedule_service__["a" /* ScheduleService */],
            __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__services_crop_service__["a" /* CropService */]])
    ], SchedulePage);
    return SchedulePage;
}());

//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_schedule_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_constant__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddSchedulePage = /** @class */ (function () {
    function AddSchedulePage(navParams, scheduleService, toastService, navCtrl) {
        this.navParams = navParams;
        this.scheduleService = scheduleService;
        this.toastService = toastService;
        this.navCtrl = navCtrl;
        this.actuatorType = __WEBPACK_IMPORTED_MODULE_4__utils_constant__["a" /* Constant */].ACTUATOR_TYPE;
        this.schedule = false;
        this.timer = false;
    }
    AddSchedulePage.prototype.ngOnInit = function () {
        this.cropId = this.navParams.get('cropId');
        this.mac = this.navParams.get('deviceMac');
        this.actuator = this.navParams.get('actuator');
        this.schedulePage = this.navParams.get('schedulePage');
    };
    AddSchedulePage.prototype.addSchedule = function (schedule) {
        var _this = this;
        var newSchedule = {
            CropId: this.cropId,
            ActuatorId: this.actuator.id,
            starttime: schedule.schedule ? schedule.starttime : __WEBPACK_IMPORTED_MODULE_4__utils_constant__["a" /* Constant */].DEFAULT_START_TIME,
            endtime: schedule.schedule ? schedule.endtime : __WEBPACK_IMPORTED_MODULE_4__utils_constant__["a" /* Constant */].DEFAULT_STOP_TIME,
            intervaltime: schedule.timer ? schedule.intervaltime : __WEBPACK_IMPORTED_MODULE_4__utils_constant__["a" /* Constant */].DEFAULT_INTERVAL_TIME,
            delaytime: schedule.timer ? schedule.delaytime : __WEBPACK_IMPORTED_MODULE_4__utils_constant__["a" /* Constant */].DEFAULT_DELAY_TIME
        };
        this.scheduleService.addSchedule(newSchedule).subscribe(function (res) {
            _this.toastService.showToast(res.message);
            if (res.success) {
                _this.navCtrl.pop().then(function () {
                    _this.schedulePage.refresh(null);
                });
            }
        }, function (err) {
            console.log(err);
        });
    };
    AddSchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-schedule',template:/*ion-inline-start:"/Users/admin/Documents/IoT-Agriculture/HydroponicMobileApp/src/pages/add-schedule/add-schedule.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Add schedule for {{actuator.type}} {{actuator.idonboard.toString()[1]}}\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <div class="spacer" id="add-schedule-spacer1"></div>\n    <form #addScheduleForm="ngForm" (ngSubmit)="addSchedule(addScheduleForm.value)">\n\n        <ion-item>\n            <ion-label>Schedule: </ion-label>\n            <ion-checkbox name="schedule" #name="ngModel" [ngModel]="schedule"></ion-checkbox>\n        </ion-item>\n        <ion-item>\n            <ion-label>Start time: HH:mm</ion-label>\n            <ion-datetime [disabled]="!addScheduleForm.value.schedule" displayFormat="HH:mm A" name="starttime" #name="ngModel" ngModel></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Stop time: HH:mm</ion-label>\n            <ion-datetime [disabled]="!addScheduleForm.value.schedule" displayFormat="HH:mm A" name="endtime" #name="ngModel" ngModel></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Timer: </ion-label>\n            <ion-checkbox name="timer" #name="ngModel" [ngModel]="timer"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Duration (s):</ion-label>\n            <ion-input [disabled]="!addScheduleForm.value.timer" type="number" name="intervaltime" #name="ngModel" ngModel></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Delay (s):</ion-label>\n            <ion-input [disabled]="!addScheduleForm.value.timer" type="number" name="delaytime" #name="ngModel" ngModel></ion-input>\n        </ion-item>\n\n        <div class="spacer" id="add-schedule-spacer2"></div>\n        <button round type="submit" ion-button color="secondary" block class="btn">\n            Add\n        </button>\n    </form>\n</ion-content>'/*ion-inline-end:"/Users/admin/Documents/IoT-Agriculture/HydroponicMobileApp/src/pages/add-schedule/add-schedule.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_schedule_service__["a" /* ScheduleService */],
            __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AddSchedulePage);
    return AddSchedulePage;
}());

//# sourceMappingURL=addSchedule.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_register_service__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, toastService, registerService) {
        this.navCtrl = navCtrl;
        this.toastService = toastService;
        this.registerService = registerService;
    }
    RegisterPage.prototype.register = function (user) {
        var _this = this;
        if (user.password !== user.passwordConfirm) {
            alert('Password does not match.');
        }
        else {
            this.registerService.register(user).subscribe(function (res) {
                if (res.success) {
                    _this.toastService.showToast(res.message);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                }
                else {
                    alert(res.message);
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/admin/Documents/IoT-Agriculture/HydroponicMobileApp/src/pages/register/register.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>\n        Register\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n    <div id="register-heading1">\n      Hydroponic\n    </div>\n    <div class="spacer" id="register-spacer1"></div>\n    <form #registerForm="ngForm" (ngSubmit)="register(registerForm.value)">\n\n      <ion-item>\n          <ion-input required type="text" id="name" name="name" placeholder="Username" #name="ngModel" ngModel></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input required type="email" id="email" name="email" placeholder="Email" #email="ngModel" ngModel></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-input required type="number" id="phone" name="phone" placeholder="Phone" #phone="ngModel" ngModel></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-input required type="password" name="password" placeholder="Password" #password="ngModel" ngModel></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-input required type="password" name="passwordConfirm" placeholder="Retype password" #passwordConfirm="ngModel" ngModel></ion-input>\n        </ion-item>\n\n      <div class="spacer" id="register-spacer2"></div>\n      <button round type="submit" id="register-button" ion-button color="secondary" block class="btn">\n          Register\n      </button>    \n    </form>\n  </ion-content>'/*ion-inline-end:"/Users/admin/Documents/IoT-Agriculture/HydroponicMobileApp/src/pages/register/register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_4__services_register_service__["a" /* RegisterService */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constant__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
    }
    RegisterService.prototype.register = function (user) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__utils_constant__["a" /* Constant */].HOST + '/user/register', user);
    };
    RegisterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], RegisterService);
    return RegisterService;
}());

//# sourceMappingURL=register.service.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCropPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constant__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_crop_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddCropPage = /** @class */ (function () {
    function AddCropPage(navCtrl, navParams, cropService, toastService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cropService = cropService;
        this.toastService = toastService;
        this.hydroponicType = __WEBPACK_IMPORTED_MODULE_2__utils_constant__["a" /* Constant */].HYDROPONIC_TYPE;
        this.reporttime = __WEBPACK_IMPORTED_MODULE_2__utils_constant__["a" /* Constant */].DEFAULT_REPORT_TIME;
    }
    AddCropPage.prototype.ngOnInit = function () {
        this.mac = this.navParams.get('deviceMac');
        this.devicePage = this.navParams.get('devicePage');
    };
    AddCropPage.prototype.addCrop = function (crop) {
        var _this = this;
        var newCrop = this.formatCrop(crop);
        this.cropService.addCrop(newCrop).subscribe(function (res) {
            _this.toastService.showToast(res.message);
            if (res.success) {
                _this.navCtrl.pop().then(function () {
                    _this.devicePage.doRefresh(null);
                });
            }
        }, function (err) {
            console.log(err);
        });
    };
    AddCropPage.prototype.formatCrop = function (crop) {
        crop.DeviceMac = this.mac;
        crop.synchronized = true;
        crop.startdate = __WEBPACK_IMPORTED_MODULE_5_moment__(crop.startdate).format(__WEBPACK_IMPORTED_MODULE_2__utils_constant__["a" /* Constant */].PARSE_TIME_FORMAT);
        crop.closedate = __WEBPACK_IMPORTED_MODULE_5_moment__(crop.closedate).format(__WEBPACK_IMPORTED_MODULE_2__utils_constant__["a" /* Constant */].PARSE_TIME_FORMAT);
        crop.status = __WEBPACK_IMPORTED_MODULE_5_moment__(crop.startdate, __WEBPACK_IMPORTED_MODULE_2__utils_constant__["a" /* Constant */].PARSE_TIME_FORMAT) > __WEBPACK_IMPORTED_MODULE_5_moment__(new Date(), __WEBPACK_IMPORTED_MODULE_2__utils_constant__["a" /* Constant */].PARSE_TIME_FORMAT) ?
            'pending' : 'running';
        return crop;
    };
    AddCropPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-crop',template:/*ion-inline-start:"/Users/admin/Documents/IoT-Agriculture/HydroponicMobileApp/src/pages/add-crop/add-crop.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Add new crop\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <div class="spacer" id="add-crop-spacer1"></div>\n    <form #addCropForm="ngForm" (ngSubmit)="addCrop(addCropForm.value)">\n\n        <ion-item>\n            <ion-label>Crop name</ion-label>\n            <ion-input required type="text" id="name" name="name" #name="ngModel" ngModel></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Tree type</ion-label>\n            <ion-input required type="text" id="treetype" name="treetype" #name="ngModel" ngModel></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Start date: MM/DD/YYYY HH:mm</ion-label>\n            <ion-datetime required displayFormat="MM/DD/YYYY HH:mm A" name="startdate" #name="ngModel" ngModel></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Close date MM/DD/YYYY HH:mm</ion-label>\n            <ion-datetime required displayFormat="MM/DD/YYYY HH:mm A" name="closedate" #name="ngModel" ngModel></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Report time (s)</ion-label>\n            <ion-input required type="number" name="reporttime" id="reporttime" [(ngModel)]="reporttime"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Hydroponic type</ion-label>\n            <ion-select name="type" #name="ngModel" ngModel>\n                <ion-option *ngFor="let type of hydroponicType" [value]="type.value">\n                    {{type.label}}\n                </ion-option>\n            </ion-select>\n        </ion-item>\n\n        <div class="spacer" id="add-crop-spacer2"></div>\n        <button round type="submit" ion-button color="secondary" block class="btn">\n            Add\n        </button>\n    </form>\n</ion-content>'/*ion-inline-end:"/Users/admin/Documents/IoT-Agriculture/HydroponicMobileApp/src/pages/add-crop/add-crop.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_crop_service__["a" /* CropService */], __WEBPACK_IMPORTED_MODULE_4__services_toast_service__["a" /* ToastService */]])
    ], AddCropPage);
    return AddCropPage;
}());

//# sourceMappingURL=addCrop.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(374);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__interceptors_auth_interceptor__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_device_device__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_actuator_list_actuatorList__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_register_register__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_add_crop_addCrop__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_crop_crop__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_add_actuator_addActuator__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_actuator_actuator__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_schedule_schedule__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_add_schedule_addSchedule__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_smartconfig_smartconfig__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_background_mode__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_local_notifications__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_push__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_qr_scanner__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_network__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_fcm__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_auth_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_device_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_toast_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_crop_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_data_service__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_schedule_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_threshold_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_actuator_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_register_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_android_permissions__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pipes_actuatorType_pipe__ = __webpack_require__(441);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_device_device__["a" /* DevicePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_actuator_list_actuatorList__["a" /* ActuatorListPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_add_crop_addCrop__["a" /* AddCropPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_crop_crop__["a" /* CropPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_add_actuator_addActuator__["a" /* AddActuatorPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_actuator_actuator__["a" /* ActuatorPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_add_schedule_addSchedule__["a" /* AddSchedulePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_smartconfig_smartconfig__["a" /* SmartConfigPage */],
                __WEBPACK_IMPORTED_MODULE_41__pipes_actuatorType_pipe__["a" /* ActuatorTypePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_device_device__["a" /* DevicePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_actuator_list_actuatorList__["a" /* ActuatorListPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_add_crop_addCrop__["a" /* AddCropPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_crop_crop__["a" /* CropPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_add_actuator_addActuator__["a" /* AddActuatorPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_actuator_actuator__["a" /* ActuatorPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_add_schedule_addSchedule__["a" /* AddSchedulePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_smartconfig_smartconfig__["a" /* SmartConfigPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_background_mode__["a" /* BackgroundMode */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_qr_scanner__["a" /* QRScanner */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_31__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_32__services_device_service__["a" /* DeviceService */],
                __WEBPACK_IMPORTED_MODULE_33__services_toast_service__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_38__services_actuator_service__["a" /* ActuatorService */],
                __WEBPACK_IMPORTED_MODULE_34__services_crop_service__["a" /* CropService */],
                __WEBPACK_IMPORTED_MODULE_35__services_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_37__services_threshold_service__["a" /* ThresholdService */],
                __WEBPACK_IMPORTED_MODULE_36__services_schedule_service__["a" /* ScheduleService */],
                __WEBPACK_IMPORTED_MODULE_39__services_register_service__["a" /* RegisterService */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_7__interceptors_auth_interceptor__["a" /* HttpsRequestInterceptor */], multi: true, },
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_toast_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_fcm__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, network, toastService, fcm) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.network = network;
        this.toastService = toastService;
        this.fcm = fcm;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            // check internet connection
            var disconnectSub = _this.network.onDisconnect().subscribe(function () {
                _this.toastService.showToast('No internet connection');
            });
            var connectSub = _this.network.onConnect().subscribe(function () {
                _this.toastService.showToast('Internet connected');
            });
            // on notification of update firmware
            // this.fcm.onNotification().subscribe((res: any) => {
            //   console.log(res);
            // }, (err: any) => {
            //   console.log(err);
            // }) 
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/admin/Documents/IoT-Agriculture/HydroponicMobileApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/admin/Documents/IoT-Agriculture/HydroponicMobileApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_6__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_fcm__["a" /* FCM */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 217,
	"./af.js": 217,
	"./ar": 218,
	"./ar-dz": 219,
	"./ar-dz.js": 219,
	"./ar-kw": 220,
	"./ar-kw.js": 220,
	"./ar-ly": 221,
	"./ar-ly.js": 221,
	"./ar-ma": 222,
	"./ar-ma.js": 222,
	"./ar-sa": 223,
	"./ar-sa.js": 223,
	"./ar-tn": 224,
	"./ar-tn.js": 224,
	"./ar.js": 218,
	"./az": 225,
	"./az.js": 225,
	"./be": 226,
	"./be.js": 226,
	"./bg": 227,
	"./bg.js": 227,
	"./bm": 228,
	"./bm.js": 228,
	"./bn": 229,
	"./bn.js": 229,
	"./bo": 230,
	"./bo.js": 230,
	"./br": 231,
	"./br.js": 231,
	"./bs": 232,
	"./bs.js": 232,
	"./ca": 233,
	"./ca.js": 233,
	"./cs": 234,
	"./cs.js": 234,
	"./cv": 235,
	"./cv.js": 235,
	"./cy": 236,
	"./cy.js": 236,
	"./da": 237,
	"./da.js": 237,
	"./de": 238,
	"./de-at": 239,
	"./de-at.js": 239,
	"./de-ch": 240,
	"./de-ch.js": 240,
	"./de.js": 238,
	"./dv": 241,
	"./dv.js": 241,
	"./el": 242,
	"./el.js": 242,
	"./en-au": 243,
	"./en-au.js": 243,
	"./en-ca": 244,
	"./en-ca.js": 244,
	"./en-gb": 245,
	"./en-gb.js": 245,
	"./en-ie": 246,
	"./en-ie.js": 246,
	"./en-il": 247,
	"./en-il.js": 247,
	"./en-nz": 248,
	"./en-nz.js": 248,
	"./eo": 249,
	"./eo.js": 249,
	"./es": 250,
	"./es-do": 251,
	"./es-do.js": 251,
	"./es-us": 252,
	"./es-us.js": 252,
	"./es.js": 250,
	"./et": 253,
	"./et.js": 253,
	"./eu": 254,
	"./eu.js": 254,
	"./fa": 255,
	"./fa.js": 255,
	"./fi": 256,
	"./fi.js": 256,
	"./fo": 257,
	"./fo.js": 257,
	"./fr": 258,
	"./fr-ca": 259,
	"./fr-ca.js": 259,
	"./fr-ch": 260,
	"./fr-ch.js": 260,
	"./fr.js": 258,
	"./fy": 261,
	"./fy.js": 261,
	"./gd": 262,
	"./gd.js": 262,
	"./gl": 263,
	"./gl.js": 263,
	"./gom-latn": 264,
	"./gom-latn.js": 264,
	"./gu": 265,
	"./gu.js": 265,
	"./he": 266,
	"./he.js": 266,
	"./hi": 267,
	"./hi.js": 267,
	"./hr": 268,
	"./hr.js": 268,
	"./hu": 269,
	"./hu.js": 269,
	"./hy-am": 270,
	"./hy-am.js": 270,
	"./id": 271,
	"./id.js": 271,
	"./is": 272,
	"./is.js": 272,
	"./it": 273,
	"./it.js": 273,
	"./ja": 274,
	"./ja.js": 274,
	"./jv": 275,
	"./jv.js": 275,
	"./ka": 276,
	"./ka.js": 276,
	"./kk": 277,
	"./kk.js": 277,
	"./km": 278,
	"./km.js": 278,
	"./kn": 279,
	"./kn.js": 279,
	"./ko": 280,
	"./ko.js": 280,
	"./ky": 281,
	"./ky.js": 281,
	"./lb": 282,
	"./lb.js": 282,
	"./lo": 283,
	"./lo.js": 283,
	"./lt": 284,
	"./lt.js": 284,
	"./lv": 285,
	"./lv.js": 285,
	"./me": 286,
	"./me.js": 286,
	"./mi": 287,
	"./mi.js": 287,
	"./mk": 288,
	"./mk.js": 288,
	"./ml": 289,
	"./ml.js": 289,
	"./mr": 290,
	"./mr.js": 290,
	"./ms": 291,
	"./ms-my": 292,
	"./ms-my.js": 292,
	"./ms.js": 291,
	"./mt": 293,
	"./mt.js": 293,
	"./my": 294,
	"./my.js": 294,
	"./nb": 295,
	"./nb.js": 295,
	"./ne": 296,
	"./ne.js": 296,
	"./nl": 297,
	"./nl-be": 298,
	"./nl-be.js": 298,
	"./nl.js": 297,
	"./nn": 299,
	"./nn.js": 299,
	"./pa-in": 300,
	"./pa-in.js": 300,
	"./pl": 301,
	"./pl.js": 301,
	"./pt": 302,
	"./pt-br": 303,
	"./pt-br.js": 303,
	"./pt.js": 302,
	"./ro": 304,
	"./ro.js": 304,
	"./ru": 305,
	"./ru.js": 305,
	"./sd": 306,
	"./sd.js": 306,
	"./se": 307,
	"./se.js": 307,
	"./si": 308,
	"./si.js": 308,
	"./sk": 309,
	"./sk.js": 309,
	"./sl": 310,
	"./sl.js": 310,
	"./sq": 311,
	"./sq.js": 311,
	"./sr": 312,
	"./sr-cyrl": 313,
	"./sr-cyrl.js": 313,
	"./sr.js": 312,
	"./ss": 314,
	"./ss.js": 314,
	"./sv": 315,
	"./sv.js": 315,
	"./sw": 316,
	"./sw.js": 316,
	"./ta": 317,
	"./ta.js": 317,
	"./te": 318,
	"./te.js": 318,
	"./tet": 319,
	"./tet.js": 319,
	"./tg": 320,
	"./tg.js": 320,
	"./th": 321,
	"./th.js": 321,
	"./tl-ph": 322,
	"./tl-ph.js": 322,
	"./tlh": 323,
	"./tlh.js": 323,
	"./tr": 324,
	"./tr.js": 324,
	"./tzl": 325,
	"./tzl.js": 325,
	"./tzm": 326,
	"./tzm-latn": 327,
	"./tzm-latn.js": 327,
	"./tzm.js": 326,
	"./ug-cn": 328,
	"./ug-cn.js": 328,
	"./uk": 329,
	"./uk.js": 329,
	"./ur": 330,
	"./ur.js": 330,
	"./uz": 331,
	"./uz-latn": 332,
	"./uz-latn.js": 332,
	"./uz.js": 331,
	"./vi": 333,
	"./vi.js": 333,
	"./x-pseudo": 334,
	"./x-pseudo.js": 334,
	"./yo": 335,
	"./yo.js": 335,
	"./zh-cn": 336,
	"./zh-cn.js": 336,
	"./zh-hk": 337,
	"./zh-hk.js": 337,
	"./zh-tw": 338,
	"./zh-tw.js": 338
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 429;

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpsRequestInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HttpsRequestInterceptor = /** @class */ (function () {
    function HttpsRequestInterceptor() {
    }
    HttpsRequestInterceptor.prototype.intercept = function (req, next) {
        var token = localStorage.getItem('token');
        this.token = token ? token : '';
        var dupReq = req.clone({ headers: req.headers.set('token', this.token) });
        return next.handle(dupReq);
    };
    HttpsRequestInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], HttpsRequestInterceptor);
    return HttpsRequestInterceptor;
}());

//# sourceMappingURL=auth.interceptor.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_crop_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_device_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actuator_list_actuatorList__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_crop_addCrop__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__crop_crop__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__smartconfig_smartconfig__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DevicePage = /** @class */ (function () {
    function DevicePage(navCtrl, navParams, cropService, toastService, deviceService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cropService = cropService;
        this.toastService = toastService;
        this.deviceService = deviceService;
    }
    DevicePage.prototype.doRefresh = function (refresher) {
        this.loadCropList(refresher);
    };
    DevicePage.prototype.ngOnInit = function () {
        this.mac = this.navParams.get('deviceMac');
        this.name = this.navParams.get('deviceName');
        this.homePage = this.navParams.get('homePage');
        this.loadCropList(null);
    };
    DevicePage.prototype.loadCropList = function (refresher) {
        var _this = this;
        this.cropService.getAllCrop(this.mac).subscribe(function (res) {
            if (res.success) {
                _this.cropList = res.data;
            }
            _this.toastService.showToast(res.message);
        }, function (err) {
            console.log(err);
        }, function () {
            if (refresher) {
                refresher.complete();
            }
        });
    };
    DevicePage.prototype.deleteDevice = function () {
        var _this = this;
        if (confirm("Do you want to delete this device ?")) {
            this.deviceService.deleteDevice(this.mac).subscribe(function (res) {
                if (res.success) {
                    _this.navCtrl.pop().then(function () {
                        _this.homePage.doRefresh(null);
                    });
                }
                _this.toastService.showToast(res.message);
            }, function (err) {
                console.log(err);
            });
        }
    };
    DevicePage.prototype.goToAddCropPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__add_crop_addCrop__["a" /* AddCropPage */], {
            deviceMac: this.mac,
            devicePage: this
        });
    };
    DevicePage.prototype.goToActuatorListPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__actuator_list_actuatorList__["a" /* ActuatorListPage */], {
            deviceMac: this.mac
        });
    };
    DevicePage.prototype.goToCropPage = function (crop) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__crop_crop__["a" /* CropPage */], {
            crop: crop,
            deviceMac: this.mac,
            devicePage: this
        });
    };
    DevicePage.prototype.goToSmartConfigPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__smartconfig_smartconfig__["a" /* SmartConfigPage */]);
    };
    DevicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-device',template:/*ion-inline-start:"/Users/admin/Documents/IoT-Agriculture/HydroponicMobileApp/src/pages/device/device.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Device\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div text-center>\n    <button ion-button block color="primary" round (click)="goToAddCropPage()">Add new crop</button>\n    <button (click)="goToActuatorListPage()" block round ion-button>Actuator list</button>\n  </div>\n  <div id="device-heading7">\n    {{name}}\n  </div>\n  <div *ngIf="cropList">\n    <ion-list>\n      <div *ngFor="let crop of cropList" (click)="goToCropPage(crop)" style="margin-left: 10px">\n        <div id="devider1" class="devider"></div>\n        <ion-grid>\n\n          <ion-row>\n            <div id="home-heading4">\n              {{crop.name}}\n            </div>\n          </ion-row>\n\n          <ion-row>\n            <div id="home-heading5">\n              Status: {{crop.status}}\n            </div>\n          </ion-row>\n\n        </ion-grid>\n        <div id="devider2" class="devider"></div>\n      </div>\n    </ion-list>\n  </div>\n  <ion-fab bottom right>\n      <button ion-fab color="danger" (click)="deleteDevice()">\n          <ion-icon name="trash"></ion-icon>\n      </button>\n  </ion-fab>\n\n  <ion-fab bottom left>\n      <button ion-fab color="primary" (click)="goToSmartConfigPage()">\n          <ion-icon name="settings"></ion-icon>\n      </button>\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/Users/admin/Documents/IoT-Agriculture/HydroponicMobileApp/src/pages/device/device.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_crop_service__["a" /* CropService */], __WEBPACK_IMPORTED_MODULE_4__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_3__services_device_service__["a" /* DeviceService */]])
    ], DevicePage);
    return DevicePage;
}());

//# sourceMappingURL=device.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActuatorTypePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ActuatorTypePipe = /** @class */ (function () {
    function ActuatorTypePipe() {
    }
    ActuatorTypePipe.prototype.transform = function (items, filter) {
        if (!items || !filter) {
            return items;
        }
        return items.filter(function (item) { return item.type === filter.type; });
    };
    ActuatorTypePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'actuatorTypeFilter',
            pure: false
        })
    ], ActuatorTypePipe);
    return ActuatorTypePipe;
}());

//# sourceMappingURL=actuatorType.pipe.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CropService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constant__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CropService = /** @class */ (function () {
    function CropService(http) {
        this.http = http;
    }
    CropService.prototype.getAllCrop = function (mac) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set('mac', mac);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__utils_constant__["a" /* Constant */].HOST + '/crop/all', { params: params });
    };
    CropService.prototype.getLatestRunningCropByDeviceMac = function (mac) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set('mac', mac);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__utils_constant__["a" /* Constant */].HOST + '/crop/newest', { params: params });
    };
    CropService.prototype.addCrop = function (crop) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__utils_constant__["a" /* Constant */].HOST + '/crop/add', crop);
    };
    CropService.prototype.getCropById = function (cropId) {
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set('id', cropId);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__utils_constant__["a" /* Constant */].HOST + '/crop/one', {
            params: param
        });
    };
    CropService.prototype.deleteCrop = function (cropId) {
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set('id', cropId);
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__utils_constant__["a" /* Constant */].HOST + '/crop/delete', {
            params: param
        });
    };
    CropService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], CropService);
    return CropService;
}());

//# sourceMappingURL=crop.service.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toast_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, toastService, authService) {
        this.navCtrl = navCtrl;
        this.toastService = toastService;
        this.authService = authService;
    }
    LoginPage.prototype.ngOnInit = function () {
        if (localStorage.getItem('token')) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
    };
    LoginPage.prototype.login = function (user) {
        var _this = this;
        if (user.email && user.password) {
            this.authService.login(user).subscribe(function (res) {
                if (res.success) {
                    localStorage.setItem('token', res.data.token);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                    _this.toastService.showToast(res.message);
                }
                else {
                    alert(res.message);
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            alert('You have to enter email and password');
        }
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/admin/Documents/IoT-Agriculture/HydroponicMobileApp/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Login\n    </ion-title>\n    <!-- <ion-buttons end>\n        <button color="secondary" ion-button (click)="register()">\n            Register\n        </button>\n    </ion-buttons> -->\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2">\n  <div id="login-heading2">\n    Hydroponic\n  </div>\n  <div class="spacer" id="login-spacer1"></div>\n  <form id="login-form5" #loginForm="ngForm" (ngSubmit)="login(loginForm.value)">\n    <ion-item id="login-input4">\n      <ion-input required type="email" id="email" name="email" placeholder="Email" #email="ngModel" ngModel></ion-input>\n      <div *ngIf="email.errors && (email.dirty || email.touched)" class="alert alert-danger">\n        <div *ngIf="email.errors.required">\n          Email is required.\n        </div>  \n      </div>\n    </ion-item>\n    <ion-item id="login-input5">\n      <ion-input required type="password" name="password" placeholder="Password" #password="ngModel" ngModel></ion-input>\n    </ion-item>\n    <div class="spacer" id="login-spacer2"></div>\n    <button round type="submit" id="login-button2" ion-button color="secondary" block class="btn">\n        Login\n    </button>    \n  </form>\n  <div class="spacer" id="login-spacer3"></div>\n  <div id="register-line" text-center>\n    Do not have account ?\n    <br>\n    <button (click)="register()" round ion-button>Register</button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/admin/Documents/IoT-Agriculture/HydroponicMobileApp/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActuatorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_constant__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ActuatorService = /** @class */ (function () {
    function ActuatorService(http) {
        this.http = http;
    }
    ActuatorService.prototype.getAllActuator = function (mac) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set('mac', mac);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__utils_constant__["a" /* Constant */].HOST + '/actuator/all', { params: params });
    };
    ActuatorService.prototype.changeActuatorStatus = function (actuator, newStatus, mac) {
        var body = {
            id: actuator.id,
            mac: mac,
            status: newStatus,
            idonboard: actuator.idonboard,
            mode: actuator.mode
        };
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__utils_constant__["a" /* Constant */].HOST + '/actuator/status', body);
    };
    ActuatorService.prototype.changeActuatorMode = function (mac, actuator, newMode) {
        var body = {
            id: actuator.id,
            mac: mac,
            status: actuator.status,
            idonboard: actuator.idonboard,
            mode: newMode
        };
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__utils_constant__["a" /* Constant */].HOST + '/actuator/mode', body);
    };
    ActuatorService.prototype.addActuator = function (newActuator) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__utils_constant__["a" /* Constant */].HOST + '/actuator/addactuator', newActuator);
    };
    ActuatorService.prototype.deleteActuator = function (actuator) {
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set('id', actuator.id)
            .append('mac', actuator.mac)
            .append('idonboard', actuator.idonboard)
            .append('priority', actuator.priority);
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_3__utils_constant__["a" /* Constant */].HOST + '/actuator/delete', {
            params: param
        });
    };
    ActuatorService.prototype.getAvailableActuator = function (mac) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getAllActuator(mac).subscribe(function (res) {
                var currentActuatorList = res.data;
                var actuatorTypes = __WEBPACK_IMPORTED_MODULE_3__utils_constant__["a" /* Constant */].ACTUATOR_TYPE;
                var result = [];
                actuatorTypes.forEach(function (type) {
                    var currentActuators = currentActuatorList.filter(function (obj) {
                        return obj.type === type.type;
                    });
                    currentActuators.forEach(function (actuator, index) {
                        if (__WEBPACK_IMPORTED_MODULE_4_lodash__["includes"](type.numberOfActuator, actuator.idonboard)) {
                            type.numberOfActuator.splice(type.numberOfActuator.indexOf(actuator.idonboard), 1);
                        }
                    });
                    type.numberOfActuator.forEach(function (availableId) {
                        result.push({ type: type.type, availableId: availableId });
                    });
                });
                resolve(result);
            }, function (err) {
                reject(err);
            });
        });
    };
    ActuatorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ActuatorService);
    return ActuatorService;
}());

//# sourceMappingURL=actuator.service.js.map

/***/ })

},[354]);
//# sourceMappingURL=main.js.map