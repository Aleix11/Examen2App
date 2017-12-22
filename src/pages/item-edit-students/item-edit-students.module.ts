import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemEditStudentsPage } from './item-edit-students';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    ItemEditStudentsPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemEditStudentsPage),
    TranslateModule.forChild()
  ],
  exports: [
    ItemEditStudentsPage
  ]
})
export class ItemEditStudentsPageModule {}
