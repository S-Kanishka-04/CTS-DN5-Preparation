import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

/**
 * loadingInterceptor — HOL 8 Task 3.
 * Shows the global spinner (LoadingService) before every outgoing
 * request and hides it once the request settles. `finalize` runs
 * whichever way the Observable ends (success or error) — the RxJS
 * equivalent of a try/catch/finally block — so the spinner never
 * gets stuck on.
 */
export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loading = inject(LoadingService);
  loading.show();

  return next(req).pipe(
    finalize(() => loading.hide())
  );
};
