const { Client, Intents } = require('discord.js');
const Bot = require('./Bot');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });

const bot = new Bot(client);

client.once('ready', async () => {
	console.log('Ready!');

	let queue = bot.player.createQueue(bot.client.guilds.cache.first().id);
	await queue.join('890333920858603531');
	let song = await queue.play('https://www.youtube.com/watch?v=Q096w0Fz2p4');
});

client.login(token);

module.exports = bot;