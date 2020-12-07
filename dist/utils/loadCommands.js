"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function load(client, dir, command) {
    try {
        const props = require(`./commands/${dir}/${command}`);
        if (props.init) {
            props.init(client);
        }
        client.commands.set(props.help.name, props);
        props.help.aliases.forEach((alias) => {
            client.aliases.set(alias, props.help.name);
        });
        return false;
    }
    catch (err) {
        return console.log(`Error: Unable to load command: ${command}. Skipping...`);
    }
}
exports.default = load;
