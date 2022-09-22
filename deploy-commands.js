const { REST, SlashCommandBuilder, Routes } = require('discord.js');
const { 1022213838755594331, 775355712271941644, MTAyMjIxMzgzODc1NTU5NDMzMQ.GBXbgX.rgvbuoxYxiAZ21CevNYZP6FZdm6LRJIyCZcevU } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
	new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
	new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then((data) => console.log(`Successfully registered ${data.length} application commands.`))
	.catch(console.error);
