webpackJsonp([0],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constant__ = __webpack_require__(19);
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

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_constant__ = __webpack_require__(19);
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

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constant__ = __webpack_require__(19);
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

/***/ 122:
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
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 15:
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
    function ToastService(toast) {
        this.toast = toast;
    }
    ToastService.prototype.showToast = function (message) {
        var toast = this.toast.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* ToastController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast.service.js.map

/***/ }),

/***/ 163:
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
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constant; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);

var Constant = /** @class */ (function () {
    function Constant() {
    }
    // server IP or domain name
    Constant.HOST = 'http://192.168.1.107:3210';
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
    return Constant;
}());

//# sourceMappingURL=constant.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(347);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/thach/Documents/HydroponicMobileApp/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/thach/Documents/HydroponicMobileApp/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 207:
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
            selector: 'page-about',template:/*ion-inline-start:"/home/thach/Documents/HydroponicMobileApp/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About us\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n  <ion-list>\n    <ion-list-header>BKHydroponic team</ion-list-header>\n    <ion-item>\n      Huynh Ba Thach\n    </ion-item>\n    <ion-item>\n      Ta Chi Tay\n    </ion-item>\n    <ion-item>\n      Nguyen Dinh Dung\n    </ion-item>\n    <ion-item>\n      Nguyen Le Khoi\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/thach/Documents/HydroponicMobileApp/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 208:
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
            selector: 'page-contact',template:/*ion-inline-start:"/home/thach/Documents/HydroponicMobileApp/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Contact with us</ion-list-header>\n    <ion-item>\n      <ion-icon name="mail" item-left></ion-icon>\n      bkhydroponic2017@gmail.com\n    </ion-item>\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/thach/Documents/HydroponicMobileApp/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_device_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toast_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__device_device__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_qr_scanner__ = __webpack_require__(344);
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
    function HomePage(navCtrl, deviceService, authService, toastService, qrScanner) {
        this.navCtrl = navCtrl;
        this.deviceService = deviceService;
        this.authService = authService;
        this.toastService = toastService;
        this.qrScanner = qrScanner;
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
                    FCMPlugin.subscribeToTopic(topic, function () {
                        console.log('subscribe success to ' + device.mac);
                    }, function (err) {
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
        this.authService.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        this.toastService.showToast('Logout success!');
        this.topicList.forEach(function (topic) {
            FCMPlugin.unsubscribeFromTopic(topic, function (success) {
                console.log("unsub success " + success);
            }, function (err) {
                console.log("unsub fail " + err);
            });
        });
    };
    HomePage.prototype.detail = function (deviceMac, deviceName) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__device_device__["a" /* DevicePage */], {
            deviceMac: deviceMac,
            deviceName: deviceName,
            homePage: this
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/thach/Documents/HydroponicMobileApp/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Home\n        </ion-title>\n\n        <ion-buttons end>\n            <button color="danger" ion-button (click)="logout()">\n                Logout\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n    <div>\n        <button block (click)="scan()" round id="login-button2" ion-button>\n            Scan QR Code To Add New Device\n        </button>\n    </div>\n    <div id="home-heading3">\n        Your devices\n    </div>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <ion-list>\n        <div *ngFor="let device of deviceList" (click)="detail(device.mac, device.name)" style="margin-left: 10px">\n            <div id="devider1" class="devider"></div>\n            <ion-grid>\n\n                <ion-row>\n                    <div id="home-heading4">\n                        {{device.name}}\n                    </div>\n                </ion-row>\n\n                <ion-row>\n                    <div id="home-heading5">\n                        Installation date: {{device.createdAt | date: \'dd/MM/yyyy\'}}\n                    </div>\n                </ion-row>\n\n                <ion-row>\n                    <div id="home-heading5">\n                        Status: {{device.status}}\n                    </div>\n                </ion-row>\n\n            </ion-grid>\n            <div id="devider2" class="devider"></div>\n        </div>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/home/thach/Documents/HydroponicMobileApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_device_service__["a" /* DeviceService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_qr_scanner__["a" /* QRScanner */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_crop_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_device_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actuator_list_actuatorList__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_crop_addCrop__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__crop_crop__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__smartconfig_smartconfig__ = __webpack_require__(342);
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
            selector: 'page-device',template:/*ion-inline-start:"/home/thach/Documents/HydroponicMobileApp/src/pages/device/device.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Device\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div text-center>\n    <button ion-button block color="primary" round (click)="goToAddCropPage()">Add new crop</button>\n    <button (click)="goToActuatorListPage()" block round ion-button>Actuator list</button>\n  </div>\n  <div id="device-heading7">\n    {{name}}\n  </div>\n  <div *ngIf="cropList">\n    <ion-list>\n      <div *ngFor="let crop of cropList" (click)="goToCropPage(crop)" style="margin-left: 10px">\n        <div id="devider1" class="devider"></div>\n        <ion-grid>\n\n          <ion-row>\n            <div id="home-heading4">\n              {{crop.name}}\n            </div>\n          </ion-row>\n\n          <ion-row>\n            <div id="home-heading5">\n              Status: {{crop.status}}\n            </div>\n          </ion-row>\n\n        </ion-grid>\n        <div id="devider2" class="devider"></div>\n      </div>\n    </ion-list>\n  </div>\n  <ion-fab bottom right>\n      <button ion-fab color="danger" (click)="deleteDevice()">\n          <ion-icon name="trash"></ion-icon>\n      </button>\n  </ion-fab>\n\n  <ion-fab bottom left>\n      <button ion-fab color="primary" (click)="goToSmartConfigPage()">\n          <ion-icon name="settings"></ion-icon>\n      </button>\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/home/thach/Documents/HydroponicMobileApp/src/pages/device/device.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_crop_service__["a" /* CropService */], __WEBPACK_IMPORTED_MODULE_4__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_3__services_device_service__["a" /* DeviceService */]])
    ], DevicePage);
    return DevicePage;
}());

