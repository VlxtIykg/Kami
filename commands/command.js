const { Command } = require('yuuko');
module.exports = new Command('owo', (message, args, context) => {
  message.channel.createMessage('OwO');
});

module.exports = new Command  ('mommy', (message, args, context) => {
  message.channel.createMessage('Oh look at you, how cute! Ara ara cmere ;) senpai needs some help over here');
});
module.exports = new Command('Daddy', (message, args, context) => {
  message.channel.createMessage('Sometimes life has a cruel sense of humor, giving you the thing you always wanted at the worst time possible.');
});