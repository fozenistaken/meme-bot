const Discord = require('discord.js');
const ayarlar = require('../config.json');
const rp = require("random-puppy");
const db = require("wio.db")

exports.run = async (client, message, args, tools) => {
  
const subReddits = ["burdurland"];
const random = subReddits[Math.floor(Math.random() * subReddits.length)];

const spectrum = await rp(random);
db.add(`toplam_`, 1)
const fozen = new Discord.MessageEmbed()

.setAuthor(client.user.username, client.user.avatarURL())
.setTitle(`From /r/${random}`)
.setColor("ORANGE")
.setImage(spectrum)
.setURL(`https://reddit.com/r/${random}`)
.setFooter(`${message.author.username} Tarafından İstendi !`, message.author.avatarURL())

message.channel.send(fozen);
}