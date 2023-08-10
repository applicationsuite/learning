//---------------------------------------------------------------javascript comment-----------------------------------------------
//
{
  /*
multiline comment
*/
}
//---------------------------------------------------------------Datatype---------------------------------------------------------
// primitive datatype

var a; //declearation
console.log(a); //undifine

var b = null; //declearation with initialization
console.log(b); //Null

var c = "";
console.log(c); //String

var d = 25;
console.log(h); //number

var e = true;
console.log(e); //Boolean

var f = BigInt(234); //bigInt
console.log(f);

var g = Symbol();
console.log(g); //symbol

//Non-primitive datatype

var h = {};
console.log(h); //Object

var i = [];
console.log(i); //Array

//---------------------------------------------------------------Variable---------------------------------------------------------

x = 5; // Automatically
y = 6;
z = x + y;

var x = 5; // var can be upadated & re-declear with in its scope.
var y = 6;
var z = x + y;

let x = 5; // Let can be upadated not re-declear.
let y = 6;
let z = x + y;

const price1 = 5; // Const can nither be updated nor be redeclear .
const price2 = 6;
let total = price1 + price2;
console.log(total);

//---------------------------------------------------------------Object-----------------------------------------------------------
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

console.log(person);

const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

console.log(person1.firstName + " is " + person1.age + " years old.");

const NFTStore = {
  artPieces: [
    {
      pieceName: "Emo Flamingos",
      price: 30,
      ownerList: [
        {
          name: "Fida Ernest",
          userID: 23849,
          purchaseDate: "09/13/2021",
        },
        {
          name: "Eric Karger",
          userID: 23510,
          purchaseDate: "09/13/2021",
        },
      ],
    },
    {
      pieceName: "Where is my bit wallet",
      price: 100,
      ownerList: [],
    },
  ],
  storeCredits: 1000,
};

//---------------------------------------------------------------String-----------------------------------------------------------

/*
1.String length  
2.String slice()
3.String substring()
4.String substr()
5.String replace()
6.String replaceAll()
7.String toUpperCase()
8.String toLowerCase()
9.String concat()
10.String trim(let1.String trimStart()
12.String trimEnd()
13.String padStart()
14.String padEnd()
15.String charAt()
16.String charCodeAt()
17.String split()

18.String indexOf() 
19.String lastIndexOf()
20.String search()
21.String match()
22.String matchaAll()
23.String  valueof()
24.String include()
 */

var str = "This is string literal";
console.log(str);

//There are 3 methods for extracting a part of a string:

//string length

let str2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(str2.length);

//string slice(start, end)

let str3 = "Apple, Banana, Kiwi";
console.log(str3.slice(7, 13));

//string substring(start, end)
//The difference is that start and end values less than 0 are treated as 0 in substring().
let str4 = "Apple, Banana, Kiwi";
console.log(str4.substring(7, 13));

//string substr(start, length)

let str5 = "Apple, Banana, Kiwi";
console.log(str5.substr(7, 6));

//Replace method

let str6 = "Please visit Microsoft!";
console.log(str6.replace("Microsoft", "Hyderabad"));

//Replace all

let str7 = "I love Cats. Cats are very easy to love. Cats are very popular.";
console.log(str7.replaceAll("Cats", "Dogs"));

//Converting to Upper and Lower Case

let str8 = "Hello World!";
console.log(str8.toUpperCase()); // toUppercase

let str9 = "Hello World!";
console.log(str9.toLowerCase()); // toLowercase

//concat()

let str10 = "Hello";
let str11 = "World";
console.log(str10.concat(" " + str11)); //concat() joins two or more strings

//string trim()

let str12 = "      Hello World!      ";
console.log(str12.trim());
console.log(str12.length); //The trim() method removes whitespace from both sides of a string

//string trimStart()

let str13 = "      Hello World!      ";
console.log(str13.trimStart()); //The trimStart() method works like trim(), but removes whitespace only from the start of a string.
console.log(str13.length);

//string trimEnd()

