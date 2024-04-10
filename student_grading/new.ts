
type SubjectMark = {
    name: string;
    mark: number;
  };
  

  type Student = {
    firstName: string;
    subjects: SubjectMark[];
  };
  
  const students: Student[] = [
    {
    firstName: "Navesh",
    subjects: [
     { name: "Math", mark: 85 },
          { name: "Science", mark: 90 },
      { name: "English", mark: 92 },
        { name: "History", mark: 88 },
       { name: "Tamil", mark: 95 },
      ],
    },
    {
      firstName: "Naveen",
    subjects: [
        { name: "Math", mark: 80 },
     { name: "Science", mark: 85 },
        { name: "English", mark: 90 },
     { name: "History", mark: 82 },
        { name: "Tamil", mark: 88 },
      ],
    },
    {
 firstName: "Guru",
      subjects: [
    { name: "Math", mark: 88 },
        { name: "Science", mark: 92 },
     { name: "English", mark: 86 },
      { name: "History", mark: 90 },
        { name: "Tamil", mark: 95 },
    ],
 },
  ];

  function ClassAverageMark(students: Student[]): number {
    let totalMark = 0;
    for (const student of students) {
      for (const subject of student.subjects) {
        totalMark += subject.mark;
      }
    }
    totalMark = totalMark / students[0].subjects.length;
    return totalMark / students.length;
  }
  
  function Average(student: Student): number {
    let totalMarks =0;
    for (const subject of student.subjects){
        totalMarks += subject.mark
    }
    return totalMarks/student.subjects.length;
  }
  
  
  const  classAverage = ClassAverageMark(students);
  console.log("The average mark in the class is :" +classAverage );

  const Average1 = Average(students[1]) ;
  console.log(`The average mark for ${students[1].firstName} is: ${Average1}, which is not included in the class average`);
  
