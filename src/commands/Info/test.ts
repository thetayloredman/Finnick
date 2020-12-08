import FClient from './../../lib/FClient'
import { Message  } from 'discord.js'

exports.run = async (client: FClient, message: Message, args: string[]) => {
    await message.delete()
    
}

exports.help = {
    name: "test",
    category:"Info",
    description: "Test.",
    aliases: []
}