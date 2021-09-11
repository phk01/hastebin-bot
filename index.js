const Discord = require('discord.js');
const client = new Discord.Client() ;

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command', 'event'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord)
})

client.login('ODQ5MzExNDY2MzQ3NjkyMDUz.YLZU8Q.Rx_-uHaBolS4aPHO-A-jwbHxKlM')