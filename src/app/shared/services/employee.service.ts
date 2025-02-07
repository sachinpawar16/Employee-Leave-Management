import { Employee } from './../../../../.history/src/app/shared/models/employee_20250202185420';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employeeUrl = 'api/employees';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeeUrl);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(
      this.employeeUrl,
      employee,
      this.httpOptions
    );
  }

  deleteEmployee(id: any): Observable<Employee> {
    const url = `${this.employeeUrl}/${id}`;
    return this.http.delete<Employee>(url, this.httpOptions);
  }
}
