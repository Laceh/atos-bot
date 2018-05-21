const discord = require("discord.js");
const botconfig = require("./botconfig.json");

const fs = require('fs');
const bot = new discord.Client();
//const func = require('./functions.js')

bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();
fs.readdir('./commands/', (err, files)=> {
  if (err) console.error(err);
  let jsfiles = files.filter(f => f.split('.').pop() === 'js');
  if(jsfiles.length <= 0) {
      console.log('No commands to load!');
      return;
    }
  jsfiles.forEach(f => {
    let props = require(`./commands/${f}`);
    bot.commands.set(props.config.command , props);
    if(props.config.aliases) props.config.aliases.forEach(a => bot.aliases.set(a, props.config.command));
  });
  console.log(`{files.length} commands loaded`)
});


bot.commands = new discord.Collection();

bot.on('ready', () => {
  console.log(`${bot.user.tag} is online!`)
  
  bot.user.setActivity("play.AtosKingdom.net",{type: "PLAYING"} )
  
  bot.user.setStatus('Online') // set status 'online' 'idle' 
});


bot.on("message", message => {
  
  let msg = message.content.toUpperCase();
  let sender = message.author;
  
  if(message.author.bot) return;
  
  if(message.channel.type === "dm") return; 
  
  var prefix = botconfig.prefix;
  
  var messageArray = message.content.split(" ");
  
  var command = messageArray[0];
  
  var cont = message.content.slice(prefix.length).split(" ");
  var args = cont.slice(1);
  
  if(!message.content.startsWith(prefix)) return;
  
  var cmd = bot.commands.get(cont[0])
  if (cmd) cmd.run(bot, message,args);
  
 /* try {
  
    let commandFile = require(`./commands/${cmd}.js`);
    commandFile.run(bot, message, args);
  
  }catch (e){
    console.log(e.message);
    
  } finally {
    //console.log(`${message.author.tag} ran the command ${cmd}.`);
  }*/
  
      
  }  )

  


//bot.login("NDQ3NzM0OTA0MjIzMDM5NDk4.DeL5Iw.uni02WPM8jZoOfcfUH2M-Uo0pgw");

bot.login(botconfig.token);
