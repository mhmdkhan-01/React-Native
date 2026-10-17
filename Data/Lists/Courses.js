import Course from "../Models/Course";
var Courses=[
    Course( "Programming Fundamentals", "PF101"),
    Course( "Mobile Application Development", "MAD202"),
    Course("Database Systems",  "DBS303"),
    Course("Object Oriented Programming",  "OOP102"),
];

export function getCourses(){
    return Courses;
}

export function addCourse(courseTitle, courseCode){
    Courses.push(new Course(courseTitle, courseCode));
}