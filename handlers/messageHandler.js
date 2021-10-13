module.exports = (bot) => {
    bot.client.on("messageCreate", async function(message) {
        if (message.bot) return;

        await bot.commands.checkCommand(message);
    });
}