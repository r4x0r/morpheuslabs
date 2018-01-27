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

  pageDetails;

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

    this.pageDetails = {
      pageTitle: "Application Library",
      pageDescription: "Collection of blockchain applications. Developers are encouraged to contribute their products for freemium or premium purchases.",
      pageIcon: "../../../assets/icons/application-library-icon.png"
    };
  }
}
