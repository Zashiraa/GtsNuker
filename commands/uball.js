const Discord = require('discord.js')
const chalk = require('chalk')

module.exports = {
    name: 'uball',
    description: 'unbans all banned members',
    run: async(nuker, message, args) => {
        if(!message.guild.me.hasPermission("ADMINISTRATOR")) return console.log(chalk.grey("ERROR: MISSING ADMINISTRATOR PERMISSION!"))

        const bans = message.guild.fetchBans()

        bans.then(ban => {
            if(ban.size === 0) {
                return console.log(chalk.grey(`NO ONE IS BANNED IN ${message.guild.name}`))
            } else {
                ban.forEach(
                    b => {
                        message.guild.members.unban(b.user.id).then(
                            console.log(
                                chalk.yellowBright(
                                    "UNBANNED MEMBER"
                                )
                            )
                        )
                    }
                )
            }
        })
        message.delete()
    }
}