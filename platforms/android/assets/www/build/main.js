webpackJsonp([0],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constant__ = __webpack_require__(18);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_constant__ = __webpack_require__(18);
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

/***/ 121:
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
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 162:
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
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constant; });
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
    return Constant;
}());

//# sourceMappingURL=constant.js.map

/***/ }),

/***/ 19:
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

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(344);
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

/***/ 206:
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

/***/ 207:
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

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_device_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toast_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__device_device__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_qr_scanner__ = __webpack_require__(341);
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
        var _this = this;
        this.deviceService.getAllDevice().subscribe(function (res) {
            if (res.success) {
                _this.deviceList = res.data;
                _this.deviceList.forEach(function (device) {
                    var topic = '/topics/' + device.mac.replace(/[:]/g, '');
                    _this.topicList.push(topic);
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
        });
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
            refresher.complete();
        }, function (err) {
            console.log('get all device err: ' + err);
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
            deviceName: deviceName
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

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_crop_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_device_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actuator_list_actuatorList__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_crop_addCrop__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__crop_crop__ = __webpack_require__(335);
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
    DevicePage.prototype.goToCropPage = function (cropId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__crop_crop__["a" /* CropPage */], {
            cropId: cropId,
            deviceMac: this.mac
        });
    };
    DevicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-device',template:/*ion-inline-start:"/home/thach/Documents/HydroponicMobileApp/src/pages/device/device.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Device\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div text-center>\n    <button ion-button block color="primary" round (click)="goToAddCropPage()">Add new crop</button>\n    <button (click)="goToActuatorListPage()" block round ion-button>Actuator list</button>\n  </div>\n  <div id="device-heading7">\n    {{name}}\n  </div>\n  <div *ngIf="cropList">\n    <ion-list>\n      <div *ngFor="let crop of cropList" (click)="goToCropPage(crop.id)" style="margin-left: 10px">\n        <div id="devider1" class="devider"></div>\n        <ion-grid>\n\n          <ion-row>\n            <div id="home-heading4">\n              {{crop.name}}\n            </div>\n          </ion-row>\n\n          <ion-row>\n            <div id="home-heading5">\n              Start date: {{crop.startdate | date: \'MM/dd/yyyy HH:mm:ss\'}}\n            </div>\n          </ion-row>\n\n          <ion-row>\n            <div id="home-heading5">\n              Close date: {{crop.closedate | date: \'MM/dd/yyyy HH:mm:ss\'}}\n            </div>\n          </ion-row>\n\n          <ion-row>\n            <div id="home-heading5">\n              Tree type: {{crop.treetype}}\n            </div>\n          </ion-row>\n\n          <ion-row>\n            <div id="home-heading5">\n              Hydroponic type: {{crop.type}}\n            </div>\n          </ion-row>\n\n          <ion-row>\n            <div id="home-heading5">\n              Status: {{crop.status}}\n            </div>\n          </ion-row>\n\n        </ion-grid>\n        <div id="devider2" class="devider"></div>\n      </div>\n    </ion-list>\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"/home/thach/Documents/HydroponicMobileApp/src/pages/device/device.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_crop_service__["a" /* CropService */], __WEBPACK_IMPORTED_MODULE_4__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_3__services_device_service__["a" /* DeviceService */]])
    ], DevicePage);
    return DevicePage;
}());

