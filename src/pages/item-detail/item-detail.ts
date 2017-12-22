import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';



import { Items } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items, public alertCtrl: AlertController,  public loadingCtrl: LoadingController) {
    this.item = navParams.get('item') || items.defaultItem;
  }
  removeItem(itemToRem: any){
    console.log(itemToRem);
    let confirmDelete = this.alertCtrl.create({
      title: 'Borrar ' + itemToRem.name,
      message: '¿Seguro que quieres borrar ' + itemToRem.name + '???',
      buttons: [
        {
          text: 'NO',
          handler: () => {

          }
        },
        {
          text: 'SI',
          handler: () => {
            this.items.delete(itemToRem).subscribe((res: any) => {
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
    confirmDelete.present();
  }

  deleteStudentFromSubject(student, subject) {
    let subjectToSend = {
      _id: '',
      name: '',
      quadri: '',
      studies: '',
      studentId: []
    };
    subjectToSend._id = subject._id;
    subjectToSend.name = subject.name;
    subjectToSend.quadri = subject.quadri;
    subjectToSend.studentId.push(student._id);

    let confirmDelete = this.alertCtrl.create({
      title: 'Borrar ' + student.name,
      message: '¿Seguro que quieres borrar a ' + student.name + ' de ' + subject.name + '???',
      buttons: [
        {
          text: 'NO',
          handler: () => {

          }
        },
        {
          text: 'SI',
          handler: () => {
            this.items.deleteStudentFromSubject(subjectToSend);
            this.navCtrl.push('ListMasterPage');
          }
        }
      ]
    });
    confirmDelete.present();
  }
}
