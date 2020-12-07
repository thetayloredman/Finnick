import KClient from './../../lib/FClient'
import { Message, MessageEmbed } from 'discord.js'

exports.run = async(client: KClient, message: Message) => {
    await message.delete()
    const msg = message.channel.send("Pinging...")
    const embed = new MessageEmbed()
    .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
    .setTitle("🏓 Ping Commmand")
    .addField("🔌 ws/API Latency", `${Math.round(client.ws.ping)}ms`, true)
    .addField("🗨️ Message Latency", `${(await msg).createdTimestamp-message.createdTimestamp}ms`, true)
    .setColor("#ffb300")
    .setTimestamp()
    ;(await msg).delete()
    await message.channel.send(embed)
}

exports.help = {
    name:"ping",
    description:"Ping Pong",
    aliases: ["latency"]
}