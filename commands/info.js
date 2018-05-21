    /*if ( command === `${prefix}info`){
      
      var botIcon = bot.user.displayAvatarUrl;
      
      var botEmbed = new discord.RichEmbed()
      
      .setTitle("Atos Bot Commands")
      .setColor("#990000")
      .setThumbnail(botIcon)
      .addField("Bot Maker", "@Zangeose#9581")
      .addField("/Dynmap", "Dynmap link.")
      //.setUrl("http://178.32.125.149:8881/")
      .addField("/Shop", "Buycraft Shop.")
      .addField("/info", "Dit bericht.")
      .addField("/serverinfo", "Geeft weer hoevel spelers, bots er zijn")
      
  return message.channel.send(botEmbed);                      
  }*/

const discord = require("discord.js");
exports.run = (bot, message, args, tools) => {
   let msg = message.content.toUpperCase();
    var guild = message.guild;
   var member = message.member;
    var icon = message.guild.iconURL;
        var botIcon = bot.user.displayAvatarUrl;
      
      var botEmbed = new discord.RichEmbed()
   
  
      .setTitle("Atos Bot Commands")
      .setColor("#990000")
      .setThumbnail(botIcon)
      .addField("Bot Maker", "@Zangeose#9581")
      .addField("/Dynmap", "Dynmap link.")
      //.setUrl("http://178.32.125.149:8881/")
      .addField("/Shop", "Buycraft Shop.")
      .addField("/info", "Dit bericht.")
      .addField("/serverinfo", "Geeft weer hoevel spelers, bots er zijn")
      .addField("/Ping", "Pong!")
      .addField("/avatar", "Je eigen Avatar url.")

  return message.channel.send(botEmbed);         
        //}
    

};

exports.config = {
    command: 'info'
}