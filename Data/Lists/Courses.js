import Course from "../Models/Course";
var Courses=[
    new Course( "Programming Fundamentals", "PF101"),
    new Course( "Mobile Application Development", "MAD202"),
    new Course("Database Systems",  "DBS303"),
    new Course("Object Oriented Programming",  "OOP102"),
];

export function getCourses(){
    return Courses;
}

export function addCourse(courseTitle, courseCode){
    Courses.push(new Course(courseTitle, courseCode));
}