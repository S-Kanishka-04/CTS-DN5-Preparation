import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CourseService } from './course.service';
import { Course } from '../models/course.model';

describe('CourseService', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;

  const mockCourses: Course[] = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Angular Fundamentals', code: 'WD201', credits: 3, gradeStatus: 'pending' }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CourseService]
    });

    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Asserts there are no outstanding/unexpected HTTP requests after each test.
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getCourses() should GET from the courses endpoint and return the list', () => {
    service.getCourses().subscribe((courses) => {
      expect(courses.length).toBe(2);
      expect(courses).toEqual(mockCourses);
    });

    const req = httpMock.expectOne('http://localhost:3000/courses');
    expect(req.request.method).toBe('GET');
    req.flush(mockCourses);
  });

  it('getCourses() should propagate a friendly error message on server failure', () => {
    service.getCourses().subscribe({
      next: () => fail('expected an error, not a successful emission'),
      error: (err: Error) => {
        expect(err.message).toContain('Failed to load courses');
      }
    });

    // retry(2) means the service will re-issue the request up to 2 more
    // times before the error propagates — flush an error for each attempt.
    for (let attempt = 0; attempt < 3; attempt++) {
      const req = httpMock.expectOne('http://localhost:3000/courses');
      req.flush('Server error', { status: 500, statusText: 'Internal Server Error' });
    }
  });

  it('getCourseById() should GET the correct URL', () => {
    service.getCourseById(1).subscribe((course) => {
      expect(course).toEqual(mockCourses[0]);
    });

    const req = httpMock.expectOne('http://localhost:3000/courses/1');
    expect(req.request.method).toBe('GET');
    req.flush(mockCourses[0]);
  });

  it('addCourse() should POST the new course', () => {
    const newCourse = { name: 'New Course', code: 'NC100', credits: 2, gradeStatus: 'pending' as const };
    service.addCourse(newCourse).subscribe();

    const req = httpMock.expectOne('http://localhost:3000/courses');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newCourse);
    req.flush({ id: 99, ...newCourse });
  });
});
