const discord = require("discord.js");
exports.run = (bot, message, args, tools) => {
   let msg = message.content.toUpperCase();
    var guild = message.guild;
   var member = message.member;
    var icon = message.guild.iconURL;
    var serverEmbed = new discord.RichEmbed()
   
 
          
          .setTitle("Atos Kingdom Discord Server Info")
          .setColor("#42d9f4")
          .addField("Minecraft Ip", "178.32.125.149:25590")
          .setThumbnail(icon)
          .addField("Totaal Members", message.guild.memberCount)
          .addField("Aantal Bots", guild.members.filter(m => member.bot).size)
          return message.channel.send(serverEmbed);
        //}
    

};

exports.config = {
    command: 'serverinfo'
}