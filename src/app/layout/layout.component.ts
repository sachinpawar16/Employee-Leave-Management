import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [
    NgIf,
    RouterOutlet,
    RouterLink,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'], // Fix typo from `styleUrl` to `styleUrls`
})
export class LayoutComponent implements OnInit {
  loggeduser: any;
  canAccess: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const localdata = localStorage.getItem('userlogin');
    if (localdata) {
      this.loggeduser = JSON.parse(localdata);
      this.canAccess = this.isCanApprove();
    }
  }

  onLogOut() {
    localStorage.removeItem('userlogin');
    this.router.navigateByUrl('login');
  }

  isCanApprove(): boolean {
    const allowedRoles = ['Admin', 'Manager', 'HR'];
    return allowedRoles.includes(this.loggeduser?.role);
  }
}
