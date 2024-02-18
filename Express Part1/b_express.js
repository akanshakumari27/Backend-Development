const express = require("express")
const app = express()  //express() will return value, which we will store in Variable name getExp
// Now this "app" will help us to build "Server Side WebApplication", It's an Object
// Printing Object's properties 
console.dir(app) 

// When using require, can't use import so, make sure to remove "type":"module" from project.json, otherwise require will not work
// Console.dir(app) will give properties in form of "Key and values" can use it by "app.KeyName"

const port = 3000  //available empty ports like (3000, 8080)
app.listen(port, ()=>{
    console.log("Port request 3000 is called")
})
//app.listen is also one of property of "app variable of express()" 

// *** For Respond ***
app.use((req,res)=>{
    console.log(req)
    console.log("Request is being recieved")
    res.send("Now response is being sending") //only first "res.send" written will excute
    res.send({
        fruit:"Apple",
        color:"Red"
    })
    let code = "<h1>Fruits</h1><ul><li>Apple</li><li>Orange</li></ul>"
    res.send(code)
})
// Now to make run this req and res, need to run in terminal first ~ node index.js
// Express will convert this Js Object into Json file!
// "ctrl + c" to exit

// npm -> express -> documnetation -> API reference -> At Right most Corner(response, request, can expand them will find "res.send" etc)
// But it will not run in hoppscotch, search (https://github.com/hoppscotch/hoppscotch/discussions/2051) installation of extension Or "how can i work with localhost API's Hoppscoth"


// *** For Respond *** ,as both "app.use()" and "app.get()" are for Responds So can't use both Together!!
app.get("/", (req,res)=>{      //(localhost:3000)
    res.send("Hello! it's an Default page you visited")
})

app.get("/Apple",(req,res)=>{   //always write "req" first then "res", oterwise won't work (localhost:3000/Apple)
    res.send("Hehe! Welcome to an Apple Page")
})

app.get("/Guava",(req,res)=>{   //(localhost:3000/Guava)
    res.send("Oops! you are in Guava Page")
})

app.get("/banana",(req,res)=>{   //(localhost:3000/banana)
    res.send("Lol it's a Banana Page")
})
// This is what known as Routing, Defining different different routings.
// In Case when user send any random path So,
app.get("*",(req,res)=>{
    res.send("This path's page don't exist")
})
app.post("/",(req,res)=>{
    res.send("Yay! this default path is from post!")
}) 
// post is also one for the Respond, to Check this, go in hoppscotch, Select and convert "get to post"

// Note: As for every change we need to restart our System again by, "node index.js" So to make convenint, we will install "nodemon"
// npm install nodemon (Local system, for only that particular file, better to install Global)
// npm install -g nodemon (Can check npm page, nodemon )
// nodemon -v (to Chcek if it installed or not, it's version will display)
// nodemon index.js

// In Case: If not working,
// pacakge.json -> "scripts" -> "dev": "nodemon index.js" ( write this inside scripts)
// Terminal: ~ npm run dev
// Inside Sripts, that directly point on npm(node pacakge manager) So to run any "key:value" pair there write "npm run keyName"

app.get("/:username/:id",(req,res)=>{   // "/:" this is for variable!(2 variables are here, can go with one or more)
    res.send(`Your page here!`) 
    console.log(req.params)  //to check parameters, it will print in terminal

    let {username,id} = req.params;
    res.send(`Welcome ${username} to this page`)
    
    let string = `<h1>Welcome ${username} to this page</h1>` // localhost:3000/requiredName
    res.send(string)
})
// * as only 1 send will work at a time, So make sure to comment out any one above to make work another!! *
// Why need of Variable? 
// when user create it's account the coders don't sit and update it's url name again and again to redirect that particular account/page
// So, we set variable, as account created it will upadate automatically for particular pages!

// We find, "search?q=apple" ( "q=something" is "query string" )
app.get("/search",(req,res)=>{
    console.log(req.query) // request and response (what u requesting and what u sending as response)
    res.send("No result")
})
// localhost:3000/search?q=apple
// localhost:3000/search?q=apple&color=red (2 values can also be sent by writting "&" and operator in between!)


app.get("/search",(req,res)=>{
    let {q} = req.query  //req.query is an object so need to write in {}curly braces
    if(!q){
        res.send("<h2>Nothing has been Searched, Wrong URL</h2>")  // http://localhost:3000/search?
    } 
    res.send(`Your search request on ${q} is loading`)
 // res.send(`<h1>Your search request on ${q} is loading</h1>`)
})