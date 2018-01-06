import { 
  Component, 
  OnInit, 
  Input, 
  Output,
  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.scss']
})
export class ListHeaderComponent implements OnInit {
  @Input() type: string = ''
  @Input() title: string = ''
  @Input() description: string = ''
  @Output() plusBtnClicked = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onPlusBtnClicked(){
    this.plusBtnClicked.emit(this.type)
  }
  

}
