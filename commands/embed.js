const { Client, Command } = require('yuuko');
const moment = require('moment');
module.exports = new Command(['whois', 'member'], async (message, args, context) => { // eslint-disable-line no-unused-vars
    if (!args[0]) {
        return message.channel.createMessage(`${message.author.mention}, apologies! Please specify a particular member!`);
    }
    const user = message.mentions[0];
    const condensed = `<@!${args[0]}>`
    const author = condensed.getProfile;
    const guild = message.channel.guild;
    console.log(`User is being runned ${condensed}`)
    console.log(`User is being runned ${author}`)
    const member = await guild.members.get(author.id) ?? await guild.members.get(user.id);
    if(user) {
        console.log(`User is being runned ${user}`)
        console.log(`User is being runned ${author}`)
        console.log(`User member is being runned ${member}`)
    }
    /* message.channel.createMessage({
        embed: {
            title: `User information for ${author.username}#${author.discriminator}`,
            thumbnail: {
                url: author.avatarURL,
            },
            color: 0x0008,
            fields: [
                {
                    name: 'Account created at:',
                    //the client id is based of their creation date so you can easily convert it to a unix timestamp
                    value: `${moment.utc(author.createdAt).format('MMMM, Do YYYY, h:mm:ss a')}`,
                    inline: false,
                },
                {
                    name: 'User ID:',
                    value: `\`${author}\``,
                    inline: false,
                },
                {
                    name: 'Roles:',
                    value: '<@&' + member.roles.map((r) => `${r}`).join('>, <@&') + '>',
                    inline: false,
                },
                {
                    name: 'Joined server at:',
                    value: `${moment.utc(member.joinedAt).format('MMMM, Do YYYY, h:mm:ss a')}`,
                    inline: false,
                },
            ],
        },
    }); */
});