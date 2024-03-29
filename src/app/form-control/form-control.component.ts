import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  firstName: FormControl = new FormControl('');
  lastName: FormControl = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.firstName.valueChanges
      .subscribe((newName) => console.log(newName));
  }

  setFirtName() {
    this.firstName.setValue('Adam');
    console.log(this.firstName.value);
  }

}
