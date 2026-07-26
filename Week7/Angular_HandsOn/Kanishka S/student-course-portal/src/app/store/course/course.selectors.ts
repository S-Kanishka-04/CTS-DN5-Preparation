import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CourseState } from './course.reducer';

/**
 * Selectors — HOL 9 Task 1. Memoised: they only recompute when their
 * input selectors' results actually change, which is NgRx's key
 * performance optimisation.
 */
export const selectCourseState = createFeatureSelector<CourseState>('course');

export const selectAllCourses = createSelector(
  selectCourseState,
  (state) => state.courses
);

export const selectCoursesLoading = createSelector(
  selectCourseState,
  (state) => state.loading
);

export const selectCoursesError = createSelector(
  selectCourseState,
  (state) => state.error
);
