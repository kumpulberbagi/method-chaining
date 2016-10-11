// function shout_backwards(data){
//   var all_caps = data.toUpperCase();
//   var splitting = all_caps.split("");
//   var reversing = splitting.reverse()
//   var backwards = reversing.join("");
//   return backwards + "!!!";
// }
//
// console.log(shout_backwards("Hello World"));
console.log("Hello World".toUpperCase().split("").reverse().join("") + "!!!");

let shout_backwards = (data) => {
  let all_caps = () => {
    data = data.toUpperCase()
    let splitting = () => {
      data = data.split("")

      let reversing = () => {
        data = data.reverse()

        let backwards = () => {
          data = data.join("")

          return data + "!!!"
        }

        return {
          backwards: backwards
        }
      }
      return {
        reversing: reversing
      }
    }
    return {
      splitting: splitting
    }
  }
  return {
    all_caps: all_caps
  }
}


console.log(shout_backwards("Hello World").all_caps().splitting().reversing().backwards());

/*

}
let all_caps = () => {
  data = data.toUpperCase()
  return this
}

let splitting = () => {
  data = data.split("")
  return this
}

let reversing = () => {
  data = data.reverse()
  return this
}

let backwards = () => {
  data = data.join("")
  return this + "!!!"
}

return {
  all_caps: all_caps,
  splitting: splitting,
  reversing: reversing,
  backwards: backwards
}
*/
