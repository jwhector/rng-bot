const { Player } = require("discord-music-player");
const Bot = require('../../Bot');

const player = new Player(Bot.client);
client.player = player;