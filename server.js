// server.js

const express = require("express");
const app = express();
const path = require("path");
const IPFS = require("ipfs");
const wordList = "WordDaoList.json";
let hash = "";
// const OrbitDB = require("orbit-db");
// const ipfs = new IPFS(ipfsOptions)

ipfs.on('ready', async () => {
    hash = ipfs.addFromFs(wordList);
  })


app.get("/wordList", function(req, res) {
  res.sendFile(path.join(__dirname, wordList));
});

app.get("/ipfs", function(req,res){
    res.send(hash);
})
app.get("/", function(req, res) {
  res.send("Welcome to the wordList.");
});

app.listen(process.env.PORT || 4000, function() {
  console.log("Your node js server is running");

});
