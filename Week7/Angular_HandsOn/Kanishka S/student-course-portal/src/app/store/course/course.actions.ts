import { createAction, props } from '@ngrx/store';
import { Course } from '../../models/course.model';

/**
 * Course actions — HOL 9 Task 1.
 * The '[Course]' prefix is an NgRx convention that groups actions by
 * feature in the Redux DevTools timeline (filter by "[Course]").
 */
export const loadCourses = createAction('[Course] Load Courses');

export const loadCoursesSuccess = createAction(
  '[Course] Load Courses Success',
  props<{ courses: Course[] }>()
);

export const loadCoursesFailure = createAction(
  '[Course] Load Courses Failure',
  props<{ error: string }>()
);
