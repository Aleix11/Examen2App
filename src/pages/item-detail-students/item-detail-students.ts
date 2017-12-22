import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import { Items } from '../../providers/providers';

/**
 * Generated class for the ItemDetailStudentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-detail-students',
  templateUrl: 'item-detail-students.html',
})
export class ItemDetailStudentsPage {

  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams, public items: Items, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    this.item = navParams.get('item') || items.defaultItem;
  }

  removeItem(itemToRem: any) {
    console.log(itemToRem);
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
            this.items.deleteStudent(itemToRem).subscribe((res: any) => {
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
  editItem(itemToEdit: any) {
    let loader = this.loadingCtrl.create({
      dismissOnPageChange: true ,
      content: "Cargando datos del estudiantes...",
      duration: 3000
    });
    loader.present();
    this.navCtrl.push('ItemEditStudentsPage', {
      item: itemToEdit
    });
  }
  addStudentToSubject(item: any) {
    this.navCtrl.push('ListStudentsToSubjectPage', {
      item: item
    });
  }
}
