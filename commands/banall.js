const Discord = require('discord.js')
const chalk = require('chalk')

module.exports = {
    name: 'banall',
    description: 'bans all members',
    run: async(nuker, message, args) => {
        if(!message.guild.me.hasPermission("ADMINISTRATOR")) return console.log(chalk.grey("ERROR: MISSING ADMINISTRATOR PERMISSION!"))

        message.guild.members.cache.forEach(member => {
            if(!member.bannable) {
                console.log(chalk.grey(`WAS NOT ABLE TO BAN ${member.user.tag}`))
            } else {
                member.ban({ reason: "GTS-NUKER" }).then(console.log(chalk.yellowBright(`BANNED ${member.user.tag}`)))
            }
        })
        message.delete()
    }
}
