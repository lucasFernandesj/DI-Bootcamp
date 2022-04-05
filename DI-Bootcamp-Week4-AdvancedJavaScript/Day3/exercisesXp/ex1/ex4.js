let student = [
  { name: 'Ray', course: 'Computer Science', isPassed: true },
  { name: 'Liam', course: 'Computer Science', isPassed: false },
  { name: 'Jenner', course: 'Information Technology', isPassed: true },
  { name: 'Marco', course: 'Robotics', isPassed: true },
  { name: 'Kimberly', course: 'Artificial Intelligence', isPassed: false },
  { name: 'Jamie', course: 'Big Data', isPassed: false },
]

let passed = student.filter((element)=>element.isPassed === true)

let congratz = student.filter((element) => element.isPassed === true).map((element)=>`Good job ${element.name} , you passed the ${element.course} course`)
