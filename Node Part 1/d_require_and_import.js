// ES6 , new version of Javascript
// "Arrow Function" and "Import" such extra things come coz of after ES6

// Don't use import and return together in Singel page of code.
// In "Require" wa can't Selectively load piece of Code needed, it will load Whole.
// But in "Import" we can selectively load pieces as per needed, it also save our "Storage and Memory".

// But to use Import, need to install pacakage.json in Folder
// ~ npm init
// "type":"module"  
// and need to add this above Key-value pair in package.json in last line for import to work

// Math.js 
export const sum=(a,b)=>(a+b)
export const product=(a,b)=>{ return a*b}  //Curly braces used in Arrow Function when we Return!!
export const PI=(3.14)

// Node.js
import {sum, PI, product} from "./Math.js"  //importing 2 values form there
console.log(sum(4,5),PI, product(2,3))  

// "Require" - Loading is Synchronus
// "Import" - Loading is Asynchronus

// As figlet use "require" but many packages use "import" also
// Example, "random-words"
