// CODE here for your Lambda Classes

class Person {
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(instructorAttrs) {
        super(instructorAttrs);
        this.favLanguage = instructorAttrs.favLanguage;
        this.specialty = instructorAttrs.specialty;
        this.catchPhrase = instructorAttrs.specialty;
    }
    demo(string) {
        return `Today, we are learning about ${string}.`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    }
}