// function
function sayName(){
console.log("d");
console.log("e");
console.log("v");
}
sayName();
// function addTWoNum( a, b){
//   console.log(  a+b);
 
// }  // 104
// const result = addTWoNum(12,92)
// console.log(result); //undefine


function addTWoNum( a, b){
 let  result = (a+b)
  return result
 
}  // 104
const result = addTWoNum(12,92)
console.log(result); 

///
function login(username){
    if(username === undefined){
        console.log("First enter the username");
        return 
    }
    return `${username} login with your account`

}
console.log( login());

// if the input is multiple but we use the one argument than
// rest operator or spread operator 
function calculatecartPrice(...num){
    // let amount = 0
    // let  total=amount+num
    // return total
    return  num

}
console.log( calculatecartPrice(1000,4000,3000,2700));

// object in function
const user={
    username:"monika",
    price:1999
}
function handleObject(anyobj){
    console.log(`UserName is ${anyobj.username } and price is ${anyobj.price}`);

}
handleObject(user)

// in array
const arr=[635,982,200,283,763]
function secondValue(getvalue){
   return getvalue[1]
}
console.log(secondValue(arr));
