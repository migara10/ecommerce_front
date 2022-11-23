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
  data: any;
  users:any;
  p: number = 1;
  total: number = 0;
  limit: number = 2;
  constructor(private api: ApiServiseService) {
    this.getUsers();
   }

  ngOnInit(): void {

    
    
    
    
  }

  convertTime(time: any) {
    const newTime = moment(time).format('MMMM Do YYYY, h:mm:ss a')
    return newTime;
  }

  getUsers(){
      this.api.getresponse("get", `order?page=${this.p}&limit=${this.limit}`, {})
      .subscribe(res => {
        this.orderRecords = res.data[0].docs;
        this.total = res.data[0].totalDocs;
      },
        err => console.log(err)
      )
} 
  pageChangeEvent(event: number){
    this.p = event;
    this.getUsers();
}
}
