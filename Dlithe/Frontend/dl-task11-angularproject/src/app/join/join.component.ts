import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from './password.validator';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  listofcities=['Mangalore','Mumbai','Pune']
  registrationForm:FormGroup;
  submitted:boolean=false;
  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      //Validation of input fields
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: [
        '',
        [
            Validators.required,
            Validators.min(1000000000),
            Validators.max(9999999999),
        ],
    ],
    //Custom Validation
    pass:['', Validators.required],
    cpass:['',Validators.required],
},{validator:PasswordValidator}); 
  
console.log("Home component is called")}
//Patching Values
  ngOnInit(): void {
    this.registrationForm.patchValue({
      name:'shreya',
      phone:'8095738850'
  })
  console.log("Home component is called")
  }

}
