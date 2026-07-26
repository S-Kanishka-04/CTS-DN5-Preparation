import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * LoadingService — HOL 8 Task 3.
 * A simple counter-based BehaviorSubject so overlapping HTTP requests
 * don't hide the spinner early (spinner stays visible until the LAST
 * in-flight request finishes).
 */
@Injectable({ providedIn: 'root' })
export class LoadingService {
  private requestCount = 0;
  private readonly loadingSubject = new BehaviorSubject<boolean>(false);
  readonly isLoading$ = this.loadingSubject.asObservable();

  show(): void {
    this.requestCount++;
    this.loadingSubject.next(true);
  }

  hide(): void {
    this.requestCount = Math.max(0, this.requestCount - 1);
    if (this.requestCount === 0) {
      this.loadingSubject.next(false);
    }
  }
}
