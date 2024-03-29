import { FormArray, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

  clientForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: ['']
    }),
    phones: this.fb.array(['']),
    /* children: this.fb.group({
      name: [''],
      age: ['']
    }) */
    children: this.fb.array([])
  });

  phones = this.clientForm.get('phones') as FormArray;
  children = this.clientForm.get('children') as FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.clientForm.value);
  }

  addPhone() {
    this.phones.push(this.fb.control(''))
  }
  addChild() {
    this.children.push(this.fb.group({
      name: [''],
      age: ['']
    }));
  }

}