let str14 = "      Hello World!      ";
console.log(str14.trimEnd()); //The trimStart() method works like trim(), but removes whitespace only from the start of a string.
console.log(str14.length);

//String Padding

//padStart()

let str15 = "5";
console.log(str15.padStart(4, "0")); //It pads a string with another string (multiple times) until it reaches a given length

//padEnd()

let str16 = "5";
console.log(str16.padEnd(4, "0")); //It pads a string with another string (multiple times) until it reaches a given length

//String Characters

//charAt()

let str17 = "HELLO WORLD";
console.log(str17.charAt(0)); //The charAt() method returns the character at a given position in a string

//charCodeAt()

let str18 = "HELLO WORLD";
console.log(str18.charCodeAt(0)); //The charAt() method returns the character at a given position in a string

//split()

let str19 = "Hello";
console.log(str19.split("")); //If the separator is "", the returned array will be an array of single characters

//String indexOf()

let str20 = "Learn JavaScript on Javatpoint"; // It represent the index position from where search starts
console.log(str20.indexOf("a"));

//String lastIndexOf()

let str21 = "Please locate where 'locate' occurs!";
console.log(str21.lastIndexOf("locate")); //The method returns the index of the last occurrence of a specified text in a string

//String search()

let str22 = "Please locate where 'locate' occurs!";
console.log(str22.search("locate")); //The search() method searches a string for a string and returns the position of the match

//String Match()

let str23 = "Javatpoint";
console.log(str23.match("Java")); // It represents the regular expression which is to be searched.

//String matchAll()

let text = "I love cats. Cats are very easy to love. Cats are very popular.";
console.log(text.matchAll("Cats")); //The matchAll() method returns an iterator containing the results of matching a string against a string

//String  valueof()

let str25 = "Javatpoint"; //Here,we will print the primitive value of string object.
console.log(str25.valueOf());

//String include()

let str26 = "Hello world, welcome to the universe."; //The includes() method returns true if a string contains a specified value
console.log(str26.includes("world"));

//---------------------------------------------------------------Array------------------------------------------------------------

/*
1.Array length
2.Array toString()
3.Array pop()
4.Array push()
5.Array shift()
6.Array unshift()
7.Array join()
8.Array delete()
9.Array concat()
10.Array flat()
11.Array splice()
12.Array slice()
 */

//push,pop,length,concat,splice,find,foreach

//Array length

let fruits = ["Banana", "Orange", "Apple", "Mango"]; //The length property returns the length (size) of an array
console.log(fruits.length);

//Array toString()

let fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits1.toString()); //The JavaScript method toString() converts an array to a string of array values.

//Popping and Pushing

//Array pop()
let fruits2 = ["Banana", "Orange", "Apple", "Mango"]; //The pop() method returns the value that was "popped out"
fruits2.pop();
console.log(fruits2);

let fruits3 = ["Banana", "Orange", "Apple", "Mango"]; //The pop() method returns the value that was "popped out"
console.log(fruits3.pop());

//Array push()

let fruits4 = ["Banana", "Orange"]; //The push() method adds a new element to an array (at the end)
fruits4.push("Apple", "Mango");
console.log(fruits4);

let fruits5 = ["Banana", "Orange"]; //The push() method adds a new element to an array (at the end)
console.log(fruits5.push("Apple", "Mango"));

//Array shift()

let fruits6 = ["Banana", "Orange", "Apple", "Mango"];
fruits6.shift();
console.log(fruits6); //The shift() method removes the first array element and "shifts" all other elements to a lower index

let fruits7 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits7.shift());

// Array unshift()

let fruits8 = ["Banana", "Orange", "Apple", "Mango"];
fruits8.unshift("lemon");
console.log(fruits8); //The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements

let fruits9 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits9.unshift("Lemon"));

//Array delete()

const fruits10 = ["Banana", "Orange", "Apple", "Mango"];
delete fruits10[0];
console.log(fruits10);

//Array concat()

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
hello = arr1.concat(arr2, arr3);
console.log(hello);

