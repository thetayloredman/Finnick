import { Client, Collection, ClientOptions } from 'discord.js';

export default class FClient extends Client{
    public commands: Collection<unknown, unknown>;
    public aliases: Collection<unknown, unknown>;
    public schedules: {};
    public constructor(options: ClientOptions){
        super(options)
        this.commands = new Collection()
        this.aliases = new Collection()
        this.schedules = {}        
    }
}
