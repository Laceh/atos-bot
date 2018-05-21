

exports.run = (bot, message, args, tools) => {
 let msg = message.content.toUpperCase();
  
     message.channel.send({embed:{
      color: 0x00ff00,
      fields:[
        {
            name: "Atos Dynmap",
            value: "[Klik op mij](http://178.32.125.149:8881/)",
            inline: false
        }
      ]
      //timestamp: new Date(),
    }})   

};

exports.config = {
    command: 'dynmap'
}