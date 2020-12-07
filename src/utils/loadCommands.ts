import FClient from './../lib/FClient'

export default function load(client: FClient, dir: String, command: String){
    try{
        const props = require(`./commands/${dir}/${command}`)
        if(props.init){
            props.init(client)
        }
        client.commands.set(props.help.name, props);
        props.help.aliases.forEach((alias: string) => {
            client.aliases.set(alias, props.help.name)
        });
        return false
    }catch(err){
        return console.log(`Error: Unable to load command: ${command}. Skipping...`)
    }
}