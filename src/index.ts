// Credit to [thetayloredman (BadBoyHaloCat)](https://github.com/thetayloredman) for
// writing [ProtoBot](https://github.com/thetayloredman/ProtoBot) which was used as
// inspiration for this file.
import FClient from './lib/FClient'
import * as dotenv from 'dotenv'
import { readdirSync } from 'fs'
import load from './utils/loadCommands'
dotenv.config();

const client = new FClient({
    disableMentions: "everyone"
})

const init = async() => {
    const cmds:String[]= []
    readdirSync('./dist/commands').forEach(dir => {
        const cmdFiles = readdirSync(`./dist/commands/${dir}/`)
        console.log(`Loading ${dir}; This Directory contains ${cmdFiles.length} commands.`)
        cmdFiles.forEach(cmd => {
            if(!cmd.endsWith(".js")) return;
            const response = load(client, dir, cmd)
            cmds.push(cmd);
            if(response) console.log(response)
        })
    })

    const evtFiles = readdirSync('./dist/events')
    console.log(`Loading a total of ${evtFiles.length} Events. `)
    evtFiles.forEach(file => {
        const eventName = file.split(".")[0]
        const event = require(`./events/${file}`)
        client.on(eventName, event.bind(null, client))
    })
    client.login(process.env.TOKEN)
}

init()