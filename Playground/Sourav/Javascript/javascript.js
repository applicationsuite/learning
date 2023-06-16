//---------------------------------------------------------------javascript comment-----------------------------------------------
//
/*
multiline comment
 */
//---------------------------------------------------------------Datatype---------------------------------------------------------
// primitive datatype
var a; //declearation
console.log(a); //undifine
var b = null; //declearation with initialization
console.log(b);
var c = ""; //null
console.log(c);
var d = 25;
document.write(d); //number
var e = true;
console.log(e);
var f = BigInt(234); //bifInt
console.log(f);
var g = Symbol();
console.log(g); //symbol
//Non-primitive datatype
var h = {};
document.wrteln(h);
var i = [];
console.log(i);
//---------------------------------------------------------------Variable---------------------------------------------------------
//---------------------------------------------------------------Object-----------------------------------------------------------
//---------------------------------------------------------------String-----------------------------------------------------------
//---------------------------------------------------------------Array------------------------------------------------------------
//---------------------------------------------------------------date-------------------------------------------------------------
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
//---------------------------------------------------------------Operator------------------------------------------------------
//---------------------------------------------------------------if------------------------------------------------------------
//---------------------------------------------------------------Switch--------------------------------------------------------
//---------------------------------------------------------------Loop----------------------------------------------------------
//---------------------------------------------------------------Try/catch-----------------------------------------------------

//---------------------------------------------------------------javascript Object oriented programming------------------------
//---------------------------------------------------------------javascript DOM (document object model)------------------------
//---------------------------------------------------------------Events--------------------------------------------------------
