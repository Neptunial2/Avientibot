const Discord = require('discord.js')
require('dotenv').config()

const generateImage = require('./generateimage')
const TOKEN = 'OTkyMzcyNjg1MTIyMzA2MDg5.GLKM7e.LGy6Avbiol_NFcFkNFVfbIsszPJUO5FezeUB1A'
const client = new Discord.Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGES',
        'GUILD_MEMBERS'
    ]
})

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on('messageCreate', (message) => {
    if (message.content == 'test') {
        message.reply('🧪')
    }
})

const welcomeChannelId = '988295641828573224'

client.on('guildMemberAdd', async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Welcome to Avient's Basement!`,
        files: [img]
    })
})

client.login(process.env.TOKEN)