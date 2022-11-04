import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../data/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employeeDetails: Employee = { firstName: '', lastName: '', email: '', contactNumber: 0, address: '', userName: '', password: '', gender: '', qualifications: '', experience: '', coadingLanguages: [] }
  qualifications: Array<string> = [];
  experiences: Array<string> = [];
  coadingLanguages: Array<string> = [];
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {

    /** This will create formControlGroup for elements and assign validators */
    this.form = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      contactNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      address: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['', [Validators.required]],
      qualifications: [''],
      experience: [''],
      coadingLanguages: ['']
    });
   }

  ngOnInit(): void {
    this.qualifications = [ 'B.A', 'B.C.A', 'B.Com', 'B.B.A', 'M.A', 'M.C.A', 'M.Com', 'M.B.A' ];
    this.experiences = [ '6 months', '1 year', '2 years', '3 years', '5 years' ];
    this.coadingLanguages = [ 'C/C++', 'Java', 'C#', 'PHP', 'Python' ];
  }

  get f(){
    return this.form.controls;
  }

  /** It will print formatted Employee Details in console */
  onSubmit() {
    console.log("Employee Details");
    console.log("------------------------------------");
    console.log(`Employee Name: ${this.employeeDetails.firstName} ${this.employeeDetails.lastName}`);
    console.log(`Email: ${this.employeeDetails.email}`);
    console.log(`Contact Number: ${this.employeeDetails.contactNumber}`);
    console.log(`Address: ${this.employeeDetails.address}`);
    console.log(`Username: ${this.employeeDetails.userName}`);
    console.log(`Password: ${this.employeeDetails.password}`);
    console.log(`Gender: ${this.employeeDetails.gender}`);
    console.log(`Qualification: ${this.employeeDetails.qualifications}`);
    console.log(`Experience: ${this.employeeDetails.experience}`);
    console.log(`Coading Languages: ${this.employeeDetails.coadingLanguages}`);
  }
}
