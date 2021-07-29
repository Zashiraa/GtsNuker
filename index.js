//Main File
//For Help Regarding This Nuker Join: https://discord.gg/fpwZxqnGDy
const Discord = require('discord.js')
const chalk = require('chalk')
const fs = require('fs')
const config = require('./config.json')
const nuker = new Discord.Client()
const login = config.login
const prefix = config.prefix
const Author = config.Author
const ID = config.ID
const DisableEveryone = config.DisableEveryone
const ASCII = String.raw`
  ▄████  ██░ ██  ▒█████    ██████ ▄▄▄█████▓  ██████ 
 ██▒ ▀█▒▓██░ ██▒▒██▒  ██▒▒██    ▒ ▓  ██▒ ▓▒▒██    ▒ 
▒██░▄▄▄░▒██▀▀██░▒██░  ██▒░ ▓██▄   ▒ ▓██░ ▒░░ ▓██▄   
░▓█  ██▓░▓█ ░██ ▒██   ██░  ▒   ██▒░ ▓██▓ ░   ▒   ██▒
░▒▓███▀▒░▓█▒░██▓░ ████▓▒░▒██████▒▒  ▒██▒ ░ ▒██████▒▒
 ░▒   ▒  ▒ ░░▒░▒░ ▒░▒░▒░ ▒ ▒▓▒ ▒ ░  ▒ ░░   ▒ ▒▓▒ ▒ ░
  ░   ░  ▒ ░▒░ ░  ░ ▒ ▒░ ░ ░▒  ░ ░    ░    ░ ░▒  ░ ░
░ ░   ░  ░  ░░ ░░ ░ ░ ▒  ░  ░  ░    ░      ░  ░  ░  
      ░  ░  ░  ░    ░ ░        ░                 ░  
               
               Made By: ${Author}                                     
`
module.exports = nuker;
nuker.commands = new Discord.Collection()
nuker.aliases = new Discord.Collection()
//command handler
const commands = fs.readdirSync(`./commands/`).filter(file => file.endsWith('.js'));
for (const file of commands) {
    let pull = require(`./commands/${file}`);
    if (pull.name) {
        nuker.commands.set(pull.name, pull);
    }
    if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => nuker.aliases.set(alias, pull.name))
}
//events
nuker.on('ready', () => {
    console.log(chalk.redBright(ASCII))
    console.log(chalk.redBright("════════════════════════════════════════════════════════════════════════════════"))
    console.log(chalk.greenBright(`LOGGED IN AS: ${nuker.user.username}#${nuker.user.discriminator}`))
    console.log(chalk.greenBright(`NUKER_PREFIX: ${prefix}`))
    console.log(chalk.greenBright(`DISABLE_EVERYONE: ${DisableEveryone}`))
    console.log(chalk.greenBright("PERMISSION REQUIRED TO NUKE: ADMINISTRATOR"))
    console.log(chalk.redBright("════════════════════════════════════════════════════════════════════════════════"))
    nuker.user.setActivity("GHOSTS", { type: "WATCHING" })
})

nuker.on('message', async message => {
    if(!message.content.startsWith(prefix)) return
    if (message.author.bot) return
    if (!message.guild) return
    if (message.guild.id === "860016569723781121") return
    if (message.mentions.everyone) return
    if (message.mentions.has(nuker.user.id)) {
        const Help = new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setTitle("GHOSTS™")
            .setDescription("**GtsNuker All Commands:**")
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

    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const cmd = args.shift().toLowerCase()
    if(cmd.lentgh === 0) return
    let command = nuker.commands.get(cmd)
    if(!command) command = nuker.commands.get(nuker.aliases.get(cmd))
    if(command && DisableEveryone === false) {
        command.run(nuker, message, args)
    } else if(command && DisableEveryone === true) {
        if(message.author.id !== ID) return
        command.run(nuker, message, args)
    } else {
        return
    }
})
nuker.login(login)
