import { Component, OnInit, ViewChild } from '@angular/core';

import * as moment from 'moment';
@Component({
  selector: 'app-counts',
  templateUrl: './counts.component.html',
  styleUrls: ['./counts.component.scss']
})
export class CountsComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  @ViewChild('start') start: any;
  @ViewChild('end') end: any;
  public waterLevel:any = '';
  public price:any = '';
  public counts:any = '';
  public timediff:any = '';
  private prices:number = 0.497;
  public watercounts:any ='';
  public calculate () {
    console.log(this.start.mytime);
    console.log(this.end.mytime);
    console.log(this.waterLevel);
    let con = this.waterLevel;
    let startTime = moment(this.start.mytime);
    let endTime = moment(this.end.mytime);
    console.log(endTime.diff(startTime, 'm'));
    let difference = endTime.diff(startTime, 'm');
    if(difference < 0) {
      // 跨天
      difference = endTime.add(1, 'd').diff(startTime, 'm');
    }
    this.timediff = `${difference} 分钟`;
    console.log(this.switchLevel(parseFloat(this.waterLevel)));
    if(this.switchLevel(parseFloat(this.waterLevel))) {
      this.counts = this.switchLevel(parseFloat(this.waterLevel)) * this.prices * difference;
      this.watercounts = this.switchLevel(parseFloat(this.waterLevel)) * difference;
    }
  }

  private switchLevel(key:number) {
    let watercount;
    switch (key) {
      case 10:
        watercount = 2.05
        break;
      case 11:
        watercount = 2.433
        break;
      case 12:
        watercount = 2.745
        break;
      case 13:
          watercount = 3.12
          break;
      case 14:
        watercount = 3.49
        break;
      case 15:
          watercount = 3.86
          break;
      case 16:
          watercount = 4.3
          break;
      case 17:
        watercount = 4.74
        break;
      case 18:
          watercount = 5.18
          break;
      default:
        watercount = 1
        break;
    }
    
    return watercount;
  }
}