//# sourceMappingURL=device.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActuatorListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_actuator_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_actuator_addActuator__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actuator_actuator__ = __webpack_require__(335);
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
        this.doRefresh(null);
    };
    ActuatorListPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.actuatorService.getAllActuator(this.mac).subscribe(function (res) {
            if (res.success) {
                _this.data = res.data;
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
    ActuatorListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-actuator-list',template:/*ion-inline-start:"/home/thach/Documents/HydroponicMobileApp/src/pages/actuator-list/actuator-list.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Actuator List\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <div text-center>\n        <button ion-button block color="primary" round (click)="goToAddActuatorPage()">Add new actuator</button>\n    </div>\n    <div>\n        <ion-grid id="info-table">\n            <div class="table-header">\n                <ion-row>\n                    <ion-col>\n                        <span>Type</span>\n                    </ion-col>\n                    <ion-col>\n                        <span>ID</span>\n                    </ion-col>\n                    <ion-col>\n                        <span>Auto mode</span>\n                    </ion-col>\n                    <ion-col>\n                        <span>On/Off</span>\n                    </ion-col>\n                    <ion-col>\n                        <span>Action</span>\n                    </ion-col>\n                </ion-row>\n            </div>\n            <div *ngIf="data" class="table-content">\n                <ion-row *ngFor="let actuator of data" class="actuator-row">\n                    <ion-col>\n                        {{actuator.type}}\n                    </ion-col>\n                    <ion-col>\n                        {{actuator.idonboard.toString()[1]}}\n                    </ion-col>\n                    <ion-col>\n                        <button *ngIf="actuator.mode === \'auto\'" (click)="changeMode(actuator)" class="custome btn btn-success">On</button>\n                        <button *ngIf="actuator.mode !== \'auto\'" (click)="changeMode(actuator)" class="custome btn btn-danger">Off</button>\n                    </ion-col>\n                    <ion-col>\n                        <button [disabled]="actuator.mode === \'auto\'" *ngIf="actuator.status === \'on\'" (click)="changeStatus(actuator)" class="custome btn btn-success">On</button>\n                        <button [disabled]="actuator.mode === \'auto\'" *ngIf="actuator.status !== \'on\'" (click)="changeStatus(actuator)" class="custome btn btn-danger">Off</button>\n                    </ion-col>\n                    <ion-col>\n                        <ion-icon (click)="deleteActuator(actuator)" name="trash" color="danger"></ion-icon>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </ion-grid>\n    </div>\n</ion-content>'/*ion-inline-end:"/home/thach/Documents/HydroponicMobileApp/src/pages/actuator-list/actuator-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_actuator_service__["a" /* ActuatorService */],
            __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ActuatorListPage);
    return ActuatorListPage;
}());

//# sourceMappingURL=actuatorList.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddActuatorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constant__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_actuator_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_service__ = __webpack_require__(15);
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
                priority: actuator.priority
            }
        };
        this.actuatorService.addActuator(newActuator).subscribe(function (res) {
            if (res.success) {
                _this.navCtrl.pop().then(function () {
                    _this.actuatorListPage.doRefresh(null);
                });
            }
            _this.toastService.showToast(res.messasge);
        }, function (err) {
            console.log(err);
        });
    };
    AddActuatorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/thach/Documents/HydroponicMobileApp/src/pages/add-actuator/add-actuator.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Add new actuator\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <div class="spacer" id="register-spacer1"></div>\n    <form #addActuatorForm="ngForm" (ngSubmit)="addActuator(addActuatorForm.value)">\n\n        <ion-item>\n            <ion-label>Actuator type</ion-label>\n            <ion-select require name="type" #name="ngModel" ngModel>\n                <ion-option *ngFor="let type of actuatorType" [value]="type.type">\n                    {{type.type}}\n                </ion-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Available ID</ion-label>\n            <ion-select require name="idonboard" #name="ngModel" ngModel>\n                <ion-option *ngFor="let actuator of availableActuator | actuatorTypeFilter: {type: addActuatorForm.value.type}" [value]="actuator.availableId">\n                    {{actuator.availableId.toString()[1]}}\n                </ion-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Priority</ion-label>\n            <ion-select require name="priority" #name="ngModel" ngModel>\n                <ion-option *ngFor="let priority of actuatorPriority" [value]="priority">\n                    {{priority}}\n                </ion-option>\n            </ion-select>\n        </ion-item>\n        <div class="spacer" id="add-actuator-spacer2"></div>\n        <button round type="submit" ion-button color="secondary" block class="btn">\n            Add\n        </button>\n    </form>\n</ion-content>'/*ion-inline-end:"/home/thach/Documents/HydroponicMobileApp/src/pages/add-actuator/add-actuator.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_actuator_service__["a" /* ActuatorService */],
            __WEBPACK_IMPORTED_MODULE_4__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AddActuatorPage);
    return AddActuatorPage;
}());

