# Student Course Portal — Ashwin T

Angular 20 (standalone components) project built for the **Digital Nurture 5.0 — Angular Hands-On Exercise Book**.
All 10 hands-on exercises are implemented as ONE continuously-evolving application, exactly as instructed in the exercise book (no separate projects per exercise).

## Tech Stack
- Angular 20.3 (standalone components, no NgModules)
- TypeScript (strict mode)
- RxJS
- @ngrx/store, @ngrx/effects, @ngrx/store-devtools (state management)
- Reactive & Template-driven Forms
- Jasmine + Karma (unit testing)
- JSON Server (mock REST backend)

## Folder Structure
```
src/app/
  components/       # Reusable UI pieces (Header, CourseCard, CourseSummaryWidget, Notification)
  pages/            # Routed page components (Home, CourseList, CourseDetail, StudentProfile, Enrollment forms, NotFound)
  services/         # CourseService, EnrollmentService, AuthService, LoadingService, NotificationService
  models/           # Course, Student, Enrollment TypeScript interfaces
  directives/       # Custom HighlightDirective
  pipes/            # Custom CreditLabelPipe
  guards/           # authGuard, unsavedChangesGuard
  interceptors/     # auth, error-handler, loading HTTP interceptors
  store/            # NgRx: course/ and enrollment/ feature slices (actions, reducer, selectors, effects)
  shared/           # Cross-cutting UI (global loading spinner)
```

## Hands-On Coverage Map

| Hands-On | Concepts | Where to find it |
|---|---|---|
| 1 | CLI setup, project structure, first components | `components/header`, `pages/home` |
| 2 | Data binding, lifecycle hooks, @Input/@Output | `pages/home`, `components/course-card` |
| 3 | Directives & pipes (built-in + custom) | `directives/highlight.directive.ts`, `pipes/credit-label.pipe.ts`, `components/course-card` |
| 4 | Template-driven forms & validation | `pages/enrollment-form` |
| 5 | Reactive forms, FormBuilder, FormArray, custom/async validators | `pages/reactive-enrollment-form` |
| 6 | Services, DI, singleton vs component-scoped providers | `services/course.service.ts`, `services/enrollment.service.ts`, `components/notification` |
| 7 | Routing, params, query params, nested routes, guards, lazy loading | `app.routes.ts`, `pages/courses-layout`, `pages/course-detail`, `guards/` |
| 8 | HttpClient, RxJS operators, interceptors | `services/course.service.ts`, `interceptors/` |
| 9 | NgRx store, actions, reducers, selectors, effects | `store/course`, `store/enrollment` |
| 10 | Unit testing (Jasmine/Karma, TestBed, HttpClientTestingModule, MockStore) | every `*.spec.ts` file |

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the mock backend (JSON Server)
In a separate terminal:
```bash
npm run api
# equivalent to: json-server --watch db.json --port 3000
```
This serves `courses`, `students`, `enrollments`, and `students-by-course` at `http://localhost:3000`.

### 3. Run the app
```bash
ng serve
```
Visit `http://localhost:4200`.

### 4. Run unit tests
```bash
ng test
```
For a coverage report:
```bash
ng test --code-coverage
```
Coverage output is written to `coverage/`.

## Notes
- The auth guard uses a hardcoded `AuthService.isLoggedIn = true` flag (as specified in the exercise) — set it to `false` in `services/auth.service.ts` to see the `/profile` and `/enroll` routes redirect to Home.
- `/enroll` and `/enroll-reactive` are lazy-loaded standalone components — open Chrome DevTools → Network to see a separate chunk download the first time you visit either route.
- Redux DevTools (Chrome extension) will show the full NgRx action stream (`[Course] Load Courses`, `[Enrollment] Enroll In Course`, etc.) once the app is running.
