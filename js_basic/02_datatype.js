"use strict" // treat all js code as newer version
// alert is not use in node it is a work in bowser
// alert(4+3);
let name="bboo"
let age=21
let login=false

/*
number => 3
bigint 
boolean=> true/false
undefine =>typeof(undefine)
null=empty value (it is a standalone value) typeof(object)
object =user define datatype
symbol= unique ness

*/

// datatype conversion.................................................................

let a=72
console.log(typeof a)
console.log(typeof(a))

//convserion
//for study "https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion"
let valueconv=String(a)
console.log(typeof valueconv);
let n="72saa"
console.log(typeof n)
console.log(typeof(n))

//convserion
let valueconv1=Number(n)
console.log(typeof valueconv1);

// number
//"33"=33
// "33ds"=NaN
// true=1/false=0
//boolean
//1= true ; 0=false
// ""=false
// "guga"=true

//...................operations...............
let num=65
let negnum=-num
console.log(negnum);

//basic operations are-..
// console.log(a+b);
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)
// console.log(a**b)

let n1="hello"
let n2="world"
let add= n1+n2
console.log(add);
console.log("1"+7)
console.log(1+"6")
console.log("1"+7+6)
console.log(7+7+"6")
// prefix (If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.)
let c=23
console.log(++c);
//postfix(If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.)
console.log(c++);

