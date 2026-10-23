import Student from '../Models/Student';

var students = [
  new Student('101', 'Ali', 'P'),
  new Student('102', 'Humaid', 'A'),
];

export function getStudents() {
  return students;
}

export function addStudent(regno, name) {
  students.push(new Student(regno, name, 'P'));
}

export function markatt(index) {
  students[index].attendance = students[index].attendance == 'P' ? 'A' : 'P';
}
