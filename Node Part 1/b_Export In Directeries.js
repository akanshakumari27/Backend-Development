// **** When neede to Export From 1 Folder to different ****
// Create all files required in Folder1 and 1 file name "index.js" where need to send all files and sumarize in Array, then Export that array to Folder2
// Note:- It must be index.js name, because "require" works only for file named "index.js" {like: in c++ ,main()}

//Folder1
//Banana.js
module.exports={
    fruit:"Banana",
    color:"yellow"
}
//Apple.js
module.exports={
    fruit:"Apple",
    color:"Red"
}
//Orange.js
module.exports={
    fruit:"Orange",
    color:"Orange"
}
//index.js
const Apple = require("./apple.js")
const Banana = require("./banana.js")
const Orange = require("./orange.js")

fruits=[Apple,Banana,Orange]
module.exports = fruits

//Folder2
console.log(require("./fruits"))  //this Fruit Array will work as seperate File Directory

// npm (Node pacakage manager), it's pre-intslled for Node
// It's standard pacakge manager for Node.js
// Library of pacakges, {means coders wrote a lot codes and combine in form of pacakge, so that any other can also use it(react.js, express.js is also a pacakges)}
// command line tool, {this give acess to other user to use pacakges}

