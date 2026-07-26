import { courseReducer, initialCourseState } from './course.reducer';
import { loadCourses, loadCoursesFailure, loadCoursesSuccess } from './course.actions';
import { Course } from '../../models/course.model';

describe('courseReducer', () => {
  const mockCourses: Course[] = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' }
  ];

  it('should return the initial state for an unknown action', () => {
    const state = courseReducer(undefined, { type: '@@INIT' } as any);
    expect(state).toEqual(initialCourseState);
  });

  it('should set loading true on loadCourses', () => {
    const state = courseReducer(initialCourseState, loadCourses());
    expect(state.loading).toBeTrue();
    expect(state.error).toBeNull();
  });

  it('should populate courses and clear loading on loadCoursesSuccess', () => {
    const loadingState = { ...initialCourseState, loading: true };
    const state = courseReducer(loadingState, loadCoursesSuccess({ courses: mockCourses }));
    expect(state.courses).toEqual(mockCourses);
    expect(state.loading).toBeFalse();
  });

  it('should set the error and clear loading on loadCoursesFailure', () => {
    const loadingState = { ...initialCourseState, loading: true };
    const state = courseReducer(loadingState, loadCoursesFailure({ error: 'Network error' }));
    expect(state.error).toBe('Network error');
    expect(state.loading).toBeFalse();
  });
});
