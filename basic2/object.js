
// object literals
const mtsym= Symbol("key1")
const jsuser ={
    name :"divash",
    age :23,
    location:"jaipur",
    // mtsym:"mykey1", // this a symbol but this is ot symbol typeof is string
    [mtsym]:"mykey1",
    Email:"hsg@gamil.com",
    lastlogin:["monday","friday"],
     "form ":"UPSC"
}
console.log(jsuser.age);
console.log(jsuser["age"]);
console.log(jsuser["age"]);
console.log(typeof jsuser[mtsym]);
console.log(jsuser[mtsym]);
jsuser.Email="hisyg@gmail.coom"
// need to lock the variable
// Object.freeze(jsuser)
jsuser.Email="hisyg@login.coom"
console.log(jsuser);
// function n object
jsuser.greeting =function(){
    console.log("hello JS user");
}
jsuser.greetingAgain = function(){
    console.log(`hello JS user, ${this.name}`);
    
}
console.log(jsuser.greetingAgain());
console.log(jsuser.greeting());

// Singleton
// const tinderUser=new object{} //singleton object
const tinderUser={} //non singletone object
console.log(tinderUser);
//adding 
tinderUser.name="divya"
tinderUser.age=21
tinderUser.block="A"
tinderUser.code="divya@haihb.code"
console.log(tinderUser);
const newfun={
    Email:"gi@gamil.com",
    fullname:  {
        userfullname:{
            firstname:"hghs",
            lastname:"kumar"
        }
    }
}
console.log(newfun.fullname.userfullname.firstname);

//object concat
const obj1={1:"d",2:"j"}
const obj2={3:"d",4:"j"}
// const obj3={obj1,obj2};
// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
console.log(obj3);
// array object
let newdata=[
    {
      mail:"hshgghs",
      call:"635763"  
    },
    {

    },
     {
        
    },
    {

    }
]
newdata[1].call
console.log(newdata);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("name"));

//_________________________de-structure and json api intro_______________________
const course={
    courseNAme:"js in hindi",
    fees:999,
    courseteacher:"hitesh"

}
//de-structuring
const {courseteacher:teacher}=course
console.log(teacher);



