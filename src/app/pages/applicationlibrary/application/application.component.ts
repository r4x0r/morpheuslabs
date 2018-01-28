import { Component, Input } from '@angular/core';
import { Application } from '../../../model/application.model';


@Component({
  selector: 'ml-application',
  templateUrl: './application.component.html',
  styleUrls: ['application.component.scss']
})
export class ApplicationComponent {
  @Input()
  application: Application;
}
