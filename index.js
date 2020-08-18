const fs = require('fs')
const Discord = require("discord.js")
const client = new Discord.Client();
const gaming_file = '../Servers/gaming.json'
const music_file = '../Server/music.json'
const chill_out_file = '../Server/chill_out.json'
const giveaways_file = '../Server/givaways.json'
const programming_file = '../Server/programming.json'
const learning_file = '../Server/learning.json'
const other_file = '../Server/other.json'

var embed_main = {
    "title": "Server list",
    "description": "A list of servers you can join to get coins by being active!",
    "color": 0x0060fa,

    "fields": [
        {
            "name": "🎮Gaming🎮",
            "value": "sp!find gaming"
        },
        {
            "name": "🎵Music🎵",
            "value": "sp!find music"
        },
        {
            "name": "🧊Chill out🧊",
            "value": "sp!find chill out"
        },
        {
            "name": "🎁Giveaways🎁",
            "value": "sp!find giveaways"
        },
        {
            "name": "⌨️Programming⌨️",
            "value": "sp!find programming"
        },
        {
            "name": "🌐Learning🌐",
            "value": "sp!find learning"
        },
        {
            "name": "👌Other👌",
            "value": "sp!find gaming"
        }
    ]
}

client.on("message", msg => {
    if (msg.content === "sp!find") {
        embed = embed_main
        msg.channel.send({ embed })
    }
})

client.on("message", msg => {
    if (msg.content === "sp!find gaming") {
        embed = JSON.parse(fs.readFileSync(gaming_file, 'utf-8'))
        msg.channel.send({ embed })
    }
})

client.on("message", msg => {
    if (msg.content === "sp!find music") {
        embed = JSON.parse(fs.readFileSync(music_file, 'utf-8'))
        msg.channel.send({ embed })
    }
})

client.on("message", msg => {
    if (msg.content === "sp!find chill out") {
        embed = JSON.parse(fs.readFileSync(chill_out_file, 'utf-8'))
        msg.channel.send({ embed })
    }
})

client.on("message", msg => {
    if (msg.content === "sp!find giveaways") {
        embed = JSON.parse(fs.readFileSync(giveaways_file, 'utf-8'))
        msg.channel.send({ embed })
    }
})

client.on("message", msg => {
    if (msg.content === "sp!find programming") {
        embed = JSON.parse(fs.readFileSync(programming_file, 'utf-8'))
        msg.channel.send({ embed })
    }
})

client.on("message", msg => {
    if (msg.content === "sp!find other") {
        embed = JSON.parse(fs.readFileSync(other_file, 'utf-8'))
        msg.channel.send({ embed })
    }
})

// sp!setup-category
// creates an invite to the guild channel where the command is run
// saves the guild name and invite to file
// if guild name was already in the file it is updated
client.on("message", msg => {
    if (msg.content === "sp!setup-gaming") {

        // get the existing guilds saved to file
        var existingGuilds = JSON.parse(fs.readFileSync(gaming_file, 'utf-8'))

        // get the index of the guild (it it already exists)
        var guildIndex = existingGuilds.fields.indexOf(function (g) {
            return msg.guild.name === g.name
        })
        console.log("Exitsing guild at index " + guildIndex)
        // if the guild doesn't exist, 
        // create an entry for this guild with a blank invite
        // and add it to the list of existing guilds
        if (guildIndex === -1) {
            guildIndex = existingGuilds.fields.push({
                "name": msg.guild.name,
                "value": ""
            })
            guildIndex -= 1
            console.log("created guild at index " + guildIndex)
        }

        // update guild with new invite, save it, and send details in reply
        msg.channel.createInvite({ maxAge: 0 })
            .then(invite => {
                console.log("updating invite for guild at index " + guildIndex)
                console.log("length of existing guilds " + existingGuilds.fields.length)
                guild = existingGuilds.fields[guildIndex]
                console.log(guild)
                guild.value = invite.url
                fs.writeFileSync(gaming_file, JSON.stringify(existingGuilds), 'utf-8')
                msg.reply('Success!')
            })
    }

}
)
client.on("message", msg => {
    if (msg.content === "sp!setup-music") {

        // get the existing guilds saved to file
        var existingGuilds = JSON.parse(fs.readFileSync(gaming_file, 'utf-8'))

        // get the index of the guild (it it already exists)
        var guildIndex = existingGuilds.fields.indexOf(function (g) {
            return msg.guild.name === g.name
        })
        console.log("Exitsing guild at index " + guildIndex)
        // if the guild doesn't exist, 
        // create an entry for this guild with a blank invite
        // and add it to the list of existing guilds
        if (guildIndex === -1) {
            guildIndex = existingGuilds.fields.push({
                "name": msg.guild.name,
                "value": ""
            })
            guildIndex -= 1
            console.log("created guild at index " + guildIndex)
        }

        // update guild with new invite, save it, and send details in reply
        msg.channel.createInvite({ maxAge: 0 })
            .then(invite => {
                console.log("updating invite for guild at index " + guildIndex)
                console.log("length of existing guilds " + existingGuilds.fields.length)
                guild = existingGuilds.fields[guildIndex]
                console.log(guild)
                guild.value = invite.url
                fs.writeFileSync(music_file, JSON.stringify(existingGuilds), 'utf-8')
                msg.reply('Success!')
            })
    }

}
)
client.on("message", msg => {
    if (msg.content === "sp!setup-chill out") {

        // get the existing guilds saved to file
        var existingGuilds = JSON.parse(fs.readFileSync(chill_out_file, 'utf-8'))

        // get the index of the guild (it it already exists)
        var guildIndex = existingGuilds.fields.indexOf(function (g) {
            return msg.guild.name === g.name
        })
        console.log("Exitsing guild at index " + guildIndex)
        // if the guild doesn't exist, 
        // create an entry for this guild with a blank invite
        // and add it to the list of existing guilds
        if (guildIndex === -1) {
            guildIndex = existingGuilds.fields.push({
                "name": msg.guild.name,
                "value": ""
            })
            guildIndex -= 1
            console.log("created guild at index " + guildIndex)
        }

        // update guild with new invite, save it, and send details in reply
        msg.channel.createInvite({ maxAge: 0 })
            .then(invite => {
                console.log("updating invite for guild at index " + guildIndex)
                console.log("length of existing guilds " + existingGuilds.fields.length)
                guild = existingGuilds.fields[guildIndex]
                console.log(guild)
                guild.value = invite.url
                fs.writeFileSync(chill_out_file, JSON.stringify(existingGuilds), 'utf-8')
                msg.reply('Success!')
            })
    }

}
)