//# sourceMappingURL=device.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActuatorListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_actuator_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_actuator_addActuator__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actuator_actuator__ = __webpack_require__(214);
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
        this.actuatorService.getAllActuator(this.mac).subscribe(function (result) {
            if (result.success) {
                _this.data = result.data;
            }
            else {
                _this.toastService.showToast("Cannot load all actuators");
            }
            if (refresher) {
                refresher.complete();
            }
        }, function (error) {
            console.log(error);
        });
    };
    ActuatorListPage.prototype.changeStatus = function (actuator) {
        var _this = this;
        var msg = actuator.status === 'on' ? 'deactive' : 'active';
        var newStatus = actuator.status === 'on' ? 'off' : 'on';
        if (confirm("Do you want to " + msg + " this ?")) {
            this.actuatorService.changeActuatorStatus(actuator.id, newStatus, this.mac, actuator.idonboard).subscribe(function (res) {
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
    ActuatorListPage.prototype.deleteActuator = function (actuatorId) {
        alert(actuatorId);
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
            selector: 'page-actuator-list',template:/*ion-inline-start:"/home/thach/Documents/HydroponicMobileApp/src/pages/actuator-list/actuator-list.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Actuator List\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <div text-center>\n        <button ion-button block color="primary" round (click)="goToAddActuatorPage()">Add new actuator</button>\n    </div>\n    <div>\n        <ion-grid id="info-table">\n            <div class="table-header">\n                <ion-row>\n                    <ion-col>\n                        <span>Type</span>\n                    </ion-col>\n                    <ion-col>\n                        <span>ID</span>\n                    </ion-col>\n                    <ion-col>\n                        <span>Priority</span>\n                    </ion-col>\n                    <ion-col>\n                        <span>Active</span>\n                    </ion-col>\n                    <ion-col>\n                        <span>Action</span>\n                    </ion-col>\n                </ion-row>\n            </div>\n            <div *ngIf="data" class="table-content">\n                <ion-row *ngFor="let actuator of data" class="actuator-row">\n                    <ion-col>\n                        {{actuator.type}}\n                    </ion-col>\n                    <ion-col>\n                        {{actuator.idonboard.toString()[1]}}\n                    </ion-col>\n                    <ion-col>\n                        {{actuator.priority}}\n                    </ion-col>\n                    <ion-col>\n                        <button *ngIf="actuator.status === \'on\'" (click)="changeStatus(actuator)" class="custome btn btn-success">Active</button>\n                        <button *ngIf="actuator.status !== \'on\'" (click)="changeStatus(actuator)" class="custome btn btn-danger">Deactive</button>\n                    </ion-col>\n                    <ion-col>\n                        <ion-icon (click)="deleteActuator(actuator.id)" name="trash" color="danger"></ion-icon>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </ion-grid>\n    </div>\n</ion-content>'/*ion-inline-end:"/home/thach/Documents/HydroponicMobileApp/src/pages/actuator-list/actuator-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_actuator_service__["a" /* ActuatorService */],
            __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ActuatorListPage);
    return ActuatorListPage;
}());

//# sourceMappingURL=actuatorList.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddActuatorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constant__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_actuator_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_service__ = __webpack_require__(19);
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

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActuatorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_actuator_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(19);
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
    ActuatorPage.prototype.changeStatus = function () {
        var _this = this;
        var msg = this.actuator.status === 'on' ? 'deactive' : 'active';
        var newStatus = this.actuator.status === 'on' ? 'off' : 'on';
        if (confirm("Do you want to " + msg + " this ?")) {
            this.actuatorService.changeActuatorStatus(this.actuator.id, newStatus, this.actuator.DeviceMac, this.actuator.idonboard).subscribe(function (res) {
                if (res.success) {
                    _this.actuator.status = newStatus;
                }
                _this.toastService.showToast(res.message);
            }, function (err) {
                console.log(err);
                _this.toastService.showToast("Cannot change status of this actuator !");
            });
        }
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

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCropPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constant__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_crop_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_service__ = __webpack_require__(19);
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

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CropPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_crop_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_threshold_service__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toast_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__schedule_schedule__ = __webpack_require__(338);
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
        this.cropId = this.navParams.get('cropId');
        this.mac = this.navParams.get('deviceMac');
        this.loadCropData(null);
    };
    CropPage.prototype.loadCropData = function (refresher) {
        var _this = this;
        this.dataService.getNewestDataByCropId(this.cropId).subscribe(function (res) {
            if (res.success) {
                _this.data = res.data;
                _this.thresholdService.getThreshold(_this.cropId).subscribe(function (threshold) {
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
    CropPage.prototype.goToSchedulePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__schedule_schedule__["a" /* SchedulePage */], {
            cropId: this.cropId
        });
    };
    CropPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-crop',template:/*ion-inline-start:"/home/thach/Documents/HydroponicMobileApp/src/pages/crop/crop.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>\n        Crop\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding id="page4">\n    <ion-refresher (ionRefresh)="loadCropData($event)">\n      <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n      </ion-refresher-content>\n    </ion-refresher>\n\n    <div id="device-heading7">\n      {{name}}\n    </div>\n    <div text-center>\n      <button ion-button block color="primary" round (click)="goToSchedulePage()">Set schedule</button>\n    </div>\n    <div>\n      <div id="device-container3">\n        <span id="device-heading13">\n          Latest data:\n          <span *ngIf="data">{{data.createdAt | date: \'dd/MM/yyyy hh:mm:ss\'}}</span>\n        </span>\n        <ion-grid *ngIf="data" id="info-table">\n          <ion-row>\n            <ion-col>\n              <div [class.danger-info]="dataStatus && dataStatus.badStatus.temp">\n                <span>Temperature</span>\n                <br>\n                <span *ngIf="threshold" class="threshold">({{threshold.temperatureLower}} - {{threshold.temperatureUpper}})</span>\n                <br>\n                <span>{{data.temperature}} °C</span>\n              </div>\n            </ion-col>\n            <ion-col>\n              <div [class.danger-info]="dataStatus && dataStatus.badStatus.humidity">\n                <span>Humidity</span>\n                <br>\n                <span *ngIf="threshold" class="threshold">({{threshold.humidityLower}} - {{threshold.humidityUpper}})</span>\n                <br>\n                <span>{{data.humidity}} %</span>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div [class.danger-info]="dataStatus && dataStatus.badStatus.ppm">\n                <span>ppm</span>\n                <br>\n                <span *ngIf="threshold" class="threshold">({{threshold.ppmLower}} - {{threshold.ppmUpper}})</span>\n                <br>\n                <span>{{data.ppm}}</span>\n              </div>\n            </ion-col>\n            <ion-col>\n              <div [class.danger-info]="dataStatus && dataStatus.badStatus.light">\n                <span>Light</span>\n                <br>\n                <span *ngIf="threshold" class="threshold">({{threshold.lightLower}} - {{threshold.lightUpper}})</span>\n                <br>\n                <span>{{data.light}} lux</span>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n  \n  \n  </ion-content>'/*ion-inline-end:"/home/thach/Documents/HydroponicMobileApp/src/pages/crop/crop.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_crop_service__["a" /* CropService */],
            __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_4__services_threshold_service__["a" /* ThresholdService */],
            __WEBPACK_IMPORTED_MODULE_5__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], CropPage);
    return CropPage;
}());

