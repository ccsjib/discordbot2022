const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('duckuser')
		.setDescription('Replies with user info!'),
	async execute(interaction) {
		await interaction.reply(`Your tag: ${interaction.user.tag}\n`);
	},
};
