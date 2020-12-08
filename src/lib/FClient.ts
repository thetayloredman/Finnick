// Credit to [thetayloredman (BadBoyHaloCat)](https://github.com/thetayloredman) for
// writing [ProtoBot](https://github.com/thetayloredman/ProtoBot) which was used as
// inspiration for this file.
import { Client, Collection, ClientOptions } from 'discord.js';
import Command from './interfaces/Command';

export default class FClient extends Client{
    public commands: Collection<unknown, Command>;
    public aliases: Collection<unknown, unknown>;
    public schedules: {};
    public constructor(options: ClientOptions){
        super(options)
        this.commands = new Collection()
        this.aliases = new Collection()
        this.schedules = {}        
    }
}
