const dc = require("discord.js");
const db = require("wio.db");

exports.run = async (client, message, args) => {
  let rol = args[1];
  let kanal = message.mentions.channels.first();
  if (!args[0])
    return message.channel.send(
      ":x: • Bir Fonksiyon Belirt `+prefix ayarla/sıfırla`"
    );
  if (args[0] == "ayarla") {
    if (!rol) return message.channel.send(":x: • Bir Prefix Gir!");

    db.set(`prefix_${message.guild.id}`, rol);

    message.channel.send(`Prefix ${rol} olarak ayarlandı.`);
  }
  if (args[0] == "sıfırla") {
    db.delete(`prefix_${message.guild.id}`);

    message.channel.send(":white_check_mark: • Prefix Sıfırlandı ");
  }
};
