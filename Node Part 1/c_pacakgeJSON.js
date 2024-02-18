// Node_Modules contains all Installed Dependecies (what code required to run).
// Package.Json contains all Information and Version related to that Installed Dependecies.
// At npm website search for figlet, install pacakges and write code given
// ~ npm install figlet OR ~ npm i figlet

var figlet = require("figlet");

figlet("Akansha Kumari", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

// for this code to run, all installed dependecies packages are working at behind
// Dependecies Packages (pre-written codes written by any person and provided publicily to use)


// ********** package.json ************
// pacakge.json contains Descriptive and Functional Metdata(data about data) about project like name, version, dependecies.
// package.json contains all Dependecies like node_modules, So one can get node_module from pacakage.json

// To get pacakge.json first in Empty Folder
// ~ npm init --(to intialise, fill the field required and can leave some empty)
// ~ npm install figlet --(will install node_module and can check dependecies in package.json, it will also have it's own pacakge.json) 
// ~ npm install give-me-a-joke  --(all these are packages available in npm written by different persons,can check it in dependecies pacakge.json to verify intstallation)
// they will also have it's own json package, expand node_module -> give-me-a-joke expand it!

// ~ npm init
// ~ npm install figlet


// ******** Local and Global *********
// The above method is Local installation and Usage, we can't use this package on another Folder

// For Global Usage, installation
// Terminal
// ~ sudo chown -R $USER/user/local/lib/node_modules --(because we need admin acess before installing Globally, otherwise throw error)
// ~ npm install -g figlet
// ~ npm link figlet
// ~ node fileName.js 