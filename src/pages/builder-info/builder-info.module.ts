import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuilderInfoPage } from './builder-info';

@NgModule({
  declarations: [
    BuilderInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(BuilderInfoPage),
  ],
})
export class BuilderInfoPageModule {}
