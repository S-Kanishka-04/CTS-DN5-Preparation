/** Student profile model. */
export interface Student {
  id: number;
  name: string;
  email: string;
  gpa: number;
  enrolledCourseIds: number[];
}
