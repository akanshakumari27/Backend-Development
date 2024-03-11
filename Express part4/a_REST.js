// REST - Representational State Transfer
// ReST is an Architectural Style that define a set of Constraints to be used for Creating Web Services

// When we perform CRUD operations (in Data base) for Every CRUD there's diffirent API's being used
// Like, for Create- Different API, for Delete- Different API, for update- Different API, for read- Different API
// Which collectively call, RESTful API's. 
// https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/  
// (Use nouns instead of verbs in endpoint paths) go with this in above given link

// For any data we perform CRUD on it, known as "Resource"
// example: in twitter we perform and do Modification on tweets, therfor "Tweets known as Resource" for our code

// CRUD Operations (HTTP request method OR HTTP verbs)
// GET - retrieves resources.
// POST - submits new data to the server
// PUT - updates existing data
// PATCH - update existing data partially
// DELETE - removes data

// **** Creating an "Quara Posts Page" ****
// here, resource -> posts

// Folder -> index.js(file) , install package.json(npm init -y), npm i express, npm i ejs
// now again create Folder -> views (for ejs Files) -> public (for css and js Files as required)

/* app.get("/",(req,res)=>{
    res.send()
    (Here we can send small files like "text, HTML, Object, Array")

    res.render("index.ejs")
    (Here to Send Big Files like "Ejs File" etc)

    res.redirect("/URL")
    (Here to Directly Redirecting on Different "URL")
    
}) */