import { Component, Input } from '@angular/core';


@Component({
  selector: 'ml-application',
  templateUrl: './application.component.html',
  styleUrls:['application.component.scss']
})
export class ApplicationComponent {
  @Input()
  appname: String;
}
