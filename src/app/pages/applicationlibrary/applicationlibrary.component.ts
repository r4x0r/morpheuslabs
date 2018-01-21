import { Component, OnInit } from '@angular/core';
import { Application } from '../../model/application.model';

@Component({
  selector: 'ml-applicationlibrary',
  templateUrl: './applicationlibrary.component.html',
  styleUrls: ['applicationlibrary.component.scss']
})
export class ApplicationLibraryComponent implements OnInit
{

  apps: Application[];

  // Init the mock applications
  ngOnInit()
  {
    this.apps = [
      {
        name: "Blockchain sample application #1",
      },
      {
        name: "Blockchain sample application #2",
      },
      {
        name: "Blockchain sample application #3",
      },
      {
        name: "Blockchain sample application #3",
      },
      {
        name: "Blockchain sample application #3",
      },
      {
        name: "Blockchain sample application #3",
      },
      {
        name: "Blockchain sample application #3",
      },
      {
        name: "Blockchain sample application #3",
      },
      {
        name: "Blockchain sample application #3",
      },
      {
        name: "Blockchain sample application #3",
      }
    ]
  }
}
