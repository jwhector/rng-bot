function Bot(client) {
    this.client = client;
    this.prefix = require('./config.json').prefix;
    this.player = new (require('discord-music-player').Player)(this.client);
    this.commands = new (require('./commands/command'))(this);

    require('./handlers/messageHandler')(this);
    // console.log(this.commands);
}

module.exports = Bot;