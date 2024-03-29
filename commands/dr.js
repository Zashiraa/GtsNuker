const Discord = require('discord.js')
const chalk = require('chalk')

module.exports = {
    name: 'dr',
    description: 'deletes all roles',
    run: async (nuker, message, args) => {
        if (!message.guild.me.hasPermission("ADMINISTRATOR")) return console.log(chalk.grey("ERROR: MISSING ADMINISTRATOR PERMISSION!"))
        message.guild.roles.cache.forEach((role) => {
            if (!role.editable) {
                console.log(chalk.grey(`WAS NOT ABLE TO DELETE ROLE ${role.name}`))
            } else {
                role.delete("GTS-NUKER").then(console.log(chalk.yellowBright("DELETED ROLE")))
            }
        })
        message.delete()
    }
}
