const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    //const data = new SlashCommandBuilder()
    .setName("echo")
    .setDescription("Replies with your input!")
    .addSubcommand((subcommand) =>
      subcommand.setName("server").setDescription("Info about the server")
    ),

  async execute(interaction) {
    await interaction.reply("Hi :)!");
    await wait(2000);
    await interaction.editReply("i edited the msg :)");
  },
};
