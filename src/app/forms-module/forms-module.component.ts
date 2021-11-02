import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-module',
  templateUrl: './forms-module.component.html',
  styleUrls: ['./forms-module.component.css']
})
export class FormsModuleComponent implements OnInit {

  value: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
