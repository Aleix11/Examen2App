import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Items} from "../../providers/items/items";
import {Item} from "../../models/item";

/**
 * Generated class for the ListStudentsToSubjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-students-to-subject',
  templateUrl: 'list-students-to-subject.html',
})
export class ListStudentsToSubjectPage {
  currentItems: Item[];

  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items, public alertCtrl: AlertController,) {
    this.item = navParams.get('item') || items.defaultItem;
  }

  ionViewDidLoad() {
    this.items.query().subscribe((res: any) => {
      this.currentItems=res;
      if (res.status == 'success') {

      } else {

      }
    }, err => {
      console.error('ERROR', err);
    });
  }

  addToSubject(idSubject: string, nameSubject: string) {
    let sending = {
      _id: '',
      name: '',
      studentId: []
    };

    sending._id = idSubject;
    sending.name = nameSubject;
    sending.studentId.push(this.item._id);

    console.log('esto se lo enviooo', sending);

    let confirmAdd = this.alertCtrl.create({
      title: 'Añadir ' + this.item.name + ' a ' + sending.name + '???',
      message: '¿Seguro que quieres añadir ' + this.item.name + ' a ' + sending.name + '???',
      buttons: [
        {
          text: 'NO',
          handler: () => {
          }
        },
        {
          text: 'SI',
          handler: () => {
            this.items.addStudentToSubject(sending).subscribe((res: any) => {
              console.log(res);
              if (res.status == 'success') {

              } else {

              }
            }, err => {
              console.error('ERROR', err);
            });
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirmAdd.present();
  }

}