//---------------------------------------------------------------date-------------------------------------------------------------

var dt = new Date();

console.log("Date :" + Date());

console.log("dt :" + dt);

console.log("getDate :" + dt.getDate());

console.log("getDay :" + dt.getDay());

console.log("getMonth :" + dt.getMonth());

console.log("getFullYear :" + dt.getFullYear());

console.log("getHours :" + dt.getHours());

console.log("getMinutes :" + dt.getMinutes());

console.log("getSeconds :" + dt.getSeconds());

console.log("getMillisecond :" + dt.getMilliseconds());

console.log("getTime :" + dt.getTime());

//---------------------------------------------------------------Function---------------------------------------------------------
//method without parameter  and no return type (it's called void)
function sayHello() {
  //method definition //void method
  console.log("hello");
}
sayHello(); //calling a method
var j = sayHello;
console.log(j);
//var k=()=> void //method declaration

//method with parameter and no return type (it's called void)
function sayHelloTo(name) {
  console.log("hello " + name);
}
sayHelloTo(); //hello undefined
sayHelloTo("rocky"); //hello rocky

//method with parameter and with return type
function sayHelloToWithReturn(name) {
  console.log("hello " + name);
  return "hello " + name;
}
sayHelloToWithReturn("Rocky"); //hello Rocky "hello Rocky"

//method with default parameter
function sayHelloToWithDefaultParameter(name = "Rocky") {
  console.log("hello " + name);
}
sayHelloToWithDefaultParameter(); //hello Rocky
sayHelloToWithDefaultParameter("milan"); //hello milan

function sayHelloToWithDefaultParameter(x, name = "Rocky") {
  console.log("hello " + name);
}
sayHelloToWithDefaultParameter(1, "milan"); //hello milan

//This is wrong because default parameter should come at the end
function sayHelloToWithDefaultParameter(name = "Rocky", x) {
  console.log("hello " + name);
}

// Arrow function
function sayhelloUsingFunction() {p
  console.log("hello");
}

const sayhelloUsingArrowFunction = (name) => {
  console.log("hello" + name);
};
sayhelloUsingArrowFunction("rocky");

//
//
//lexical scoping

//hoisting

function abc() {
  console.log(a);
}
console.log(a);
var a = 5;
function hello() {
  console.log(name);
  var name = "abc";
  console.log(b);
}
hello();
console.log(b);
var b = 6;

//-----------------------------------

var a;
var b;
function abc() {
  console.log(a);
}
function hello() {
  var name;
  console.log(name);
  name = "abc";
  console.log(b);
}
console.log(a);
a = 5;
console.log(b);
b = 6;
//---------------------------------------------------------------Operator------------------------------------------------------

//Arithmatic Operator

var num1 = 10;
num2 = 20;
console.log(num1 + num2); //Addition

var num1 = 10;
num2 = 20;
console.log(num1 - num2); //Subtraction

var num1 = 10;
num2 = 20;
console.log(num1 * num2); //Multiplication

var num1 = 10;
num2 = 20;
console.log(num1 / num2); //Division

var num1 = 10;
num2 = 20;
console.log(num1 % num2); //Division Reminder

var x = 10;
x++;
console.log(x); //increment

var x = 10;
x--;
console.log(x); //Decrement

//Assignment Operator

var x = 10;
console.log(x); //Assign

var x = 10;
x += 5;
console.log(x); //Add and assign

var x = 10;
x -= 5;
console.log(x); //Subtract and assign

var x = 10;
x *= 5;
console.log(x); //Multiply and assign

var x = 10;
x /= 5;
console.log(x); //Divide and assign

var x = 10;
x %= 5;
console.log(x); //Modulus and assign

//Comparision Operator

var x = 10;
console.log(x == 5); //is equal to

var x = 10;
console.log(x != 5); //not equal to

var x = 10;
console.log(x > 5); //greater than

var x = 10;
console.log(x < 5); //less than

var x = 10;
console.log(x >= 5); //greater than  equal to

