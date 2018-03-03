webpackJsonp([0],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constant__ = __webpack_require__(23);
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

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_constant__ = __webpack_require__(23);
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

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActuatorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_constant__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(418);
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

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(340);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_device_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toast_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__device_device__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_qr_scanner__ = __webpack_require__(337);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_device_service__["a" /* DeviceService */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_crop_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_device_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actuator_actuator__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_crop_addCrop__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__crop_crop__ = __webpack_require__(334);
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
                console.log(_this.cropList);
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
    DevicePage.prototype.goToActuatorPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__actuator_actuator__["a" /* ActuatorPage */], {
            deviceMac: this.mac
        });
    };
    DevicePage.prototype.goToCropPage = function (cropId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__crop_crop__["a" /* CropPage */], {
            cropId: cropId
        });
    };
    DevicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-device',template:/*ion-inline-start:"/home/thach/Documents/HydroponicMobileApp/src/pages/device/device.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Device\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div text-center>\n    <button ion-button block color="primary" round (click)="goToAddCropPage()">Add new crop</button>\n    <button (click)="goToActuatorPage()" block round ion-button>Actuator list</button>\n  </div>\n  <div id="device-heading7">\n    {{name}}\n  </div>\n  <div *ngIf="cropList">\n    <ion-list>\n      <div *ngFor="let crop of cropList" (click)="goToCropPage(crop.id)" style="margin-left: 10px">\n        <div id="devider1" class="devider"></div>\n        <ion-grid>\n\n          <ion-row>\n            <div id="home-heading4">\n              {{crop.name}}\n            </div>\n          </ion-row>\n\n          <ion-row>\n            <div id="home-heading5">\n              Start date: {{crop.startdate | date: \'MM/dd/yyyy HH:mm:ss\'}}\n            </div>\n          </ion-row>\n\n          <ion-row>\n            <div id="home-heading5">\n              Close date: {{crop.closedate | date: \'MM/dd/yyyy HH:mm:ss\'}}\n            </div>\n          </ion-row>\n\n          <ion-row>\n            <div id="home-heading5">\n              Tree type: {{crop.treetype}}\n            </div>\n          </ion-row>\n\n          <ion-row>\n            <div id="home-heading5">\n              Hydroponic type: {{crop.type}}\n            </div>\n          </ion-row>\n\n          <ion-row>\n            <div id="home-heading5">\n              Status: {{crop.status}}\n            </div>\n          </ion-row>\n\n        </ion-grid>\n        <div id="devider2" class="devider"></div>\n      </div>\n    </ion-list>\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"/home/thach/Documents/HydroponicMobileApp/src/pages/device/device.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActuatorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_actuator_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_actuator_addActuator__ = __webpack_require__(213);
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
    function ActuatorPage(navParams, actuatorService, toastService, alertCtrl, navCtrl) {
        this.navParams = navParams;
        this.actuatorService = actuatorService;
        this.toastService = toastService;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
    }
    ActuatorPage.prototype.ngOnInit = function () {
        this.mac = this.navParams.get('deviceMac');
        this.doRefresh(null);
    };
    ActuatorPage.prototype.doRefresh = function (refresher) {
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
    ActuatorPage.prototype.changeStatus = function (actuator) {
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
    ActuatorPage.prototype.deleteActuator = function () {
        alert("hehe");
    };
    ActuatorPage.prototype.goToAddActuatorPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__add_actuator_addActuator__["a" /* AddActuatorPage */], {
            deviceMac: this.mac,
            actuatorPage: this
        });
    };
    ActuatorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-actuator',template:/*ion-inline-start:"/home/thach/Documents/HydroponicMobileApp/src/pages/actuator/actuator.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Actuator List\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <div text-center>\n        <button ion-button block color="primary" round (click)="goToAddActuatorPage()">Add new actuator</button>\n    </div>\n    <div>\n        <ion-grid id="info-table">\n            <div class="table-header">\n                <ion-row>\n                    <ion-col>\n                        <span>Type</span>\n                    </ion-col>\n                    <ion-col>\n                        <span>ID</span>\n                    </ion-col>\n                    <ion-col>\n                        <span>Priority</span>\n                    </ion-col>\n                    <ion-col>\n                        <span>Active</span>\n                    </ion-col>\n                    <ion-col>\n                        <span>Action</span>\n                    </ion-col>\n                </ion-row>\n            </div>\n            <div *ngIf="data" class="table-content">\n                <ion-row *ngFor="let actuator of data" class="actuator-row">\n                    <ion-col>\n                        {{actuator.type}}\n                    </ion-col>\n                    <ion-col>\n                        {{actuator.idonboard.toString()[1]}}\n                    </ion-col>\n                    <ion-col>\n                        {{actuator.priority}}\n                    </ion-col>\n                    <ion-col>\n                        <button *ngIf="actuator.status === \'on\'" (click)="changeStatus(actuator)" class="custome btn btn-success">Active</button>\n                        <button *ngIf="actuator.status !== \'on\'" (click)="changeStatus(actuator)" class="custome btn btn-danger">Deactive</button>\n                    </ion-col>\n                    <ion-col>\n                        <ion-icon (click)="deleteActuator()" name="trash" color="danger"></ion-icon>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </ion-grid>\n    </div>\n</ion-content>'/*ion-inline-end:"/home/thach/Documents/HydroponicMobileApp/src/pages/actuator/actuator.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_actuator_service__["a" /* ActuatorService */],
            __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ActuatorPage);
    return ActuatorPage;
}());

