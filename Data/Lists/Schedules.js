import Schedule from '../Models/Schedule'
var Schedules=[
   new Schedule(
    "1",
     "BSCS - 3A",
     "Programming Fundamentals",
     "Monday",
     "08:30 AM - 09:30 AM",
  ),
   new Schedule(
    "2",
     "BSIT - 1B",
     "Mobile Application Development",
     "Monday",
     "10:30 AM - 11:30 AM",
  ),
   new Schedule(
    "3",
     "BSCS - 5A",
     "Database Systems",
     "Tuesday",
     "12:30 PM - 01:30 PM",
  ),
   new Schedule(
    "4",
     "BSIT - 2A",
     "Object Oriented Programming",
     "Wednesday",
     "02:00 PM - 03:00 PM",
  ),

];

export function getSchedules(){
  return Schedules;
}
export function addSchedule(id,className,subjectName,day,time){
  Schedules.push(new Schedule(id,className, subjectName, day, time));
}
export function deleteSchedule(id)
{
  Schedules=Schedules.filter(s=>s.id!=id);
}
export default Schedules;