//# sourceMappingURL=crop.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constant__ = __webpack_require__(18);
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

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThresholdService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constant__ = __webpack_require__(18);
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

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_schedule_service__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_schedule_addSchedule__ = __webpack_require__(340);
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
    function SchedulePage(navParams, scheduleService, toastService, navCtrl) {
        this.navParams = navParams;
        this.scheduleService = scheduleService;
        this.toastService = toastService;
        this.navCtrl = navCtrl;
    }
    SchedulePage.prototype.ngOnInit = function () {
        this.cropId = this.navParams.get('cropId');
        this.loadSchedule(null);
    };
    SchedulePage.prototype.loadSchedule = function (refresher) {
        var _this = this;
        this.scheduleService.getScheduleByCropId(this.cropId).subscribe(function (res) {
            if (res.success) {
                _this.scheduleList = res.data;
                console.log(_this.scheduleList);
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
    SchedulePage.prototype.goToAddSchedulePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__add_schedule_addSchedule__["a" /* AddSchedulePage */], {
            cropId: this.cropId
        });
    };
    SchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-schedule',template:/*ion-inline-start:"/home/thach/Documents/HydroponicMobileApp/src/pages/schedule/schedule.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Schedule\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-refresher (ionRefresh)="loadSchedules($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <div id="schedule-heading">\n        Schedule\n    </div>\n\n    <div>\n        <ion-grid id="info-table">\n            <div class="table-header">\n                <ion-row>\n                    <ion-col>\n                        <span>Type</span>\n                    </ion-col>\n                    <ion-col>\n                        <span>ID</span>\n                    </ion-col>\n                    <ion-col>\n                        <span>Start</span>\n                    </ion-col>\n                    <ion-col>\n                        <span>Stop</span>\n                    </ion-col>\n                    <ion-col>\n                        <span>Action</span>\n                    </ion-col>\n                </ion-row>\n            </div>\n            <div *ngIf="scheduleList" class="table-content">\n                <ion-row *ngFor="let schedule of scheduleList" class="schedule-row">\n                    <ion-col>\n                        {{schedule.Actuator.type}}\n                    </ion-col>\n                    <ion-col>\n                        {{schedule.Actuator.idonboard.toString()[1]}}\n                    </ion-col>\n                    <ion-col>\n                        {{schedule.starttime}}\n                    </ion-col>\n                    <ion-col>\n                        {{schedule.endtime}}\n                    </ion-col>\n                    <ion-col>\n                        <ion-icon (click)="deleteActuator(actuator.id)" name="trash" color="danger"></ion-icon>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </ion-grid>\n    </div>\n    <ion-fab bottom right>\n        <button ion-fab (click)="goToAddSchedulePage()">Add</button>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"/home/thach/Documents/HydroponicMobileApp/src/pages/schedule/schedule.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_schedule_service__["a" /* ScheduleService */],
            __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], SchedulePage);
    return SchedulePage;
}());