//# sourceMappingURL=addActuator.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActuatorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_actuator_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(15);
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
            selector: 'page-actuator',template:/*ion-inline-start:"/home/thach/Documents/HydroponicMobileApp/src/pages/actuator/actuator.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Actuator\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <div text-center id="actuator-heading1">\n        {{actuator.type}} {{actuator.idonboard.toString()[1]}}\n    </div>\n    <div text-center>\n        <button ion-button block color="primary" round (click)="goToAddSchedulePage()">Add schedule</button>\n    </div>\n    <div>\n        <ion-grid id="info-table">\n            <div class="table-header">\n                <ion-row>\n                    <ion-col>\n                        <span>Type</span>\n                    </ion-col>\n                    <ion-col>\n                        <span>ID</span>\n                    </ion-col>\n                    <ion-col>\n                        <span>Priority</span>\n                    </ion-col>\n                    <ion-col>\n                        <span>Active</span>\n                    </ion-col>\n                    <ion-col>\n                        <span>Action</span>\n                    </ion-col>\n                </ion-row>\n            </div>\n            <div class="table-content">\n                <ion-row>\n                    <ion-col>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </ion-grid>\n    </div>\n</ion-content>'/*ion-inline-end:"/home/thach/Documents/HydroponicMobileApp/src/pages/actuator/actuator.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_actuator_service__["a" /* ActuatorService */],
            __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ActuatorPage);
    return ActuatorPage;
}());

//# sourceMappingURL=actuator.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCropPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constant__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_crop_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_service__ = __webpack_require__(15);
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
            selector: 'page-add-crop',template:/*ion-inline-start:"/home/thach/Documents/HydroponicMobileApp/src/pages/add-crop/add-crop.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Add new crop\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <div class="spacer" id="add-crop-spacer1"></div>\n    <form #addCropForm="ngForm" (ngSubmit)="addCrop(addCropForm.value)">\n\n        <ion-item>\n            <ion-label>Crop name</ion-label>\n            <ion-input required type="text" id="name" name="name" #name="ngModel" ngModel></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Tree type</ion-label>\n            <ion-input required type="text" id="treetype" name="treetype" #name="ngModel" ngModel></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Start date: MM/DD/YYYY HH:mm</ion-label>\n            <ion-datetime required displayFormat="MM/DD/YYYY HH:mm A" name="startdate" #name="ngModel" ngModel></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Close date MM/DD/YYYY HH:mm</ion-label>\n            <ion-datetime required displayFormat="MM/DD/YYYY HH:mm A" name="closedate" #name="ngModel" ngModel></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Report time (s)</ion-label>\n            <ion-input required type="number" name="reporttime" id="reporttime" [(ngModel)]="reporttime"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Hydroponic type</ion-label>\n            <ion-select name="type" #name="ngModel" ngModel>\n                <ion-option *ngFor="let type of hydroponicType" [value]="type.value">\n                    {{type.label}}\n                </ion-option>\n            </ion-select>\n        </ion-item>\n\n        <div class="spacer" id="add-crop-spacer2"></div>\n        <button round type="submit" ion-button color="secondary" block class="btn">\n            Add\n        </button>\n    </form>\n</ion-content>'/*ion-inline-end:"/home/thach/Documents/HydroponicMobileApp/src/pages/add-crop/add-crop.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_crop_service__["a" /* CropService */], __WEBPACK_IMPORTED_MODULE_4__services_toast_service__["a" /* ToastService */]])
    ], AddCropPage);
    return AddCropPage;
}());

