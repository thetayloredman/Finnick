"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FClient_1 = __importDefault(require("./lib/FClient"));
const dotenv = __importStar(require("dotenv"));
const fs_1 = require("fs");
const loadCommands_1 = __importDefault(require("./utils/loadCommands"));
dotenv.config();
const client = new FClient_1.default({
    disableMentions: "everyone"
});
const init = async () => {
    const cmds = [];
    fs_1.readdirSync('./dist/commands').forEach(dir => {
        const cmdFiles = fs_1.readdirSync(`./dist/commands/${dir}/`);
        console.log(`Loading ${dir}; This Directory contains ${cmdFiles.length} commands.`);
        cmdFiles.forEach(cmd => {
            if (!cmd.endsWith(".js"))
                return;
            const response = loadCommands_1.default(client, dir, cmd);
            cmds.push(cmd);
            if (response)
                console.log(response);
        });
    });
    const evtFiles = fs_1.readdirSync('./dist/events');
    console.log(`Loading a total of ${evtFiles.length} Events. `);
    evtFiles.forEach(file => {
        const eventName = file.split(".")[0];
        const event = require(`./events/${file}`);
        client.on(eventName, event.bind(null, client));
    });
    client.login(process.env.TOKEN);
};
init();
