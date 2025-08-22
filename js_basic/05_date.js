// date
const mydate=new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleTimeString());
console.log(mydate.toTimeString());
//interview qestion is type of date is "object"
console.log(typeof mydate);
//by using own date
// let myCraetedDate=new Date(2004,5,22)
let myCraetedDate=new Date("2004-04-22")
console.log(myCraetedDate.toLocaleString());
//time stamp
let mytimeStamp=Date.now()
console.log(mytimeStamp); //give time in millisecond
console.log(myCraetedDate.getTime()); 
console.log(Math.floor(myCraetedDate.getTime())); 
console.log(mytimeStamp /1000); //time in second but float value
console.log(Math.floor(mytimeStamp /1000)); //time in second but float value

let newdate=new Date()
console.log(newdate);
console.log(newdate.getTimezoneOffset());
newdate.toLocaleDateString('default',{
    weekday: "long",
})
console.log(newdate);