import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  profileForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', Validators.required],
    email: [null, Validators.required ],
    number: ['', Validators.required],
    password:[''],
    confirmpass:[''],
    forms: this.fb.array([
      this.fb.control('')
    ])
  });
  dataArray : string[] = [];
  constructor(private fb: FormBuilder) { }
  
  get profileFormControl() {
    return this.profileForm.controls;
  }

  get forms() {
    return this.profileForm.get('forms') as FormArray;
  }

  addForm() {
    this.forms.push(this.fb.control(''));
  }

  ngOnInit(){
  console.log(this.profileForm)}

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  addItem(){
    this.dataArray.push(this.profileForm.value);
    console.log(this.dataArray);
    
  }
}
