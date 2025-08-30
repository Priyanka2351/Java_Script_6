// ArrowFunction....
const user={
    name :"hema",
    price:7266,
    welcomeMsg: function(){
        // this is refer to the current context
      console.log(`${this.name}, welcome to website`); 
    //   console.log(this); // context
      
    }

}
user.welcomeMsg();
user.name="harshita" //context menas change the value
user.welcomeMsg()
// console.log(this);// {} object o/p
function chai(){
    let name="anurag"
    console.log(this.name); //o\p is undefine 
}
chai();
// arrow function
const vivi=()=>{
    let game= "Ak24"
    console.log(this.game); // undefine 
    
}
vivi()
//normal arrow function
const addtwo=(n1,n2)=>{
    return n1+n2
}
//implicite  arrow function
const addthree=(n1,n2,n3)=>  n1+n2+n3
console.log(addtwo(3,7));
console.log(addthree(82,10,2));
const add=(n,g)=>{{use:"sos"}}// need to use the {{}} for object
