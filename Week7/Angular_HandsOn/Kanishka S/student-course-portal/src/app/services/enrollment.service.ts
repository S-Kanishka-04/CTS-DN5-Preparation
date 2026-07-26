import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CourseService } from './course.service';
import { Course } from '../models/course.model';
import { Student } from '../models/student.model';

/**
 * EnrollmentService — HOL 6 Task 2.
 * Demonstrates service-to-service injection: this service injects
 * CourseService internally to resolve enrolled course IDs into full
 * Course objects, instead of duplicating course data.
 */
@Injectable({ providedIn: 'root' })
export class EnrollmentService {
  private readonly baseUrl = 'http://localhost:3000/students-by-course';
  private enrolledCourseIds: number[] = [];

  constructor(
    private courseService: CourseService,
    private http: HttpClient
  ) {}

  enroll(courseId: number): void {
    if (!this.isEnrolled(courseId)) {
      this.enrolledCourseIds.push(courseId);
    }
  }

  unenroll(courseId: number): void {
    this.enrolledCourseIds = this.enrolledCourseIds.filter(id => id !== courseId);
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.includes(courseId);
  }

  getEnrolledCourseIds(): number[] {
    return [...this.enrolledCourseIds];
  }

  /** Resolves stored IDs into full Course objects via CourseService. */
  getEnrolledCourses(): Observable<Course[]> {
    if (this.enrolledCourseIds.length === 0) {
      return of([]);
    }
    return this.courseService.getCourses().pipe(
      map((courses: Course[]) => courses.filter(c => this.enrolledCourseIds.includes(c.id)))
    );
  }

  /**
   * HOL 8 Task 2 — switchMap chains two HTTP calls: given a courseId,
   * fetch the students enrolled in that course. switchMap cancels the
   * previous inner Observable automatically if a new courseId arrives
   * before the first request completes, preventing out-of-order
   * responses when the user rapidly switches between courses.
   */
  getStudentsByCourse(courseId: number): Observable<Student[]> {
    return this.http
      .get<{ id: number; students: Student[] }>(`${this.baseUrl}/${courseId}`)
      .pipe(map((record) => record.students));
  }

  /** Example of forkJoin usage: load enrolled course details for many IDs at once. */
  getCoursesByIds(ids: number[]): Observable<Course[]> {
    if (ids.length === 0) return of([]);
    return forkJoin(ids.map(id => this.courseService.getCourseById(id)));
  }
}
