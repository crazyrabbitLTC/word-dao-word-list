// server.js

const express = require("express");
const app = express();
const path = require("path");
// const IPFS = require("ipfs");
// const OrbitDB = require("orbit-db");
// const ipfs = new IPFS(ipfsOptions)

// ipfs.on('ready', async () => {
//     // Create OrbitDB instance
//     const orbitdb = new OrbitDB(ipfs)
//     const db = await orbitdb.open('/orbitdb/Qmd8TmZrWASypEp4Er9tgWP4kCNQnW4ncSnvjvyHQ3EVSU/first-database')
    
//   })


app.get("/wordList", function(req, res) {
  res.sendFile(path.join(__dirname, "WordDao_SignedWordList.json"));
});
app.get("/", function(req, res) {
  res.send("Welcome to the wordList.");
});

app.listen(process.env.PORT || 4000, function() {
  console.log("Your node js server is running");

});
