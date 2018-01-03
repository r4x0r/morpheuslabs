import { Component, OnInit, Input } from '@angular/core';
import { Repo } from '../../../model/repo.model'

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent implements OnInit {

  @Input() repoList: Repo[]
  constructor() { }

  ngOnInit() {
  }

}
