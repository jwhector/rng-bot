const { Client, Intents } = require('discord.js');
const Bot = require('./Bot');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });

const bot = new Bot(client);

client.once('ready', async () => {
	console.log('Ready!');
});

client.login(token);