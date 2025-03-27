import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const canActivateAdmin: CanActivateFn = () => {
  const router = inject(Router);
  const esAdmin = localStorage.getItem('rol') === 'admin';

  if (!esAdmin) {
    router.navigate(['/']);
    return false;
  }
  return true;
};
