const Discord = require('discord.js')
const chalk = require('chalk')

module.exports = {
    name: 'kickall',
    description: 'kicks all members',
    run: async(nuker, message, args) => {
        if(!message.guild.me.hasPermission("ADMINISTRATOR")) return console.log(chalk.grey("ERROR: MISSING ADMINISTRATOR PERMISSION!"))

        message.guild.members.cache.forEach(member => {
            if(!member.kickable) {
                console.log(chalk.grey(`WAS NOT ABLE TO BAN ${member.user.tag}`))
            } else {
                member.kick({ reason: "GTS-NUKER" }).then(console.log(chalk.yellowBright(`KICKED ${member.user.tag}`)))
            }
        })
        message.delete()
    }
}
