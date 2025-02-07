import { Employee } from './../../../.history/src/app/shared/models/employee_20250202185420';
import { Component } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { EmployeeService } from '../shared/services/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  employees: Employee[] = [];
  constructor(
    private employeeService: EmployeeService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
      console.log('Employees fetched:', this.employees);
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      alert('Please fill in all fields correctly.');
      return;
    }

    const loginData: { email: string; password: string } = {
      email: this.loginForm.get('email')?.value.trim(),
      password: this.loginForm.get('password')?.value.trim(),
    };

    const user = this.employees.find(
      (employee) =>
        employee.email == loginData.email &&
        employee.password == loginData.password
    );
    console.log(user);

    if (user) {
      localStorage.setItem('userlogin', JSON.stringify(user));
      console.log('Login successful');
      this.router.navigateByUrl('dashboard');
    } else {
      alert('Invalid email or password. Please try again.');
    }
  }
}
