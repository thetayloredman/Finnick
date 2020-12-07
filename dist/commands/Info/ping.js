"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = async (client, message) => {
    await message.delete();
    const msg = message.channel.send("Flying");
};
exports.help = {
    name: "ping",
    description: "Ping Pong",
    aliases: ["Yes"]
};
