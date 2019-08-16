// CODE here for your Lambda Classes

 class Person {
     constructor(beginning){
         this.name = beginnning.name;
         this.age = beginning.age;
         this.location = beginning.location;
     };
     speak(){
         `Hello my name is Fred, I am from Bedrock where ${this.name} and ${this.location} are the objects own props`
     };
 };

 class Instructor {
     constructor(large){
         this.name = large.name;
         this.age = large.age;
         this.location = large.location;
         this.specialty = large.specialty;
         this.favLanguage = large.favLanguage;
         this.catchPhrase = large.catchPhrase;
     }
     demo(subject){
         console.log(`Today we are learning about {subject}.`)
     };
     grade(student){
         console.log(`{student.name} receives a perfect score on {subject}`)
     }
 }

 class Student {
     constructor(medium){
         this.name = medium.name;
         this.age = medium.age;
         this.location = medium.location;
         this.previousBackground = medium.previousBackground;
         this.className = medium.className;
         this.favSubjects = medium.favSubjects;
     }
     listsSubjects(){
        `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
     }
     PRAssignment(){
        `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
     }
     sprintChallenge(){
         console.log(`student.name has begun sprint challenge on {subject}`)
     }
 }

 class TeamLeads {
     constructor(small){
         this.name = small.name;
         this.gradClassName = small.gradClassName;
         this.favInstructor = small.favInstructor;
     }
     standUp(){
         `{name} announces to {channel} , @channel standy times!`
     }
     debugsCode(){
         `{name} debugs {student.name}'s code on {subject}`
     }
 }