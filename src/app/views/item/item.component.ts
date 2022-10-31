import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiServiseService } from 'src/app/service/api-servise.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  description: string = "";
  baseUri = this.api.API_URL;
  items : any;
  @Input()
  public item: any = {}; // decorate the property with @Input()
  // public items: any; // decorate the property with @Input()
  constructor(public dialogRef: MatDialogRef<ItemComponent>, @Inject(MAT_DIALOG_DATA) public data: any,private api: ApiServiseService) { }

  ngOnInit(): void {
    // this.items = this.data.productbyItem;
    this.items = this.data.productbyItem.filter((data: any) => data.item_qty != 0)
  }

  ngOnChanges() {
  }

  selectSize(item: any){
    console.log(item)
  }
  save() {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}
