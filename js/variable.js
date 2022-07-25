
/* VARIABLES IN JAVASCRIPT*/

//  NOTE:-  variables can always be start with ( _ or letter or $ ) and it is case senstive and also reserved keyword i not use in js like a variables.


var digit1 = 4;
var digit2;      /* Declare*/
digit2 = 10;     /* Assign*/
var x = 12;
var z = digit1 + digit2 + x;

console.log(z);  /* here output will be 16*/
console.log("z");  /*here output will be z which is  string because of double quote.*/

const k = "monkey";
console.log(k);
 
let l = "monkey";
console.log(l);

var m = "monkey";
console.log(l);

 
// we can change variable value in (let)
let a = 67;
a = 21;
console.log(a); /* output will be 21 because here i will change the value of a */

{
    let a = 34;
    console.log(a);     /*let is blocked scoped*/
}

// we can not change the value of const

const c = 23;
c = 22;
console.log(c);  /* it will throw error*/





