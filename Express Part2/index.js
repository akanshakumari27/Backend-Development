// here we will learn about "ejs" Embedded javascript Template
// ~ npm i ejs
// can install(not necessary) "ejs language support" in Vs code, it will higlight few code of ejs, easy to diffenciate and readable

const express = require("express")
const app = express()   //storing express() in variable name "app"

const port = 3000 

app.listen(port,()=>{
    console.log(`your port ${port}`)
})

app.set("view engine","ejs")  //ejs is bydefault require with express, so no need to require it
// you're telling Express to use EJS as the default "templating engine/view engine" for rendering "views/templates", "view means template"

app.get("/",(req,res)=>{
    console.log("you page opened")
    res.render("home.ejs")  //"home" will also work! no need to write whole path "views/home.js" because express automatically find it
})
// "res.send" works for small codes like, Array, string, Object
// "res.render" works for large files

// For "home.ejs" first create folder name "views" -> "home.ejs" file (can write html codes in it)

// **** In case, if we run our file from outside folder, by cd.. 
// and then run therfor it won't able to fetch our home page, So we need to add this constant path ****
const path = require("path")
app.set("views", path.join(__dirname, "/views"))