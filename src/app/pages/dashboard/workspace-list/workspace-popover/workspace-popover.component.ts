import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Workspace } from '../../../../model/workspace.model';

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
  name: string = 'test workspace';
  
  blockchains: string[] = ['Ethereum', 'HyperLedger Fabric', 'Multi Chain']
  appTypes: string[] = ['Chaincode', 'Blockchain client application']
  languages: string[] = ['JavaScript', 'Go']
  environments: string[] = ['standard', 'advanced', 'customized']

  selectedChain: string = this.blockchains[0]
  selectedType: string = this.appTypes[0]
  selectedLang: string = this.languages[0]
  selectedEnv: string = this.environments[0]

  constructor() { }

  ngOnInit() {
  }

  updateOption(input:{type:string, index:number}){
    switch(input.type){
      case 'blockchain': 
        this.selectedChain = this.blockchains[input.index]
        break
      case 'appType': 
        this.selectedType = this.appTypes[input.index]
        break
      case 'environment': 
        this.selectedEnv = this.environments[input.index]
        break
      default:
        break
    }
  }

  onNextBtnClicked(){
    switch(this.currentStep){
      case 0: 
        //this.name = this.nameInputRef.nativeElement.value;
        break
      default:
        break
    }
    this.currentStep += 1
  }

  onBackBtnClicked(){
    this.currentStep -= 1
  }


  onConfirmBtnClicked(){
    this.confirmBtnClicked.emit(new Workspace(this.name,'online',this.selectedChain,this.selectedType,this.selectedLang,this.selectedEnv))
  }

  onCancelBtnClicked(){
    this.cancelBtnClicked.emit()
  }

}
