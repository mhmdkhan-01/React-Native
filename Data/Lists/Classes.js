import Class from "../Models/Class";
var classes=[
  new Class("Programming Fundamentals", "CS", "3", "A"),
  new Class( "Database Systems",  "CS", "5",  "A"),
  new Class( "Object Oriented Programming", "IT",  "2",  "A"),
];

export function getClasses()
{
    return classes;
}
export function addClass(subjectTitle, discipline,semester,section)
{
    classes.push(new Class(subjectTitle, discipline, semester, section));
}