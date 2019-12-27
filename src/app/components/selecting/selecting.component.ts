import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Groups } from './../../groups'
import { GROUPS } from './../../mock-groups'


@Component({
  selector: 'app-selecting',
  templateUrl: './selecting.component.html',
  styleUrls: ['./selecting.component.scss']
})

export class SelectingComponent implements OnInit {
  @Input() name: string;
  @Output() chosen = new EventEmitter<boolean>();
  selected = ''


  constructor() { }

  groups = GROUPS

  doWork(val: any) {
  console.log("TCL: SelectingComponent -> doWork -> val", val)

  }

  ngOnInit() {
  }

}
