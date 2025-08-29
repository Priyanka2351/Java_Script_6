// Global and local scope
// global value is usefull everywhere but local is only in block
let a=1000
// const b=36
// var s=86
if(true){
    let a=10
const b=36
var s=86
console.log(a);

}
// console.log(a);// a is not define
// console.log(b);// b is not define
console.log(s);  // var is use anywhere therefor we not use the var
console.log(a);

function one(){
    const username="devash"
    function two(){
        const website="www"
        console.log(website);
        
    }
    // console.log(website); //out of scope
    
    two()
}

one()

if(true){
    const name="gungun"
    if(name==="gungun"){
        const website=" youtube"
        console.log(name + website);
        
    }
    // console.log(website);
    
}
// console.log(name);

// ................ex................
console.log(addone());
function addone (value){
    return value +1
}

// hosting(var holding)  not execute
// addtwo(10)
// const addtwo=function  (value){
//     return value +2
// }