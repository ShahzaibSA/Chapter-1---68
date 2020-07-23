
//                           CHAPTER # 38 - 42

// Task # 1

// function power(a,b){
//     var cal = Math.pow(a,b);
//     return cal;
// }

// var a = +prompt('a ^ b :' , 'Enter a');
// var b = +prompt('a ^ b :' , 'Enter b'); 
// document.write("a raised to b a^b : " + " " + power(a,b));

// Task # 02

// function year_1() {
//     var year = +prompt("Enter Any Year.");

//     if (year % 400 == 0) {
//         return document.write("This is a Leap Year.");
//     }
//     else if (year % 4 == 0 && year % 100 != 0) {
//         return document.write("This is a Leap Year.");
//     }
//     else {
//         return document.write("This is NOT a Leap Year.");
//     }
// }

// year_1();

// Task # 3

// document.write("AREA OF TRIANGLE :" + "<br>" + "<br>");
// var a = +prompt("a");
// var b = +prompt("b");
// var c = +prompt("c");

// function s_cal() {
//     var s = (a + b + c) / 2;
//     return s;
// }

// var ss = s_cal();

// function area() {
//     var cal_area = ss * ((ss - a) * (ss - b) * (ss - c));
//     document.write("S = ( a + b + c ) / 2" + "<br>" + "S = " + ss + "<br>" + "<br>");
//     document.write("Area = S(S − a)(S − b)(S − c)" + "<br>" + "Area = " + cal_area);
// }
// area();

// Task # 4

// document.write("MarkSheet" + "<br>" + "<br>");
// var subject_1 = +prompt("Enter Marks of 1st Subject.")
// var subject_2 = +prompt("Enter Marks of 2st Subject.")
// var subject_3 = +prompt("Enter Marks of 3st Subject.")
// var totalMrk = +prompt("Enter the Total Marks of of All Subject");
// var totalMrkObt = subject_1 + subject_2 + subject_3;

// function mainFun() {
//     document.write("1st Subject : " + " " + subject_1 + "<br>")
//     document.write("2nd Subject : " + " " + subject_2 + "<br>")
//     document.write("3rd Subject : " + " " + subject_3 + "<br>")
//     document.write('Average Marks : ' + " " + average() + "<br>");
//     document.write('Percentage : ' + " " + percentage());
// }
// mainFun();

// function average() {
//     var aver = totalMrkObt / 3;
//     return aver;
// }

// function percentage() {
//     var per = (totalMrkObt / totalMrk) * 100;
//     return per;
// }

// Task # 5

// var sen = "It was totally out of character for her";
// var sen2;

// function vowels() {
//     var i, j = 0;
//     for (i = 0; i <= sen.length; i++) {
//         if (sen[i] == 'a' || sen[i] == 'e' || sen[i] == 'i' || sen[i] == 'o' || sen[i] == 'u'
//             || sen[i] == 'A' || sen[i] == 'E' || sen[i] == 'I' || sen[i] == 'O' || sen[i] == 'U'){

//             // document.write('Vowels found');
//             var res = sen.replace(/e/g, " ");
//             document.write(res);
//         }
//         // else{
//         //     document.write(". ");
//         // }

//     }
// }
// vowels();

// Task # 7

// var para = "Pleases read this Application and give me gratuity";

// switch (para) {
//     case "Pleases read this Application and give me gratuity":
//         var count = 0;
//         var vowels = "ae";
//         for (var i = 0; i < para.length; i++) {
//             if (vowels.indexOf(para[i].toLowerCase()) > -1) {
//                 count++;
//             }
//         }
//         document.write(para + ".<br>");
//         document.write("The occurrences of ae vowels in sentence is : " + " " + count);
//         break;
//     default:
//         document.write("This String has NO vowels in it");
// }

// Task # 8

// var city = +prompt("Enter the distance between two cities in KM :");

// function meters() {
//     var meter = city * 1000;
//     document.write("Distance between two cities in Meters is : " + meter + ".<br>" + "<br>");
// }
// meters();

// function feets() {
//     var feet = city * 3280.8;
//     document.write("Distance between two cities in Feets is : " + feet + ".<br>" + "<br>");
// }
// feets();

// function inches(){
//     var inche = city * 39370;
//     document.write("Distance between two cities in Inches is : " + inche + ".<br>" + "<br>");
// }
// inches();

// function centiMeters(){
//     var centimeter = city * 100000;
//     document.write("Distance between two cities in Centimeters is : " + centimeter);
// }
// centiMeters();

// Task # 9

// function overTime(){
//     var pay = +prompt("Enter Overtime Work in Hour" , "e.g : 4 or 5")
//     var calc = pay * 12;
//     document.write('Your overtime pay is : ' + calc + " " + 'Rs.');
// }
// overTime();

// Task # 10

// var cashier = +prompt("Enter Amount");

// var h_100 = cashier / 100;
// var hundred = Math.floor(h_100);

// var f_50 = cashier % 100 / 50;
// var fifty = Math.floor(f_50);

// var t_10 = cashier % 50 / 10;
// var ten = Math.floor(t_10);

// document.write("You will have " + hundred + " Hundred notes " +  fifty + " Fifty notes " + ten + " Ten notes.")

//              CHAPTER # 43 - 48

// Task # 1       HTML

// function linkClick(greet){
//     alert(greet)
// }

// Task # 2       HTML

// function image(message){
//     alert(message);
// }

// Task # 3

// var index, table = document.getElementById('table');

