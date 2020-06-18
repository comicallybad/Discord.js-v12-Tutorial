const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const client = new Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

config({ path: __dirname + "/.env" });
globalThis.prefix = "=";

client.on("ready", () => {
    console.log(`${client.user.username} is online! `);
});

client.on("message", message => {
    if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();

        message.delete({ timeout: 0 })

        if (cmd === "testing") {
            return message.reply("You said testing.").then(m => m.delete({ timeout: 7500 }));
        } else if (cmd === "hello") {
            return message.reply("hello.").then(m => m.react("❤️"));
        }
    }
});

client.login(process.env.TOKEN);