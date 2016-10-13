function shout_backwards(data){
  return backwards(data) + "!!!";
}

var all_caps = function(data){
  return data.toUpperCase();
}

var splitting = function (data){
  return all_caps(data).split("");
}

var reversing = function(data){
  return splitting(data).reverse()
}

var backwards = function (data){
  return reversing(data).join("");
}

console.log(shout_backwards("Hello World"));
//