//# sourceMappingURL=addCrop.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CropPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_crop_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_threshold_service__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toast_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__schedule_schedule__ = __webpack_require__(340);
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
        this.crop = this.navParams.get('crop');
        this.mac = this.navParams.get('deviceMac');
        this.devicePage = this.navParams.get('devicePage');
        this.loadCropData(null);
    };
    CropPage.prototype.loadCropData = function (refresher) {
        var _this = this;
        this.dataService.getNewestDataByCropId(this.crop.id).subscribe(function (res) {
            if (res.success) {
                _this.data = res.data;
                _this.thresholdService.getThreshold(_this.crop.id).subscribe(function (threshold) {
                    if (threshold.success) {
                        _this.threshold = threshold.data;
                        _this.dataStatus = _this.dataService.getDataStatus(_this.data, threshold.data);
                    }
                    else {
                        _this.toastService.showToast("You have not set threshold yet.");
                    }
                }, function (err) {
                    console.log(err);
                });
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
                    _this.navCtrl.pop().then(function () {
                        _this.devicePage.loadCropList(null);
                    });
                }
                _this.toastService.showToast(res.message);
            }, function (err) {
                console.log(err);
            });
        }
    };
    CropPage.prototype.goToSchedulePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__schedule_schedule__["a" /* SchedulePage */], {
            crop: this.crop,
            deviceMac: this.mac
        });
    };
    CropPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-crop',template:/*ion-inline-start:"/home/thach/Documents/HydroponicMobileApp/src/pages/crop/crop.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Crop\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n  <ion-refresher (ionRefresh)="loadCropData($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n\n  <div text-center>\n    <button ion-button block color="primary" round (click)="goToSchedulePage()">Set schedule</button>\n  </div>\n\n  <div text-center>\n      <button (click)="setThreshold()" block round ion-button>Set threshold for data</button>\n  </div>\n\n  <div>\n    <div id="device-container3">\n      <div id="crop-heading7">\n        {{crop.name}}\n      </div>\n      <ion-grid *ngIf="crop">\n        <ion-row>\n          <div id="device-heading13">\n            Start date: {{crop.startdate | date: \'MM/dd/yyyy HH:mm:ss\'}}\n          </div>\n        </ion-row>\n\n        <ion-row>\n          <div id="device-heading13">\n            Close date: {{crop.closedate | date: \'MM/dd/yyyy HH:mm:ss\'}}\n          </div>\n        </ion-row>\n\n        <ion-row>\n          <div id="device-heading13">\n            Tree type: {{crop.treetype}}\n          </div>\n        </ion-row>\n\n        <ion-row>\n          <div id="device-heading13">\n            Hydroponic type: {{crop.type}}\n          </div>\n        </ion-row>\n\n        <ion-row>\n          <div id="device-heading13">\n            Latest data:\n            <span *ngIf="data">{{data.createdAt | date: \'dd/MM/yyyy hh:mm:ss\'}}</span>\n          </div>\n        </ion-row>\n      </ion-grid>\n      <ion-grid *ngIf="data" id="info-table">\n        <ion-row>\n          <ion-col>\n            <div [class.danger-info]="dataStatus && dataStatus.badStatus.temp">\n              <span>Temperature</span>\n              <br>\n              <span *ngIf="threshold" class="threshold">({{threshold.temperatureLower}} - {{threshold.temperatureUpper}})</span>\n              <br>\n              <span>{{data.temperature}} °C</span>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div [class.danger-info]="dataStatus && dataStatus.badStatus.humidity">\n              <span>Humidity</span>\n              <br>\n              <span *ngIf="threshold" class="threshold">({{threshold.humidityLower}} - {{threshold.humidityUpper}})</span>\n              <br>\n              <span>{{data.humidity}} %</span>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <div [class.danger-info]="dataStatus && dataStatus.badStatus.ppm">\n              <span>ppm</span>\n              <br>\n              <span *ngIf="threshold" class="threshold">({{threshold.ppmLower}} - {{threshold.ppmUpper}})</span>\n              <br>\n              <span>{{data.ppm}}</span>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div [class.danger-info]="dataStatus && dataStatus.badStatus.light">\n              <span>Light</span>\n              <br>\n              <span *ngIf="threshold" class="threshold">({{threshold.lightLower}} - {{threshold.lightUpper}})</span>\n              <br>\n              <span>{{data.light}} lux</span>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n  <ion-fab bottom right>\n      <button ion-fab color="danger" (click)="deleteCrop()">\n          <ion-icon name="trash"></ion-icon>\n      </button>\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/home/thach/Documents/HydroponicMobileApp/src/pages/crop/crop.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_crop_service__["a" /* CropService */],
            __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_4__services_threshold_service__["a" /* ThresholdService */],
            __WEBPACK_IMPORTED_MODULE_5__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], CropPage);
    return CropPage;
}());

