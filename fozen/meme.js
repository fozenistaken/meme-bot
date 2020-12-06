exports.run = (client, message, args) => {
  const Discord = require("discord.js");
  const request = require("request");
  const db = require("wio.db")

  return request(
    "https://meme-api.herokuapp.com/gimme/memes",
    (err, response, body) => {
      if (err) throw err;
      var data = JSON.parse(body);
      db.add(`toplam_`, 1)
      console.log(data)
      let meme = new Discord.MessageEmbed()
        .setColor("#E7A700")
        .setTitle(data.title)
        .setURL(data.postLink)
        .setImage(data.url)
        .setFooter(`👍 ${data.ups}`)
        .setTimestamp()

      message.channel.send(meme);
    }
  );
};
