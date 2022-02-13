import { EventListener } from 'yuuko';

module.exports = new EventListener('ready', (context) => {
    //context.client = bot :thumbsup:
    console.log(`${context.client.user} is now online.`)
})