//# sourceMappingURL=crop.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constant__ = __webpack_require__(19);
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
    DataService.prototype.getNewestDataByCropId = function (cropId) {
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

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThresholdService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constant__ = __webpack_require__(19);
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

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_schedule_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_schedule_addSchedule__ = __webpack_require__(341);
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
        this.refresh(null);
    };
    SchedulePage.prototype.refresh = function (refresher) {
        var _this = this;
        this.scheduleService.getScheduleByCropId(this.crop.id).subscribe(function (res) {
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
            selector: 'page-schedule',template:/*ion-inline-start:"/home/thach/Documents/HydroponicMobileApp/src/pages/schedule/schedule.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Schedule\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-refresher (ionRefresh)="refresh($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <div text-center>\n        <button [disabled]="synchronized" (click)="syncScheduleToDevice()" ion-button>Send schedule to device</button>\n    </div>\n\n    <div id="schedule-heading">\n        Schedule\n    </div>\n    <div>\n        <ion-grid id="info-table">\n            <div class="table-header">\n                <ion-row>\n                    <ion-col>\n                        <span>Type</span>\n                    </ion-col>\n                    <ion-col>\n                        <span>ID</span>\n                    </ion-col>\n                    <ion-col>\n                        <span>Start</span>\n                    </ion-col>\n                    <ion-col>\n                        <span>Stop</span>\n                    </ion-col>\n                    <ion-col>\n                        <span>Action</span>\n                    </ion-col>\n                </ion-row>\n            </div>\n            <div *ngIf="scheduleList" class="table-content">\n                <ion-row *ngFor="let schedule of scheduleList" class="schedule-row">\n                    <ion-col>\n                        {{schedule.Actuator.type}}\n                    </ion-col>\n                    <ion-col>\n                        {{schedule.Actuator.idonboard.toString()[1]}}\n                    </ion-col>\n                    <ion-col>\n                        {{schedule.starttime}}\n                    </ion-col>\n                    <ion-col>\n                        {{schedule.endtime}}\n                    </ion-col>\n                    <ion-col>\n                        <ion-icon (click)="deleteSchedule(schedule.id)" name="trash" color="danger"></ion-icon>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </ion-grid>\n    </div>\n    <ion-fab bottom right>\n        <button ion-fab (click)="goToAddSchedulePage()">Add</button>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"/home/thach/Documents/HydroponicMobileApp/src/pages/schedule/schedule.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_schedule_service__["a" /* ScheduleService */],
            __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__services_crop_service__["a" /* CropService */]])
    ], SchedulePage);
    return SchedulePage;
}());

//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_schedule_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_constant__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_actuator_service__ = __webpack_require__(47);
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
    function AddSchedulePage(navParams, actuatorService, scheduleService, toastService, navCtrl) {
        this.navParams = navParams;
        this.actuatorService = actuatorService;
        this.scheduleService = scheduleService;
        this.toastService = toastService;
        this.navCtrl = navCtrl;
        this.actuatorType = __WEBPACK_IMPORTED_MODULE_4__utils_constant__["a" /* Constant */].ACTUATOR_TYPE;
        this.schedule = false;
        this.timer = false;
    }
    AddSchedulePage.prototype.ngOnInit = function () {
        var _this = this;
        this.cropId = this.navParams.get('cropId');
        this.mac = this.navParams.get('deviceMac');
        this.schedulePage = this.navParams.get('schedulePage');
        this.actuatorService.getAllActuator(this.mac).subscribe(function (res) {
            if (res.success) {
                _this.availableActuator = res.data;
            }
        }, function (error) {
            console.log(error);
        });
    };
    AddSchedulePage.prototype.addSchedule = function (schedule) {
        var _this = this;
        var newSchedule = {
            CropId: this.cropId,
            ActuatorId: schedule.actuatorId,
            starttime: schedule.schedule ? schedule.starttime : __WEBPACK_IMPORTED_MODULE_4__utils_constant__["a" /* Constant */].DEFAULT_START_TIME,
            endtime: schedule.schedule ? schedule.endtime : __WEBPACK_IMPORTED_MODULE_4__utils_constant__["a" /* Constant */].DEFAULT_STOP_TIME,
            intervaltime: schedule.timer ? schedule.intervaltime : __WEBPACK_IMPORTED_MODULE_4__utils_constant__["a" /* Constant */].DEFAULT_INTERVAL_TIME,
            delaytime: schedule.timer ? schedule.delaytime : __WEBPACK_IMPORTED_MODULE_4__utils_constant__["a" /* Constant */].DEFAULT_DELAY_TIME
        };
        console.log(newSchedule);
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
            selector: 'page-add-schedule',template:/*ion-inline-start:"/home/thach/Documents/HydroponicMobileApp/src/pages/add-schedule/add-schedule.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Add new schedule\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <div class="spacer" id="add-schedule-spacer1"></div>\n    <form #addScheduleForm="ngForm" (ngSubmit)="addSchedule(addScheduleForm.value)">\n\n        <ion-item>\n            <ion-label>Actuator type</ion-label>\n            <ion-select require name="type" #name="ngModel" ngModel>\n                <ion-option *ngFor="let type of actuatorType" [value]="type.type">\n                    {{type.type}}\n                </ion-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Actuator ID</ion-label>\n            <ion-select require name="actuatorId" #name="ngModel" ngModel>\n                <ion-option *ngFor="let actuator of availableActuator | actuatorTypeFilter: {type: addScheduleForm.value.type}" [value]="actuator.id">\n                    {{actuator.idonboard.toString()[1]}}\n                </ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-label>Schedule: </ion-label>\n            <ion-checkbox name="schedule" #name="ngModel" [ngModel]="schedule"></ion-checkbox>\n        </ion-item>\n        <ion-item>\n            <ion-label>Start time: HH:mm</ion-label>\n            <ion-datetime [disabled]="!addScheduleForm.value.schedule" displayFormat="HH:mm A" name="starttime" #name="ngModel" ngModel></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Stop time: HH:mm</ion-label>\n            <ion-datetime [disabled]="!addScheduleForm.value.schedule" displayFormat="HH:mm A" name="endtime" #name="ngModel" ngModel></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Timer: </ion-label>\n            <ion-checkbox name="timer" #name="ngModel" [ngModel]="timer"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Duration (s):</ion-label>\n            <ion-input [disabled]="!addScheduleForm.value.timer" type="number" name="intervaltime" #name="ngModel" ngModel></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Delay (s):</ion-label>\n            <ion-input [disabled]="!addScheduleForm.value.timer" type="number" name="delaytime" #name="ngModel" ngModel></ion-input>\n        </ion-item>\n\n        <div class="spacer" id="add-schedule-spacer2"></div>\n        <button round type="submit" ion-button color="secondary" block class="btn">\n            Add\n        </button>\n    </form>\n</ion-content>'/*ion-inline-end:"/home/thach/Documents/HydroponicMobileApp/src/pages/add-schedule/add-schedule.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__services_actuator_service__["a" /* ActuatorService */],
            __WEBPACK_IMPORTED_MODULE_2__services_schedule_service__["a" /* ScheduleService */], __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AddSchedulePage);
    return AddSchedulePage;
}());

