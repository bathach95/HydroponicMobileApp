import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';
import { HttpsRequestInterceptor } from '../interceptors/auth.interceptor';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { DevicePage } from '../pages/device/device';
import { ActuatorListPage } from '../pages/actuator-list/actuatorList';
import { TabsPage } from '../pages/tabs/tabs';
import { RegisterPage } from'../pages/register/register';
import { AddCropPage } from '../pages/add-crop/addCrop';
import { CropPage } from '../pages/crop/crop';
import { AddActuatorPage } from '../pages/add-actuator/addActuator';
import { ActuatorPage } from '../pages/actuator/actuator';
import { SchedulePage } from '../pages/schedule/schedule';
import { AddSchedulePage } from '../pages/add-schedule/addSchedule';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BackgroundMode } from '@ionic-native/background-mode'
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Push } from '@ionic-native/push';
import { QRScanner } from '@ionic-native/qr-scanner'
import { AuthService } from '../services/auth.service';
import { DeviceService } from '../services/device.service';
import { ToastService } from '../services/toast.service';
import { CropService } from '../services/crop.service';
import { DataService } from '../services/data.service';
import { ScheduleService } from '../services/schedule.service';
import { ThresholdService } from '../services/threshold.service';
import { ActuatorService } from '../services/actuator.service';
import { RegisterService } from '../services/register.service';

import { ActuatorTypePipe } from '../pipes/actuatorType.pipe';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    LoginPage,
    HomePage,
    DevicePage,
    ActuatorListPage,
    TabsPage,
    RegisterPage,
    AddCropPage,
    CropPage,
    AddActuatorPage,
    ActuatorPage,
    SchedulePage,
    AddSchedulePage,
    ActuatorTypePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    LoginPage,
    HomePage,
    DevicePage,
    ActuatorListPage,
    TabsPage,
    RegisterPage,
    AddCropPage,
    CropPage,
    AddActuatorPage,
    ActuatorPage,
    SchedulePage,
    AddSchedulePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BackgroundMode,
    LocalNotifications,
    Push,
    QRScanner,
    AuthService,
    DeviceService,
    ToastService,
    ActuatorService,
    CropService,
    DataService,
    ThresholdService,
    ScheduleService,
    RegisterService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpsRequestInterceptor, multi: true, },
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
