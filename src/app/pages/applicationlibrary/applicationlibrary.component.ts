import { Component, OnInit } from '@angular/core';
import { Application } from '../../model/application.model';

@Component({
  selector: 'ml-applicationlibrary',
  templateUrl: './applicationlibrary.component.html',
  styleUrls: ['applicationlibrary.component.scss']
})
export class ApplicationLibraryComponent implements OnInit {

  apps: Application[];

  pageDetails;

  // Init the mock applications
  ngOnInit() {
    this.apps = [
      {
        name: "Blockchain sample application #1",
        appIcon: "../../../assets/images/app-lib-app-1.jpg",
        appRating: 4
      },
      {
        name: "Blockchain sample application #2",
        appIcon: "../../../assets/images/app-lib-app-2.jpg",
        appRating: 3
      },
      {
        name: "Blockchain sample application #3",
        appIcon: "../../../assets/images/app-lib-app-3.jpg",
        appRating: 5
      },
      {
        name: "Blockchain sample application #4",
        appIcon: "../../../assets/images/app-lib-app-4.jpg",
        appRating: 2
      },
      {
        name: "Blockchain sample application #5",
        appIcon: "../../../assets/images/app-lib-app-5.jpg",
        appRating: 4
      },
      {
        name: "Blockchain sample application #6",
        appIcon: "../../../assets/images/app-lib-app-6.jpg",
        appRating: 4
      }
    ]

    this.pageDetails = {
      pageTitle: "Application Library",
      pageDescription: "Collection of blockchain applications. Developers are encouraged to contribute their products for freemium or premium purchases.",
      pageIcon: "../../../assets/icons/application-library-icon.png"
    };
  }
}
