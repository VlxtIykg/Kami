import { Command } from 'yuuko';

module.exports = new Command('test', (message, args, context) => {
  message.channel.createMessage('OwO');
  console.log(args,context,message);
});

module.exports = new Command('ping', message => {
    message.channel.createMessage('Pong!');
    console.log("It works")
  });