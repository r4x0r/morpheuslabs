import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox-item',
  templateUrl: './checkbox-item.component.html',
  styleUrls: ['./checkbox-item.component.scss']
})
export class CheckboxItemComponent implements OnInit {
  @Input() title:string = 'default_title'
  @Input() index:number = 0
  @Input() type:string = 'default'
  @Input() isChecked: boolean = false
  @Input() showInfoBtn: boolean = false
  @Output() checkedEvent = new EventEmitter<{type:string, index:number}>()

  constructor() { }

  ngOnInit() {
  }

  onChange(){
    if(!this.isChecked){
      this.isChecked = !this.isChecked
    }
    if(this.isChecked){
      this.checkedEvent.emit({type: this.type, index: this.index})
    }
  }

}
