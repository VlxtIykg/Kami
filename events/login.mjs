import { EventListener } from 'yuuko';

module.exports = new EventListener('ready', ({client}) => {
    //context.client = bot :thumbsup:
    console.log(`${client.user.username} is now online.`);
});