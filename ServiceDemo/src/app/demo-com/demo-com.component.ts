import { Component, OnInit } from '@angular/core';
import { DateServiceService} from '../date-service.service'

@Component({
  selector: 'app-demo-com',
  templateUrl: './demo-com.component.html',
  styleUrls: ['./demo-com.component.css']
})
export class DemoComComponent implements OnInit {

  theDate;
  constructor(private dateService: DateServiceService) { }

  ngOnInit() {
    this.theDate = this.dateService.getCurrentDate();
  }

}
