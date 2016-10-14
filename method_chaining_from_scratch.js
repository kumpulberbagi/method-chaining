 // The data store:
 var usersData = [{
     firstName: "SpongeBob",
     lastName: "SquarePants",
     email: "spongebob@crustycrab.com",
     id: 102
 }, {
     firstName: "Patrick",
     lastName: "Star",
     email: "patric.star@gmail.com",
     id: 103
 }, {
     firstName: "Squidward",
     lastName: "Tentacles",
     email: "awesomesquidward@yahoo.com",
     id: 104
 }]

 function titleCaseName(str) {

 }

 // Our object with the chainable methods using class in ES6
 class UserController {
   constructor(){
     this.id = 0;
     this.email = "";
     this.fullName = "";
     this.email = "";
     this.index = 0;
   }

   titleCaseName(str) {


   }

   findUser(input_email){
     var email = input_email
     this.email = input_email
     for(let i = 0; i < usersData.length; i++){
       if(usersData[i].email.indexOf(email) >= 0){
         this.index = i
         return this
       }
     }
   }

   formatName(){
     this.fullName = usersData[this.index].firstName + " " + usersData[this.index].lastName
     return this
   }

   formatData(){
     this.id = usersData[this.index].id
     return this
   }

   displayUser(){
     console.log("Member name : " + this.fullName);
     console.log("ID : " + this.id);
     console.log("Email : " + this.email);
   }


 }

 // Driver code
 let userController = new UserController;

 userController.findUser("patric.star@gmail.com").formatName().formatData().displayUser()

 // result
 // Member name: Squidward Tentacles
 // ID: 104
 // Email: awesomesquidward@yahoo.com
