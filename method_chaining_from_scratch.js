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

   consturctor(){
     this._firstname = ''
     this._lastname = ''
     this._email = ''
     this._id = 0
     this._result =''
   }
   titleCaseName(str) {
   }

   findUser(email){
     for (var i = 0; i < usersData.length; i++) {
       if(usersData[i].email === email){
         this._firstname = usersData[i].firstName
         this._lastname = usersData[i].lastName
         this._email = usersData[i].email
         this._id = usersData[i].id
       }
     }
     return this
   }

   formatName(){
     this._result = this._firstname+ " " + this._lastname
     return this
   }

   formatData(){
     this._result = "Member Name: " + this._result + " | "+"Email: " + this._email + " | " +"ID: " + this._id
        return this
   }

   displayUser(){
    //  console.log(`Member Name: ${this._name} Email: ${this._email} ID ${this._id}`);
    return this._result

   }

 }

 // Driver code
 let userController = new UserController;
 console.log(userController.findUser("awesomesquidward@yahoo.com")
 .formatName().formatData().displayUser());

 // result
 // Member name: Squidward Tentacles
 // ID: 104
 // Email: awesomesquidward@yahoo.com
