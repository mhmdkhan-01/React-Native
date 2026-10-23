import Student from '../Models/Student';

var students = [new Student('101', 'Ali'), new Student('102', 'Humaid')];

export function getStudents() {
  return students;
}

export function addStudent(regno, name) {
  students.push(new Student(regno, name));
}