//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constant__ = __webpack_require__(18);
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
    ScheduleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ScheduleService);
    return ScheduleService;
}());

//# sourceMappingURL=schedule.service.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constant__ = __webpack_require__(18);
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
    function AddSchedulePage(navParams) {
        this.navParams = navParams;
        this.actuatorType = __WEBPACK_IMPORTED_MODULE_2__utils_constant__["a" /* Constant */].ACTUATOR_TYPE;
    }
    AddSchedulePage.prototype.ngOnInit = function () {
        this.cropId = this.navParams.get('cropId');
        console.log(this.cropId);
    };
    // var newScheduleItem ={
    //     CropId: parseInt($scope.newSchedule.CropId),
    //     ActuatorId: $scope.newSchedule.ActuatorId,
    //     starttime: $("#starttime").val(),
    //     endtime: $("#endtime").val(),
    //     intervaltime: $scope.newSchedule.intervaltime,
    //     delaytime: $scope.newSchedule.delaytime
    //   }
    AddSchedulePage.prototype.addSchedule = function (schedule) {
        var newSchedule = {
            CropId: this.cropId,
            ActuatorId: schedule.actuatorId,
            starttime: schedule.starttime,
            endtime: schedule.endtime,
            intervaltime: __WEBPACK_IMPORTED_MODULE_2__utils_constant__["a" /* Constant */].DEFAULT_INTERVAL_TIME,
            delaytime: __WEBPACK_IMPORTED_MODULE_2__utils_constant__["a" /* Constant */].DEFAULT_DELAY_TIME
        };
        console.log(newSchedule);
    };
    AddSchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-schedule',template:/*ion-inline-start:"/home/thach/Documents/HydroponicMobileApp/src/pages/add-schedule/add-schedule.html"*/'<ion-header>\n        <ion-navbar>\n            <ion-title>\n                Add new schedule\n            </ion-title>\n        </ion-navbar>\n    </ion-header>\n    <ion-content padding>\n        <div class="spacer" id="add-schedule-spacer1"></div>\n        <form #addScheduleForm="ngForm" (ngSubmit)="addSchedule(addScheduleForm.value)">\n    \n            <ion-item>\n                <ion-label>Actuator type</ion-label>\n                <ion-select require name="type" #name="ngModel" ngModel>\n                    <ion-option *ngFor="let type of actuatorType" [value]="type.type">\n                        {{type.type}}\n                    </ion-option>\n                </ion-select>\n            </ion-item>\n    \n            <ion-item>\n                <ion-label>Actuator ID</ion-label>\n                <ion-input required type="text" name="actuatorId" #name="ngModel" ngModel></ion-input>\n            </ion-item>\n    \n            <ion-item>\n                <ion-label>Start time: HH:mm</ion-label>\n                <ion-datetime required displayFormat="HH:mm A" name="starttime" #name="ngModel" ngModel></ion-datetime>\n            </ion-item>\n    \n            <ion-item>\n                <ion-label>Stop time: HH:mm</ion-label>\n                <ion-datetime required displayFormat="HH:mm A" name="endtime" #name="ngModel" ngModel></ion-datetime>\n            </ion-item>\n    \n            <div class="spacer" id="add-schedule-spacer2"></div>\n            <button round type="submit" ion-button color="secondary" block class="btn">\n                Add\n            </button>\n        </form>\n    </ion-content>'/*ion-inline-end:"/home/thach/Documents/HydroponicMobileApp/src/pages/add-schedule/add-schedule.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], AddSchedulePage);
    return AddSchedulePage;
}());

