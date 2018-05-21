/*client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === 'what is my avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }*/

exports.run = (bot, message, args, tools) => {
 let msg = message.content.toUpperCase();
    message.reply(message.author.avatarURL);

};

exports.config = {
    command: 'avatar'
}