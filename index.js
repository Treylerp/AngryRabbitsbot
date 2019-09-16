//Calling packages
const Discord = require("discord.js")
const fs = require("fs");
const bot = new Discord.Client();
const { RichEmbed } = require('discord.js');
//Functions
let serverFindObject = bot.guilds.get('name', 'Angry Rabbits');
bot.on('ready', () => {
    bot.user.setActivity('You Angry Rabbits', { type: 'watching' }); //Sets the game bot is playing
    //bot.channels.get('537454000610738188').send(
    //    "I'm online!")
    });
  

//Sends private message to newly joined members
bot.on('guildMemberAdd', member => {
  // channel get
  const channel = bot.channels.get('572533284894933025');
  // if it doesn't exist whoops.

  // embed.
const EmbedJoin = new Discord.RichEmbed()
    .setColor('#7289DA')
    .addField('📬Welcome ',  `${member.user.username}`, true)
        
        .addField('Server member count:', `**${bot.users.size} members**`, true)
    .setThumbnail(`${member.user.displayAvatarURL}`)
    .setTimestamp()
    .setFooter('Angry Rabbits', `${bot.user.displayAvatarURL}`);

channel.send(EmbedJoin).catch(console.error);
});


  
bot.on('guildMemberAdd', member => {

  // embed.
const EmbedJoin = new Discord.RichEmbed()
    .setColor('#7289DA')
    .addField('Welcome ',  `${member.user.username}`, true)
        
        .addField('We are Angry Rabbits! Angry Rabbits is here to make your online gaming experience different and/or unique!', "A Staff member has been notified that you have joined the server and well DM you to help you gain access to the server.", true)
        .addField('Server Invite', 'https://discord.gg/h2jDMDN', true)
    .setTimestamp()
    .setFooter('Angry Rabbits', `${bot.user.displayAvatarURL}`);

member.send(EmbedJoin).catch(console.error);
});


 bot.on('guildMemberAdd', member => {


  bot.channels.get('537454000610738188').send(

"New Rabbit has joined us and needs a staff member's assistance. " + member.user)
  }
);
 /*bot.on('raw', event => {
    console.log(event);
        const eventName = event.t;
    if(eventName === 'MESSAGE_REACTION_ADD')
    {
        if(event.d.message_id === '600379292454748180')
        {
            var reactionChannel = bot.channels.get(event.d.channel_id);
            if(reactionChannel.messages.has(event.d.message_id))
            return;
            else {
                reactionChannel.fetchMessage(event.d.message_id)
                .then(msg => {
                    var msgReaction = msg.reactions.get(event.d.emoji.name + ":" + event.d.emoji.id);
                    var user = bot.users.get(event.d.user_id);
                    bot.emit('messageReactionAdd', msgReaction, user);
                })
                .catch(err => console.log(err));
            }
        }
    }
});
bot.on('messageReactionAdd', (messageReaction, user) => {
    
 var roleName = messageReaction.emoji.name;
 console.log(roleName);
 var role = messageReaction.message.guild.roles.find();

}); */

  

/*bot.on('message', function(message){
    if (message.content == "myprofile") {
		
		message.channel.startTyping();
		bot.setTimeout(function(){            
      message.channel.send(
    // if it doesn't exist whoops.

    // embed.
  EmbedJoin = new Discord.RichEmbed()
      .setColor('#7289DA')
      .addField('Testing',  `${message.author.username}`, true)
          
          .addField('Server member count:', `**${bot.users.size} members**`, true)
      .setThumbnail(`${member.user.displayAvatarURL}`)
      .setTimestamp()
      .setFooter('Angry Rabbits', `${bot.user.displayAvatarURL}`),
  
  
  )}, 5000);
		message.channel.stopTyping();
      }})*/
bot.login('NTg2MjYyMDI2Njc4OTYwMjkw.XPlfGQ.ZlQcGcpJ4BNrx6pufjjFQtNuLFo');