import { NgModule } from '@angular/core';

import { NbThemeModule } from '@nebular/theme';
import { MlPagelayoutComponent } from './pagelayout/pagelayout.component';

@NgModule({
  imports: [
    NbThemeModule
  ],
  declarations: [
    MlPagelayoutComponent
  ],
  exports: [
    MlPagelayoutComponent
  ]
})
export class PagesSharedModule { }
