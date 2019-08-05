function reverseString(str){
  var arr = str.split("")
  var rev = []
  while (arr.length > 0){
    rev.push(arr.pop())
  }
  var output = rev.join("")
  return output;
}

console.log(reverseString("join the navy"))
