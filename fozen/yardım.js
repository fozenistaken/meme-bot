exports.run = (client, message, args) => {
  const Discord = require("discord.js");
  const db = require("wio.db");
  let toplam = db.fetch(`toplam_`) || "0";
  const conf = require("../config.json");
  let prefix = db.fetch(`prefix_${message.guild.id}`) || conf.prefix;

  let help = new Discord.MessageEmbed()
    .setColor("AQUA")
    .setTitle("Şakamatiq Yardım")
    .setThumbnail(client.user.avatarURL())
    .setAuthor(`Prefixim: ${prefix}`, client.user.avatarURL())
    .addField("Meme Komudu 1", "`" + prefix + "meme`", true)
    .addField("Meme Komudu 2", "`" + prefix + "meme2`", true)
    .addField("Meme Komudu 3", "`" + prefix + "meme3`", true)
    .addField("Burdurland Komudu", "`" + prefix + "burdurland`", true)
    .addField("Kaç Kişiyimi Güldürdüm ?", `Tam Olarak **${toplam}**`)
    .addField("Prefix Ayarlama", "`" + prefix + "prefix` **ayarla/sıfırla**", true)
    .addField("Bot Durumu", "`" + prefix + "durum`", true)
    .addField("Linkler", `[Botu Ekle](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)`)
    .setFooter(message.author.tag + " Tarafından İstendi!", message.author.avatarURL())
    .setTimestamp();

  return message.channel.send(help);
};
