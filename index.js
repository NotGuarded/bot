const Discord = require("discord.js");
const bot = new Discord.Client();

bot.login('NzY5MzY2NjgzMjI2NzM0NjAy.X5N-jw._UmV1LkrAmIO-IEe6BDPq2K2M3w');

bot.on('message', (message) => {
    if(message.content == "!bot"){
        message.channel.send("chucky gay");
    }
});