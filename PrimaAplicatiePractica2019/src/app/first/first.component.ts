import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'first-component',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { console.log("constructor"); }

  ngOnInit() {
    console.log("onInit");
  }

}