//# sourceMappingURL=addSchedule.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_register_service__ = __webpack_require__(343);
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

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constant__ = __webpack_require__(18);
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

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(366);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__interceptors_auth_interceptor__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_device_device__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_actuator_list_actuatorList__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_register_register__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_add_crop_addCrop__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_crop_crop__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_add_actuator_addActuator__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_actuator_actuator__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_schedule_schedule__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_add_schedule_addSchedule__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_background_mode__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_local_notifications__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_push__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_qr_scanner__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_auth_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_device_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_toast_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_crop_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_data_service__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_schedule_service__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_threshold_service__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_actuator_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_register_service__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pipes_actuatorType_pipe__ = __webpack_require__(431);
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
                __WEBPACK_IMPORTED_MODULE_37__pipes_actuatorType_pipe__["a" /* ActuatorTypePipe */]
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
                __WEBPACK_IMPORTED_MODULE_21__pages_add_schedule_addSchedule__["a" /* AddSchedulePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_background_mode__["a" /* BackgroundMode */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_qr_scanner__["a" /* QRScanner */],
                __WEBPACK_IMPORTED_MODULE_28__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_29__services_device_service__["a" /* DeviceService */],
                __WEBPACK_IMPORTED_MODULE_30__services_toast_service__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_35__services_actuator_service__["a" /* ActuatorService */],
                __WEBPACK_IMPORTED_MODULE_31__services_crop_service__["a" /* CropService */],
                __WEBPACK_IMPORTED_MODULE_32__services_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_34__services_threshold_service__["a" /* ThresholdService */],
                __WEBPACK_IMPORTED_MODULE_33__services_schedule_service__["a" /* ScheduleService */],
                __WEBPACK_IMPORTED_MODULE_36__services_register_service__["a" /* RegisterService */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_7__interceptors_auth_interceptor__["a" /* HttpsRequestInterceptor */], multi: true, },
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(205);
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

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 216,
	"./af.js": 216,
	"./ar": 217,
	"./ar-dz": 218,
	"./ar-dz.js": 218,
	"./ar-kw": 219,
	"./ar-kw.js": 219,
	"./ar-ly": 220,
	"./ar-ly.js": 220,
	"./ar-ma": 221,
	"./ar-ma.js": 221,
	"./ar-sa": 222,
	"./ar-sa.js": 222,
	"./ar-tn": 223,
	"./ar-tn.js": 223,
	"./ar.js": 217,
	"./az": 224,
	"./az.js": 224,
	"./be": 225,
	"./be.js": 225,
	"./bg": 226,
	"./bg.js": 226,
	"./bm": 227,
	"./bm.js": 227,
	"./bn": 228,
	"./bn.js": 228,
	"./bo": 229,
	"./bo.js": 229,
	"./br": 230,
	"./br.js": 230,
	"./bs": 231,
	"./bs.js": 231,
	"./ca": 232,
	"./ca.js": 232,
	"./cs": 233,
	"./cs.js": 233,
	"./cv": 234,
	"./cv.js": 234,
	"./cy": 235,
	"./cy.js": 235,
	"./da": 236,
	"./da.js": 236,
	"./de": 237,
	"./de-at": 238,
	"./de-at.js": 238,
	"./de-ch": 239,
	"./de-ch.js": 239,
	"./de.js": 237,
	"./dv": 240,
	"./dv.js": 240,
	"./el": 241,
	"./el.js": 241,
	"./en-au": 242,
	"./en-au.js": 242,
	"./en-ca": 243,
	"./en-ca.js": 243,
	"./en-gb": 244,
	"./en-gb.js": 244,
	"./en-ie": 245,
	"./en-ie.js": 245,
	"./en-nz": 246,
	"./en-nz.js": 246,
	"./eo": 247,
	"./eo.js": 247,
	"./es": 248,
	"./es-do": 249,
	"./es-do.js": 249,
	"./es-us": 250,
	"./es-us.js": 250,
	"./es.js": 248,
	"./et": 251,
	"./et.js": 251,
	"./eu": 252,
	"./eu.js": 252,
	"./fa": 253,
	"./fa.js": 253,
	"./fi": 254,
	"./fi.js": 254,
	"./fo": 255,
	"./fo.js": 255,
	"./fr": 256,
	"./fr-ca": 257,
	"./fr-ca.js": 257,
	"./fr-ch": 258,
	"./fr-ch.js": 258,
	"./fr.js": 256,
	"./fy": 259,
	"./fy.js": 259,
	"./gd": 260,
	"./gd.js": 260,
	"./gl": 261,
	"./gl.js": 261,
	"./gom-latn": 262,
	"./gom-latn.js": 262,
	"./gu": 263,
	"./gu.js": 263,
	"./he": 264,
	"./he.js": 264,
	"./hi": 265,
	"./hi.js": 265,
	"./hr": 266,
	"./hr.js": 266,
	"./hu": 267,
	"./hu.js": 267,
	"./hy-am": 268,
	"./hy-am.js": 268,
	"./id": 269,
	"./id.js": 269,
	"./is": 270,
	"./is.js": 270,
	"./it": 271,
	"./it.js": 271,
	"./ja": 272,
	"./ja.js": 272,
	"./jv": 273,
	"./jv.js": 273,
	"./ka": 274,
	"./ka.js": 274,
	"./kk": 275,
	"./kk.js": 275,
	"./km": 276,
	"./km.js": 276,
	"./kn": 277,
	"./kn.js": 277,
	"./ko": 278,
	"./ko.js": 278,
	"./ky": 279,
	"./ky.js": 279,
	"./lb": 280,
	"./lb.js": 280,
	"./lo": 281,
	"./lo.js": 281,
	"./lt": 282,
	"./lt.js": 282,
	"./lv": 283,
	"./lv.js": 283,
	"./me": 284,
	"./me.js": 284,
	"./mi": 285,
	"./mi.js": 285,
	"./mk": 286,
	"./mk.js": 286,
	"./ml": 287,
	"./ml.js": 287,
	"./mr": 288,
	"./mr.js": 288,
	"./ms": 289,
	"./ms-my": 290,
	"./ms-my.js": 290,
	"./ms.js": 289,
	"./mt": 291,
	"./mt.js": 291,
	"./my": 292,
	"./my.js": 292,
	"./nb": 293,
	"./nb.js": 293,
	"./ne": 294,
	"./ne.js": 294,
	"./nl": 295,
	"./nl-be": 296,
	"./nl-be.js": 296,
	"./nl.js": 295,
	"./nn": 297,
	"./nn.js": 297,
	"./pa-in": 298,
	"./pa-in.js": 298,
	"./pl": 299,
	"./pl.js": 299,
	"./pt": 300,
	"./pt-br": 301,
	"./pt-br.js": 301,
	"./pt.js": 300,
	"./ro": 302,
	"./ro.js": 302,
	"./ru": 303,
	"./ru.js": 303,
	"./sd": 304,
	"./sd.js": 304,
	"./se": 305,
	"./se.js": 305,
	"./si": 306,
	"./si.js": 306,
	"./sk": 307,
	"./sk.js": 307,
	"./sl": 308,
	"./sl.js": 308,
	"./sq": 309,
	"./sq.js": 309,
	"./sr": 310,
	"./sr-cyrl": 311,
	"./sr-cyrl.js": 311,
	"./sr.js": 310,
	"./ss": 312,
	"./ss.js": 312,
	"./sv": 313,
	"./sv.js": 313,
	"./sw": 314,
	"./sw.js": 314,
	"./ta": 315,
	"./ta.js": 315,
	"./te": 316,
	"./te.js": 316,
	"./tet": 317,
	"./tet.js": 317,
	"./th": 318,
	"./th.js": 318,
	"./tl-ph": 319,
	"./tl-ph.js": 319,
	"./tlh": 320,
	"./tlh.js": 320,
	"./tr": 321,
	"./tr.js": 321,
	"./tzl": 322,
	"./tzl.js": 322,
	"./tzm": 323,
	"./tzm-latn": 324,
	"./tzm-latn.js": 324,
	"./tzm.js": 323,
	"./uk": 325,
	"./uk.js": 325,
	"./ur": 326,
	"./ur.js": 326,
	"./uz": 327,
	"./uz-latn": 328,
	"./uz-latn.js": 328,
	"./uz.js": 327,
	"./vi": 329,
	"./vi.js": 329,
	"./x-pseudo": 330,
	"./x-pseudo.js": 330,
	"./yo": 331,
	"./yo.js": 331,
	"./zh-cn": 332,
	"./zh-cn.js": 332,
	"./zh-hk": 333,
	"./zh-hk.js": 333,
	"./zh-tw": 334,
	"./zh-tw.js": 334
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
webpackContext.id = 423;

/***/ }),

/***/ 427:
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

/***/ 431:
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

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toast_service__ = __webpack_require__(19);
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

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CropService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constant__ = __webpack_require__(18);
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
    CropService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], CropService);
    return CropService;
}());

//# sourceMappingURL=crop.service.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActuatorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_constant__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(422);
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
    ActuatorService.prototype.changeActuatorStatus = function (id, newStatus, mac, idonboard) {
        var body = {
            id: id,
            mac: mac,
            status: newStatus,
            idonboard: idonboard
        };
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__utils_constant__["a" /* Constant */].HOST + '/actuator/status', body);
    };
    ActuatorService.prototype.addActuator = function (newActuator) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__utils_constant__["a" /* Constant */].HOST + '/actuator/addactuator', newActuator);
    };
    ActuatorService.prototype.deleteActuator = function () {
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

},[345]);
//# sourceMappingURL=main.js.map