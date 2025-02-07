import { Employee } from './../../../.history/src/app/shared/models/employee_20250202185420';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/services/employee.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-employee',
  imports: [
    FormsModule,
    NgIf,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatDialogModule,
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  showForm: boolean = false;
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'phone',
    'role',
    'actions',
  ];
  employeeForm: Employee = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    password: '',
    role: '',
  };

  constructor(
    private employeeService: EmployeeService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next: (employees) => {
        this.employees = employees;
      },
      error: (err) => {
        this.snackBar.open('Error fetching employee data', 'Close', {
          duration: 3000,
        });
      },
    });
  }

  onDelete(emp: Employee): void {
    if (confirm(`Are you sure you want to delete ${emp.name}?`)) {
      this.employeeService.deleteEmployee(emp.id).subscribe({
        next: () => {
          this.employees = this.employees.filter((e) => e !== emp);
          this.snackBar.open(`${emp.name} deleted successfully`, 'Close', {
            duration: 3000,
          });
        },
        error: () => {
          this.snackBar.open('Error deleting employee', 'Close', {
            duration: 3000,
          });
        },
      });
    }
  }

  addEmployee(): void {
    if (
      !(
        this.employeeForm.name &&
        this.employeeForm.email &&
        this.employeeForm.role
      )
    ) {
      this.snackBar.open('Please fill in all required fields', 'Close', {
        duration: 3000,
      });
      return;
    }

    const emailExists = this.employees.some(
      (employee) => employee.email === this.employeeForm.email
    );

    if (emailExists) {
      this.snackBar.open(
        'Email already exists. Please use a different email.',
        'Close',
        {
          duration: 3000,
        }
      );
      return;
    }

    this.employeeForm.id = this.employees.length + 1;
    this.employeeService.addEmployee(this.employeeForm).subscribe({
      next: (employee) => {
        this.employees.push(employee);
        this.snackBar.open('Employee added successfully', 'Close', {
          duration: 3000,
        });

        this.employeeForm = {
          id: 0,
          name: '',
          email: '',
          phone: '',
          password: '',
          role: '',
        };
      },
      error: (err) => {
        this.snackBar.open('Error adding employee', 'Close', {
          duration: 3000,
        });
      },
    });
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  totalNumberOfEmployee() {
    //console.log('employee ' + this.employees.length);
    return this.employees.length;
  }
}
