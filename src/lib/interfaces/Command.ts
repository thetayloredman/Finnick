import FClient from '@lib/FClient'
import { Message } from 'discord.js'

export default interface Command {
    help:{
        name: string,
        description: string,
        category: string,
        aliases: string[],
    }
    execute: (client: FClient, message: Message, args: string[]) => void // Can be `Promise<SomeType>` if using async
}