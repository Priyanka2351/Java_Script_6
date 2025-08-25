// array
const myarray=[3,4,5,7,8,9,0]
const myho=["uss","jii","haa","koo"]
 const myarr2= new Array(4,6,7,8,9,3,1)
 console.log(myarray[5]);
 console.log(myarr2[2]);
 
 // array method
 console.log(myarr2.length);
 myarr2.push(54,38,29)
 myarr2.pop()
 myarr2.unshift()
 myarr2.shift()
  console.log(myarr2);
  console.log(myarr2.includes(10));
  console.log(myarr2.indexOf(10));
  const newarr=myarr2.join()//convert into string
  console.log(myarr2);
  console.log(newarr);
   console.log(typeof(newarr));
  
// slice and   splice
// slice only take the array and print 
//but in splice its delect the array

  console.log("A" , myarray);
  const my3= myarray.slice(1,4)
  console.log("D" , myarray);

  console.log(my3);
  console.log("B " , myarray);
  const my4 =myarray.splice(1,5)
  console.log("C " , myarray);
  console.log(my4);
  //concat
  let arr1=[746,8373,"diya","seen"]
  let arr2=[2,4,6,8,10,12,14]
  arr1.push(arr2)
  console.log(arr1);
  
  let newone=arr1.concat(arr2)
  console.log(newone);

  //spread
let all_new=[...arr1,...arr2]
console.log("S",all_new);

//flat
let mixed=[63,3,4,5,["d","e","s"],0,2,4,["apple","orange","guvava"],0,111]
console.log(mixed);
console.log(mixed.flat(Infinity));

let l1=84
let l2=82
let l3=832
console.log(Array.of(l1,l2,l3));

