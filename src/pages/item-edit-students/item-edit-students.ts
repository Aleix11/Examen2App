import {Component, ViewChild} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Camera} from "@ionic-native/camera";
import {Items} from "../../providers/items/items";

/**
 * Generated class for the ItemEditStudentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-edit-students',
  templateUrl: 'item-edit-students.html',
})
export class ItemEditStudentsPage {

  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  item: any;

  form: FormGroup;

  constructor(public navCtrl: NavController, navParams: NavParams, public items: Items,  public alertCtrl: AlertController, public viewCtrl: ViewController, formBuilder: FormBuilder, public camera: Camera) {
    this.item = navParams.get('item') || items.defaultItem;
    this.form = formBuilder.group({
      name: ['', Validators.required],
      address: [''],
      phonehome: [''],
      phonework: ['']
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemEditStudentsPage');
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done() {
    let studentToSend = {
      name: '',
      address: '',
      phone: {
        home: '',
        work: ''
      }
    };
    studentToSend.name = this.form.value.name;
    studentToSend.address = this.form.value.address;
    studentToSend.phone.home = this.form.value.phonehome;
    studentToSend.phone.work = this.form.value.phonework;
    console.log('PARA ENVIAR',studentToSend);

    let confirmEdit = this.alertCtrl.create({
      title: 'Editar ' + studentToSend.name,
      message: 'Nombre: ' + studentToSend.name + '\n'+
      'Address: ' + studentToSend.address +'\n'+
      'Telefono casa: ' + studentToSend.phone.home +'\n'+
      'Telefono trabajo: ' + studentToSend.phone.work,
      buttons: [
        {
          text: 'NO',
          handler: () => {

          }
        },
        {
          text: 'SI',
          handler: () => {
            this.items.editStudent(studentToSend, this.item._id).subscribe((res: any) => {
              console.log(res);
              if (res.status == 'success') {

              } else {

              }
            }, err => {
              console.error('ERROR', err);
            });
            this.navCtrl.push('ListMasterStudentsPage');
          }
        }
      ]
    });
    confirmEdit.present();
  }
}
