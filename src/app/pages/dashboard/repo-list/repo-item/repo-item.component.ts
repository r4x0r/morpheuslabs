import { Component, OnInit, Input } from '@angular/core';
import { Repo } from '../../../../model/repo.model'
import { WindowService } from '../../../../util/window.service'

@Component({
  selector: 'app-repo-item',
  templateUrl: './repo-item.component.html',
  styleUrls: ['./repo-item.component.scss'],
  providers: [WindowService]
})
export class RepoItemComponent implements OnInit {

  @Input() repo: Repo
  nativeWindow: any
  constructor(private windowService: WindowService) {
    this.nativeWindow = windowService.getNativeWindow();
  }

  ngOnInit() {
  }

  onRepoSelect() {
    var newWindow = this.nativeWindow.open(this.repo.url);
  }

}
