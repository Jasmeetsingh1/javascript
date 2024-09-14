//dates

let mydate = new Date();
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
console.log(typeof(mydate));

let mycreateddate = new Date(2023, 0 , 23);
let mycreateddate2 = new Date(2023, 0 , 23,5,3);
let mycreateddate3 = new Date("01-14-2023")
// console.log(mycreateddate3.toLocaleString());

let mytimestamp = Date.now();
// console.log(mytimestamp)
// console.log(mycreateddate3.getTime()); //for comparison
// console.log(Math.floor(Date.now()/1000));  conversion into seconds

let newDate = new Date()
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());


newDate.toLocaleString('default',{
    weekday:"long"
    // timeZone:''
})









