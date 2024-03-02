// "Get Request"
// Used to Get Some Response (like fetching anything)
// Data sent in Query String, Limited(can't use long URL) string data and 
// Visiblity (all extra/sensitive information we send visible in URL like password etc, which not Safe & also make URL too lengthy which some browser dosen't support/allow)

// "Post Request"
// Used to Post something (Create, Write, Update) (uploading or updating anything)
// Data sent (any Data Type not like,"get" which restricted to only String)

// **Though we can use any Request for any Work, but as a good practice should use Requests made for that particular purposes**

// Create Folder 
// Sub Folders -> Frontend and Backend
// Backend folder -> file index.js -> Terminal -> "npm init -y" -> "npm i express" -> "npm i nodemon" do changes as per require!!
// index.js
const express = require("express")
const app = express()

const port = 8080

app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})

//added this app.use a "middleware" for "post's req.query" to work
app.use(express.urlencoded({extended:true}))  //for url
app.use(express.json())  //when data send in json

app.get('/register',(req,res)=>{
    let {name, password} = req.query
    res.send(`Welcome ${name} in our page, Your Password is ${password}`)
})
app.post('/register',(req,res)=>{  //But in post, Data isn't send in Query String therefor "req.query" will not work, So need to add above line for this
    let {name,password} = req.query
    res.send(`Welcome ${name} to our Post page, Your Password is ${password}`)
})

// Frontend folder -> index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="get" action="http://localhost:8080/register">  
        <input type="text" placeholder="Name" name="name">
        <input type="password" placeholder="passowrd" name="password">
        <button type="submit">Submit</button>
    </form>
    <hr>
    <form method="post" action="http://localhost:8080/register">
        <input type="text" placeholder="Name">
        <input type="password" placeholder="passowrd">
        <button type="submit">Submit</button>
    </form>
    //running live server, html page open in different localhost but after submitting it will redirect to localhost:8080
    //must give a "name to form" to identify it's name in Backend express
</body>
</html>


