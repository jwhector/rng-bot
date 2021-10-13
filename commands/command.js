/*
Required functionality:
    -construct parameter object
    -initialize command collection
    -check message for prefix and matching command
*/
const fs = require('fs');

function Commands(bot) {
    this.commandList = new (require('discord.js').Collection);
    this.bot = bot;
    this.prefix = this.bot.prefix;
    this.getCommands = getCommands;
    this.checkCommand = checkCommand;

    this.getCommands();
}

function getCommands() {
    const files = fs.readdirSync('./commands/commandList');
    // console.log(files);
    files.forEach((file) => {
        if (!file.endsWith('.js')) return;
        const command = require(`./commandList/${file}`);
        this.commandList.set(command.name, command);
    });
    // console.log(this.commandList);
}

function getParam(message, args, bot) {
    const p = {};
    p.message = message;
    p.author = message.author;
    p.content = message.content;
    p.client = message.client;
    p.guild = message.guild;
    p.member = message.member;
    p.args = args;
    p.channel = message.channel;
    p.bot = bot;

    p.send = async (msg) => {
        await p.channel.send(msg);
    }

    return p;
}

async function checkCommand(message) {
    if (!message.content.startsWith(this.prefix)) return;

    const args = message.content.split(" ").slice(1);
    const cmdName = message.content.split(" ")[0].slice(1);

    console.log(cmdName, args);

    const cmd = this.commandList.get(cmdName);

    if (cmd) {
        const p = getParam(message, args, this.bot);
        await cmd.execute(p); 
    }
}

module.exports = Commands;