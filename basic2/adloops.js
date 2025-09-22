const num=[4,5,6,7,7,1]
for (const n of num) {
 console.log(n);
     
}
const name="i'm not dimon"
for (const n of name) {
 console.log(n);
     
}
// map
const map=new Map()
map.set("name ","priyanka")
map.set("age",21)
map.set("roll","engineer")
console.log(map);
for (const m of map) {
    console.log(m);
    
}
for (const [key,value] of map) {
    console.log(key,":-",value);
    
}
   const myobj={
    name:"hush",
    age:83,
    loction:"delhi"
   }      
   // for object forof loops is not work forin work    
//    for (const ans of myobj) {
//      console.log(ans);
     
//    }    
for (const key in myobj) {
    const element = myobj[key];
    console.log(`${key} there value are : ${myobj[key]}`);
    
}         
const array=[2,4,6,8,10,12,14]
for (const key in array) {
//    console.log(key);// key is index pointed not value
   console.log(array[key]);
   
}                                                    
// for each loops
const coding=["js","cpp","python","java","ruby"]
 coding.forEach(function(val){
    console.log(val);
    
 })
 coding.forEach((item)=>{
    console.log((item));
 })
 function printme(itme){
    console.log(itme);
    
 }
 coding.forEach(printme)
 coding.forEach((item,index,array)=>{
    console.log(item,index,array);
    
 })
 const mycoding=[
    {
        name:"div",
        age:14
    },
     {
        name:"diksha",
        age:42
    },
     {
        name:"monika",
        age:25
    }
 ]
 mycoding.forEach((item)=>{
    console.log(item.age);
    
 })