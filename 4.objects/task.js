function Student(name, gender, age) {
        this.name = name,
        this.gender = gender,
        this.age = age,
        this.marks = []
};

let first = new Student("Ann", "female", 20);
let second = new Student("Mark", "man", 22);
let third = new Student("Alex", "man", 19);


Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName
};

Student.prototype.addMarks = function (...marks) {
    if (this.marks) {
        this.marks.push(...marks);
    }
};

Student.prototype.getAverage = function () {
    if (!this.marks || this.marks.length === 0) return 0;
    return this.marks.reduce((acc, val) => acc + val, 0) / this.marks.length;
};

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
};