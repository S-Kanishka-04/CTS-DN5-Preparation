import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EnrollmentService } from './enrollment.service';
import { Course } from '../models/course.model';

describe('EnrollmentService', () => {
  let service: EnrollmentService;
  let httpMock: HttpTestingController;

  const mockCourses: Course[] = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Angular Fundamentals', code: 'WD201', credits: 3, gradeStatus: 'pending' }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EnrollmentService]
    });

    service = TestBed.inject(EnrollmentService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should enroll and unenroll course ids', () => {
    expect(service.isEnrolled(1)).toBeFalse();
    service.enroll(1);
    expect(service.isEnrolled(1)).toBeTrue();
    service.unenroll(1);
    expect(service.isEnrolled(1)).toBeFalse();
  });

  it('should not add duplicate ids when enrolling twice', () => {
    service.enroll(1);
    service.enroll(1);
    expect(service.getEnrolledCourseIds()).toEqual([1]);
  });

  it('getEnrolledCourses() should resolve enrolled ids into full Course objects via CourseService', () => {
    service.enroll(2);

    service.getEnrolledCourses().subscribe((courses) => {
      expect(courses.length).toBe(1);
      expect(courses[0].id).toBe(2);
    });

    const req = httpMock.expectOne('http://localhost:3000/courses');
    req.flush(mockCourses);
  });

  it('getStudentsByCourse() should GET and unwrap the students array', () => {
    service.getStudentsByCourse(1).subscribe((students) => {
      expect(students.length).toBe(1);
      expect(students[0].name).toBe('Ashwin T');
    });

    const req = httpMock.expectOne('http://localhost:3000/students-by-course/1');
    expect(req.request.method).toBe('GET');
    req.flush({ id: 1, students: [{ id: 1, name: 'Ashwin T', email: 'a@b.com', gpa: 3.8, enrolledCourseIds: [1] }] });
  });
});