//# sourceMappingURL=actuator.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddActuatorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constant__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_actuator_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_service__ = __webpack_require__(24);
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
        this.actuatorPage = this.navParams.get('actuatorPage');
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
                    _this.actuatorPage.doRefresh(null);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_actuator_service__["a" /* ActuatorService */],
            __WEBPACK_IMPORTED_MODULE_4__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AddActuatorPage);
    return AddActuatorPage;
}());

//# sourceMappingURL=addActuator.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCropPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constant__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_crop_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_service__ = __webpack_require__(24);
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
            selector: 'page-add-crop',template:/*ion-inline-start:"/home/thach/Documents/HydroponicMobileApp/src/pages/add-crop/add-crop.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Add new crop\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <div class="spacer" id="register-spacer1"></div>\n    <form #addCropForm="ngForm" (ngSubmit)="addCrop(addCropForm.value)">\n\n        <ion-item>\n            <ion-label>Crop name</ion-label>\n            <ion-input required type="text" id="name" name="name" #name="ngModel" ngModel></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Tree type</ion-label>\n            <ion-input required type="text" id="treetype" name="treetype" #name="ngModel" ngModel></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Start date: MM/DD/YYYY HH:mm</ion-label>\n            <ion-datetime required displayFormat="MM/DD/YYYY HH:mm A" name="startdate" #name="ngModel" ngModel></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Close date MM/DD/YYYY HH:mm</ion-label>\n            <ion-datetime required displayFormat="MM/DD/YYYY HH:mm A" name="closedate" #name="ngModel" ngModel></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Report time (s)</ion-label>\n            <ion-input required type="number" name="reporttime" id="reporttime" [(ngModel)]="reporttime"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Hydroponic type</ion-label>\n            <ion-select name="type" #name="ngModel" ngModel>\n                <ion-option *ngFor="let type of hydroponicType" [value]="type.value">\n                    {{type.label}}\n                </ion-option>\n            </ion-select>\n        </ion-item>\n\n        <div class="spacer" id="register-spacer2"></div>\n        <button round type="submit" ion-button color="secondary" block class="btn">\n            Add\n        </button>\n    </form>\n</ion-content>'/*ion-inline-end:"/home/thach/Documents/HydroponicMobileApp/src/pages/add-crop/add-crop.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_crop_service__["a" /* CropService */], __WEBPACK_IMPORTED_MODULE_4__services_toast_service__["a" /* ToastService */]])
    ], AddCropPage);
    return AddCropPage;
}());

//# sourceMappingURL=addCrop.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constant; });
var Constant = /** @class */ (function () {
    function Constant() {
    }
    // server IP or domain name
    Constant.HOST = 'http://192.168.1.109:3210';
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
    return Constant;
}());

