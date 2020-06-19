module.exports = {
    del: async function (message, timeout) {
        if (message) {
            if (message.id) {
                if (message.deletable) {
                    setTimeout(() => {
                        if (!message.reactions.cache.get("🛑")) {
                            message.delete({ timeout: 0 }).catch(err => err);
                        }
                    }, timeout);
                }
            }
        }
    }
}