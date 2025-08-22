const n=98
console.log(n);
const num=new Number(555)
console.log(num);
console.log(num.toString());
console.log(num.toString().length);
console.log(num.toFixed(3));
const newnum=863
console.log(newnum.toPrecision(4));
const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'));


// ***************************maths*****************************
console.log(Math);
console.log(Math.abs(-47));
console.log(Math.round(8.3));
console.log(Math.ceil(8.3));
console.log(Math.max(8,9,2,8,2,0));
console.log(Math.min(8,9,1,4,8,1,2,4));
console.log(Math.sqrt(7));

console.log(Math.random());// value is b\w 0 to 1
console.log((Math.random()*10)+1);// vulue b\w 1 to 9 
console.log(Math.floor(Math.random()*10)+1); // it's give me floor value not float 
// formula is 
//Math.ramdom() * (max -min +1) +min
// value b\w 10to 50 
//Math.ramdom()*((50-10) +1)+10
console.log(Math.floor(Math.random()*((50-10) +1)+10)); // value b\w 10 to 50






