import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { Course, NewCourse } from '../models/course.model';

/**
 * CourseService — HOL 6: provided in root so the whole app shares ONE
 * singleton instance (HomeComponent, CourseListComponent and
 * CourseSummaryWidgetComponent all read from the same source of truth).
 *
 * HOL 8: the in-memory array was replaced with real HttpClient calls
 * against the JSON Server mock backend (see db.json / README).
 */
@Injectable({ providedIn: 'root' })
export class CourseService {
  private readonly baseUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  /** GET /courses — filters out zero-credit placeholder rows via `map`. */
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseUrl).pipe(
      map(courses => courses.filter(c => c.credits > 0)),
      tap(courses => console.log('Courses loaded:', courses.length)),
      // retry transient network failures twice before giving up
      retry(2),
      catchError(err => {
        console.error('getCourses failed', err);
        return throwError(() => new Error('Failed to load courses. Please try again.'));
      })
    );
  }

  /** GET /courses/:id */
  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.baseUrl}/${id}`).pipe(
      catchError(err => {
        console.error('getCourseById failed', err);
        return throwError(() => new Error(`Failed to load course ${id}.`));
      })
    );
  }

  /** POST /courses */
  addCourse(course: NewCourse): Observable<Course> {
    return this.http.post<Course>(this.baseUrl, course);
  }

  /** PUT /courses/:id */
  updateCourse(id: number, course: Partial<Course>): Observable<Course> {
    return this.http.put<Course>(`${this.baseUrl}/${id}`, course);
  }

  /** DELETE /courses/:id */
  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
