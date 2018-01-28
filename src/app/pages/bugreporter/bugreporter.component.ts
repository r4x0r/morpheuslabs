import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ml-bugreporter',
  templateUrl: './bugreporter.component.html'
})
export class BugReporterComponent {
  pageDetails;

  ngOnInit() {
    this.pageDetails = {
      pageTitle: "Bug Reporter",
      pageDescription: "Submit bug reports or request enhancements for APIs and developer tools. <br> Learn more about bug reporting",
      pageIcon: "../../../assets/icons/bug-reporter-icon.png"
    };
  }
}
