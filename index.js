const { Client, Command } = require('yuuko'); // Imports the Client constructor
const path = require('path'); // For joining paths
require('dotenv').config(); // Imports the variables in the `.env` file

const bot = new Client({
    token: process.env.token,
    prefix: process.env.prefix,
    ignoreBots: true,
});

const pingCommand = new Command('ping', message => {
  message.channel.createMessage('Pong!');
});

bot
.addDir(path.join(__dirname, 'commands'))
.addDir(path.join(__dirname, 'events'))
.addCommand(pingCommand)
.connect();