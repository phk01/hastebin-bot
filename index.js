const Discord = require('discord.js');
const client = new Discord.Client() ;

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command', 'event'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord)
})

let token = require('./handlers/constants').config

client.login(token.token)