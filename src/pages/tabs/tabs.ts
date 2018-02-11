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

  constructor(private storage: Storage) {}
  
  public ngOnInit(){
    if (this.storage.get('loggedin')){
      this.loggedIn = true;
    }
  }
}
