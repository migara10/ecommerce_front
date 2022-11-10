import { Component, OnInit } from '@angular/core';
import { ApiServiseService } from 'src/app/service/api-servise.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  constructor(private api: ApiServiseService) { }

  ngOnInit(): void {
    this.api.getresponse("get", "order", {})
      .subscribe(res => {
        console.log(res)
      },
        err => console.log(err)

      )
  }

}
