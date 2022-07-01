const Discord = require('discord.js')
const TOKEN = 'OTkyMzcyNjg1MTIyMzA2MDg5.G8VOZ5.f4SKfocmoJ8iOsDruH5PPGMquHsnGlG-iynCRE'
const client = new Discord.Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGES'
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

client.login(TOKEN)