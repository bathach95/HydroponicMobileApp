import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  items = [];

  constructor(public navCtrl: NavController) {
    for (let i = 0; i < 60; i++) {
      this.items.push(this.items.length);
    }
  }

  public showConfirm(){
    if (confirm("Do you want to click yes ?")){
      console.log("You have just click yes");
    } else {
      console.log("You have just click no")
    }
  }
}
