import Class from "../Models/Class";
var classes=[
  Class("Programming Fundamentals", "CS", "3", "A"),
  Class( "Mobile Application Development", "IT",  "1",  "B"),
  Class( "Database Systems",  "CS", "5",  "A"),
  Class( "Object Oriented Programming", "IT",  "2",  "A"),
];

export function getClasses()
{
    return classes;
}
export function addClass(subjectTitle, discipline,semester,section)
{
    classes.push(new Class(subjectTitle, discipline, semester, section));
}