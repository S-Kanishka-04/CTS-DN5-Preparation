import { Injectable } from '@angular/core';

/**
 * AuthService — HOL 7 Task 2. Hardcoded login flag for the exercise;
 * in a real app this would call a login API and store a real token.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  /** Hardcoded to true so guarded routes are reachable during the exercise. */
  isLoggedIn = true;

  /** Mock bearer token read by AuthInterceptor (HOL 8 Task 3). */
  getToken(): string {
    return 'mock-token-12345';
  }

  login(): void {
    this.isLoggedIn = true;
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
