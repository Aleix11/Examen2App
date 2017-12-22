import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListStudentsToSubjectPage } from './list-students-to-subject';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    ListStudentsToSubjectPage,
  ],
  imports: [
    IonicPageModule.forChild(ListStudentsToSubjectPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListStudentsToSubjectPage
  ]
})
export class ListStudentsToSubjectPageModule {}
