// Interpolation Syntax: It refers to embedding expressions into markup language
// In short, Embedding javascript into ejs file(which is actually HTML file) therfor "converting HTML file to Dynamic" OR "adiing Dynamic to HTML"
// ejs.co -> tags(3rd) -> HTML escaped

// home.ejs (HTML page with name as .ejs)
 <h2> Heading <%= 3*2 %> </h2> 
 <h2> Heading <%= "akansha".toUpperCase() %> </h2> 
 <h2> Heading <%= ["Apple","Banana","Guava","Orange"][0] %> </h2> 
 <h2> Random Number for Dice: <%= Math.floor(Math.random()*6) + 1 %>  </h2> 
// adding dynamic nature (JavaScript) in HTML text, after calculation or any excutionit, it will always return in **"String" format**