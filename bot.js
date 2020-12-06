const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const express = require("express");
const app = express();
const port = 8080;

app.get("/", function(req, res) {
  res.send("Fozen & Ukqzn Bot Aktif");
});

app.listen(port, function() {
  console.log("Your app running on port " + port);
});

const client = new Discord.Client();
const config = require("./config.json");
let prefix = config.prefix;
client.config = config;

fs.readdir("./ukqzn/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./ukqzn/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./fozen/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./fozen/${file}`);
    let commandName = file.split(".")[0];
    console.log(`[LOAD_COMMAND] ${commandName}`);
    client.commands.set(commandName, props);
  });
});
client.commands = new Enmap();

fs.readdir("./fozen2/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./fozen2/${file}`);
    let commandName = file.split(".")[0];
    console.log(`[LOAD_COMMAND] ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.login(config.token);
