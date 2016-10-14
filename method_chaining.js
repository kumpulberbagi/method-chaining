function shout_backwards(data){
  var all_caps = data.toUpperCase();
  var splitting = all_caps.split("");
  var reversing = splitting.reverse()
  var backwards = reversing.join("");
  return backwards + "!!!";
}

console.log(shout_backwards("Hello World"));

class Shout_backwards{
  constructor(data){
    this.data = data;
  }

  all_caps(){
    this.data = this.data.toUpperCase();
    return this
  }

  splitting(){
    this.data = this.data.split("");
    return this
  }

  reversing(){
    this.data = this.data.reverse();
    return this
  }

  backwards(){
    this.data = this.data.join("");
    return this
  }

  final(){
    this.data = this.data + "!!!";
    return this
  }

}

var test = new Shout_backwards("Hello World!")
console.log(test.all_caps().splitting().reversing().backwards().final());
