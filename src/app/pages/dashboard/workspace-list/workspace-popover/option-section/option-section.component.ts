import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-option-section',
  templateUrl: './option-section.component.html',
  styleUrls: ['./option-section.component.scss']
})
export class OptionSectionComponent implements OnInit {
  @Input() title: string = ''
  @Input() showBorder: boolean = true
  constructor() { }

  ngOnInit() {
  }

}
