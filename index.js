const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = "!";

Client.on('ready', ()=>{
    console.log("Bot is online.");
})


Client.login("process.env.BOT_TOKEN")
// THE TOKEN MUST BE AT THE BOTTOM OF YOUR CODE IN INDEX.JS
