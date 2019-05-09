// CODE here for your Lambda Classes

class Person {
    constructor(personAttrs) {
        this.name = personAttrs.name;
        this.age = personAttrs.age;
        this.location = personAttrs.location;
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
        this.catchPhrase = instructorAttrs.catchPhrase;
    }
    demo(string) {
        return `Today, we are learning about ${string}.`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    }
}

class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
    }
    listsSubjects() {
        return `My favorite subjects are ${this.favSubjects}.`
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttrs) {
        super(pmAttrs);
        this.graduatingClass = pmAttrs.graduatingClass;
        this.favInstructor = pmAttrs.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    }
}

const alvin = new Instructor({
    name: 'Alvin',
    age: 8,
    location: `Dave's house`,
    favLanguage: 'Chipmunk',
    specialty: 'Singing',
    catchPhrase: 'All I want for Christmas is my two front teeth.'
});

const simon = new Instructor({
    name: 'Simon',
    age: 8,
    location: `Dave's house`,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: 'According to my calculations...'
});

const theodore = new Instructor({
    name: 'Theodore',
    age: 8,
    location: `Dave's house`,
    favLanguage: 'Chipmunk',
    specialty: 'Hugs',
    catchPhrase: 'Dave?  Can I sleep with you tonight?'
})

const kevin = new Student({
    name: 'Kevin',
    age: 31,
    location: 'California',
    previousBackground: 'Child boy-band star',
    className: 'WEB20',
    favSubjects: 'CSS & JavaScript'
});

const nick = new Student({
    name: 'Nick',
    age: 26,
    location: 'California',
    previousBackground: 'Child boy-band star',
    className: 'WEB20',
    favSubjects: 'Camp Rock movies & HTML'
})

const joe = new Student({
    name: 'Joe',
    age: 29,
    location: 'California',
    previousBackground: 'Child boy-band star',
    className: 'WEB20',
    favSubjects: 'Cheese, but only on pizzas, and sometimes on homemade quesadillas'
})