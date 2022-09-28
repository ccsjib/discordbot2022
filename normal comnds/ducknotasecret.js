const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ducknotasecret')
		.setDescription('duck not asecret'),
		
	async execute(interaction) {
		await interaction.reply({ content: `🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆`, ephemeral:false});
	},
};
