exports.run = (client, message, args) => {
  const config = require("../config.json");
  const Discord = require("discord.js");
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  const db = require("wio.db")

  let prefix = db.fetch(`prefix_${message.guild.id}`) || config.prefix;

  let uptime = `${days} days, ${hours} hours, ${minutes} minutes`;
  let embed = new Discord.MessageEmbed()
    .setColor("#E7A700")
    .setTitle("Ukqzn & Fozen")
    .addField("🖥️ • Status", "Online", true)
    .addField("🕐 • Uptime", uptime, true)
    .addField("💠 • Prefix", prefix, true)
    .setFooter("Tarafından İstendi", message.author.avatarURL());

  return message.channel.send(embed);
};
