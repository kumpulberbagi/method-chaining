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
     this.usersData = usersData
     this.firstName =  ""
     this.lastName = ""
     this.email = ""
     this.id = 0
     this.name = ""
     this.data = ""
   }

   titleCaseName(str) {


   }
   findUser(user){
     for (var i = 0; i < usersData.length; i++) {
       if(usersData[i].email == user){
         this.firstName = usersData[i].firstName
         this.lastName = usersData[i].lastName
         this.email = usersData[i].email
         this.id = usersData[i].id
       }
     }
     return this
   }
   formatName(){
     this.name = `Member name: ${this.firstName} ${this.lastName}\n`;
     return this
   }
   formatData(){
     this.data = `ID: ${this.id}\nEmail: ${this.email}`;
     return this
   }
   displayUser(){
     console.log(this.name + this.data);
   }
 }

 // Driver code
 let userController = new UserController;
 userController.findUser("awesomesquidward@yahoo.com").formatName().formatData().displayUser();
 // result
 // Member name: Squidward Tentacles
 // ID: 104
 // Email: awesomesquidward@yahoo.com
