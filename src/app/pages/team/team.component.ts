import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ml-team',
  templateUrl: './team.component.html'
})
export class TeamComponent {
  pageDetails;

  ngOnInit() {
    this.pageDetails = {
      pageTitle: "Manage Developers On Your Team",
      pageDescription: "Edit pending invitations and manage current developers",
      pageIcon: "../../../assets/icons/team-icon.png"
    };
  }
}
