import { MessageEmbed, Client } from 'discord.js'

exports.run = async(client: any, message: any) => {
    await message.delete()
    const msg = message.channel.send("Flying")
}

exports.help ={
    name:"ping",
    description:"Ping Pong",
    aliases: ["Yes"]
}