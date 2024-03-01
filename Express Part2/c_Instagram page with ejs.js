// ****** index.js *******

app.set("view engine","ejs") 
app.set("views",path.join(__dirname,"/views")) 
//joining path and giving directory name. this will helps to call Our function/File from anywhere inside/outside

// Now let Assume, we are calling Data from database saved in file "data.json"
app.get("/ig/:username",(req,res)=>{
   let {username} = req.params
   const instaData = require('./data.json')
   //res.render('home.ejs',{data:instaData[username]}) //passing Object, in key:value pair
   const data = instaData[username]
   //as username is variable, therfor if we search for "Cat or Dog" it will show result according to it
   if(data){
    res.render('home.ejs',{data}) //passing Object, in key:value pair
   }else{
    res.render('error.ejs')
   }
}) 


// ***** home.ejs *******
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        img{
            height: 400px;
            width: 400px;
            display: flex;
            flex-direction: column;
        }
    </style>
</head>
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


// ***** error.ejs *****
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Error</title>
</head>
<body>
    <h1>Wrong URL, This page have no Output</h1>
</body>
</html>


{/* // data.json */}
{
    "cats": {
      "name": "cats",
      "followers": 25000,
      "following": 5,
      "posts": [
        {
          "image": "https://plus.unsplash.com/premium_photo-1677545182067-26ac518ef64f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          "likes": 200,
          "comments": 17
        },
        {
          "image": "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          "likes": 312,
          "comments": 19
        },
        {
          "image": "https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          "likes": 1065,
          "comments": 200
        }
      ]
    },
    "dogs": {
      "name": "dogs",
      "followers": 75000,
      "following": 150,
      "posts": [
        {
          "image": "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          "likes": 3000,
          "comments": 41
        },
        {
          "image": "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRvZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
          "likes": 2500,
          "comments": 32
        },
        {
          "image": "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRvZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
          "likes": 500,
          "comments": 6
        }
      ]
    }
  }
  