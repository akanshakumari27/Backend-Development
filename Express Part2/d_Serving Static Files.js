// **** If we want to link "Js and CSS" files too similar like ejs we Use, ****

app.use(express.static("public")); //here by default it will take file name "style.css" from folder name "public"
app.use(express.static(path.join(__dirname,"/public"))) 
//this when we want an acess to call Our Code from outside also

// home.ejs File
{/* <link rel="stylesheet" href="/style.css">  */}

//public(folder) -> style.css(file)  
img{
    height: 400px;
    width: 400px;
    display: flex;
    flex-direction: column;
}
body{
    background-color: pink;
}


// **** Includes in Express ****
// as EJS is an Template, whole written in HTML simillarly
// "Includes" also an "Sub-Template" which can add in main Templates number of times needed as per requirments
// ejs.co, Embedded JavaScript Templating 

// Again we will make "include(Folder)" inside "views(Folder)"
// Now, In Include Folder we can add number of multiple includes, First "head.ejs" file

// head.ejs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/style.css">
</head>
</html>

{/* home.ejs */}
<%- include("includes/head.ejs"); %>
<body>
    <h1>Welcome to our page @<%= data.name %></h1>
    <p> Followers: <%= data.followers %></p>
    <p> Following: <%= data.following %></p>
    <hr>
    <p>Posts: 
        <% for(let post of data.posts){ %>
            <img src= "<%= post.image %>" alt="image">
             <p>Likes: <%= post.likes %> &nbsp;&nbsp;&nbsp;&nbsp; Comments: <%= post.comments %> </p>
        <% } %>
    </p>
</body>
</html>

// error.ejs
<%- include("includes/head.ejs"); %>
<body>
    <h1>Welcome to our page @<%= data.name %></h1>
    <p> Followers: <%= data.followers %></p>
    <p> Following: <%= data.following %></p>
    <hr>
    <p>Posts: 
        <% for(let post of data.posts){ %>
            <img src= "<%= post.image %>" alt="image">
             <p>Likes: <%= post.likes %> &nbsp;&nbsp;&nbsp;&nbsp; Comments: <%= post.comments %> </p>
        <% } %>
    </p>
</body>
</html>

// Like this we can add that particular Sub-Templates in any Files
// Simillary we can make, "footer.ejs" and can add that particular template in any/all files as per Requirment
