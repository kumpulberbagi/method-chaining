 // The data store:

 "use strict";

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


   titleCaseName(str) {
    
    
   }

   constructor () {
       this.usersData = usersData;
       this.firstname = "";
       this.lastname = "";
       this.email = "";
       this.id = 0;
       this.print = "";
   }

   findUser(user) {
       for(var i=0;i<this.usersData.length;i++) {
           // console.log(this.usersData[i].firstName);
           if(user == this.usersData[i].email) {
               this.firstname = this.usersData[i].firstName;
               this.lastname = this.usersData[i].lastName;
               this.email = this.usersData[i].email;
               this.id = this.usersData[i].id;
           }
       }

       return this;
   }

   formatName() {
       this.print = "Member Name: " + this.firstname + " " + this.lastname;
       return this;
   }

   formatData() {
       this.print = this.print + "\nEmail: " + this.email + "\nID: " + this.id;
       return this;
   }

   displayUser() {
       return this.print;
   }

 }

 // Driver code
 let userController = new UserController;
 // userController.findUser("awesomesquidward@yahoo.com").formatName().formatData().displayUser();
 console.log(userController.findUser("awesomesquidward@yahoo.com").formatName().formatData().displayUser());
 // userController.findUser("awesomesquidward@yahoo.com");

 // result
 // Member name: Squidward Tentacles
 // ID: 104
 // Email: awesomesquidward@yahoo.com
