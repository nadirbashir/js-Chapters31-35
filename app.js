// /********Quest. 1 *********/

// var rightNow = new Date();
// document.getElementById("date").innerHTML = rightNow;

// /********Quest. 2 *********/

// var months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var d = new Date();
// document.getElementById("date").innerHTML = months[d.getMonth()];

// /********Quest. 3/4 *********/

// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var d = new Date();
// document.getElementById("date").innerHTML = "Today is " + days[d.getDay()];

// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var d = new Date();
// if(d.getDay() === 0 || d.getDay() === 6){
//     document.getElementById("date").innerHTML = "It's Fun day" + days[d.getDay()]
// }else{
//     document.getElementById("date").innerHTML = "It's " + days[d.getDay()]}

// /********Quest. 5 *********/
// var d = new Date();
// d.setDate(d.getDate() - 10);
// if(d.getDate() < 16){
//     document.write("First Fifteen days of the month");
// }else{
//     document.write("Last days of the month");
// }

// /********Quest. 6 *********/

// var d = new Date();
// document.getElementById("date").innerHTML = "Current Date: " + d + "<br>Elapsed Milliseconds since January 1, 1970: " + d.getTime()+ "<br>Elapsed Minutes since January 1, 1970: " + d.getTime()/(1000*60);


// /********Quest. 7 *********/

// var d = new Date();
// console.log(d.getHours())
// if(d.getHours() <= 12){
//     alert("It's AM")
// }else{
//     alert("it's PM")
// }

// /********Quest. 8 *********/

// var d = new Date();
// d.setFullYear(2021,11,31);
// document.write("Later Date: " + d);

// var d = new Date();
// d.setDate(d.getDate() + 10);
// console.log(d); 

// var d = new Date();
// d.setMonth(d.getMonth() - 3);
// console.log(d);

// /********Quest. 9 *********/
// var d = new Date();
// d.setFullYear(2021,3,14);
// var currentDate = new Date();
// days  = currentDate.getTime() - d.getTime();
// document.write("Number of days passed since 1st Ramadan 2021: " + days/(1000*60*60*24));


// /********Quest. 10 *********/

// var d = new Date();
// d.setFullYear(2021,0,1);
// var currentDate = new Date();
// document.write("On Reeference date" + currentDate + ", <br>" + (currentDate.getTime() - d.getTime()) /1000 + "seconds had passed since biginning of 2021");

// /********Quest. 11 *********/
// var d = new Date();
// document.write("Current date: " + d);
// d.setHours(d.getHours() - 1);
// document.write("<br>1 hour ago, it was " + d);

// //b.

//     var d = new Date();
//     var str = d.toString();
//    document.write("1 hour ago time was " + str.replace(str.slice(16,18),str.slice(16,18) - 1));


// /********Quest. 12 *********/

// var d = new Date();
// document.write("Current Date: " + d);
// d.setFullYear(d.getFullYear() - 100);
// document.write("<br>100 Years back, it was " + d);

// /********Quest. 13 *********/

// var inp = new Date(prompt("Enter your date of birth in given format jul 25, 1995"));
// var inpMilli = inp.getTime();
// var currentDate = new Date();
// var currentMilli = currentDate.getTime();
// var diffMilli = currentMilli - inpMilli;
// var age = Math.floor(diffMilli/(1000*60*60*24*30*12));
// document.write("your age is: " + age);

// /********Quest. 14 *********/

var userName = prompt("Enter name");
var months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var units = +prompt("Enter Number of units unit");
var currentMonth = new Date();
var chargesPerUnit = 16
var lateCharges = 350;
var netAmount = units * chargesPerUnit;
document.write("<h2>K-Electric Bill</h2>")
document.write("User Name: " + userName);
document.write("<br> Month: " + months[currentMonth.getMonth()]);
document.write("<br>Number of units: " + units);
document.write("<br>Charges per unit: " + chargesPerUnit);
document.write("<br> <br>Net Amount payable within due date: " + netAmount);
document.write("<br>Late Payment surcharge: " + lateCharges)
document.write("<br>Net Amount payable within due date: " + netAmount);
document.write("<br>Gross Amount payable after due date: " + (netAmount + lateCharges));



