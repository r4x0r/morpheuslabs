import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-workspace-popover',
  templateUrl: './workspace-popover.component.html',
  styleUrls: ['./workspace-popover.component.scss']
})
export class WorkspacePopoverComponent implements OnInit {
  @Output() confirmBtnClicked = new EventEmitter()
  @Output() cancelBtnClicked = new EventEmitter()
  @ViewChild('nameInput') nameInputRef: ElementRef;
  currentStep: number = 0;

  name: string = '';

  constructor() { }

  ngOnInit() {
  }

  onNextBtnClicked(){
    switch(this.currentStep){
      case 0: 
        this.name = this.nameInputRef.nativeElement.value;
    }
    this.currentStep += 1
  }

  onBackBtnClicked(){
    this.currentStep -= 1
  }


  onConfirmBtnClicked(){
    this.confirmBtnClicked.emit()
  }

  onCancelBtnClicked(){
    this.cancelBtnClicked.emit()
  }

}
