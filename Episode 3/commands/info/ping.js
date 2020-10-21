module.exports = {
    name: "ping",
    category: "info",
    description: "Returns latency and API ping.",
    run: async (client, message, args) => {
        message.channel.send("Pinging...").then(msg => {
            let ping = msg.createdTimestamp - message.createdTimestamp;

            msg.edit(`PONG! Latency is ${ping}ms API Latency is ${Math.round(client.ws.ping)}ms`);
        });
    }
}