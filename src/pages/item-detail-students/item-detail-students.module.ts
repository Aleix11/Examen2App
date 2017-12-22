import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailStudentsPage } from './item-detail-students';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    ItemDetailStudentsPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemDetailStudentsPage),
    TranslateModule.forChild()
  ],
  exports: [
    ItemDetailStudentsPage
  ]
})
export class ItemDetailStudentsPageModule {}
