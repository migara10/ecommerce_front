import { Component, OnInit } from '@angular/core';
import { ApiServiseService } from 'src/app/service/api-servise.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private api:ApiServiseService) { }

  ngOnInit(): void {
    this.api.registerUser();
  }

}
