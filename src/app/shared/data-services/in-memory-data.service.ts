import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from '../../../../.history/src/app/shared/models/employee_20250202185420';
import { LeaveRequest } from '../models/leave-request';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    const employees: Employee[] = [
      {
        id: 1,
        name: 'Aarav Sharma',
        email: 'aarav.sharma@example.com',
        role: 'Developer',
        phone: '9876543210',
        password: '123456',
      },
      {
        id: 2,
        name: 'Isha Patel',
        email: 'isha.patel@example.com',
        role: 'Tester',
        phone: '9876543211',
        password: '123456',
      },
      {
        id: 3,
        name: 'Rohan Gupta',
        email: 'rohan@gmail.com',
        role: 'Designer',
        phone: '9876543212',
        password: '123456',
      },
      {
        id: 4,
        name: 'Meera Iyer',
        email: 'meera.iyer@example.com',
        role: 'Admin',
        phone: '9876543213',
        password: '123456',
      },
      {
        id: 5,
        name: 'Sagar Singh',
        email: 'sagar@gmail.com',
        role: 'Manager',
        phone: '9876543214',
        password: '123456',
      },
      {
        id: 6,
        name: 'Anjali Desai',
        email: 'anjali.desai@example.com',
        role: 'Developer',
        phone: '9876543215',
        password: '123456',
      },
      {
        id: 7,
        name: 'Karan Kapoor',
        email: 'karan.kapoor@example.com',
        role: 'Tester',
        phone: '9876543216',
        password: '123456',
      },
      {
        id: 8,
        name: 'Priya Nair',
        email: 'priya.nair@example.com',
        role: 'Admin',
        phone: '9876543217',
        password: '123456',
      },
      {
        id: 9,
        name: 'Arjun Reddy',
        email: 'arjun.reddy@example.com',
        role: 'Developer',
        phone: '9876543218',
        password: '123456',
      },
      {
        id: 10,
        name: 'Sneha Jain',
        email: 'sneha.jain@example.com',
        role: 'Tester',
        phone: '9876543219',
        password: '123456',
      },
      {
        id: 11,
        name: 'Rahul Verma',
        email: 'rahul.verma@example.com',
        role: 'Designer',
        phone: '9876543220',
        password: '123456',
      },
      {
        id: 12,
        name: 'Pooja Kulkarni',
        email: 'pooja.kulkarni@example.com',
        role: 'Admin',
        phone: '9876543221',
        password: '123456',
      },
      {
        id: 13,
        name: 'Aakash Thakur',
        email: 'aakash.thakur@example.com',
        role: 'Manager',
        phone: '9876543222',
        password: '123456',
      },
      {
        id: 14,
        name: 'Tanya Roy',
        email: 'tanya.roy@example.com',
        role: 'Developer',
        phone: '9876543223',
        password: '123456',
      },
      {
        id: 15,
        name: 'Nikhil Mishra',
        email: 'nikhil.mishra@example.com',
        role: 'Tester',
        phone: '9876543224',
        password: '123456',
      },
    ];

    const leaveRequests: LeaveRequest[] = [
      {
        id: 1,
        employeeId: 1,
        leaveType: 'Sick Leave',
        startDate: '2025-02-01',
        endDate: '2025-02-03',
        status: 'Pending',
        reason: 'fiver',
      },
      {
        id: 2,
        employeeId: 2,
        leaveType: 'Vacation',
        startDate: '2025-02-10',
        endDate: '2025-02-15',
        status: 'Rejected',
        reason: 'family treap',
      },
      {
        id: 5,
        employeeId: 5,
        leaveType: 'Vacation',
        startDate: '2025-03-10',
        endDate: '2025-03-15',
        status: 'Approved',
        reason: 'family treap',
      },
    ];

    return { employees, leaveRequests };
  }
}
