import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { unsavedChangesGuard } from './guards/unsaved-changes.guard';

/**
 * Application routes — HOL 7.
 * - /courses uses a CoursesLayoutComponent with nested child routes
 *   (list + detail), demonstrating nested routing (step 72).
 * - /profile is protected by authGuard (step 76).
 * - /enroll and /enroll-reactive are LAZY LOADED via loadComponent(),
 *   the standalone-component equivalent of loadChildren for a whole
 *   feature module (step 73) — Angular only downloads that chunk the
 *   first time the route is visited.
 * - /enroll-reactive is also protected by unsavedChangesGuard so users
 *   are warned before losing a dirty form (step 77).
 * - The wildcard ** route MUST be last; routes are matched in order.
 */
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent)
  },
  {
    path: 'courses',
    loadComponent: () =>
      import('./pages/courses-layout/courses-layout.component').then((m) => m.CoursesLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/course-list/course-list.component').then((m) => m.CourseListComponent)
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./pages/course-detail/course-detail.component').then((m) => m.CourseDetailComponent)
      }
    ]
  },
  {
    path: 'profile',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/student-profile/student-profile.component').then((m) => m.StudentProfileComponent)
  },
  {
    path: 'enroll',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/enrollment-form/enrollment-form.component').then((m) => m.EnrollmentFormComponent)
  },
  {
    path: 'enroll-reactive',
    canActivate: [authGuard],
    canDeactivate: [unsavedChangesGuard],
    loadComponent: () =>
      import('./pages/reactive-enrollment-form/reactive-enrollment-form.component').then(
        (m) => m.ReactiveEnrollmentFormComponent
      )
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent)
  }
];
