//exports.run = (bot, message, args, tools) => {

/*module.exports.run == async (bot, message,args) => {

  
   message.channel.send({embed:{
      title: "Ping!",
      description: "Pong!",
      color: 0x14589
}})
}

module.experts.config = {
  command : "ping"
}
*/

exports.run = (bot, message, args, tools) => {
 let msg = message.content.toUpperCase();
    message.channel.send({
        embed: {
            title: "Ping!",
            description: "Pong!",
            color: 0x14589
        }
    })

};

exports.config = {
    command: 'ping'
}