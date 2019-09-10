// CODE here for your Lambda Classes

 class Person {
     constructor(beginning){
         this.name = beginning.name;
         this.age = beginning.age;
         this.location = beginning.location;
     };
     speak(){
         return `Hello my name is ${this.name}, I am from ${this.location}.`
     };
 };
 const mico = new Person({name:'Damico', location:'Los Angeles'});

 
 
 class Instructor extends Person {
     constructor(teacher){
         super(teacher)
         this.specialty = teacher.specialty;
         this.favLanguage = teacher.favLanguage;
         this.catchPhrase = teacher.catchPhrase;
     }
     demo(subject){
          return `Today we are learning about ${subject}.`
     };
     grade(Student){
         return `${Student.name} receives a perfect score on ${Student.favSubjects}.`
     }
 }



 class Student extends Instructor {
     constructor(pupil){
         super(pupil)
         this.previousBackground = pupil.previousBackground;
         this.className = pupil.className;
         this.favSubjects = pupil.favSubjects;
     }
     listsSubjects(){
        return `${Student.favSubjects}`
     }
     PRAssignment(Student){
        return `${Student.name} has submitted a PR for ${Student.favSubjects}`
     }
     sprintChallenge(Student){
         return `${Student.name} has begun sprint challenge on ${Student.favSubjects}`
     }
 }



 class TeamLeads extends Instructor {
     constructor(guide){
        super(guide)
        this.gradClassName = guide.gradClassName;
        this.favInstructor = guide.favInstructor;
     }
     standUp(TeamLeads, channel){
         return `${TeamLeads.name} announces to ${channel} , @channel standy times!`
     }
     debugsCode(name, Student, subject){
         return `${name} debugs {Student.name}'s code on ${subject}`
     }
 }

//Instructors
const earl = new Instructor ({
    name:'Earl',
    age:33, 
    location:'philippines',
    specialty: 'Back-end',
    favLanguage:'cotlin',
    catchPhrase:'ayo D-Dubs!',
    subject:'history'
})



const kris = new Instructor ({
    name:'Kris',
    age:'29',
    location:'america',
    specialty:'Front-end',
    favLanguage:'CSS',
    catchPhrase:'Im red pilled'
})



//Team Leads
 const nicole = new TeamLeads ({
    name:'Nico',
    age:20,
    location:'hong-kong',
    specialty:'Back-end',
    favLanguage:'C#',
    catchPhrase:'its boring like disneyland',
    gradClassName:'and7',
    favInstructor:'kris'
})

const Sarah = new TeamLeads ({
    name:'Sarah',
    age:24,
    location:'South Korea',
    specialty:'Front-end',
    favLanguage:'C',
    catchPhrase:'Each day I learn some more',
    gradClassName:'web8',
    favInstructor:'earl'
})

//Students
const phil = new Student ({
    name:'Phil',
    age:28,
    location:'Japan',
    previousBackground:'coffee roaster',
    className:'and7',
    favSubjects:'Andriod development'
})

const ted = new Student ({
    name:'Ted',
    age:36,
    location:'Japan',
    previousBackground:'astronaut',
    className:'web8',
    favSubjects:'HTML'
})

//conole.logs
console.log(mico.speak())
console.log(earl.demo('cotlin'))
console.log(kris.grade(phil))
//console.log(listsSubjects)
console.log(ted.PRAssignment(ted))
console.log(phil.sprintChallenge(phil))
console.log(nicole.standUp(nicole), 'WebPT9')