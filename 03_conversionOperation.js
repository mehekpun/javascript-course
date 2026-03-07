let score = "33"

console.log(typeof score)

let v = Number(score) //write N capital in Number
console.log(typeof v)

let val = "33abc"
let m = Number(val)
console.log(typeof m) //it gives number which is absolutely wrong
//this is a fault in js

console.log(m)
//it's type is NaN - not a number
let n = 0
console.log(null)
let valn=Number(null)
console.log(valn) //value of Number(null)=0
//value of undefined = NaN
//boolean = 1 or 0

let y = Boolean("")
console.log(y)
//"" is false and anything written inside is true