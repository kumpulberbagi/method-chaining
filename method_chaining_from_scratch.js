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
    // Our object with the chainable methods
 class UserController {

   findUser(email){
     for (let i = 0; i < usersData.length; i++){
       if( usersData[i]["email"] === email ){
         this.index = i;
         break;
       } else {

       }
     }
     return this
   }

   formatName(){
     this.name = "Member name: "+ usersData[this.index]["firstName"] +" "+usersData[this.index]["lastName"]
     return this
   }

   formatData(){
     this.id= "ID: "+ usersData[this.index]["id"]
     this.email= "Email: "+ usersData[this.index]["email"]
     return this
   }

   displayUser(){
     console.log(this.name)
     console.log(this.id)
     console.log(this.email)
   }
 };

// Driver code
let userController = new UserController()
userController.findUser("awesomesquidward@yahoo.com").formatName().formatData().displayUser();


// result
// Member name: Squidward Tentacles
// ID: 104
// Email: awesomesquidward@yahoo.com
