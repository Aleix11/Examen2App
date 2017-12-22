import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, ViewController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Camera} from "@ionic-native/camera";

/**
 * Generated class for the ItemCreateStudentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-create-students',
  templateUrl: 'item-create-students.html',
})
export class ItemCreateStudentsPage {

  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  item: any;

  form: FormGroup;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, formBuilder: FormBuilder, public camera: Camera) {
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
    console.log('ionViewDidLoad ItemCreateStudentsPage');
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
    if (!this.form.valid) {
      return;
    }
    this.viewCtrl.dismiss(studentToSend);
  }
}
