import { Component, OnInit } from '@angular/core';
import { LeaveRequest } from '../shared/models/leave-request';
import { LeaveService } from '../shared/services/leave-service.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-leave-request',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
  ],
  templateUrl: './leave-request.component.html',
  styleUrl: './leave-request.component.css',
})
export class LeaveRequestComponent implements OnInit {
  leaveRequests: LeaveRequest[] = [];
  loggedData = JSON.parse(localStorage.getItem('userlogin') ?? '{}');
  constructor(private leaveRequestService: LeaveService) {}
  ngOnInit(): void {
    this.getLeaveRequest();
  }

  requestForm: LeaveRequest = {
    id: 0,
    employeeId: 0, // Reference to the employee
    leaveType: '',
    startDate: '', // Use string for simplicity
    endDate: '',
    status: 'pending',
    reason: '',
  };

  getLeaveRequest() {
    this.leaveRequestService.getLeaveRequest().subscribe({
      next: (leaveRequests: any) => {
        this.leaveRequests = leaveRequests;
      },
      error: (err) => {
        console.error('Error fetching leave requests:', err);
        // Optionally handle the error (e.g., show an alert or notification)
      },
    });
  }

  addLeaveRequest() {
    if (!this.loggedData.id) {
      console.error('User not logged in');
      return;
    }

    this.requestForm.employeeId = this.loggedData.id;
    this.requestForm.id = this.loggedData.id;

    this.leaveRequestService.addLeaveRequest(this.requestForm).subscribe({
      next: (leaveRequest: any) => {
        this.leaveRequests.push(leaveRequest);
        this.requestForm = {
          id: 0,
          employeeId: 0, // Reference to the employee
          leaveType: '',
          startDate: '', // Use string for simplicity
          endDate: '',
          status: 'pending',
          reason: '',
        };
      },
      error: (err: any) => {
        console.error('Error adding leave request:', err);
      },
    });
  }
}