//# sourceMappingURL=addSchedule.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartConfigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_android_permissions__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
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
    function SmartConfigPage(androidPermissions) {
        this.androidPermissions = androidPermissions;
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
            _this.requestPermissionAndScanNetWork();
        });
    };
    SmartConfigPage.prototype.smartConfig = function (config) {
        var network = __WEBPACK_IMPORTED_MODULE_2_lodash__["find"](this.networks, ['ssid', config.ssid.trim()]);
        var isHiddenStr = config.isHidden ? "YES" : "NO";
        esptouch.start(network.ssid, network.bssid, config.password, isHiddenStr, config.count, function (res) {
            console.log(res);
            esptouch.stop(function (success) {
                console.log(success);
            }, function (err) {
                console.log(err);
            });
        }, function (err) {
            console.log(err);
        });
    };
    SmartConfigPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-smartconfig',template:/*ion-inline-start:"/home/thach/Documents/HydroponicMobileApp/src/pages/smartconfig/smartconfig.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Smart Config\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <div id="register-heading1">\n        Smart Config\n    </div>\n    <div class="spacer" id="register-spacer1"></div>\n    <form #smartConfigForm="ngForm" (ngSubmit)="smartConfig(smartConfigForm.value)">\n\n        <ion-item>\n            <ion-label>SSID:</ion-label>\n            <ion-select require name="ssid" #name="ngModel" ngModel>\n                <ion-option *ngFor="let network of networks">\n                    {{network.ssid}}\n                </ion-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Password: </ion-label>\n            <ion-input name="password" #name="ngModel" ngModel></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>SSID is hidden </ion-label>\n            <ion-checkbox name="isHidden" #name="ngModel" [ngModel]="isHidden"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Task result count:</ion-label>\n            <ion-input type="number" name="count" #name="ngModel" [ngModel]="count"></ion-input>\n        </ion-item>\n\n        <div class="spacer" id="add-schedule-spacer2"></div>\n        <button round type="submit" ion-button color="secondary" block class="btn">\n            Confirm\n        </button>\n    </form>\n</ion-content>'/*ion-inline-end:"/home/thach/Documents/HydroponicMobileApp/src/pages/smartconfig/smartconfig.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_android_permissions__["a" /* AndroidPermissions */]])
    ], SmartConfigPage);
    return SmartConfigPage;
}());

