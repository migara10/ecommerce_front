import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiServiseService } from 'src/app/service/api-servise.service';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product-popup',
  templateUrl: './edit-product-popup.component.html',
  styleUrls: ['./edit-product-popup.component.scss']
})
export class EditProductPopupComponent implements OnInit {
  baseUri = this.api.API_URL;
  selectedFile: any;

  constructor(private router: Router, public dialogRef: MatDialogRef<EditProductPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private api: ApiServiseService, private toastr: ToastrService) { }

  productItem = new FormGroup({
    product_id: new FormControl('', [Validators.required]),
    product_name: new FormControl('', [Validators.required]),
    product_category: new FormControl('', [Validators.required, Validators.minLength(3)]),
    product_disc: new FormControl('', [Validators.required]),
    product_price: new FormControl('', [Validators.required]),
    isPromo: new FormControl('', [Validators.required]),
    product_promo_price: new FormControl('', [Validators.required]),
  })
  ngOnInit(): void {
    this.productItem.setValue({
      product_id: this.data.product_id,
      product_name: this.data.product_name,
      product_category: this.data.product_category,
      product_disc: this.data.product_disc,
      product_price: this.data.product_price,
      isPromo: this.data.isPromo,
      product_promo_price: this.data.product_promo_price,
    })
  }
  saveNews() {
    const fd = new FormData();
    fd.append("file", this.selectedFile);
    fd.append("product_id", this.productItem.value['product_id'] || '');
    fd.append("product_name", this.productItem.value['product_name'] || '');
    fd.append("product_category", this.productItem.value['product_category'] || '');
    fd.append("product_disc", this.productItem.value['product_disc'] || '');
    fd.append("product_price", this.productItem.value['product_price'] || '');
    fd.append("_id", this.data._id);
    fd.append("isPromo", this.productItem.value['isPromo'] || '');
    fd.append("product_promo_price", this.productItem.value['product_promo_price'] || '');

    fd.append("product_imageuri", this.data.product_imageuri);

    this.api.getresponse("put", "product", fd)
      .subscribe(res => {
        this.toastr.success(res.msg);
        this.dialogRef.close();
        // this.router.navigate(['/add_items'] , { queryParams: { id: res.data.product_id}});
      },
        err => console.log(err)

      )
  };
  onFileSelected = (event: any) => {
    this.selectedFile = event.target.files[0];
  };
  get f() {
    return this.productItem.controls;
  }
  close() {
    this.dialogRef.close();
  }

}
