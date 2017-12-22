import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemCreateStudentsPage } from './item-create-students';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    ItemCreateStudentsPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemCreateStudentsPage),
    TranslateModule.forChild()
  ],
})
export class ItemCreateStudentsPageModule {}
