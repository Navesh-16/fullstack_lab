var students = [
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
function ClassAverageMark(students) {
    var totalMark = 0;
    for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
        var student = students_1[_i];
        for (var _a = 0, _b = student.subjects; _a < _b.length; _a++) {
            var subject = _b[_a];
            totalMark += subject.mark;
        }
    }
    totalMark = totalMark / students[0].subjects.length;
    return totalMark / students.length;
}
function Average(student) {
    var totalMarks = 0;
    for (var _i = 0, _a = student.subjects; _i < _a.length; _i++) {
        var subject = _a[_i];
        totalMarks += subject.mark;
    }
    return totalMarks / student.subjects.length;
}
var classAverage = ClassAverageMark(students);
console.log("The average mark in the class is :" + classAverage);
var Average1 = Average(students[1]);
console.log("The average mark for ".concat(students[1].firstName, " is: ").concat(Average1, ", which is not included in the class average"));
