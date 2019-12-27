import { Component, OnInit } from '@angular/core';

import { Groups } from './../../groups'
import { GROUPS } from './../../mock-groups'


@Component({
  selector: 'app-selecting',
  templateUrl: './selecting.component.html',
  styleUrls: ['./selecting.component.scss']
})
export class SelectingComponent implements OnInit {

  constructor() { }

  groups = GROUPS

  ngOnInit() {
  }

}
