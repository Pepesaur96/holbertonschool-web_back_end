// A function named updateStudentGradeByCity that returns
// an array of students for a specific city with their new grade.

export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      const grade = gradeObj ? gradeObj.grade : 'N/A';
      return { ...student, grade };
    });
}
