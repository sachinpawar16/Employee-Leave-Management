import { Component } from '@angular/core';
import { LeaveService } from '../shared/services/leave-service.service';
import { LeaveRequest } from '../shared/models/leave-request';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-leave-list',
  imports: [
    NgFor,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
  ],
  templateUrl: './leave-list.component.html',
  styleUrl: './leave-list.component.css',
})
export class LeaveListComponent {
  leaveRequests: LeaveRequest[] = [];
  loggedData = JSON.parse(localStorage.getItem('userlogin') ?? '{}');
  constructor(private leaveRequestService: LeaveService) {}
  ngOnInit(): void {
    this.getLeaveRequest();
    // this.totalLeaveRequest();
  }
  getLeaveRequest() {
    this.leaveRequestService.getLeaveRequest().subscribe({
      next: (leaveRequests: any) => {
        this.leaveRequests = leaveRequests;
      },
      error: (err) => {
        console.error('Error fetching leave requests:', err);
      },
    });
  }
  approve(leaveRequest: LeaveRequest) {
    console.log('Leave Request to Approve:', leaveRequest);
    // leaveRequest.status = 'Approved';
    this.leaveRequestService.approveLeaveRequest(leaveRequest).subscribe({
      next: (updatedLeaveRequest) => {
        console.log('Leave approved:', updatedLeaveRequest);
        leaveRequest.status = 'Approved';
      },
      error: (err) => {
        console.error('Error approving leave:', err);
      },
    });
  }

  reject(leaveRequest: LeaveRequest) {
    console.log('Leave Request to Reject:', leaveRequest);
    //leaveRequest.status = 'Rejected';
    this.leaveRequestService.rejectLeaveRequest(leaveRequest).subscribe({
      next: (updatedLeaveRequest) => {
        console.log('Leave rejected:', updatedLeaveRequest);
        leaveRequest.status = 'Rejected';
      },
      error: (err) => {
        console.error('Error rejecting leave:', err);
      },
    });
  }
  totalLeaveRequest() {
    //console.log('leave' + this.leaveRequests.length);
    return this.leaveRequests.length;
  }
}
