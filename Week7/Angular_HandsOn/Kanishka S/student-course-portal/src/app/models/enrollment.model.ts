/** A single enrollment record, as stored on the mock JSON Server backend. */
export interface Enrollment {
  id: number;
  studentId: number;
  courseId: number;
  semester: 'Odd' | 'Even';
}

/** Shape of the template-driven / reactive Enrollment Request form value. */
export interface EnrollmentRequest {
  studentName: string;
  studentEmail: string;
  courseId: number | null;
  preferredSemester: 'Odd' | 'Even';
  agreeToTerms: boolean;
}
