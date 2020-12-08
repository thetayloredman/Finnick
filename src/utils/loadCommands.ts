// Credit to [thetayloredman (BadBoyHaloCat)](https://github.com/thetayloredman) for
// writing [ProtoBot](https://github.com/thetayloredman/ProtoBot) which was used as
// inspiration for this file.
import FClient from './../lib/FClient'

export default function load(client: FClient, dir: String, command: String){
    try{
        const props = require(`./../commands/${dir}/${command}`)
        if(props.init){
            props.init(client)
        }
        client.commands.set(props.help.name, props);
        props.help.aliases.forEach((alias: string) => {
            client.aliases.set(alias, props.help.name)
        });
        return false
    }catch(err){
        return console.log(`Error: Unable to load command: ${command}.\n\n${err}\n\nSkipping...`)
    }
}