exports.run = (bot, message, args, tools) => {
 let msg = message.content.toUpperCase();
    message.channel.send({
        embed: {
            title: "Hallo!",
            description: "Pong!",
            color: 0x14589
        }
    })

};

exports.config = {
    command: 'hallo'
}