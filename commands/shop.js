exports.run = (bot, message, args, tools) => {
 let msg = message.content.toUpperCase();
  message.channel.send({embed:{
      color: 0x1789A5,
      fields:[
        {
            name: "Atos Buycraft Shop",
            value: "[Klik op mij](http://atoskingdom.buycraft.net/)",
            inline: false
        }
      ]
    }})  

};

exports.config = {
    command: 'shop'
}