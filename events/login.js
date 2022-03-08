const { EventListener } = require('yuuko')

module.exports = new EventListener('ready', (client) => {
    // context.client = bot
    console.log(`Logged in as PK`);
  });