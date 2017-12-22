import { Component } from '@angular/core';
import {IonicPage, Item, LoadingController, ModalController, NavController} from 'ionic-angular';
import {Items} from "../../providers/items/items";

/**
 * Generated class for the ListMasterStudentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-master-students',
  templateUrl: 'list-master-students.html',
})
export class ListMasterStudentsPage {

  currentItems: Item[];

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.items.queryStudents().subscribe((res: any) => {
      this.currentItems=res;
      if (res.status == 'success') {

      } else {

      }
    }, err => {
      console.error('ERROR', err);
    });
  }
  getStudentsList() {
    this.items.queryStudents().subscribe((res: any) => {
      this.currentItems=res;
      if (res.status == 'success') {

      } else {

      }
    }, err => {
      console.error('ERROR', err);
    });
  }

  getStudentsListSort() {
    this.items.queryStudentsforSort().subscribe((res: any) => {
      this.currentItems=res;
      if (res.status == 'success') {

      } else {

      }
    }, err => {
      console.error('ERROR', err);
    });
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreateStudentsPage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.addStudent(item).subscribe((res: any) => {
          console.log(res);
          if (res.status == 'success') {

          } else {

          }
        }, err => {
          console.error('ERROR', err);
      });;
      }
    });
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openStudentItem(item: Item) {
    let loader = this.loadingCtrl.create({
      dismissOnPageChange: true ,
      content: "Cargando datos del estudiantes...",
      duration: 3000
    });
    loader.present();
    this.navCtrl.push('ItemDetailStudentsPage', {
      item: item
    });
  }

  changeList() {
    this.navCtrl.push('ListMasterPage');
  }
}
