// server.js

const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

const wordList = "WordDaoList.json";
let rawdata = fs.readFileSync(wordList);
let wordObj = JSON.parse(rawdata);

const makeOBJ = (wordList) => {
    const byWord = {};
    const byIndex = {};
    wordList.forEach(element => {
        byWord[element.word] = {index: element.index, signature: element.signature};
        byIndex[element.index] = {word: element.word, signature: element.signature};
    });

    //console.log(byWord);
    return {byWord, byIndex};
}

const {byWord, byIndex} = makeOBJ(wordObj.words);

console.log(byIndex[3121]);


app.get("/wordList", function(req, res) {
  res.sendFile(path.join(__dirname, wordList));
});

app.get("/word/:word", function(req, res) {
  const { word } = req.params;
  res.send(byWord[word]);
});

app.get("/index/:index", function(req, res) {
    const { index } = req.params;
    res.send(byIndex[index]);
  });

app.get("/", function(req, res) {
  res.send("Welcome to the wordList.");
});

app.listen(process.env.PORT || 4000, function() {
  console.log("Your node js server is running");
});
