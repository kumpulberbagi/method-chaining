// class Test{
//   constructor(input){
//     this.input = input
//   }
//
//   tambah(value){
//     this.input += value
//     console.log("bisa");
//     return this
//
//   }
//
//   kurang(){
//     this.input -= 1
//     return this
//   }
// }
//
// var lol = new Test(30)
//
// console.log(lol.tambah(2).kurang());

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

var email = "spongebob@crustycrab.com";
for(let i = 0; i < usersData.length; i++){

  if(usersData[i].email.indexOf(email) >= 0){
    console.log(i);
    break;
  }else{
    console.log("data not found");
  }
}
