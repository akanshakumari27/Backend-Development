// Interpolation Syntax: It refers to embedding expressions into markup language
// In short, Embedding javascript into ejs file(which is actually HTML file) therfor "converting HTML file to Dynamic" OR "adiing Dynamic to HTML"
// ejs.co -> tags(3rd) -> HTML escaped

// home.ejs (HTML page with name as .ejs)
 <h2> Heading <%= 3*2 %> </h2> 
 <h2> Heading <%= "akansha".toUpperCase() %> </h2> 
 <h2> Heading <%= ["Apple","Banana","Guava","Orange"][0] %> </h2> 
 <h2> Random Number for Dice: <%= Math.floor(Math.random()*6) + 1 %>  </h2> 
// adding dynamic nature (JavaScript) in HTML text, after calculation or any excutionit, it will always return in **"String" format**

// Now as it's value already in HTML file, but we generally Gather our Data From Database, So for that situation
// index.js (a)
app.get("/",(req,res)=>{
    let getNum = Math.floor(Math.random()*6)+1
    res.render("home.ejs", {getNum})
})
// home.ejs
<h2> Random Number for Dice: <%= getNum %>  </h2>


//index.js (b)
app.get("/ig/:username",(req,res)=>{
    let {username} = req.params
    res.render("home.ejs",{username}) //sending getNum value from index.js to home.ejs
}) 
//"npm run dev" to run nodemon saved as dev in package.json
// home.ejs
<h2>Welcome @<%= username %> to our Instagram page</h2>
<button>Click to Subscribe</button>
<button>Follow</button>


//index.js (c) "If-Else Statements"
app.get("/",(req,res)=>{
    let getNum = Math.floor(Math.random()*6)+1
    res.render('home.ejs',{getNum})
 })
 //home.ejs
 <h2>Your Dice value is: <%= getNum %></h2> //For Output
 <% if(getNum==6){ %>  //for writing Js part in HTML code, for Control Flow, No output!!
     <p>Yay! roll again for next chance!</p>
 <% } %>


//index.js (d) "Loops"
app.get("/ig/:username",(req,res)=>{
    const names = ["apple","banana","guava","pineapple"]
    let {username} = req.params
    res.render('home.ejs',{username,names})
 })
 //home.ejs
<h2> Hey! welcome @<%= username %> to our page</h2>
<% for(let name of names){ %> <!--this tag for "NO Output"-->
    <li> <%= name %> </li>  <!--this tag to get "Output"-->
<% } %>