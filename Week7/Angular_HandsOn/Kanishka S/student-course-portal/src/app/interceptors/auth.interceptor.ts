import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

/**
 * authInterceptor — HOL 8 Task 3.
 * Clones every outgoing request and attaches a mock Authorization
 * bearer token. Registered via provideHttpClient(withInterceptors([...])).
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const authReq = req.clone({
    setHeaders: { Authorization: `Bearer ${auth.getToken()}` }
  });
  return next(authReq);
};
