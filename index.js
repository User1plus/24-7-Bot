const discord = require('discord.js')
const client = new discord.Client()

client.on('ready', () => {
console.log(`${client.user.username} has been updated!`) 
client.user.setStatus('online')
client.user.setActivity(`Security`)
})

const embedyes = new discord.RichEmbed()
.setTitle(`Security has been Enabled!`)
.setColor(0xFF0)
client.on('message', message => {
 if(message.content == '!Security')
 if(message.member.hasPermission('MANAGE_ROLES'))
message.channel.send(embedyes);
})

client.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // If the message content starts with "!kick"
    if (message.content.startsWith('!kick')) {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Kick the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           */
          member.kick('Optional reason that will display in the audit logs').then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`Successfully kicked ${user.tag}`);
          }).catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to kick the member');
            // Log the error
            console.error(err);
          });
        } else {
          // The mentioned user isn't in this guild
          message.reply('That user isn\'t in this guild!');
        }
      // Otherwise, if no user was mentioned
      } else {
        message.reply('You didn\'t mention the user to kick!');
      }
    }
  });

  client.on('message', message => {
    // If the message is "what is my avatar"
    if (message.content === 'avatar') {
      // Send the user's avatar URL
      message.reply(message.author.avatarURL);
    }
  });

  client.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // if the message content starts with "!ban"
    if (message.content.startsWith('!ban')) {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Ban the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           * Read more about what ban options there are over at
           * https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=ban
           */
          member.ban({
            reason: 'They were bad!',
          }).then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`Successfully banned ${user.tag}`);
          }).catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to ban the member');
            // Log the error
            console.error(err);
          });
        } else {
          // The mentioned user isn't in this guild
          message.reply('That user isn\'t in this guild!');
        }
      } else {
      // Otherwise, if no user was mentioned
        message.reply('You didn\'t mention the user to ban!');
      }
    }
  });

client.login("NjcyODA4OTczNDQ3MjAwNzc5.XjQ5Gg.CHaZmP-rXinm9P1EvdJC5dgNg7M");