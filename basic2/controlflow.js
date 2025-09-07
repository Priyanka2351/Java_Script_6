
// control flow
const age=73;
if(age>18){
    console.log("you arr adult now");
    
}
else{
    console.log("not now");
    
}
//< ,>,<=,>=,!=,==,===,!==
const score= 130;
if(score>100){
    let power="fly"
    console.log(`user power : ${power}`);
}
//short hand 
const balance=1000;
if(balance>500) console.log("superbb man"  );

// if elseif else 
if(balance<500){
    console.log("less then 500");
    
}
else if(balance<1000){
    console.log("less then 1000");
    
}
else if(balance==1000){
    console.log("equal 1000");
}
else{
    console.log("run the code");
    
}
const userlogin=true
const debitcard=true
const loggedinGoogle=false
const loggedinEmail=true
if(userlogin && debitcard){
    console.log("allow to shopping");
    
}
if(loggedinEmail || loggedinGoogle){
    console.log("yes you can");
    
}
//switch
const months=3
switch(months){
    case 1:
        console.log("this is not");
        break;
    case 2:
        console.log("this is not");
        break;
    case 3:
        console.log("yesssss");
        break;
    default:
    break;
}
// truthy..........................................

const mail="ubs@gmail.dom"
if(mail){
    console.log("got user mail");
}
else{
    console.log("don't have user email");
}
//falsy value
// false, 0,-0, BigInt 0n," ",null,undefined,NaN

// truthy values
// "0","false"," ",[],{},function(){}
const usermail=[];
if(usermail.length===0){
    console.log("array is empty");
}
const emptyobj={}
if(Object.keys(emptyobj).length===0){
    console.log("object is empty");
}

// Nullish Coalescing operator (??); null underfined
let val1;
val1=55??20                       //55
// val1=null??9                      //9
// val1=undefined ?? 92              //92
console.log(val1);

// Teraniary operator
// condition ? true : false
const icecream= 50
icecream <=100 ? console.log("less than 100") : console.log("more than 10");
;
