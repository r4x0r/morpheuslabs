import { Component } from '@angular/core';
import { Workspace } from '../../model/workspace.model'
import { Repo } from '../../model/repo.model'
import { workspaceList } from '../../data/workspace-list'
import { repoList, sampleRepoList } from '../../data/repo-list'


@Component({
  selector: 'ml-dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent {

  workspaceList: Workspace[]
  repoList: Repo[]
  sampleRepoList: Repo[]

  ngOnInit() {
    this.workspaceList = workspaceList
    this.repoList = repoList
    this.sampleRepoList = sampleRepoList
  }

  addListItem(type:string){
    console.log(type)
  }
}
