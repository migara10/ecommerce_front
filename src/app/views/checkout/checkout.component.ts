import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiseService } from 'src/app/service/api-servise.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  

  
  userDataForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    postalCode: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
  })

  get f() {
    return this.userDataForm.controls;
  }
  submit() {
    console.log(this.userDataForm.value);
  }


  /* userDataForm = this.formBuilder.group({
    email: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    postalCode: ['', Validators.required],
    mobile: ['', Validators.required],
  }) */
  items: any = [];
  baseUri = this.api.API_URL;
  isEmpty = true;

  constructor(private formBuilder: FormBuilder, private router: Router, private toastr: ToastrService, private api: ApiServiseService) { }

  ngOnInit(): void {
    this.items = JSON.parse(localStorage.getItem("PendingOrder") || "[]");
    this.isEmpty = this.items.length ? false : true;
    this.showSuccess();
  }
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  checkoutOrder() {
    console.log(this.userDataForm.value)
  }



}
