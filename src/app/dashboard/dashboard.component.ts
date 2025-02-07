import { Component, OnInit } from '@angular/core';
import { InMemoryDataService } from '../shared/data-services/in-memory-data.service';
import { LeaveRequest } from '../shared/models/leave-request';
import { Employee } from '../../../.history/src/app/shared/models/employee_20250202185420';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  totalEmployees: number = 0;
  totalLeaves: number = 0;
  newLeaves: number = 0;
  approvedLeaves: number = 0;
  canceledLeaves: number = 0;

  employees: Employee[] = [];
  leaveRequests: LeaveRequest[] = [];

  constructor(private inMemoryDataService: InMemoryDataService) {}

  ngOnInit(): void {

    const data = this.inMemoryDataService.createDb();
    this.employees = data.employees;
    this.leaveRequests = data.leaveRequests;


    this.totalEmployees = this.employees.length;
    this.totalLeaves = this.leaveRequests.length;

    this.newLeaves = this.leaveRequests.filter(
      (leave) => leave.status == 'Pending'
    ).length;
    this.approvedLeaves = this.leaveRequests.filter(
      (leave) => leave.status == 'Approved'
    ).length;
    this.canceledLeaves = this.leaveRequests.filter(
      (leave) => leave.status == 'Rejected'
    ).length;
  }
}
