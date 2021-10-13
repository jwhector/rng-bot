module.exports = (bot) => {
    bot.client.on("messageCreate", function(message) {
        if (message.bot) return;

    });
}