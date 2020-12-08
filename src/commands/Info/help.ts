// Credit to [thetayloredman (BadBoyHaloCat)](https://github.com/thetayloredman) for
// writing [ProtoBot](https://github.com/thetayloredman/ProtoBot) which was used as
// inspiration for this file.
import FClient from '@lib/FClient'
import type Command from '@lib/interfaces/Command'
import { Message, MessageEmbed, MessageReaction, User } from 'discord.js'

exports.run = async (client: FClient, message: Message, args: string[]) => {
    await message.delete()
    const embed = new MessageEmbed()
        .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
        .setTitle("Help Commmand")
        .addFields(
            { name: "ℹ️ Information", value: "Information Related Commands", inline: false }
        )
        .setColor("#ffb300")
        .setTimestamp()
    const msg = await message.channel.send(embed)
    await msg.react("ℹ️")
    const filter = (reaction: MessageReaction, user: User) => {
        return ['ℹ️'].includes(reaction.emoji.name) && user.id === message.author.id;
    };
    msg.awaitReactions(filter, { max: 1, time: (60000 * 5), errors: ['time'] })
        .then(async collected => {
            const reaction: any = collected.first();

            if (reaction.emoji.name === 'ℹ️') {
                info(client, message, msg)
            }
        })
        .catch(collected => {
            if (msg.deletable) {
                return msg.delete()
            } else {
                return;
            }
        });
}

exports.help = {
    name: "help",
    category: "Info",
    description: "Display all or information on a specific command.",
    aliases: ["helpme", "h"]
}

async function info(client: FClient, message: Message, msg: Message) {
    const reactions = message.reactions.cache.filter(reactions => reactions.users.cache.has(message.author.id))
    try{
        for (const reaction of reactions.values()) {
            await reaction.users.remove(message.author.id);
        }
    }catch(err){
        console.log("no")
    }
    const embed = new MessageEmbed()
        .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
        .setTitle("Information-Related Commmand")
        .setColor("#ffb300")
        .setTimestamp()
    client.commands.forEach((cmd:Command) => {
        if (cmd.help.category === "Info") {
            embed.addField(`${cmd.help.name}`, `${cmd.help.description}`)
        }
    })
    await msg.edit(embed)
    await msg.react("ℹ️")
    const filter = (reaction: MessageReaction, user: User) => {
        return ['ℹ️'].includes(reaction.emoji.name) && user.id === message.author.id;
    };
    msg.awaitReactions(filter, { max: 1, time: (60000 * 5), errors: ['time'] })
        .then(async collected => {
            const reaction: any = collected.first();

            if (reaction.emoji.name === 'ℹ️') {
                info(client, message, msg)
            }
        })
        .catch(collected => {
            if (msg.deletable) {
                return msg.delete()
            } else {
                return;
            }
        });
}

async function inital(client: FClient, message: Message, msg: Message) {
    const embed = new MessageEmbed()
        .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
        .setTitle("Information-Related Commmand")
        .setColor("#ffb300")
        .setTimestamp()
    client.commands.forEach(cmd => {
        if (cmd.help.category === "Info") {
            embed.addField(`${cmd.help.name}`, `${cmd.help.description}`)
        }
    })
    await msg.edit(embed)
    await msg.react("ℹ️")
    const filter = (reaction: MessageReaction, user: User) => {
        return ['ℹ️'].includes(reaction.emoji.name) && user.id === message.author.id;
    };
    msg.awaitReactions(filter, { max: 1, time: (60000 * 5), errors: ['time'] })
        .then(async collected => {
            const reaction: any = collected.first();

            if (reaction.emoji.name === 'ℹ️') {
                info(client, message, msg)
            }
        })
        .catch(collected => {
            if (msg.deletable) {
                return msg.delete()
            } else {
                return;
            }
        });
}