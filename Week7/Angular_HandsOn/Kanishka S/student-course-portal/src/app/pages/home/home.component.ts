import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { CourseSummaryWidgetComponent } from '../../components/course-summary-widget/course-summary-widget.component';

/**
 * HomeComponent (Dashboard) — built across HOL 1, 2 & 6.
 * Demonstrates all four binding types, the ngOnInit/ngOnDestroy
 * lifecycle hooks, and reads live data from the shared CourseService.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CourseSummaryWidgetComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  // Interpolation (HOL 2 Task 1, step 11)
  portalName = 'Student Course Portal';

  // Property binding target (step 12)
  isPortalActive = true;

  // Event binding target + message shown after click (step 13)
  message = '';

  // Two-way binding target via [(ngModel)] (step 14).
  // [(ngModel)]="searchTerm" is shorthand for:
  //   [ngModel]="searchTerm" (ngModelChange)="searchTerm = $event"
  // i.e. one-way property binding (component -> DOM) PLUS an event
  // binding (DOM -> component) combined into a single syntax.
  searchTerm = '';

  coursesAvailable = 0;
  enrolledCount = 0;
  gpa = 3.8;

  constructor(
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {
    // Simulate/fetch a count of available courses on init.
    console.log('HomeComponent initialised — courses loaded');
    this.courseService.getCourses().subscribe({
      next: (courses) => (this.coursesAvailable = courses.length),
      error: () => (this.coursesAvailable = 0)
    });
    this.enrolledCount = this.enrollmentService.getEnrolledCourseIds().length;
  }

  ngOnDestroy(): void {
    // Critical for unsubscribing from long-lived Observables/timers —
    // this dashboard has none, but the hook is here to log the
    // lifecycle transition as required by the exercise.
    console.log('HomeComponent destroyed');
  }

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }
}