client.on("message", msg => {
    if (msg.content === "sp!setup-giveaways") {

        // get the existing guilds saved to file
        var existingGuilds = JSON.parse(fs.readFileSync(giveaways_file, 'utf-8'))

        // get the index of the guild (it it already exists)
        var guildIndex = existingGuilds.fields.indexOf(function (g) {
            return msg.guild.name === g.name
        })
        console.log("Exitsing guild at index " + guildIndex)
        // if the guild doesn't exist, 
        // create an entry for this guild with a blank invite
        // and add it to the list of existing guilds
        if (guildIndex === -1) {
            guildIndex = existingGuilds.fields.push({
                "name": msg.guild.name,
                "value": ""
            })
            guildIndex -= 1
            console.log("created guild at index " + guildIndex)
        }

        // update guild with new invite, save it, and send details in reply
        msg.channel.createInvite({ maxAge: 0 })
            .then(invite => {
                console.log("updating invite for guild at index " + guildIndex)
                console.log("length of existing guilds " + existingGuilds.fields.length)
                guild = existingGuilds.fields[guildIndex]
                console.log(guild)
                guild.value = invite.url
                fs.writeFileSync(giveaways_file, JSON.stringify(existingGuilds), 'utf-8')
                msg.reply('Success!')
            })
    }

}
)

client.on("message", msg => {
    if (msg.content === "sp!setup-programming") {

        // get the existing guilds saved to file
        var existingGuilds = JSON.parse(fs.readFileSync(programming_file, 'utf-8'))

        // get the index of the guild (it it already exists)
        var guildIndex = existingGuilds.fields.indexOf(function (g) {
            return msg.guild.name === g.name
        })
        console.log("Exitsing guild at index " + guildIndex)
        // if the guild doesn't exist, 
        // create an entry for this guild with a blank invite
        // and add it to the list of existing guilds
        if (guildIndex === -1) {
            guildIndex = existingGuilds.fields.push({
                "name": msg.guild.name,
                "value": ""
            })
            guildIndex -= 1
            console.log("created guild at index " + guildIndex)
        }

        // update guild with new invite, save it, and send details in reply
        msg.channel.createInvite({ maxAge: 0 })
            .then(invite => {
                console.log("updating invite for guild at index " + guildIndex)
                console.log("length of existing guilds " + existingGuilds.fields.length)
                guild = existingGuilds.fields[guildIndex]
                console.log(guild)
                guild.value = invite.url
                fs.writeFileSync(programming_file, JSON.stringify(existingGuilds), 'utf-8')
                msg.reply('Success!')
            })
    }

}
)

client.on("message", msg => {
    if (msg.content === "sp!setup-other") {

        // get the existing guilds saved to file
        var existingGuilds = JSON.parse(fs.readFileSync(other_file, 'utf-8'))

        // get the index of the guild (it it already exists)
        var guildIndex = existingGuilds.fields.indexOf(function (g) {
            return msg.guild.name === g.name
        })
        console.log("Exitsing guild at index " + guildIndex)
        // if the guild doesn't exist, 
        // create an entry for this guild with a blank invite
        // and add it to the list of existing guilds
        if (guildIndex === -1) {
            guildIndex = existingGuilds.fields.push({
                "name": msg.guild.name,
                "value": ""
            })
            guildIndex -= 1
            console.log("created guild at index " + guildIndex)
        }

        // update guild with new invite, save it, and send details in reply
        msg.channel.createInvite({ maxAge: 0 })
            .then(invite => {
                console.log("updating invite for guild at index " + guildIndex)
                console.log("length of existing guilds " + existingGuilds.fields.length)
                guild = existingGuilds.fields[guildIndex]
                console.log(guild)
                guild.value = invite.url
                fs.writeFileSync(other_file, JSON.stringify(existingGuilds), 'utf-8')
                msg.reply('Success!')
            })
    }

}
)

client.on("guildCreate", (guild) => {
    console.log(`Joined new guild: ${guild.name}`);
})

//client.on("guildCreate", (guild) => {
//    if (Discord.Invite.inviter === client.user.tag) {
//        if (user.mes)
//})

client.login("SCUM!") 