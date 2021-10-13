module.exports = {
    name: "test",
    usage: "$test",
    description: "Debug command.",
    execute: async function (p) {
        p.send('BERRIES AND CREAM!');
    }
}