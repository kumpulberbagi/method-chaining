'use strict'

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
}];

// identify class UserController to get the data from the JSON above

class UserController {
  constructor() {
    this.data = usersData;
    this.result;
    this.name;
    this.id;
    this.email;
  }

  findUser(email) {
    for (var i = 0; i < this.data.length; i += 1) {
      if (email === this.data[i].email) {
        this.result = this.data[i];
      }
    }
    return this;
  }

  formatName() {
    this.name = this.result.firstName + " " + this.result.lastName;
    return this;
  }

  formatData() {
    this.id = this.result.id;
    this.email = this.result.email;
    return this;
  }

  displayUser() {
    console.log("Member Name: " + this.name + "\n" + "ID: " + this.id + "\n" + "Email: " + this.email);
  }
}

// testing

let userController = new UserController(); userController.findUser("awesomesquidward@yahoo.com").formatName().formatData().displayUser();

// result
// Member name: Squidward Tentacles
// ID: 104
// Email: awesomesquidward@yahoo.com
