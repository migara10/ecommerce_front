import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiseService } from 'src/app/service/api-servise.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  items: any = [];
  baseUri = this.api.API_URL;
  isEmpty = true;

  constructor(private router: Router, private toastr: ToastrService,private api: ApiServiseService) { }

  ngOnInit(): void {
    this.items = JSON.parse(localStorage.getItem("PendingOrder") || "[]");
    this.isEmpty = this.items.length ? false : true;
    this.showSuccess();
  }
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

}
