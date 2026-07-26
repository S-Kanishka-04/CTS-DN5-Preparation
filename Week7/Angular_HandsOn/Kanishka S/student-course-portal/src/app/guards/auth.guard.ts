import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

/**
 * AuthGuard — HOL 7 Task 2.
 * Angular 20 favours functional guards (CanActivateFn) over the older
 * class-based `implements CanActivate` pattern. Protects /profile and
 * /enroll: redirects to Home ('/') when the (hardcoded) AuthService
 * reports the student isn't logged in.
 */
export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isLoggedIn) {
    return true;
  }

  router.navigate(['/']);
  return false;
};
