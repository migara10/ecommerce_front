import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  description: string = "";
  @Input()
  public item: any = {}; // decorate the property with @Input()
  // public items: any; // decorate the property with @Input()
  constructor(public dialogRef: MatDialogRef<ItemComponent>, @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  ngOnChanges() {
  }
  save() {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}
