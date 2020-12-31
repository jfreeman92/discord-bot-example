const Eris = require('eris');
 
const bot = new Eris(process.env.NzkxMDU4NDQ3ODk4MjQ3MjE4.X-Jolw.8pOd7bMr0OuCX8yU3vy9V834x5Q);   // Replace DISCORD_BOT_TOKEN in .env with your bot accounts token
 
bot.on('ready', () => {                                // When the bot is ready
    console.log('Ready!');                             // Log "Ready!"
});
 
bot.on('messageCreate', (msg) => {                     // When a message is created
    if(msg.content === 'Do the Dew') {                       // If the message content is "Do the Dew"
        bot.createMessage(msg.channel.id, 'Thank you fellow Dew Mate, and remember to reach for an ice cold Mountain Dew when gaslighting your friends!');  // Send a message in the same channel with false Mountain Dew ad.
    }
});
 
bot.connect();                                         // Get the bot to connect to Discord