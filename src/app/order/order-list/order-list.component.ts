import { Component, OnInit } from '@angular/core';
import { ApiServiseService } from 'src/app/service/api-servise.service';
import * as moment from 'moment';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  panelOpenState = false;
  orderRecords : any;
  step = 0;
  baseUri = this.api.API_URL;
  constructor(private api: ApiServiseService) { }

  ngOnInit(): void {
    
    this.api.getresponse("get", "order", {})
      .subscribe(res => {
        console.log(res)
        this.orderRecords = res.data
      },
        err => console.log(err)
      )
  }

  convertTime(time: any) {
    const newTime = moment(time).format('MMMM Do YYYY, h:mm:ss a')
    return newTime;
  }
}