//# sourceMappingURL=constant.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(12);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* ToastController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast.service.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CropPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_crop_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_threshold_service__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toast_service__ = __webpack_require__(24);
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
    function CropPage(navCtrl, cropService, dataService, thresholdService, toastService) {
        this.navCtrl = navCtrl;
        this.cropService = cropService;
        this.dataService = dataService;
        this.thresholdService = thresholdService;
        this.toastService = toastService;
    }
    CropPage.prototype.loadCropData = function (refresher) {
        var _this = this;
        this.cropService.getNewestCropByDeviceMac(this.mac).subscribe(function (res1) {
            if (res1.success) {
                _this.crop = res1.data;
                _this.dataService.getNewestDataByCropId(_this.crop.id).subscribe(function (res2) {
                    if (res2.success) {
                        _this.thresholdService.getThreshold(_this.crop.id).subscribe(function (threshold) {
                            _this.data = res2.data;
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
                });
            }
            else {
                _this.toastService.showToast("No running crop");
            }
        }, function (err) {
            console.log(err);
        }, function () {
            if (refresher) {
                refresher.complete();
            }
        });
    };
    CropPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-crop',template:/*ion-inline-start:"/home/thach/Documents/HydroponicMobileApp/src/pages/crop/crop.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>\n        Crop\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding id="page4">\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n      <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n      </ion-refresher-content>\n    </ion-refresher>\n\n    <div id="device-heading7">\n      {{name}}\n    </div>\n    <div *ngIf="crop">\n      <div id="device-heading10">\n        Running crop: {{crop.name}}\n      </div>\n      <div id="device-container3">\n        <span id="device-heading12">\n          Crop type: {{crop.type}}\n        </span>\n        <br>\n        <span id="device-heading14">\n          Tree type: {{crop.treetype}}\n        </span>\n        <br>\n        <span id="device-heading9">\n          Start date: {{crop.startdate | date: \'dd/MM/yyyy hh:mm:ss\'}}\n        </span>\n        <br>\n        <span id="device-heading11">\n          Close date: {{crop.closedate | date: \'dd/MM/yyyy hh:mm:ss\'}}\n        </span>\n        <br>\n        <span id="device-heading13">\n          Latest data:\n          <span *ngIf="data">{{data.createdAt | date: \'dd/MM/yyyy hh:mm:ss\'}}</span>\n        </span>\n        <ion-grid *ngIf="data" id="info-table">\n          <ion-row>\n            <ion-col>\n              <div [class.danger-info]="dataStatus.badStatus.temp">\n                <span>Temperature</span>\n                <br>\n                <span class="threshold">({{threshold.temperatureLower}} - {{threshold.temperatureUpper}})</span>\n                <br>\n                <span>{{data.temperature}} °C</span>\n              </div>\n            </ion-col>\n            <ion-col>\n              <div [class.danger-info]="dataStatus.badStatus.humidity">\n                <span>Humidity</span>\n                <br>\n                <span class="threshold">({{threshold.humidityLower}} - {{threshold.humidityUpper}})</span>\n                <br>\n                <span>{{data.humidity}} %</span>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div [class.danger-info]="dataStatus.badStatus.ppm">\n                <span>ppm</span>\n                <br>\n                <span class="threshold">({{threshold.ppmLower}} - {{threshold.ppmUpper}})</span>\n                <br>\n                <span>{{data.ppm}}</span>\n              </div>\n            </ion-col>\n            <ion-col>\n              <div [class.danger-info]="dataStatus.badStatus.light">\n                <span>light</span>\n                <br>\n                <span class="threshold">({{threshold.lightLower}} - {{threshold.lightUpper}})</span>\n                <br>\n                <span>{{data.light}} lux</span>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n  \n        <div text-center>\n          <button (click)="goToActuatorPage()" round ion-button>\n            Actuator list\n          </button>\n        </div>\n  \n      </div>\n    </div>\n  \n  \n  </ion-content>'/*ion-inline-end:"/home/thach/Documents/HydroponicMobileApp/src/pages/crop/crop.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_crop_service__["a" /* CropService */],
            __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_4__services_threshold_service__["a" /* ThresholdService */],
            __WEBPACK_IMPORTED_MODULE_5__services_toast_service__["a" /* ToastService */]])
    ], CropPage);
    return CropPage;
}());

