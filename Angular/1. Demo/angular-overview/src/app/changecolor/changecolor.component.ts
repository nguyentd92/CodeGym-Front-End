import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changecolor',
  templateUrl: './changecolor.component.html',
  styleUrls: ['./changecolor.component.scss']
})
export class ChangecolorComponent implements OnInit {

  background = '#000000';

  constructor() {}

  ngOnInit() {
  }

  fillColor(value) {
    this.background = value;
  }

}
