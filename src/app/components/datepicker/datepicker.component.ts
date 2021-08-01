import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatepickerComponent implements OnInit {
  
  isMeridian = false;
  showSpinners = true;
  mytime: Date = new Date();
  constructor() { }
  ngOnInit(): void {
    
  }

}
