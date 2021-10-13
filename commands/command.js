/*
Required functionality:
    -construct parameter object
    -initialize command collection
    -check message for prefix and matching command
*/
const fs = require('fs');

function Commands(prefix) {
    this.commandList = new (require('discord.js').Collection);
    this.prefix = prefix;
    this.getCommand = getCommand;

    this.getCommand();
}

function getCommand() {

}

module.exports = Commands;