import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const roleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const user = JSON.parse(localStorage.getItem('userlogin') || 'null');

  if (!user) {
    router.navigateByUrl('/login');
    return false;
  }
  const allowedRoles = route.data?.['roles'] as string[];
  if (allowedRoles?.includes(user.role)) {
    return true;
  } else {
    alert('Access Deny');
    router.navigateByUrl('/dashboard');
    return false;
  }
};
