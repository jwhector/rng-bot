module.exports = (bot) => {
    bot.client.on("messageCreate", function(message) {
        console.log(message);
    });
}