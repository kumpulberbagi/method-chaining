'use strict'
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
//console.log(usersData[0]['firstName']);
 class UserController {
   findUser(userEmail) {
    for(var i=0;i<usersData.length;i++)
    {
      if(usersData[i]['email'] == userEmail)
      {
        this.i = i
        break
      }
    }
    return this
   }

   formatName()
   {
     this.name = 'Member name :'+usersData[this.i]['firstName']+' '+usersData[this.i]['lastName']
     return this
   }
   formatData()
   {
     this.id = "Id : "+usersData[this.i]['id']
     this.email = 'Email : '+usersData[this.i]['email']
     return this
   }
   displayUser()
   {
     console.log(this.name)
     console.log(this.id);
     console.log(this.email);
   }
 }


 var userController = new UserController;
 userController.findUser("awesomesquidward@yahoo.com").formatName().formatData().displayUser();

 // result
 // Member name: Squidward Tentacles
 // ID: 104
 // Email: awesomesquidward@yahoo.com
