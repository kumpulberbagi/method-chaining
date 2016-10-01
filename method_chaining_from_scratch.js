"use strict"

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
    this._fullName = ''
    this._firstName = ''
    this._lastName = ''
    this._email = ''
    this._id = 0
    this._formatData = []
  }

  findUser(email){
    for(var i = 0 ; i < usersData.length ; i++){
      if(usersData[i].email === email){
        this._firstName = usersData[i].firstName
        this._lastName = usersData[i].lastName
        this._email = usersData[i].email
        this._id = usersData[i].id
      }
    }
     return this
  }

  formatName(){
    this._fullName = this._firstName + " " + this._lastName
    return this
}
  formatData(){
    this._formatData.push(this._fullName)
    this._formatData.push(this._id)
    this._formatData.push(this._email)
    return this
  }

  displayUser(){
    console.log("Member Name : " + this._formatData[0] +
                "\nID : " + this._formatData[1] +
                "\nEmail : " + this._formatData[2])
    //this._formatData.splice(0,3) kalau cari data lain data yang uda dicari di delete/splice
  }

  titleCaseName(str) {

  }
 }

 // Driver code
 let userController = new UserController;
 userController.findUser("awesomesquidward@yahoo.com").formatName().formatData().displayUser();
 // userController.findUser("spongebob@crustycrab.com").formatName().formatData().displayUser();
 // result
 // Member name: Squidward Tentacles
 // ID: 104
 // Email: awesomesquidward@yahoo.com