// for (var i = 1; i < table.rows.length; i++) {
//     table.rows[i].cells[3].onclick = function () {
//         var c = confirm("do you want to delete this row");
//         if (c === true) {
//             index = this.parentElement.rowIndex;
//             table.deleteRow(index);
//         }
//     }
// }

// Task # 4

// function setNewImage() {
//     var img = document.getElementById("Img").src = "images/Huawei-P40.png";


// }

// function setOldImage() {
//     var img = document.getElementById("Img").src = "images/iphone 11.png";
// }

// Task # 5

// function btnAdd() {
//     var add = document.getElementById('thisone').innerHTML;
//     add++;
//     document.getElementById('thisone').innerHTML = add;
// }

// function btnSubtract() {
//     var subtract= document.getElementById('thisone').innerHTML;
//     subtract--;
//     document.getElementById('thisone').innerHTML = subtract;
// }

// Chapter # 49 - 52

// Task # 02

// var i = 0;
// function read() {
//     if (!i) {
//         document.getElementById("more").style.display = "inline";
//         document.getElementById("dots").style.display = "none";
//         document.getElementById("read").innerHTML = "Read Less";
//         i = 1   ;
//     }
//     else {
//         document.getElementById("more").style.display = "none";
//         document.getElementById("dots").style.display = "inline";
//         document.getElementById("read").innerHTML = "Read More";
//         i = 0;
//     }
// }




// Task # 3

// var rIndex,
//     table = document.getElementById("table");

// function checkEmptyInput() {
//     var isEmpty = false,
//         fname = document.getElementById("fname").value,
//         lname = document.getElementById("lname").value,
//         age = document.getElementById("age").value;

//     if (fname === "") {
//         alert("First Name Connot Be Empty");
//         isEmpty = true;
//     }
//     else if (lname === "") {
//         alert("Last Name Connot Be Empty");
//         isEmpty = true;
//     }
//     else if (age === "") {
//         alert("Age Connot Be Empty");
//         isEmpty = true;
//     }
//     return isEmpty;
// }

// function addHtmlTableRow() {
//     if (!checkEmptyInput()) {
//         var newRow = table.insertRow(table.length),
//             cell1 = newRow.insertCell(0),
//             cell2 = newRow.insertCell(1),
//             cell3 = newRow.insertCell(2),
//             fname = document.getElementById("fname").value,
//             lname = document.getElementById("lname").value,
//             age = document.getElementById("age").value;

//         cell1.innerHTML = fname;
//         cell2.innerHTML = lname;
//         cell3.innerHTML = age;
//         selectedRowToInput();
//     }
// }

// function selectedRowToInput() {

//     for (var i = 1; i < table.rows.length; i++) {
//         table.rows[i].onclick = function () {
//             rIndex = this.rowIndex;
//             document.getElementById("fname").value = this.cells[0].innerHTML;
//             document.getElementById("lname").value = this.cells[1].innerHTML;
//             document.getElementById("age").value = this.cells[2].innerHTML;
//         };
//     }
// }
// selectedRowToInput();

// function editHtmlTbleSelectedRow() {
//     var fname = document.getElementById("fname").value,
//         lname = document.getElementById("lname").value,
//         age = document.getElementById("age").value;
//     if (!checkEmptyInput()) {
//         table.rows[rIndex].cells[0].innerHTML = fname;
//         table.rows[rIndex].cells[1].innerHTML = lname;
//         table.rows[rIndex].cells[2].innerHTML = age;
//     } 
// }

// function removeSelectedRow() {
//     table.deleteRow(rIndex);
//     document.getElementById("fname").value = "";
//     document.getElementById("lname").value = "";
//     document.getElementById("age").value = "";
// }


// var h1 = document.createElement("h1");
// var text = document.createTextNode("Shahzaib Ahmed");
// var main = document.getElementById("main");

// main.appendChild(text);


//    Chapter # 58 - 67

// Task # 01

//   (i & ii)I

// var mainContent = document.getElementById("main-content");
// console.log(mainContent.childNodes[0]);
// console.log(mainContent.childNodes[1]);
// console.log(mainContent.childNodes[2]);
// console.log(mainContent.childNodes[3]);
// console.log(mainContent.childNodes[4]);

//   (iii)I

// var render = document.getElementsByClassName("render");
// console.log(render.value);

//   (iv)I

// document.getElementsByTagName("input")[0].value = "Shahzaib";  
// document.getElementsByTagName("input")[1].value = "Ahmed";  
// document.getElementsByTagName("input")[2].value = "shahzaibphones@gmail.com";  

// Task # 02
// (i)

// var typeNode = document.getElementById("form-content").nodeType;
// document.write("Node Type of id = form-content is : " + typeNode);

// (ii)

// var typeNode_2 = document.getElementById("lastName");
// document.write("Node Type of id = lastName is : " + typeNode_2.nodeType + "<br>");
// document.write("Node Type of lastName Chlid Node is : " + typeNode_2.childNodes[0].nodeType);

// (iii)

// document.getElementsByTagName("p")[1].innerHTML = "Last Name: Hales";

// (iv)

// var i = document.getElementById("main-content");
// console.log(i.firstChild);
// console.log(i.childNodes[4]);

// (v)

// var lastName = document.getElementById("lastName");
// console.log(lastName.nextSibling);
// console.log(lastName.previousSibling);

// (vi)

// var email = document.getElementById("email");
// console.log(email.parentNode);
// console.log(email.nodeType);




