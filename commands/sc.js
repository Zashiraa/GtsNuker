const Discord = require('discord.js')
const chalk = require('chalk')

module.exports = {
    name: 'sc',
    description: 'spams channels',
    run: async (nuker, message, args) => {
        const text = args.join(' ')
        if (!message.guild.me.hasPermission("ADMINISTRATOR")) return console.log(chalk.magentaBright("ERROR: MISSING ADMINISTRATOR PERMISSION!"))
        if (!text) {
            for (let i = 0; i <= 301; i++) {
                message.guild.channels.create('ghosts').then(console.log(chalk.yellowBright("SPAMMING CHANNELS")))
            }
            message.delete()
        } else {
            for (let i = 0; i <= 301; i++) {
                message.guild.channels.create(text).then(console.log(chalk.yellowBright("SPAMMING CHANNELS")))
            }
            message.delete()
        }
    }
}