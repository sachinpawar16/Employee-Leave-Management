import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { LeaveListComponent } from './leave-list/leave-list.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { authGuard } from './shared/guard/auth.guard';
import { roleGuard } from './shared/guard/role.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        canActivate: [authGuard],
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuard],
      },
      {
        path: 'employee',
        component: EmployeeComponent,
        canActivate: [authGuard, roleGuard],
        data: { roles: ['Admin', 'HR', 'Manager'] },
      },
      {
        path: 'leave-list',
        component: LeaveListComponent,
        canActivate: [authGuard, roleGuard],
        data: { roles: ['Admin', 'HR', 'Manager'] },
      },
      {
        path: 'leave-request',
        component: LeaveRequestComponent,
        canActivate: [authGuard, roleGuard],
        data: { roles: ['Tester', 'Designer', 'Developer', 'Employee'] },
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