var x = 10;
console.log(x <= 5); //less than  equal to

//logical Operators

var uid = prompt("Enter User name", "User Id");
var pwd = prompt("Enter Password", "Password");
var message = uid == "sourav" && pwd == "rocky" ? "Welcome" : "Invalid User";
alert(message); // AND operator

var user = prompt("Enter User name", "name");
var message = user == "sourav" || user == "rocky" ? "Welcome" : "Invalid User";
alert(message); //OR operator

var user = prompt("Enter User name", "name");
var message = !(user == "sourav" || user == "rocky")
  ? "Welcome"
  : "Invalid User";
alert(message); //NOT operator

//---------------------------------------------------------------if------------------------------------------------------------

//if statement
var a = 0; //Use the switch statement to select one of many code blocks to be executed.
if (a > 10) {
  console.log("Value is greater then 10");
}

//if else statement
var a = 10;
if (a % 2 == 0) {
  console.log("a is a even number");
} else {
  console.log("a is a odd number");
}

// if else if statement

var a = 20;
if (a == 10) {
  console.log("a is equal to 10");
} else if (a == 15) {
  console.log("a is equal to 15");
} else if (a == 20) {
  console.log("a is equal to 20 ");
} else {
  console.log("a is  not equal to 20");
}

var num = prompt("Enter your number");
num = Number.parseInt(num);
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Your Number is divisible by 2 and 3 ");
} else {
  console.log("Your Number is not divisible by 2 and 3 ");
}
//---------------------------------------------------------------Switch--------------------------------------------------------

var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log("Today is-" + day);
//---------------------------------------------------------------Loop----------------------------------------------------------
//for loop

var i;
for (i = 1; i <= 10; i++) {
  document.write("i=" + i);
}
//for each
//while loop

var num = parseInt(prompt("Enter Number", "Enter..."));
var count = 0;
while (num > 0) {
  num = Math.trunc(num / 10);
  count++;
}
document.write("Digits:" + count);

//do while loop

var actualpin = "3456";
var pin;
var count = 0;
do {
  pin = prompt("Enter your pin...", "Enter...");
  count++;
} while (pin != actualpin && count < 3);
if (pin == actualpin) {
  document.write("Welcome User");
} else {
  document.write("Account locked");
}

//for in loop
let person = {
  fname: "John",
  lname: "Doe",
  age: 25,
};

for (let x in person) {
  console.log(x);
}

//for of loop

let person = ["John", "Doe", 25];

for (let x of person) {
  console.log(x);
}

//for each loop

//map loop
//---------------------------------------------------------------Try/catch-----------------------------------------------------

try {
  var a = {};
  console.log(a.b.c);
  console.log("hello");
} catch (e) {
  console.log("Error:" + e);
}

try {
  var a = {};

  console.log(a.b.c);

  console.log("hello");
} catch (e) {
  console.log("Error:" + e);
} finally {
  console.log("Finally");
}

//---------------------------------------------------------------javascript Object oriented programming------------------------

//constructor inatialise the property
//class is a container which contains properties and method

// Class is a container which contains properties and methods

// Constructor is a special method which initialize the properties

// Object is a instance of a class

class Student {
  constructor(name = "Rocky", age = 12, grade = "A") {
    this.name = name;

    this.age = age;

    this.grade = grade;
  }

  getGrade = () => {
    console.log(this.grade);
  };

  setGrade = (grade) => {
    this.grade = grade;
  };

  //   getGrade() {

  //     console.log(this.grade);

  //   }

  //   setGrade(grade) {

  //     this.grade = grade;

  //   }
}

let rocky = new Student("Rocky", 20, "A");

let milan = new Student("Milan", 20, "A");

let jagannath = new Student("Jagannath", 20, "A");

let himanshu = new Student("Himanshu", 20, "A");

rocky.getGrade();

rocky.setGrade("B");

rocky.getGrade();

console.log(rocky.name);

console.log(rocky.age);

console.log(rocky.grade);
//---------------------------------------------------------------javascript DOM (document object model)------------------------

