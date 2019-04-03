import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name: string;
  dob: string;
  email: string;
  sex: boolean;
  result: string;

  render() {
    let sex = this.sex ? 'Male' : 'Femail';
    this.result = `
    Name: ${this.name}.DOB: ${this.dob}.Email: ${this.email}Sex: ${this.sex ? 'Male' : 'Female'}`;
    
  }
}
