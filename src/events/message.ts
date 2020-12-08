// Credit to [thetayloredman (BadBoyHaloCat)](https://github.com/thetayloredman) for
// writing [ProtoBot](https://github.com/thetayloredman/ProtoBot) which was used as
// inspiration for this file.
import Discord from 'discord.js'
import KClient from './../lib/FClient'

module.exports = async (client: KClient, message: Discord.Message) => {
    if(message.author && message.author.id === client.user?.id) return;
    if(message.author.bot) return;
    if(!message.guild && message.author) return;
    const { prefix } = require('./../../config.json')
    let command;
    let args;
    if(message.content.startsWith(prefix)){
        args = message.content.slice(prefix.length).trim().split(/ +/g);
        command = args.shift()?.toLowerCase();
        const cmd:any = client.commands.get(command) || client.commands.get(client.aliases.get(command))
        if(cmd){
            try{
                await cmd.run(client, message, args)
            }catch(err){
                console.log(err)
                message.reply(err)
            }
        }
    }
}