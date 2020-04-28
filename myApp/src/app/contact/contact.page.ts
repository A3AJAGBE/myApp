import { Component, OnInit } from '@angular/core';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(private launchNavigator: LaunchNavigator, private geolocation: Geolocation) { }

  ngOnInit() {
  }

  navme(address) {
    this.launchNavigator.navigate(address);
  }

  ionViewDidLoad(){
    this.geolocation.getCurrentPosition().then((resp) => {
      resp.coords.latitude
      resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
