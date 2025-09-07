// for loop
for(let i=0;i<10;i++){
   const element =i
   if(element==5){
    console.log("number is matched");
   }
   console.log(element);
}

for (let i = 1; i <=10; i++) {
    const element = i;
    console.log(`table ${i}`);
    for (let j = 1; j <= 10; j++) {
        const element = j;
        console.log(i+"*"+j+"=" + i*j);
        
    }
    
}
let myarray =["duh","ush","ags","kan","manj"]
console.log(myarray.length);
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
    
}
// break and continue
for (let i = 0; i < 10; i++) {
    const element = i;
    // if(element==7){
    //     break
    // }
    if(element==7){
        continue
    }
    console.log(element);
}