//# sourceMappingURL=smartconfig.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_register_service__ = __webpack_require__(346);
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
            selector: 'page-register',template:/*ion-inline-start:"/home/thach/Documents/HydroponicMobileApp/src/pages/register/register.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>\n        Register\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n    <div id="register-heading1">\n      Hydroponic\n    </div>\n    <div class="spacer" id="register-spacer1"></div>\n    <form #registerForm="ngForm" (ngSubmit)="register(registerForm.value)">\n\n      <ion-item>\n          <ion-input required type="text" id="name" name="name" placeholder="Username" #name="ngModel" ngModel></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input required type="email" id="email" name="email" placeholder="Email" #email="ngModel" ngModel></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-input required type="number" id="phone" name="phone" placeholder="Phone" #phone="ngModel" ngModel></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-input required type="password" name="password" placeholder="Password" #password="ngModel" ngModel></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-input required type="password" name="passwordConfirm" placeholder="Retype password" #passwordConfirm="ngModel" ngModel></ion-input>\n        </ion-item>\n\n      <div class="spacer" id="register-spacer2"></div>\n      <button round type="submit" id="register-button" ion-button color="secondary" block class="btn">\n          Register\n      </button>    \n    </form>\n  </ion-content>'/*ion-inline-end:"/home/thach/Documents/HydroponicMobileApp/src/pages/register/register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_4__services_register_service__["a" /* RegisterService */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constant__ = __webpack_require__(19);
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

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(369);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__interceptors_auth_interceptor__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_device_device__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_actuator_list_actuatorList__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_register_register__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_add_crop_addCrop__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_crop_crop__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_add_actuator_addActuator__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_actuator_actuator__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_schedule_schedule__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_add_schedule_addSchedule__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_smartconfig_smartconfig__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_background_mode__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_local_notifications__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_push__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_qr_scanner__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_auth_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_device_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_toast_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_crop_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_data_service__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_schedule_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_threshold_service__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_actuator_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_register_service__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_android_permissions__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pipes_actuatorType_pipe__ = __webpack_require__(433);
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
                __WEBPACK_IMPORTED_MODULE_39__pipes_actuatorType_pipe__["a" /* ActuatorTypePipe */]
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
                __WEBPACK_IMPORTED_MODULE_29__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_30__services_device_service__["a" /* DeviceService */],
                __WEBPACK_IMPORTED_MODULE_31__services_toast_service__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_36__services_actuator_service__["a" /* ActuatorService */],
                __WEBPACK_IMPORTED_MODULE_32__services_crop_service__["a" /* CropService */],
                __WEBPACK_IMPORTED_MODULE_33__services_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_35__services_threshold_service__["a" /* ThresholdService */],
                __WEBPACK_IMPORTED_MODULE_34__services_schedule_service__["a" /* ScheduleService */],
                __WEBPACK_IMPORTED_MODULE_37__services_register_service__["a" /* RegisterService */],
                __WEBPACK_IMPORTED_MODULE_38__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_7__interceptors_auth_interceptor__["a" /* HttpsRequestInterceptor */], multi: true, },
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(206);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/thach/Documents/HydroponicMobileApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/thach/Documents/HydroponicMobileApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 211,
	"./af.js": 211,
	"./ar": 212,
	"./ar-dz": 213,
	"./ar-dz.js": 213,
	"./ar-kw": 214,
	"./ar-kw.js": 214,
	"./ar-ly": 215,
	"./ar-ly.js": 215,
	"./ar-ma": 216,
	"./ar-ma.js": 216,
	"./ar-sa": 217,
	"./ar-sa.js": 217,
	"./ar-tn": 218,
	"./ar-tn.js": 218,
	"./ar.js": 212,
	"./az": 219,
	"./az.js": 219,
	"./be": 220,
	"./be.js": 220,
	"./bg": 221,
	"./bg.js": 221,
	"./bm": 222,
	"./bm.js": 222,
	"./bn": 223,
	"./bn.js": 223,
	"./bo": 224,
	"./bo.js": 224,
	"./br": 225,
	"./br.js": 225,
	"./bs": 226,
	"./bs.js": 226,
	"./ca": 227,
	"./ca.js": 227,
	"./cs": 228,
	"./cs.js": 228,
	"./cv": 229,
	"./cv.js": 229,
	"./cy": 230,
	"./cy.js": 230,
	"./da": 231,
	"./da.js": 231,
	"./de": 232,
	"./de-at": 233,
	"./de-at.js": 233,
	"./de-ch": 234,
	"./de-ch.js": 234,
	"./de.js": 232,
	"./dv": 235,
	"./dv.js": 235,
	"./el": 236,
	"./el.js": 236,
	"./en-au": 237,
	"./en-au.js": 237,
	"./en-ca": 238,
	"./en-ca.js": 238,
	"./en-gb": 239,
	"./en-gb.js": 239,
	"./en-ie": 240,
	"./en-ie.js": 240,
	"./en-nz": 241,
	"./en-nz.js": 241,
	"./eo": 242,
	"./eo.js": 242,
	"./es": 243,
	"./es-do": 244,
	"./es-do.js": 244,
	"./es-us": 245,
	"./es-us.js": 245,
	"./es.js": 243,
	"./et": 246,
	"./et.js": 246,
	"./eu": 247,
	"./eu.js": 247,
	"./fa": 248,
	"./fa.js": 248,
	"./fi": 249,
	"./fi.js": 249,
	"./fo": 250,
	"./fo.js": 250,
	"./fr": 251,
	"./fr-ca": 252,
	"./fr-ca.js": 252,
	"./fr-ch": 253,
	"./fr-ch.js": 253,
	"./fr.js": 251,
	"./fy": 254,
	"./fy.js": 254,
	"./gd": 255,
	"./gd.js": 255,
	"./gl": 256,
	"./gl.js": 256,
	"./gom-latn": 257,
	"./gom-latn.js": 257,
	"./gu": 258,
	"./gu.js": 258,
	"./he": 259,
	"./he.js": 259,
	"./hi": 260,
	"./hi.js": 260,
	"./hr": 261,
	"./hr.js": 261,
	"./hu": 262,
	"./hu.js": 262,
	"./hy-am": 263,
	"./hy-am.js": 263,
	"./id": 264,
	"./id.js": 264,
	"./is": 265,
	"./is.js": 265,
	"./it": 266,
	"./it.js": 266,
	"./ja": 267,
	"./ja.js": 267,
	"./jv": 268,
	"./jv.js": 268,
	"./ka": 269,
	"./ka.js": 269,
	"./kk": 270,
	"./kk.js": 270,
	"./km": 271,
	"./km.js": 271,
	"./kn": 272,
	"./kn.js": 272,
	"./ko": 273,
	"./ko.js": 273,
	"./ky": 274,
	"./ky.js": 274,
	"./lb": 275,
	"./lb.js": 275,
	"./lo": 276,
	"./lo.js": 276,
	"./lt": 277,
	"./lt.js": 277,
	"./lv": 278,
	"./lv.js": 278,
	"./me": 279,
	"./me.js": 279,
	"./mi": 280,
	"./mi.js": 280,
	"./mk": 281,
	"./mk.js": 281,
	"./ml": 282,
	"./ml.js": 282,
	"./mr": 283,
	"./mr.js": 283,
	"./ms": 284,
	"./ms-my": 285,
	"./ms-my.js": 285,
	"./ms.js": 284,
	"./mt": 286,
	"./mt.js": 286,
	"./my": 287,
	"./my.js": 287,
	"./nb": 288,
	"./nb.js": 288,
	"./ne": 289,
	"./ne.js": 289,
	"./nl": 290,
	"./nl-be": 291,
	"./nl-be.js": 291,
	"./nl.js": 290,
	"./nn": 292,
	"./nn.js": 292,
	"./pa-in": 293,
	"./pa-in.js": 293,
	"./pl": 294,
	"./pl.js": 294,
	"./pt": 295,
	"./pt-br": 296,
	"./pt-br.js": 296,
	"./pt.js": 295,
	"./ro": 297,
	"./ro.js": 297,
	"./ru": 298,
	"./ru.js": 298,
	"./sd": 299,
	"./sd.js": 299,
	"./se": 300,
	"./se.js": 300,
	"./si": 301,
	"./si.js": 301,
	"./sk": 302,
	"./sk.js": 302,
	"./sl": 303,
	"./sl.js": 303,
	"./sq": 304,
	"./sq.js": 304,
	"./sr": 305,
	"./sr-cyrl": 306,
	"./sr-cyrl.js": 306,
	"./sr.js": 305,
	"./ss": 307,
	"./ss.js": 307,
	"./sv": 308,
	"./sv.js": 308,
	"./sw": 309,
	"./sw.js": 309,
	"./ta": 310,
	"./ta.js": 310,
	"./te": 311,
	"./te.js": 311,
	"./tet": 312,
	"./tet.js": 312,
	"./th": 313,
	"./th.js": 313,
	"./tl-ph": 314,
	"./tl-ph.js": 314,
	"./tlh": 315,
	"./tlh.js": 315,
	"./tr": 316,
	"./tr.js": 316,
	"./tzl": 317,
	"./tzl.js": 317,
	"./tzm": 318,
	"./tzm-latn": 319,
	"./tzm-latn.js": 319,
	"./tzm.js": 318,
	"./uk": 320,
	"./uk.js": 320,
	"./ur": 321,
	"./ur.js": 321,
	"./uz": 322,
	"./uz-latn": 323,
	"./uz-latn.js": 323,
	"./uz.js": 322,
	"./vi": 324,
	"./vi.js": 324,
	"./x-pseudo": 325,
	"./x-pseudo.js": 325,
	"./yo": 326,
	"./yo.js": 326,
	"./zh-cn": 327,
	"./zh-cn.js": 327,
	"./zh-hk": 328,
	"./zh-hk.js": 328,
	"./zh-tw": 329,
	"./zh-tw.js": 329
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
webpackContext.id = 425;

