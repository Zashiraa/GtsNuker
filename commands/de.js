const Discord = require('discord.js')
const chalk = require('chalk')

module.exports = {
    name: 'de',
    description: 'deletes all emojis',
    run: async(nuker, message, args) => {
        if(!message.guild.me.hasPermission("ADMINISTRATOR")) return console.log(chalk.grey("ERROR: MISSING ADMINISTRATOR PERMISSION!"))

        message.guild.emojis.cache.forEach(emoji => emoji.delete().then(console.log(chalk.yellowBright("DELETED EMOJI"))))
        message.delete()
    }
}