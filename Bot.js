class Bot {
    constructor(client) {
        this.client = client;

        this.init();
    }

    init() {
        require('./handlers/messageHandler')(this);
    }
}

module.exports = Bot;