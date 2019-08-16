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
 const mico = new Person({name:'Damico', location:'Long Beach'});
 console.log(mico.speak())

 class Instructor extends Person {
     constructor(large){
         super(large)
         this.specialty = large.specialty;
         this.favLanguage = large.favLanguage;
         this.catchPhrase = large.catchPhrase;
     }
     demo(subject){
         return `Today we are learning about ${this.favLanguage}.`
     };
     grade(Student){
         return `${Student.name} receives a perfect score on ${this.favSubjects}`
     }
 }

 const earl = new Instructor ({
     name:'Earl',
     age:33, 
     location:'philippines',
     specialty: 'Back-end',
     favLanguage:'cotlin',
     catchPhrase:'ayo D-Dubs!'
 })
console.log(earl.demo())


 const kris = new Instructor ({
     name:'Kris',
     age:'29',
     location:'america',
     specialty:'Front-end',
     favLanguage:'CSS',
     catchPhrase:'Im red pilled'
 })
 console.log(kris.grade())

 class Student extends Person {
     constructor(medium){
         super(medium)
         this.previousBackground = medium.previousBackground;
         this.className = medium.className;
         this.favSubjects = medium.favSubjects;
     }
     listsSubjects(){
        // `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
     }
     PRAssignment(){
        // `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
     }
     sprintChallenge(){
         console.log(`student.name has begun sprint challenge on {subject}`)
     }
 }

 const phil = new Student ({
    name:'Phil',
    age:28,
    location:'Japan',
    previousBackground:'coffee roaster',
    className:'and7',
    favSubjects:'Andriod development'
})

// const ted = new Student ({
//     name:'Ted',
//     age:36,
//     location:'Japan',
//     previousBackground:'astronaut',
//     className:'web8',
//     favSubjects:'HTML'
// })

//  class TeamLeads extends Instructor {
//      constructor(small){
//         super(small)
//         this.gradClassName = small.gradClassName;
//         this.favInstructor = small.favInstructor;
//      }
//      standUp(){
//          `{name} announces to {channel} , @channel standy times!`
//      }
//      debugsCode(){
//          `{name} debugs {student.name}'s code on {subject}`
//      }
//  }

//  const nicole = new TeamLeads ({
//     name:'Nico',
//     age:20,
//     location:'hong-kong',
//     specialty:'Back-end',
//     favLanguage:'C#',
//     catchPhrase:'its boring like disneyland',
    //    gradClassName:'and7',
    //    favInstructor:'kris'
// })

// const Sarah = new TeamLeads ({
//     name:'Sarah',
//     age:24,
//     location:'South Korea',
//     specialty:'Front-end',
//     favLanguage:'C',
//     catchPhrase:'Each day I learn some more',
    //    gradClassName:'web8',
    //    favInstructor:'earl'
// })