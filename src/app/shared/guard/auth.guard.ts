import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const loggedData = localStorage.getItem('userlogin');

  if (loggedData !== null) {
    return true;
  } else {
    await router.navigateByUrl('login');
    return false;
  }
};
