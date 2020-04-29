import { Component, OnInit } from '@angular/core';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(private launchNavigator: LaunchNavigator, private geolocation: Geolocation, private callNumber: CallNumber) { }

  ngOnInit() {
  }

  call() {
    try {
      this.callNumber.callNumber("35314177500", true);
    }
    catch(err) {
      console.log(err);
    }

  }


  navme(address) {
    this.launchNavigator.navigate(address);
  }

  locate(){
    this.geolocation.getCurrentPosition({
      timeout: 10000,
      enableHighAccuracy: true
    }).then((resp) => {
      resp.coords.latitude;
      resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  };

}