//# sourceMappingURL=crop.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constant__ = __webpack_require__(23);
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

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThresholdService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constant__ = __webpack_require__(23);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_register_service__ = __webpack_require__(339);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_4__services_register_service__["a" /* RegisterService */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constant__ = __webpack_require__(23);
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

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(362);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__interceptors_auth_interceptor__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_device_device__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_actuator_actuator__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_register_register__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_add_crop_addCrop__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_crop_crop__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_add_actuator_addActuator__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_background_mode__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_local_notifications__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_push__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_qr_scanner__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_auth_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_device_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_toast_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_crop_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_data_service__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_schedule_service__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_threshold_service__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_actuator_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_register_service__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pipes_actuatorType_pipe__ = __webpack_require__(428);
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
                __WEBPACK_IMPORTED_MODULE_13__pages_actuator_actuator__["a" /* ActuatorPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_add_crop_addCrop__["a" /* AddCropPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_crop_crop__["a" /* CropPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_add_actuator_addActuator__["a" /* AddActuatorPage */],
                __WEBPACK_IMPORTED_MODULE_34__pipes_actuatorType_pipe__["a" /* ActuatorTypePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_device_device__["a" /* DevicePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_actuator_actuator__["a" /* ActuatorPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_add_crop_addCrop__["a" /* AddCropPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_crop_crop__["a" /* CropPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_add_actuator_addActuator__["a" /* AddActuatorPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_background_mode__["a" /* BackgroundMode */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_qr_scanner__["a" /* QRScanner */],
                __WEBPACK_IMPORTED_MODULE_25__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_26__services_device_service__["a" /* DeviceService */],
                __WEBPACK_IMPORTED_MODULE_27__services_toast_service__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_32__services_actuator_service__["a" /* ActuatorService */],
                __WEBPACK_IMPORTED_MODULE_28__services_crop_service__["a" /* CropService */],
                __WEBPACK_IMPORTED_MODULE_29__services_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_31__services_threshold_service__["a" /* ThresholdService */],
                __WEBPACK_IMPORTED_MODULE_30__services_schedule_service__["a" /* ScheduleService */],
                __WEBPACK_IMPORTED_MODULE_33__services_register_service__["a" /* RegisterService */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_7__interceptors_auth_interceptor__["a" /* HttpsRequestInterceptor */], multi: true, },
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 215,
	"./af.js": 215,
	"./ar": 216,
	"./ar-dz": 217,
	"./ar-dz.js": 217,
	"./ar-kw": 218,
	"./ar-kw.js": 218,
	"./ar-ly": 219,
	"./ar-ly.js": 219,
	"./ar-ma": 220,
	"./ar-ma.js": 220,
	"./ar-sa": 221,
	"./ar-sa.js": 221,
	"./ar-tn": 222,
	"./ar-tn.js": 222,
	"./ar.js": 216,
	"./az": 223,
	"./az.js": 223,
	"./be": 224,
	"./be.js": 224,
	"./bg": 225,
	"./bg.js": 225,
	"./bm": 226,
	"./bm.js": 226,
	"./bn": 227,
	"./bn.js": 227,
	"./bo": 228,
	"./bo.js": 228,
	"./br": 229,
	"./br.js": 229,
	"./bs": 230,
	"./bs.js": 230,
	"./ca": 231,
	"./ca.js": 231,
	"./cs": 232,
	"./cs.js": 232,
	"./cv": 233,
	"./cv.js": 233,
	"./cy": 234,
	"./cy.js": 234,
	"./da": 235,
	"./da.js": 235,
	"./de": 236,
	"./de-at": 237,
	"./de-at.js": 237,
	"./de-ch": 238,
	"./de-ch.js": 238,
	"./de.js": 236,
	"./dv": 239,
	"./dv.js": 239,
	"./el": 240,
	"./el.js": 240,
	"./en-au": 241,
	"./en-au.js": 241,
	"./en-ca": 242,
	"./en-ca.js": 242,
	"./en-gb": 243,
	"./en-gb.js": 243,
	"./en-ie": 244,
	"./en-ie.js": 244,
	"./en-nz": 245,
	"./en-nz.js": 245,
	"./eo": 246,
	"./eo.js": 246,
	"./es": 247,
	"./es-do": 248,
	"./es-do.js": 248,
	"./es-us": 249,
	"./es-us.js": 249,
	"./es.js": 247,
	"./et": 250,
	"./et.js": 250,
	"./eu": 251,
	"./eu.js": 251,
	"./fa": 252,
	"./fa.js": 252,
	"./fi": 253,
	"./fi.js": 253,
	"./fo": 254,
	"./fo.js": 254,
	"./fr": 255,
	"./fr-ca": 256,
	"./fr-ca.js": 256,
	"./fr-ch": 257,
	"./fr-ch.js": 257,
	"./fr.js": 255,
	"./fy": 258,
	"./fy.js": 258,
	"./gd": 259,
	"./gd.js": 259,
	"./gl": 260,
	"./gl.js": 260,
	"./gom-latn": 261,
	"./gom-latn.js": 261,
	"./gu": 262,
	"./gu.js": 262,
	"./he": 263,
	"./he.js": 263,
	"./hi": 264,
	"./hi.js": 264,
	"./hr": 265,
	"./hr.js": 265,
	"./hu": 266,
	"./hu.js": 266,
	"./hy-am": 267,
	"./hy-am.js": 267,
	"./id": 268,
	"./id.js": 268,
	"./is": 269,
	"./is.js": 269,
	"./it": 270,
	"./it.js": 270,
	"./ja": 271,
	"./ja.js": 271,
	"./jv": 272,
	"./jv.js": 272,
	"./ka": 273,
	"./ka.js": 273,
	"./kk": 274,
	"./kk.js": 274,
	"./km": 275,
	"./km.js": 275,
	"./kn": 276,
	"./kn.js": 276,
	"./ko": 277,
	"./ko.js": 277,
	"./ky": 278,
	"./ky.js": 278,
	"./lb": 279,
	"./lb.js": 279,
	"./lo": 280,
	"./lo.js": 280,
	"./lt": 281,
	"./lt.js": 281,
	"./lv": 282,
	"./lv.js": 282,
	"./me": 283,
	"./me.js": 283,
	"./mi": 284,
	"./mi.js": 284,
	"./mk": 285,
	"./mk.js": 285,
	"./ml": 286,
	"./ml.js": 286,
	"./mr": 287,
	"./mr.js": 287,
	"./ms": 288,
	"./ms-my": 289,
	"./ms-my.js": 289,
	"./ms.js": 288,
	"./mt": 290,
	"./mt.js": 290,
	"./my": 291,
	"./my.js": 291,
	"./nb": 292,
	"./nb.js": 292,
	"./ne": 293,
	"./ne.js": 293,
	"./nl": 294,
	"./nl-be": 295,
	"./nl-be.js": 295,
	"./nl.js": 294,
	"./nn": 296,
	"./nn.js": 296,
	"./pa-in": 297,
	"./pa-in.js": 297,
	"./pl": 298,
	"./pl.js": 298,
	"./pt": 299,
	"./pt-br": 300,
	"./pt-br.js": 300,
	"./pt.js": 299,
	"./ro": 301,
	"./ro.js": 301,
	"./ru": 302,
	"./ru.js": 302,
	"./sd": 303,
	"./sd.js": 303,
	"./se": 304,
	"./se.js": 304,
	"./si": 305,
	"./si.js": 305,
	"./sk": 306,
	"./sk.js": 306,
	"./sl": 307,
	"./sl.js": 307,
	"./sq": 308,
	"./sq.js": 308,
	"./sr": 309,
	"./sr-cyrl": 310,
	"./sr-cyrl.js": 310,
	"./sr.js": 309,
	"./ss": 311,
	"./ss.js": 311,
	"./sv": 312,
	"./sv.js": 312,
	"./sw": 313,
	"./sw.js": 313,
	"./ta": 314,
	"./ta.js": 314,
	"./te": 315,
	"./te.js": 315,
	"./tet": 316,
	"./tet.js": 316,
	"./th": 317,
	"./th.js": 317,
	"./tl-ph": 318,
	"./tl-ph.js": 318,
	"./tlh": 319,
	"./tlh.js": 319,
	"./tr": 320,
	"./tr.js": 320,
	"./tzl": 321,
	"./tzl.js": 321,
	"./tzm": 322,
	"./tzm-latn": 323,
	"./tzm-latn.js": 323,
	"./tzm.js": 322,
	"./uk": 324,
	"./uk.js": 324,
	"./ur": 325,
	"./ur.js": 325,
	"./uz": 326,
	"./uz-latn": 327,
	"./uz-latn.js": 327,
	"./uz.js": 326,
	"./vi": 328,
	"./vi.js": 328,
	"./x-pseudo": 329,
	"./x-pseudo.js": 329,
	"./yo": 330,
	"./yo.js": 330,
	"./zh-cn": 331,
	"./zh-cn.js": 331,
	"./zh-hk": 332,
	"./zh-hk.js": 332,
	"./zh-tw": 333,
	"./zh-tw.js": 333
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
webpackContext.id = 419;

/***/ }),

/***/ 423:
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

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(20);
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
    ScheduleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ScheduleService);
    return ScheduleService;
}());

//# sourceMappingURL=schedule.service.js.map

/***/ }),

/***/ 428:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toast_service__ = __webpack_require__(24);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__services_toast_service__["a" /* ToastService */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constant__ = __webpack_require__(23);
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

/***/ })

},[341]);
//# sourceMappingURL=main.js.map