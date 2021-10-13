module.exports = {
    name: "play",
    usage: "play [youtube|spotify URL]",
    description: "Play song from URL",
    execute: async function (p) {
        let queue = p.bot.player.createQueue(p.guild.id);
        const channelId = p.member.voice.channel ? p.member.voice.channel.id : null;
        if (!channelId) {
            p.send('Please connect to a voice channel to play music!');
            return;
        }
        await queue.join(channelId);
        let song = await queue.play(p.args[0]);
    }
}