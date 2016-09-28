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
     this.data = usersData
     this.firstName
     this.lastName
     this.email
     this.id
     this.nameFormat
     this.dataFormat
     this.display
   }
   findUser(value){
     for(var i=0; i< this.data.length; i++){
       if(value == this.data[i].email){
         this.firstName = this.data[i].firstName
         this.lastName = this.data[i].lastName
         this.email = this.data[i].email
         this.id = this.data[i].id
       }
     }
     return this
   }

   formatName(){
     this.nameFormat = `Member Name : ${this.firstName} ${this.lastName}`
     return this
   }
   formatData(){
     this.dataFormat = `ID : ${this.id} \nEmail : ${this.email}`
     return this
   }
   displayUser(){
     this.display = `${this.nameFormat}\n${this.dataFormat}`
     return this.display
   }
 }

 // Driver code
 let userController = new UserController;
 // console.log(userController.data[2].email);
 // console.log(usersData[0].email);
 console.log(userController.findUser("awesomesquidward@yahoo.com").formatName().formatData().displayUser());
 console.log(userController.findUser("spongebob@crustycrab.com").formatName().formatData().displayUser());
 console.log(userController.findUser("patric.star@gmail.com").formatName().formatData().displayUser());

 // result
 // Member name: Squidward Tentacles
 // ID: 104
 // Email: awesomesquidward@yahoo.com
