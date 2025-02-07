import { LeaveRequest } from './../../../../.history/src/app/shared/models/leave-request_20250202184117';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LeaveService {
  private leaveRequestUrl = 'api/leaveRequests';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  getLeaveRequest(): Observable<LeaveRequest[]> {
    return this.http.get<LeaveRequest[]>(this.leaveRequestUrl);
  }

  addLeaveRequest(leaveRequest: LeaveRequest): Observable<LeaveRequest> {
    return this.http.post<LeaveRequest>(
      this.leaveRequestUrl,
      leaveRequest,
      this.httpOptions
    );
  }

  approveLeaveRequest(leaveRequest: LeaveRequest): Observable<any> {
    return this.http.put(this.leaveRequestUrl, leaveRequest, this.httpOptions);
  }

  rejectLeaveRequest(leaveRequest: LeaveRequest): Observable<any> {
    return this.http.put(this.leaveRequestUrl, leaveRequest, this.httpOptions);
  }
}
