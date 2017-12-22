import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListMasterStudentsPage } from './list-master-students';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    ListMasterStudentsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListMasterStudentsPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListMasterStudentsPage
  ]
})
export class ListMasterStudentsPageModule {}