/*
JavaScript can change all the HTML elements in the page
JavaScript can change all the HTML attributes in the page
JavaScript can change all the CSS styles in the page
JavaScript can remove existing HTML elements and attributes
JavaScript can add new HTML elements and attributes
JavaScript can react to all existing HTML events in the page
JavaScript can create new HTML events in the page
*/

//---------------------------------------------------------------Events--------------------------------------------------------

// onabort - interrupt playback;
// onafterprint - printing finished;
// onautocomplete - form autocomplete completed;
// onautocompleteerror - an error occurred while autocompleting the form;
// onbeforeprint - preparing for printing;
// onbeforeunload - the document is unloaded;
// onblur - loss of focus;
// oncancel - cancellation of the action;
// oncanplay - you can start playing the specified media file;
// oncanplaythrough - you can start playing the specified media file without having to stop for buffering;
// onchange - value change;
// onclick - click on an element;
// onclose - closing something;
// oncontextmenu - opens the context menu;
// oncopy - copy performed;
// oncuechange - change the label in the track element;
// oncut - content was cut;
// ondblclick - double click on an element;
// ondrag - drag and drop an element;
// ondragend - element dragging completed;
// ondragenter - the element is dragged to a valid target area;
// ondragexit - exit drag-and-drop mode;
// ondragleave - the element leaves a valid target;
// ondragover - the element is dragged over a valid target point;
// ondragstart - start the drag-and-drop operation;
// ondrop - the dragged item is dropped;
// ondurationchange - change the length of the media;
// onemptied - the file suddenly became unavailable;
// onended - playback is over;
// onerror - an error occurred;
// onfocus - setting focus on an element;
// onhashchange - change the binding of a part of the address;
// oninput - start of data entry;
// oninvalid - the element is damaged;
// onkeydown - key pressed;
// onkeypress - key pressed and then released;
// onkeyup - key released;
// onload - the element is loaded;
// onloadeddata - file data loaded;
// onloadedmetadata - file metadata loaded;
// onloadstart - start loading an element;
// onmessage - message appears;
// onmousedown - mouse pressed;
// onmouseenter - the mouse is over the element;
// onmouseleave - the mouse pointer left the element;
// onmousemove - the mouse is moved over the element;
// onmouseout - the mouse pointer moves out of the element;
// onmouseover - the mouse pointer moves over the element;
// onmouseup - the mouse button is released over the element;
// onmousewheel (onwheel) - mouse wheel used;
// onoffline - the browser is running offline;
// ononline - the browser is running online;
// onpagehide - the user navigates from the page;
// onpageshow - the user goes to the page;
// onpaste - content was inserted;
// onpause - pause playback;
// onplay - start playback;
// onplaying - play the file;
// onpopstate - change the history of the window;
// onprogress - getting file metadata;
// onratechange - change the playback speed;
// onreset - data reset completed;
// onresize - resize the element;
// onscroll - scrolling the content of an element;
// onsearch - search performed;
// onseeked - search ended;
// onseeking - search is active;
// onselect - selection of some text or value;
// onshow - element display;
// onsort - performing sorting;
// onstalled - the browser cannot receive media for any reason;
// onstorage - updated web storage;
// onsubmit - confirmation of submitting form data;
// onsuspend - stop extracting metadata;
// ontimeupdate - change the position (time) of file playback, that is, rewind the file;
// ontoggle - the user opens or closes the details element;
// onunload - loading completed, after which the document was closed;
// onvolumechange - volume changed;
// onwaiting - waiting for playback to resume.




// Day-1 https://youtu.be/tm7kVn8abSg
// Day-2 https://youtu.be/kiAK3FcwUYA
// Day-3 https://youtu.be/Z9KW5lIHBcs
// Day-4 https://youtu.be/K76UNDZWdlU
// Day-5 https://youtu.be/vcwlQLVcwd0

















What is a Function ?

A Function is a block of code that is designed to perform a task and executed when it is been called or invoked.