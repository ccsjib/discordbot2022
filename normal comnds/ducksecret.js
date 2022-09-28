const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ducksecret')
		.setDescription('duck secret'),
	async execute(interaction) {
		await interaction.reply({ content: `🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆`, ephemeral:true});
	},
};