/***/ }),

/***/ 429:
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

/***/ 433:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constant__ = __webpack_require__(19);
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
    CropService.prototype.getNewestCropByDeviceMac = function (mac) {
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

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActuatorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_constant__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(333);
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

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toast_service__ = __webpack_require__(15);
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
            selector: 'page-login',template:/*ion-inline-start:"/home/thach/Documents/HydroponicMobileApp/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Login\n    </ion-title>\n    <!-- <ion-buttons end>\n        <button color="secondary" ion-button (click)="register()">\n            Register\n        </button>\n    </ion-buttons> -->\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2">\n  <div id="login-heading2">\n    Hydroponic\n  </div>\n  <div class="spacer" id="login-spacer1"></div>\n  <form id="login-form5" #loginForm="ngForm" (ngSubmit)="login(loginForm.value)">\n    <ion-item id="login-input4">\n      <ion-input required type="email" id="email" name="email" placeholder="Email" #email="ngModel" ngModel></ion-input>\n      <div *ngIf="email.errors && (email.dirty || email.touched)" class="alert alert-danger">\n        <div *ngIf="email.errors.required">\n          Email is required.\n        </div>  \n      </div>\n    </ion-item>\n    <ion-item id="login-input5">\n      <ion-input required type="password" name="password" placeholder="Password" #password="ngModel" ngModel></ion-input>\n    </ion-item>\n    <div class="spacer" id="login-spacer2"></div>\n    <button round type="submit" id="login-button2" ion-button color="secondary" block class="btn">\n        Login\n    </button>    \n  </form>\n  <div class="spacer" id="login-spacer3"></div>\n  <div id="register-line" text-center>\n    Do not have account ?\n    <br>\n    <button (click)="register()" round ion-button>Register</button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/thach/Documents/HydroponicMobileApp/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[348]);
//# sourceMappingURL=main.js.map