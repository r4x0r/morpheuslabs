import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ml-membership',
  templateUrl: './membership.component.html'
})
export class MembershipComponent {

  pageDetails;

  ngOnInit() {
    this.pageDetails = {
      pageTitle: "Membership Details",
      pageDescription: "Your team's membership information and legal agreements",
      pageIcon: "../../../assets/icons/membership-icon.png"
    };
  }
}
