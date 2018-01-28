import { NgModule } from '@angular/core';

import { NbThemeModule } from '@nebular/theme';
import { MlPagelayoutComponent } from './pagelayout/pagelayout.component';

import { RepeatTimesDirective } from './repeatDirective/repeat.directive';

@NgModule({
  imports: [
    NbThemeModule
  ],
  declarations: [
    MlPagelayoutComponent,
    RepeatTimesDirective
  ],
  exports: [
    MlPagelayoutComponent,
    RepeatTimesDirective
  ]
})
export class PagesSharedModule { }
