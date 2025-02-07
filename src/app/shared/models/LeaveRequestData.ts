import { LeaveRequest } from './leave-request';

export class LeaveRequestData {
  createDb() {
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
        status: 'Approved',
        reason: 'family treap',
      },
    ];

    return { leaveRequests };
  }
}
