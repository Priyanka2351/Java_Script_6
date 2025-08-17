// const -> it is unchangable once it creat
const accountid=82918
var accountmail="gst@gmail.com" // var is not work with scope (function and method)
let account_no="5433270181" // it's work with the scope
accountcity="tamil nadu"
let accountblock;
// accountid=645881652
console.log(accountid);
console.log(accountmail);
console.log(account_no);
//insteded of doing this we can east print the all iin table 
console.table([account_no,accountid,accountmail,accountcity,accountblock])
