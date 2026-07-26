import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CourseService } from '../../services/course.service';
import { loadCourses, loadCoursesFailure, loadCoursesSuccess } from './course.actions';

/**
 * CourseEffects — HOL 9 Task 2.
 * Effects are the ONLY place in NgRx where side effects (HTTP calls,
 * navigation) should happen. Flow:
 *   loadCourses (dispatched) -> this effect calls CourseService ->
 *   loadCoursesSuccess/loadCoursesFailure (dispatched) -> reducer
 *   updates state -> selectors emit -> component re-renders.
 */
@Injectable()
export class CourseEffects {
  private actions$ = inject(Actions);
  private courseService = inject(CourseService);

  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCourses),
      switchMap(() =>
        this.courseService.getCourses().pipe(
          map((courses) => loadCoursesSuccess({ courses })),
          catchError((error) => of(loadCoursesFailure({ error: error.message })))
        )
      )
    )
  );
}
