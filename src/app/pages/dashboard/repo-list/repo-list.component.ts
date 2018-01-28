import { Component, OnInit, Input } from '@angular/core';
import { Repo } from '../../../model/repo.model'
import { repoList, sampleRepoList } from '../../../data/repo-list'

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent implements OnInit {

  repoList: Repo[]
  @Input() type: string
  constructor() { }

  ngOnInit() {
    if (this.type == 'sample-repo') {
      this.repoList = sampleRepoList
    } else {
      this.repoList = repoList
    }
  }

}
