import { Component } from '@angular/core';
import { NavController,ActionSheetController,AlertController  } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public actionSheetCtrl: ActionSheetController,public navCtrl: NavController , public alertCtrl: AlertController) {
  }

  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Confirm Alert',
      subTitle: 'Muhammadyusree Ayae',
      buttons: [{text : 'OK'}, {text : 'Cancel' , handler : () => console.log("Cancel")}]
    });
    alert.present();
  }

}

