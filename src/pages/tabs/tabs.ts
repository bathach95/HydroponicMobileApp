import { Component, OnInit } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage implements OnInit{

  tab1Root = LoginPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  loggedIn = false;

  constructor(private storate: Storage) {

  }
  
  public ngOnInit(){
    console.log(this.storate.get('loggedin'))
    if (this.storate.get('loggedin')){
      this.loggedIn = true;
    }
  }

  public logout(){
    alert('logout');
  }
}
