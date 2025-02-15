//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                    𝗠𝗔𝗡𝗨-𝗠𝗗  𝐁𝐎𝐓                                                 //
//                                                                                                      //
//                                         Ｖ：7.0                                                       //

//███╗░░░███╗░█████╗░███╗░░██╗██╗░░░██╗
//████╗░████║██╔══██╗████╗░██║██║░░░██║
//██╔████╔██║███████║██╔██╗██║██║░░░██║
//██║╚██╔╝██║██╔══██║██║╚████║██║░░░██║
//██║░╚═╝░██║██║░░██║██║░╚███║╚██████╔╝
//╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░

//███╗░░░███╗██████╗░
//████╗░████║██╔══██╗
//██╔████╔██║██║░░██║
//██║╚██╔╝██║██║░░██║
//██║░╚═╝░██║██████╔╝
//╚═╝░░░░░╚═╝╚═════╝░

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : MANU-MD
//  * @author : Manul Official
//  * @youtube : https://www.youtube.com/@ManulOfficialTech
//  * @description : Manu-MD ,A Multi-functional whatsapp user bot.
//*
//*
//base by Manul Official
//GitHub: @manulofficial7
//WhatsApp: +94742274855
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@ManulOfficialTech
//   * Created By Github: manulofficial7.
//   * Credit To Manul Official
//   * © 2024 MANU-MD-V7.
// ⛥┌┤
// */

(function (_0xeb9e0f, _0x22c677) {
  const _0x279b1 = _0xeb9e0f();
  while (true) {
    try {
      const _0x2dc6e3 = -parseInt(_0x28ad(5149, "r%k5")) / 1 + -parseInt(_0x28ad(5104, "$bLJ")) / 2 + parseInt(_0x28ad(1548, "03bF")) / 3 * (parseInt(_0x28ad(5547, "#XYA")) / 4) + parseInt(_0x28ad(5671, "gte9")) / 5 * (-parseInt(_0x28ad(642, "UNvC")) / 6) + parseInt(_0x28ad(4655, "#XYA")) / 7 * (parseInt(_0x28ad(2984, "js@X")) / 8) + parseInt(_0x28ad(2209, "89e1")) / 9 + parseInt(_0x28ad(5657, "03bF")) / 10 * (-parseInt(_0x28ad(4441, "(VEH")) / 11);
      if (_0x2dc6e3 === _0x22c677) {
        break;
      } else {
        _0x279b1.push(_0x279b1.shift());
      }
    } catch (_0x12d357) {
      _0x279b1.push(_0x279b1.shift());
    }
  }
})(_0x5ed6, 180568);
const {
  cmd,
  commands
} = require("../command");
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require("../lib/functions");
const axios = require("axios");
const {
  readEnv
} = require("../lib/database");
const config = readEnv();
const yts = require("ytsearch-venom");
const {
  downloadTiktok
} = require("@mrnima/tiktok-downloader");
const getFBInfo = require("@xaviabot/fb-downloader");
const cheerio = require("cheerio");
const {
  igdl
} = require("ruhend-scraper");
const {
  BufferJSON,
  Browsers,
  WA_DEFAULT_EPHEMERAL,
  makeWASocket,
  generateWAMessageFromContent,
  proto,
  getBinaryNodeChildren,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType,
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
  downloadContentFromMessage
} = require("@whiskeysockets/baileys");
const fs = require("fs");
const {
  ytmp3,
  ytmp4
} = require("@dark-yasiya/yt-dl.js");
const {
  listall
} = require("../lib/fancy");
const {
  sinhalaSub
} = require("mrnima-moviedl");
const _0x234f25 = {
  pattern: "tourl",
  alias: ["imgtourl", "img2url"],
  react: "🖇",
  desc: "Convert an image to a URL using Telegraph.",
  category: "utility",
  use: ".tourl",
  filename: __filename
};
cmd(_0x234f25, async (_0x4d4a2c, _0x3ad51d, _0x562e7a, {
  from: _0x52d8da,
  quoted: _0x363d16,
  reply: _0x67314b
}) => {
  try {
    const _0x37cdb8 = require("fs");
    const _0x38b55d = require("form-data");
    const _0x42848f = require("node-fetch");
    let _0x2c14d2 = _0x562e7a.quoted ? _0x562e7a.quoted : _0x562e7a;
    let _0x429850 = _0x2c14d2.msg?.["mimetype"] || '';
    if (!_0x429850 || !_0x429850.startsWith("image/")) {
      throw "🌻 Please reply to an image.";
    }
    let _0x46576d = await _0x2c14d2.download();
    if (!_0x46576d) {
      throw "Failed to download the image. Please try again.";
    }
    const _0x341a79 = require("path");
    const _0x5e9528 = require("os");
    let _0x56045a = _0x341a79.join(_0x5e9528.tmpdir(), "Rashmika-Ofc.png");
    _0x37cdb8.writeFileSync(_0x56045a, _0x46576d);
    const _0x3fb5c1 = new _0x38b55d();
    _0x3fb5c1.append("images", _0x37cdb8.createReadStream(_0x56045a));
    const _0x416c58 = await _0x42848f("https://telegraph.zorner.men/upload", {
      "method": "POST",
      "headers": {
        ..._0x3fb5c1.getHeaders()
      },
      "body": _0x3fb5c1
    });
    if (!_0x416c58.ok) {
      throw new Error("Upload gagal dengan status");
    }
    const _0xac85b9 = await _0x416c58.json();
    let _0x161534 = _0xac85b9.links;
    let _0x162dc2 = "𝐈𝐦𝐚𝐠𝐞 𝐒𝐢𝐳𝐞 📸: " + _0x46576d.length + " Byte(s)\n\n𝐔𝐫𝐥 🖇️: " + _0x161534 + "\n\n> *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚*";
    _0x67314b('' + _0x162dc2);
    _0x37cdb8.unlinkSync(_0x56045a);
  } catch (_0x21905a) {
    console.error(_0x21905a);
    _0x67314b("❌ An error occurred: " + (_0x21905a.message || _0x21905a));
  }
});
const _0x132666 = {
  pattern: "ph",
  alias: ["pornhub"],
  desc: "Download Song / Video",
  use: ".play <Title>",
  react: "🔞",
  category: "download",
  filename: __filename
};
cmd(_0x132666, async (_0x2b3822, _0x5d1f00, _0xcae2d7, {
  q: _0x10eb74,
  reply: _0x5d1196,
  isMe: _0x5b3ed9,
  isOwner: _0x381ca5
}) => {
  try {
    if (!_0x10eb74) {
      return await _0x5d1196("Please provide a search query! (e.g., xxx)");
    }
    if (!_0x5b3ed9 && !_0x381ca5) {
      return await _0x5d1196("*Only the bot owner and bot number can use this feature...!*");
    }
    const _0x269832 = await searchPornhub(_0x10eb74);
    console.log("Search Results:", _0x269832);
    const _0x380c81 = Array.isArray(_0x269832.result) ? _0x269832.result.slice(0, 10) : [];
    if (!_0x380c81.length) {
      return await _0x5d1196("No results found for: " + _0x10eb74);
    }
    let _0x50c683 = "🔞 *PH Search Results for* \"" + _0x10eb74 + "\":\n\n";
    _0x380c81.forEach((_0x3d5bea, _0x378381) => {
      _0x50c683 += "*" + (_0x378381 + 1) + ".* " + _0x3d5bea.title + "\n🔗 Link: " + _0x3d5bea.url + "\n\n";
    });
    const _0x5aeed8 = {
      quoted: _0x5d1f00
    };
    const _0x37d192 = await _0x2b3822.sendMessage(_0xcae2d7.chat, {
      "document": fs.readFileSync("./package.json"),
      "fileName": "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚",
      "mimetype": "application/pdf",
      "fileLength": 0x5af3107a3fff,
      "pageCount": 0x7e8,
      "caption": _0x50c683,
      "contextInfo": {
        "forwardingScore": 0x3e7,
        "isForwarded": true,
        "forwardedNewsletterMessageInfo": {
          "newsletterName": "🧚‍♀️𝗠𝗔𝗡𝗨-𝗠𝗗-𝗩❼💗",
          "newsletterJid": "120363232588171807@newsletter"
        },
        "externalAdReply": {
          "title": "© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭.💗",
          "body": '',
          "thumbnailUrl": "https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg",
          "sourceUrl": "https://mr-manul-official-web.vercel.app/",
          "mediaType": 0x1,
          "renderLargerThumbnail": true
        }
      }
    }, _0x5aeed8);
    _0x2b3822.ev.on("messages.upsert", async _0x2088b2 => {
      const _0x1f4a1b = _0x2088b2.messages[0];
      if (!_0x1f4a1b.message) {
        return;
      }
      const _0xcb535e = (_0x1f4a1b.message.conversation || _0x1f4a1b.message.extendedTextMessage?.["text"] || '').toString();
      const _0x3f0173 = _0x1f4a1b.message.extendedTextMessage?.["contextInfo"]?.["stanzaId"] === _0x37d192.key.id;
      if (_0x3f0173) {
        const _0x67fcb0 = parseInt(_0xcb535e.trim()) - 1;
        if (isNaN(_0x67fcb0) || _0x67fcb0 < 0 || _0x67fcb0 >= _0x380c81.length) {
          return await _0x5d1196("Invalid selection. Please reply with a valid number.");
        }
        const _0x548e7b = _0x380c81[_0x67fcb0];
        const _0x396552 = "https://www.dark-yasiya-api.site/download/phub?url=" + encodeURIComponent(_0x548e7b.url);
        try {
          const {
            data: _0x25b8c9
          } = await axios.get(_0x396552);
          console.log("Movie Details Response:", _0x25b8c9);
          if (!_0x25b8c9 || !_0x25b8c9.result || !Array.isArray(_0x25b8c9.result.format) || _0x25b8c9.result.format.length === 0) {
            return await _0x5d1196("No download links available for this movie.");
          }
          let _0x3e171f = "🔞 *" + _0x25b8c9.result.video_title + "*\n\n*Available Download Links:*\n";
          _0x25b8c9.result.format.forEach((_0x566233, _0xad5474) => {
            if (_0x566233 && _0x566233.download_url && _0x566233.resolution) {
              _0x3e171f += "*" + (_0xad5474 + 1) + ".* " + _0x566233.resolution + " - " + _0x566233.file_type + "\n🔗 Link: " + _0x566233.download_url + "\n\n";
            }
          });
          const _0x4aa3d3 = {
            quoted: _0x1f4a1b
          };
          const _0x279c54 = await _0x2b3822.sendMessage(_0xcae2d7.chat, {
            "document": fs.readFileSync("./package.json"),
            "fileName": "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚",
            "mimetype": "application/pdf",
            "fileLength": 0x5af3107a3fff,
            "pageCount": 0x7e8,
            "caption": _0x3e171f,
            "contextInfo": {
              "forwardingScore": 0x3e7,
              "isForwarded": true,
              "forwardedNewsletterMessageInfo": {
                "newsletterName": "🧚‍♀️𝗠𝗔𝗡𝗨-𝗠𝗗-𝗩❼💗",
                "newsletterJid": "120363232588171807@newsletter"
              },
              "externalAdReply": {
                "title": "© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭.💗",
                "body": '',
                "thumbnailUrl": _0x25b8c9.result.video_cover,
                "sourceUrl": "https://mr-manul-official-web.vercel.app/",
                "mediaType": 0x1,
                "renderLargerThumbnail": true
              }
            }
          }, _0x4aa3d3);
          _0x2b3822.ev.on("messages.upsert", async _0x9885f4 => {
            const _0x410de5 = _0x9885f4.messages[0];
            if (!_0x410de5.message) {
              return;
            }
            const _0x4c8416 = (_0x410de5.message.conversation || _0x410de5.message.extendedTextMessage?.["text"] || '').toString();
            const _0x34bade = _0x410de5.message.extendedTextMessage?.["contextInfo"]?.["stanzaId"] === _0x279c54.key.id;
            if (_0x34bade) {
              const _0x41c48a = parseInt(_0x4c8416.trim()) - 1;
              if (isNaN(_0x41c48a) || _0x41c48a < 0 || _0x41c48a >= _0x25b8c9.result.format.length) {
                return await _0x5d1196("Invalid selection. Please reply with a valid number.");
              }
              const _0x1dca7d = _0x25b8c9.result.format[_0x41c48a];
              if (_0x1dca7d && _0x1dca7d.download_url) {
                const _0x4febae = {
                  url: _0x1dca7d.download_url
                };
                const _0xe5470a = {
                  document: _0x4febae,
                  mimetype: "video/mp4",
                  fileName: _0x25b8c9.result.video_title + " - " + _0x1dca7d.resolution + ".mp4",
                  caption: "> *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚*",
                  contextInfo: {}
                };
                _0xe5470a.contextInfo.mentionedJid = ["94742274855@s.whatsapp.net"];
                _0xe5470a.contextInfo.groupMentions = [];
                _0xe5470a.contextInfo.forwardingScore = 0x3e7;
                _0xe5470a.contextInfo.isForwarded = true;
                _0xe5470a.contextInfo.forwardedNewsletterMessageInfo = {};
                _0xe5470a.contextInfo.externalAdReply = {};
                _0xe5470a.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363232588171807@newsletter";
                _0xe5470a.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
                _0xe5470a.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
                _0xe5470a.contextInfo.externalAdReply.title = "ᴀ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ®";
                _0xe5470a.contextInfo.externalAdReply.body = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
                _0xe5470a.contextInfo.externalAdReply.mediaType = 0x1;
                _0xe5470a.contextInfo.externalAdReply.sourceUrl = "https://mr-manul-official-web.vercel.app/";
                _0xe5470a.contextInfo.externalAdReply.thumbnailUrl = _0x25b8c9.result.video_cover;
                _0xe5470a.contextInfo.externalAdReply.renderLargerThumbnail = false;
                _0xe5470a.contextInfo.externalAdReply.showAdAttribution = false;
                const _0x5e8511 = {
                  quoted: _0x410de5
                };
                await _0x2b3822.sendMessage(from, _0xe5470a, _0x5e8511);
              } else {
                return await _0x5d1196("Invalid link. Unable to fetch the video.");
              }
            }
          });
        } catch (_0xb00ff2) {
          console.error("Error fetching movie details:", _0xb00ff2.message);
          await _0x5d1196("An error occurred while fetching movie details. Please try again.");
        }
      }
    });
  } catch (_0x448f77) {
    console.error("Error during search:", _0x448f77);
    await _0x5d1196("An unexpected error occurred. Please try again.");
  }
});
function _0x285138(_0x58422f, _0x2e797d, _0x34495c, _0x3aba3b, _0x1c2fa3) {
  return _0x28ad(_0x3aba3b - 0x3c, _0x58422f);
}
async function searchPornhub(_0x234ea7) {
  try {
    const _0x1a6da8 = "https://www.pornhub.com/video/search?search=" + encodeURIComponent(_0x234ea7);
    const _0x3b3993 = await axios.get(_0x1a6da8);
    const _0xeef2f4 = _0x3b3993.data;
    const _0x2bc0f4 = cheerio.load(_0xeef2f4);
    const _0x1dcdc5 = [];
    _0x2bc0f4("ul#videoSearchResult > li.pcVideoListItem").each((_0x4f9e39, _0xe1e32d) => {
      const _0x3d5929 = _0x2bc0f4(_0xe1e32d).find("a").attr("title");
      const _0x13d5e4 = _0x2bc0f4(_0xe1e32d).find("var.duration").text().trim();
      const _0x47325e = _0x2bc0f4(_0xe1e32d).find("var.views").text().trim();
      const _0x3ab71d = "https://www.pornhub.com" + _0x2bc0f4(_0xe1e32d).find("a").attr("href");
      const _0x256c39 = {
        title: _0x3d5929,
        duration: _0x13d5e4,
        views: _0x47325e,
        url: _0x3ab71d
      };
      _0x1dcdc5.push(_0x256c39);
    });
    const _0x3d8cd3 = {
      result: _0x1dcdc5
    };
    return _0x3d8cd3;
  } catch (_0x13026e) {
    console.error("Error searching Pornhub:", _0x13026e.message);
  }
}
const _0x209ddc = {
  pattern: "cinesubz",
  alias: ["cisub", "cinesub"],
  react: "📑",
  category: "download",
  desc: "Search movies on sinhalasub and get download links",
  filename: __filename
};
cmd(_0x209ddc, async (_0x38de1d, _0x3aeb3f, _0x311ae7, {
  from: _0x18eccd,
  sender: _0x1ca61b,
  pushname: _0x442e11,
  q: _0x10ef15,
  senderNumber: _0x566b81,
  isMe: _0x118b29,
  isOwner: _0x4c501f,
  reply: _0x561951
}) => {
  try {
    const _0x525bbb = await fetchJson("https://raw.githubusercontent.com/Heroanjana/Manu-MD-DATABASE/refs/heads/main/primium.json");
    if (!_0x525bbb.includes(_0x566b81)) {
      return await _0x561951("*Hi " + _0x442e11 + "*\n\n*_Your not primium 🚫_*\n\n*R.S 100 ක් ගෙවල හැමදාටම Primium ඇඩ් කරගන්න...✅*\n\n*_Contact Bot Owner - :_* https://wa.me/+94750177369?text=*_Primium%20Oni...💗_*\n\n> *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚*");
    }
    const _0x34d45c = {
      remoteJid: "status@broadcast"
    };
    const _0x3f72e9 = {
      "participant": "0@s.whatsapp.net",
      ...(_0x3aeb3f.chat ? _0x34d45c : {})
    };
    const _0xf37129 = {
      name: "✨ ...𝐌𝐚𝐧𝐮-𝐌𝐃 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭 𝐁𝐲 - : 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥... 💗",
      thumbnailUrl: "https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg"
    };
    const _0x20716a = {
      locationMessage: _0xf37129
    };
    const _0x5e8a7c = {
      key: _0x3f72e9,
      message: _0x20716a
    };
    if (!_0x10ef15) {
      return await _0x561951("*Please provide a search query! (e.g., Deadpool)*");
    }
    const _0x58a9a2 = await fetchJson("https://cinesubz-api-zazie.vercel.app/api/search?q=" + encodeURIComponent(_0x10ef15));
    const _0x399b60 = _0x58a9a2?.["result"]?.["data"] || [];
    if (_0x399b60.length === 0) {
      return await _0x561951("No results found for: " + _0x10ef15);
    }
    let _0x18ce41 = "📽️ *Search Results for* \"" + _0x10ef15 + "\":\n\n";
    _0x399b60.slice(0, 10).forEach((_0x36b25a, _0x24cacc) => {
      _0x18ce41 += "*" + (_0x24cacc + 1) + ".* " + (_0x36b25a.title || "No Title Available") + "\n🔗 Link: " + (_0x36b25a.link || "No Link Available") + "\n\n";
    });
    const _0xc66603 = {
      quoted: _0x5e8a7c
    };
    const _0x27935a = await _0x38de1d.sendMessage(_0x3aeb3f.chat, {
      "document": fs.readFileSync("./package.json"),
      "fileName": "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚",
      "mimetype": "application/pdf",
      "fileLength": 0x5af3107a3fff,
      "pageCount": 0x7e8,
      "caption": _0x18ce41,
      "contextInfo": {
        "forwardingScore": 0x3e7,
        "isForwarded": true,
        "forwardedNewsletterMessageInfo": {
          "newsletterName": "🧚‍♀️𝗠𝗔𝗡𝗨-𝗠𝗗-𝗩❼💗",
          "newsletterJid": "120363232588171807@newsletter"
        },
        "externalAdReply": {
          "title": "© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭.💗",
          "body": '',
          "thumbnailUrl": "https://i.ibb.co/dGr977P/IMG-20241115-WA0031.jpg",
          "sourceUrl": "https://mr-manul-official-web.vercel.app/",
          "mediaType": 0x1,
          "renderLargerThumbnail": true
        }
      }
    }, _0xc66603);
    const _0x59ca54 = _0x27935a.key.id;
    _0x38de1d.ev.on("messages.upsert", async _0x3b46dc => {
      const _0x4ddc4c = _0x3b46dc.messages[0];
      if (!_0x4ddc4c.message) {
        return;
      }
      const _0x1c2954 = _0x4ddc4c.message.conversation || _0x4ddc4c.message.extendedTextMessage?.["text"];
      const _0x51f029 = _0x4ddc4c.message.extendedTextMessage?.["contextInfo"]?.["stanzaId"] === _0x59ca54;
      if (_0x51f029) {
        const _0x4c059e = parseInt(_0x1c2954.trim(), 10);
        if (!isNaN(_0x4c059e) && _0x4c059e > 0 && _0x4c059e <= _0x399b60.length) {
          const _0x80a477 = _0x399b60[_0x4c059e - 1];
          try {
            const _0x365ef6 = await fetchJson("https://api-vishwa.vercel.app/cinesub-movie?url=" + encodeURIComponent(_0x80a477.link) + "&apikey=manula-md-0130");
            const _0xa99dad = _0x365ef6?.["data"] || {};
            const _0x49e9f8 = _0xa99dad.data.dllinks || {};
            const _0x1a7c3f = _0xa99dad.data.mainDetails.maintitle;
            const _0x548a10 = _0x49e9f8?.["directDownloadLinks"] || [];
            if (!_0x548a10.length) {
              return await _0x561951("No download links found for the selected movie. Original link: " + _0x80a477.link);
            }
            let _0x2855ea = "🎥 *" + (_0x1a7c3f || "Unknown Title") + "*\n\n";
            _0x2855ea += "*Available Download Links:*\n";
            _0x548a10.forEach((_0x3d3627, _0x1e3c97) => {
              _0x2855ea += "*" + (_0x1e3c97 + 1) + ".* " + (_0x3d3627.quality || "Unknown Quality") + " - " + (_0x3d3627.size || "Unknown Size") + "\n🔗 Link: " + (_0x3d3627.link || "No Link") + "\n\n";
            });
            const _0x5b1df1 = {
              quoted: _0x4ddc4c
            };
            const _0x563bfb = await _0x38de1d.sendMessage(_0x3aeb3f.chat, {
              "document": fs.readFileSync("./package.json"),
              "fileName": "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚",
              "mimetype": "application/pdf",
              "fileLength": 0x5af3107a3fff,
              "pageCount": 0x7e8,
              "caption": _0x2855ea,
              "contextInfo": {
                "forwardingScore": 0x3e7,
                "isForwarded": true,
                "forwardedNewsletterMessageInfo": {
                  "newsletterName": "🧚‍♀️𝗠𝗔𝗡𝗨-𝗠𝗗-𝗩❼💗",
                  "newsletterJid": "120363232588171807@newsletter"
                },
                "externalAdReply": {
                  "title": "© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭.💗",
                  "body": '',
                  "thumbnailUrl": "https://i.ibb.co/dGr977P/IMG-20241115-WA0031.jpg",
                  "sourceUrl": "https://mr-manul-official-web.vercel.app/",
                  "mediaType": 0x1,
                  "renderLargerThumbnail": true
                }
              }
            }, _0x5b1df1);
            const _0x1d9911 = _0x563bfb.key.id;
            _0x38de1d.ev.on("messages.upsert", async _0x34dc18 => {
              const _0x59eb24 = _0x34dc18.messages[0];
              if (!_0x59eb24.message) {
                return;
              }
              const _0x1421bc = _0x59eb24.message.conversation || _0x59eb24.message.extendedTextMessage?.["text"];
              const _0x277e21 = _0x59eb24.message.extendedTextMessage?.["contextInfo"]?.["stanzaId"] === _0x1d9911;
              if (_0x277e21) {
                const _0x32651c = parseInt(_0x1421bc.trim(), 10);
                if (!isNaN(_0x32651c) && _0x32651c > 0 && _0x32651c <= _0x548a10.length) {
                  const _0x4c8c3e = _0x548a10[_0x32651c - 1];
                  const _0x35ecf1 = _0x4c8c3e.link;
                  const _0x139d4d = await fetchJson("https://api-vishwa.vercel.app//cinesub-download?url=" + encodeURIComponent(_0x35ecf1) + "&apikey=manula-md-0130");
                  const _0x25adf8 = _0x139d4d.data.data.at(-1)?.["href"];
                  const _0x188019 = _0x139d4d.data.data.at(-1)?.["fileName"];
                  const _0x15fa79 = {
                    url: _0x25adf8
                  };
                  const _0x1ee592 = {
                    document: _0x15fa79,
                    mimetype: "video/mp4",
                    fileName: _0x188019 + " - " + _0x4c8c3e.quality + ".mp4",
                    caption: "> *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚*",
                    contextInfo: {}
                  };
                  _0x1ee592.contextInfo.mentionedJid = ["94742274855@s.whatsapp.net"];
                  _0x1ee592.contextInfo.groupMentions = [];
                  _0x1ee592.contextInfo.forwardingScore = 0x3e7;
                  _0x1ee592.contextInfo.isForwarded = true;
                  _0x1ee592.contextInfo.forwardedNewsletterMessageInfo = {};
                  _0x1ee592.contextInfo.externalAdReply = {};
                  _0x1ee592.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363232588171807@newsletter";
                  _0x1ee592.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
                  _0x1ee592.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
                  _0x1ee592.contextInfo.externalAdReply.title = "ᴀ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ®";
                  _0x1ee592.contextInfo.externalAdReply.body = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
                  _0x1ee592.contextInfo.externalAdReply.mediaType = 0x1;
                  _0x1ee592.contextInfo.externalAdReply.sourceUrl = "https://mr-manul-official-web.vercel.app/";
                  _0x1ee592.contextInfo.externalAdReply.thumbnailUrl = "https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg";
                  _0x1ee592.contextInfo.externalAdReply.renderLargerThumbnail = false;
                  _0x1ee592.contextInfo.externalAdReply.showAdAttribution = false;
                  const _0x5d1625 = {
                    quoted: _0x59eb24
                  };
                  await _0x38de1d.sendMessage(_0x18eccd, _0x1ee592, _0x5d1625);
                } else {
                  await _0x561951("Invalid selection. Please reply with a valid number.");
                }
              }
            });
          } catch (_0x2da8cd) {
            console.error("Error fetching movie details:", _0x2da8cd);
            await _0x561951('' + (_0x2da8cd.message || "An unknown error occurred while fetching movie details."));
          }
        } else {
          await _0x561951("Invalid selection. Please reply with a valid number.");
        }
      }
    });
  } catch (_0x3b67c2) {
    console.error("Error during search:", _0x3b67c2);
    await _0x561951('' + (_0x3b67c2.message || "An unknown error occurred during search."));
  }
});
const _0x3d15a7 = {
  pattern: "cinedl",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x3d15a7, async (_0x2f795d, _0x310ca5, _0x141c12, {
  from: _0x3c7c4e,
  q: _0x1081e8,
  reply: _0x144272
}) => {
  try {
    if (!_0x1081e8) {
      const _0x1a6787 = {
        text: "*A download link is required.*"
      };
      const _0x451765 = {
        quoted: _0x310ca5
      };
      return await _0x2f795d.sendMessage(_0x3c7c4e, _0x1a6787, _0x451765);
    }
    const _0x1fa53e = {
      text: "📥",
      key: _0x310ca5.key
    };
    const _0x2b11fe = {
      react: _0x1fa53e
    };
    await _0x2f795d.sendMessage(_0x3c7c4e, _0x2b11fe);
    const _0x5d7afd = {
      url: _0x1081e8
    };
    const _0x25913e = {
      document: _0x5d7afd,
      mimetype: "video/mp4",
      fileName: "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚"
    };
    const _0xf0ad5 = {
      quoted: _0x310ca5
    };
    let _0x5cee67 = await _0x2f795d.sendMessage(_0x3c7c4e, _0x25913e, _0xf0ad5);
    const _0x2920cb = {
      text: "📁",
      key: _0x5cee67.key
    };
    const _0x438c67 = {
      react: _0x2920cb
    };
    await _0x2f795d.sendMessage(_0x3c7c4e, _0x438c67);
    const _0x4536c2 = {
      text: "✔",
      key: _0x310ca5.key
    };
    const _0x344768 = {
      react: _0x4536c2
    };
    await _0x2f795d.sendMessage(_0x3c7c4e, _0x344768);
  } catch (_0x2b8053) {
    _0x144272('' + _0x2b8053);
    console.log(_0x2b8053);
  }
});
const _0x2947a7 = {
  pattern: "sinhala",
  alias: ["slsub", "sinhalasub"],
  react: "📑",
  category: "download",
  desc: "Search movies on sinhalasub and get download links",
  filename: __filename
};
cmd(_0x2947a7, async (_0x5e435a, _0x2300db, _0x1e0410, {
  from: _0x4b7e6d,
  isMe: _0x4921fb,
  isOwner: _0x4bab97,
  q: _0x157567,
  reply: _0x5d667d
}) => {
  try {
    const _0x36a582 = {
      remoteJid: "status@broadcast"
    };
    const _0x47229e = {
      "participant": "0@s.whatsapp.net",
      ...(_0x2300db.chat ? _0x36a582 : {})
    };
    const _0x5a2c21 = {
      name: "✨ ...𝐌𝐚𝐧𝐮-𝐌𝐃 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭 𝐁𝐲 - : 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥... 💗",
      thumbnailUrl: "https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg"
    };
    const _0x44efd4 = {
      locationMessage: _0x5a2c21
    };
    const _0x16490b = {
      key: _0x47229e,
      message: _0x44efd4
    };
    if (!_0x157567) {
      return await _0x5d667d("*Please provide a search query! (e.g., Deadpool)*");
    }
    if (!_0x4921fb && !_0x4bab97) {
      return await _0x5d667d("*Only Bot Number Can Movie Download !!!*");
    }
    const _0x10d7c3 = await sinhalaSub();
    const _0x117b37 = await _0x10d7c3.search(_0x157567);
    const _0x1e5ae2 = _0x117b37.result.slice(0, 10);
    if (!_0x1e5ae2 || _0x1e5ae2.length === 0) {
      return await _0x5d667d("No results found for: " + _0x157567);
    }
    let _0x2c5444 = "📽️ *Search Results for* \"" + _0x157567 + "\":\n\n";
    _0x1e5ae2.forEach((_0xae49fc, _0x45cb26) => {
      _0x2c5444 += "*" + (_0x45cb26 + 1) + ".* " + _0xae49fc.title + "\n🔗 Link: " + _0xae49fc.link + "\n\n";
    });
    const _0xb6227f = {
      quoted: _0x16490b
    };
    const _0x4e18ef = await _0x5e435a.sendMessage(_0x2300db.chat, {
      "document": fs.readFileSync("./package.json"),
      "fileName": "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚",
      "mimetype": "application/pdf",
      "fileLength": 0x5af3107a3fff,
      "pageCount": 0x7e8,
      "caption": _0x2c5444,
      "contextInfo": {
        "forwardingScore": 0x3e7,
        "isForwarded": true,
        "forwardedNewsletterMessageInfo": {
          "newsletterName": "🧚‍♀️𝗠𝗔𝗡𝗨-𝗠𝗗-𝗩❼💗",
          "newsletterJid": "120363232588171807@newsletter"
        },
        "externalAdReply": {
          "title": "© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭.💗",
          "body": '',
          "thumbnailUrl": "https://i.ibb.co/dGr977P/IMG-20241115-WA0031.jpg",
          "sourceUrl": "https://mr-manul-official-web.vercel.app/",
          "mediaType": 0x1,
          "renderLargerThumbnail": true
        }
      }
    }, _0xb6227f);
    const _0x190900 = _0x4e18ef.key.id;
    _0x5e435a.ev.on("messages.upsert", async _0x2056f2 => {
      const _0x377504 = _0x2056f2.messages[0];
      if (!_0x377504.message) {
        return;
      }
      const _0x250805 = _0x377504.message.conversation || _0x377504.message.extendedTextMessage?.["text"];
      const _0x447b02 = _0x377504.message.extendedTextMessage && _0x377504.message.extendedTextMessage.contextInfo.stanzaId === _0x190900;
      if (_0x447b02) {
        const _0x3468b9 = parseInt(_0x250805.trim());
        if (!isNaN(_0x3468b9) && _0x3468b9 > 0 && _0x3468b9 <= _0x1e5ae2.length) {
          const _0x4257fb = _0x1e5ae2[_0x3468b9 - 1];
          const _0x5c54a8 = "https://hyper-hackers-tm-apis.vercel.app/movie/sinhalasub/info/?url=" + encodeURIComponent(_0x4257fb.link);
          try {
            const _0x50809e = await axios.get(_0x5c54a8);
            const _0x108d55 = _0x50809e.data;
            const _0x2589ec = _0x108d55.downloadLinks || [];
            if (_0x2589ec.length === 0) {
              return await _0x5d667d("No links found.");
            }
            let _0x3a2451 = "🎥 *" + _0x108d55.title + "*\n\n";
            _0x3a2451 += "*Available Download Links:*\n";
            _0x2589ec.forEach((_0x23e0b8, _0x1525d9) => {
              _0x3a2451 += "*" + (_0x1525d9 + 1) + ".* " + _0x23e0b8.quality + " - " + _0x23e0b8.size + "\n🔗 Link: " + _0x23e0b8.link + "\n\n";
            });
            const _0xcafb0e = {
              quoted: _0x377504
            };
            const _0x5b98cf = await _0x5e435a.sendMessage(_0x2300db.chat, {
              "document": fs.readFileSync("./package.json"),
              "fileName": "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚",
              "mimetype": "application/pdf",
              "fileLength": 0x5af3107a3fff,
              "pageCount": 0x7e8,
              "caption": _0x3a2451,
              "contextInfo": {
                "forwardingScore": 0x3e7,
                "isForwarded": true,
                "forwardedNewsletterMessageInfo": {
                  "newsletterName": "🧚‍♀️𝗠𝗔𝗡𝗨-𝗠𝗗-𝗩❼💗",
                  "newsletterJid": "120363232588171807@newsletter"
                },
                "externalAdReply": {
                  "title": "© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭.💗",
                  "body": '',
                  "thumbnailUrl": "https://i.ibb.co/dGr977P/IMG-20241115-WA0031.jpg",
                  "sourceUrl": "https://mr-manul-official-web.vercel.app/",
                  "mediaType": 0x1,
                  "renderLargerThumbnail": true
                }
              }
            }, _0xcafb0e);
            const _0x1d5715 = _0x5b98cf.key.id;
            _0x5e435a.ev.on("messages.upsert", async _0x177056 => {
              const _0x416f21 = _0x177056.messages[0];
              if (!_0x416f21.message) {
                return;
              }
              const _0xafea7f = _0x416f21.message.conversation || _0x416f21.message.extendedTextMessage?.["text"];
              const _0x295a90 = _0x416f21.message.extendedTextMessage && _0x416f21.message.extendedTextMessage.contextInfo.stanzaId === _0x1d5715;
              if (_0x295a90) {
                const _0x2e6322 = parseInt(_0xafea7f.trim());
                if (!isNaN(_0x2e6322) && _0x2e6322 > 0 && _0x2e6322 <= _0x2589ec.length) {
                  const _0x5a52c1 = _0x2589ec[_0x2e6322 - 1];
                  const _0x42fd79 = _0x5a52c1.link;
                  const _0x437289 = "https://hyper-hackers-tm-apis.vercel.app/movie/sinhalasub/dl/?url=" + encodeURIComponent(_0x42fd79);
                  const _0x407de5 = await axios.get(_0x437289);
                  const _0x57c1f6 = _0x407de5.data.downloadLink;
                  const _0xf6a040 = _0x57c1f6.split("/").pop();
                  const _0x354502 = {
                    text: "⬇️",
                    key: _0x1e0410.key
                  };
                  const _0x59a606 = {
                    react: _0x354502
                  };
                  await _0x5e435a.sendMessage(_0x4b7e6d, _0x59a606);
                  const _0x3b0135 = "https://pixeldrain.com/api/file/" + _0xf6a040;
                  const _0x1be98c = {
                    text: "⬆",
                    key: _0x1e0410.key
                  };
                  const _0xb7e864 = {
                    react: _0x1be98c
                  };
                  await _0x5e435a.sendMessage(_0x4b7e6d, _0xb7e864);
                  const _0x15f88f = {
                    url: _0x3b0135
                  };
                  const _0x5729ca = {
                    document: _0x15f88f,
                    mimetype: "video/mp4",
                    fileName: _0x108d55.title + " - " + _0x5a52c1.quality + ".mp4",
                    caption: _0x108d55.title + "\nQuality: " + _0x5a52c1.quality + "\n\n> *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚*",
                    contextInfo: {}
                  };
                  _0x5729ca.contextInfo.mentionedJid = [];
                  _0x5729ca.contextInfo.externalAdReply = {};
                  _0x5729ca.contextInfo.externalAdReply.title = _0x108d55.title;
                  _0x5729ca.contextInfo.externalAdReply.body = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
                  _0x5729ca.contextInfo.externalAdReply.mediaType = 0x1;
                  _0x5729ca.contextInfo.externalAdReply.sourceUrl = "https://mr-manul-official-web.vercel.app/";
                  _0x5729ca.contextInfo.externalAdReply.thumbnailUrl = "https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg";
                  const _0x1d6fc0 = {
                    quoted: _0x416f21
                  };
                  await _0x5e435a.sendMessage(_0x4b7e6d, _0x5729ca, _0x1d6fc0);
                  const _0xe60838 = {
                    text: "✅",
                    key: _0x1e0410.key
                  };
                  const _0x105ddf = {
                    react: _0xe60838
                  };
                  await _0x5e435a.sendMessage(_0x4b7e6d, _0x105ddf);
                } else {
                  await _0x5d667d("Invalid selection. Please reply with a valid number.");
                }
              }
            });
          } catch (_0x1d2fc0) {
            console.error("Error fetching movie details:", _0x1d2fc0);
            await _0x5d667d("An error occurred while fetching movie details. Please try again.");
          }
        } else {
          await _0x5d667d("Invalid selection. Please reply with a valid number.");
        }
      }
    });
  } catch (_0x211ce6) {
    console.error("Error during search:", _0x211ce6);
    await _0x5d667d("*An error occurred while searching!*");
  }
});
const _0x4b0f52 = {
  pattern: "res",
  alias: ["response"],
  desc: "Download Song / Video",
  use: ".play Title",
  react: "🎧",
  category: "download",
  filename: __filename
};
cmd(_0x4b0f52, async (_0x159e32, _0x448657, _0x5d5e1e, {
  from: _0x28c934,
  quoted: _0x1f051c,
  body: _0x35c361,
  isCmd: _0x17ab1e,
  command: _0x263d3d,
  args: _0xdd93a8,
  q: _0x72d5cb,
  isGroup: _0x1b731e,
  sender: _0x12d28c,
  senderNumber: _0x51976f,
  botNumber2: _0x23ed82,
  botNumber: _0x53e7aa,
  pushname: _0x11c6a5,
  isMe: _0x1d5bd3,
  isOwner: _0x57085b,
  groupMetadata: _0x4ecb24,
  groupName: _0x363c70,
  participants: _0x56a1d0,
  groupAdmins: _0x1a855d,
  isBotAdmins: _0x354c8f,
  isAdmins: _0x5e77a6,
  reply: _0x53d501
}) => {
  try {
    const _0xaf4dc3 = {
      remoteJid: "status@broadcast"
    };
    const _0x3d2127 = {
      "participant": "0@s.whatsapp.net",
      ...(_0x5d5e1e.chat ? _0xaf4dc3 : {})
    };
    const _0x277e5c = {
      name: "✨ ...𝐌𝐚𝐧𝐮-𝐌𝐃 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭 𝐁𝐲 - : 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥... 💗",
      thumbnailUrl: "https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg"
    };
    const _0x3a1f08 = {
      locationMessage: _0x277e5c
    };
    const _0x1551ba = {
      key: _0x3d2127,
      message: _0x3a1f08
    };
    if (!_0x72d5cb) {
      return _0x53d501("Please provide a title.");
    }
    const _0x6d6de1 = {
      url: _0x72d5cb
    };
    const _0x5205fc = {
      audio: _0x6d6de1,
      mimetype: "audio/mpeg",
      caption: "> *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚*"
    };
    const _0x5a999b = {
      quoted: _0x1551ba
    };
    await _0x159e32.sendMessage(_0x28c934, _0x5205fc, _0x5a999b);
  } catch (_0x496414) {
    _0x53d501('' + _0x496414);
    console.log(_0x496414);
  }
});
const _0x51ee9c = {
  pattern: "song",
  alias: ["audio"],
  desc: "Download Song / Video",
  use: ".play Title"
};
function _0x25ce5d(_0x12e814, _0x2a4a65, _0x4e6497, _0x36e938, _0x4ba4b6) {
  return _0x28ad(_0x4ba4b6 + 0x2ab, _0x36e938);
}
_0x51ee9c.react = "🎧";
_0x51ee9c.category = "download";
_0x51ee9c.filename = __filename;
cmd(_0x51ee9c, async (_0x3dce54, _0x162439, _0x102601, {
  from: _0x5125b4,
  quoted: _0x39a378,
  body: _0x3427ed,
  isCmd: _0x382bed,
  command: _0x5449c6,
  args: _0x18af71,
  q: _0x399756,
  isGroup: _0x20d3eb,
  sender: _0x523b1a,
  senderNumber: _0x367f3d,
  botNumber2: _0x39c248,
  botNumber: _0x219688,
  pushname: _0x623fc6,
  isMe: _0x384fa0,
  isOwner: _0x17cfdd,
  groupMetadata: _0x43c613,
  groupName: _0x210850,
  participants: _0x43f3d3,
  groupAdmins: _0x5192ab,
  isBotAdmins: _0xdb3d0f,
  isAdmins: _0x4ce7c9,
  reply: _0x3d2deb
}) => {
  try {
    const _0x31f022 = {
      remoteJid: "status@broadcast"
    };
    const _0x21e705 = {
      "participant": "0@s.whatsapp.net",
      ...(_0x102601.chat ? _0x31f022 : {})
    };
    const _0x240c7d = {
      name: "✨ ...𝐌𝐚𝐧𝐮-𝐌𝐃 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭 𝐁𝐲 - : 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥... 💗",
      thumbnailUrl: "https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg"
    };
    const _0x59717f = {
      locationMessage: _0x240c7d
    };
    const _0x313a85 = {
      key: _0x21e705,
      message: _0x59717f
    };
    if (!_0x399756) {
      return _0x3d2deb("Please provide a title.");
    }
    const _0x2dccd7 = await yts(_0x399756);
    const _0x37b300 = _0x2dccd7.videos[0];
    let _0x52acfe = "*💚🎵 𝐘𝐓 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 🎵💚*\n        \n> *`➤ Title` :* " + _0x37b300.title + "\n\n> *`➤ Views` :* " + _0x37b300.views + "\n\n> *`➤ DESCRIPTION`:* " + _0x37b300.description + "\n\n> *`➤ TIME`:* " + _0x37b300.timestamp + "\n\n> *`➤ AGO`:* " + _0x37b300.ago + "\n\n> *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚*";
    const _0x45b119 = {
      quoted: _0x313a85
    };
    await _0x3dce54.sendMessage(_0x102601.chat, {
      "document": fs.readFileSync("./package.json"),
      "fileName": "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚",
      "mimetype": "application/pdf",
      "fileLength": 0x5af3107a3fff,
      "pageCount": 0x7e8,
      "caption": _0x52acfe,
      "contextInfo": {
        "forwardingScore": 0x3e7,
        "isForwarded": true,
        "forwardedNewsletterMessageInfo": {
          "newsletterName": "🧚‍♀️𝗠𝗔𝗡𝗨-𝗠𝗗-𝗩❼💗",
          "newsletterJid": "120363232588171807@newsletter"
        },
        "externalAdReply": {
          "title": "© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭.💗",
          "body": '',
          "thumbnailUrl": _0x37b300.thumbnail,
          "sourceUrl": "https://mr-manul-official-web.vercel.app/",
          "mediaType": 0x1,
          "renderLargerThumbnail": true
        }
      }
    }, _0x45b119);
    const _0x3ff7f0 = {
      remoteJid: "status@broadcast"
    };
    const _0x3feb4d = {
      "participant": "0@s.whatsapp.net",
      ...(_0x102601.chat ? _0x3ff7f0 : {})
    };
    const _0x1b6578 = {
      name: "✨ ...𝐌𝐚𝐧𝐮-𝐌𝐃 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭 𝐁𝐲 - : 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥... 💗",
      thumbnailUrl: "https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg"
    };
    const _0x55cff5 = {
      locationMessage: _0x1b6578
    };
    const _0x4924fb = {
      key: _0x3feb4d,
      message: _0x55cff5
    };
    const _0x15321e = (await axios.get("https://raw.githubusercontent.com/Manul-Ofcx/DB/refs/heads/main/url.json")).data;
    const _0x441b63 = _0x15321e.YTMP3;
    const _0x138c68 = await fetchJson('' + _0x441b63 + _0x37b300.url);
    const _0x3e513a = _0x138c68.result.dl_link;
    const _0x55a747 = {
      url: _0x3e513a
    };
    const _0x4585f0 = {
      audio: _0x55a747,
      mimetype: "audio/mpeg",
      caption: "> *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚*"
    };
    const _0x56256d = {
      quoted: _0x4924fb
    };
    await _0x3dce54.sendMessage(_0x5125b4, _0x4585f0, _0x56256d);
    const _0x536904 = {
      url: _0x3e513a
    };
    const _0x556aed = {
      quoted: _0x4924fb
    };
    await _0x3dce54.sendMessage(_0x5125b4, {
      "document": _0x536904,
      "mimetype": "audio/mpeg",
      "fileName": _0x37b300.title + ".mp3",
      "caption": "> *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚*"
    }, _0x556aed);
  } catch (_0x160af0) {
    console.log(_0x160af0);
    _0x3d2deb('' + _0x160af0);
  }
});
const _0x182476 = {
  pattern: "video",
  alias: ["ytvideo"],
  desc: "Download Song / Video",
  use: ".play Title",
  react: "🎬",
  category: "download",
  filename: __filename
};
cmd(_0x182476, async (_0x31b547, _0x397912, _0x136e81, {
  from: _0x4c2e67,
  quoted: _0xd8e4f3,
  body: _0x58b729,
  isCmd: _0xaf97f9,
  command: _0x55d5de,
  args: _0x3f62c0,
  q: _0x44e78a,
  isGroup: _0x55ae01,
  sender: _0x3e73c1,
  senderNumber: _0x58af6b,
  botNumber2: _0x35fccb,
  botNumber: _0x4c40ee,
  pushname: _0x595614,
  isMe: _0x2623a5,
  isOwner: _0x52a899,
  groupMetadata: _0xfd3bd2,
  groupName: _0x4867e6,
  participants: _0x54c2fd,
  groupAdmins: _0x5ca2df,
  isBotAdmins: _0x2a8122,
  isAdmins: _0x3c2c4c,
  reply: _0x39db03
}) => {
  try {
    const _0x2403bb = {
      remoteJid: "status@broadcast"
    };
    const _0x16b574 = {
      "participant": "0@s.whatsapp.net",
      ...(_0x136e81.chat ? _0x2403bb : {})
    };
    const _0x51755f = {
      name: "✨ ...𝐌𝐚𝐧𝐮-𝐌𝐃 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭 𝐁𝐲 - : 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥... 💗",
      thumbnailUrl: "https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg"
    };
    const _0x50a974 = {
      locationMessage: _0x51755f
    };
    const _0x334804 = {
      key: _0x16b574,
      message: _0x50a974
    };
    if (!_0x44e78a) {
      return _0x39db03("Please provide a title.");
    }
    const _0x267112 = await yts(_0x44e78a);
    const _0x512e57 = _0x267112.videos[0];
    let _0x412e7e = "*💚🎵 𝐘𝐓 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 🎵💚*\n      \n> *`➤ Title` :* " + _0x512e57.title + "\n\n> *`➤ Views` :* " + _0x512e57.views + "\n\n> *`➤ DESCRIPTION`:* " + _0x512e57.description + "\n\n> *`➤ TIME`:* " + _0x512e57.timestamp + "\n\n> *`➤ AGO`:* " + _0x512e57.ago + "\n\n> *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚*";
    const _0x1f340f = {
      quoted: _0x334804
    };
    await _0x31b547.sendMessage(_0x136e81.chat, {
      "document": fs.readFileSync("./package.json"),
      "fileName": "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚",
      "mimetype": "application/pdf",
      "fileLength": 0x5af3107a3fff,
      "pageCount": 0x7e8,
      "caption": _0x412e7e,
      "contextInfo": {
        "forwardingScore": 0x3e7,
        "isForwarded": true,
        "forwardedNewsletterMessageInfo": {
          "newsletterName": "🧚‍♀️𝗠𝗔𝗡𝗨-𝗠𝗗-𝗩❼💗",
          "newsletterJid": "120363232588171807@newsletter"
        },
        "externalAdReply": {
          "title": "© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭.💗",
          "body": '',
          "thumbnailUrl": _0x512e57.thumbnail,
          "sourceUrl": "https://mr-manul-official-web.vercel.app/",
          "mediaType": 0x1,
          "renderLargerThumbnail": true
        }
      }
    }, _0x1f340f);
    const _0x4ca16d = {
      remoteJid: "status@broadcast"
    };
    const _0x313dbd = {
      "participant": "0@s.whatsapp.net",
      ...(_0x136e81.chat ? _0x4ca16d : {})
    };
    const _0x1a9999 = {
      name: "✨ ...𝐌𝐚𝐧𝐮-𝐌𝐃 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭 𝐁𝐲 - : 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥... 💗",
      thumbnailUrl: "https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg"
    };
    const _0x54a8e1 = {
      locationMessage: _0x1a9999
    };
    const _0x536e50 = {
      key: _0x313dbd,
      message: _0x54a8e1
    };
    const _0x373d6e = (await axios.get("https://raw.githubusercontent.com/Manul-Ofcx/DB/refs/heads/main/url.json")).data;
    const _0x31cbb2 = _0x373d6e.YTMP4;
    const _0x85a02a = await fetchJson('' + _0x31cbb2 + _0x512e57.url);
    const _0x6d48f6 = _0x85a02a.result.dl1;
    const _0x3c84c4 = {
      url: _0x6d48f6
    };
    const _0x4c5ddb = {
      video: _0x3c84c4,
      mimetype: "video/mp4",
      caption: "> ⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚"
    };
    const _0x158138 = {
      quoted: _0x536e50
    };
    await _0x31b547.sendMessage(_0x4c2e67, _0x4c5ddb, _0x158138);
    const _0x53afd0 = {
      url: _0x6d48f6
    };
    const _0x392339 = {
      quoted: _0x536e50
    };
    await _0x31b547.sendMessage(_0x4c2e67, {
      "document": _0x53afd0,
      "mimetype": "video/mp4",
      "fileName": _0x512e57.title + ".mp4",
      "caption": "> ⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚"
    }, _0x392339);
  } catch (_0x31ae89) {
    _0x39db03("*Error !!*");
    console.log(_0x31ae89);
  }
});
const _0x543431 = {
  pattern: "fancy",
  alias: ["f"],
  desc: "Convert text to fancy text",
  category: "fun",
  use: ".fancy <text>"
};
cmd(_0x543431, async (_0x1a5730, _0x207572, _0x372a6e, {
  args: _0x236763,
  from: _0xf20f86
}) => {
  let _0x4fae48 = _0x236763.join(" ");
  let _0x1f54a6 = _0x207572.reply_message && _0x207572.reply_message.text;
  if (_0x1f54a6) {
    if (!isNaN(_0x4fae48)) {
      return await _0x207572.reply(styleText(_0x1f54a6, _0x4fae48));
    }
    let _0x2a407b = listAllFancyTexts(_0x1f54a6);
    return await _0x207572.reply(_0x2a407b);
  }
  if (!_0x4fae48) {
    let _0x5f3933 = listAllFancyTexts("Fancy");
    const _0xd289cb = {
      mentionedJid: ["94742274855@s.whatsapp.net"],
      groupMentions: [],
      forwardingScore: 0x3e7,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {},
      externalAdReply: {}
    };
    _0xd289cb.forwardedNewsletterMessageInfo.newsletterJid = "120363232588171807@newsletter";
    _0xd289cb.forwardedNewsletterMessageInfo.newsletterName = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
    _0xd289cb.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
    _0xd289cb.externalAdReply.title = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
    _0xd289cb.externalAdReply.body = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
    _0xd289cb.externalAdReply.mediaType = 0x1;
    _0xd289cb.externalAdReply.sourceUrl = "https://mr-manul-official-web.vercel.app/";
    _0xd289cb.externalAdReply.thumbnailUrl = "https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg";
    _0xd289cb.externalAdReply.renderLargerThumbnail = false;
    _0xd289cb.externalAdReply.showAdAttribution = true;
    const _0x52fc48 = {
      text: _0x5f3933,
      contextInfo: _0xd289cb
    };
    return await _0x1a5730.sendMessage(_0xf20f86, _0x52fc48);
  }
  let _0x8e44b0 = listAllFancyTexts(_0x4fae48);
  const _0x7ed5f5 = {
    mentionedJid: ["94742274855@s.whatsapp.net"],
    groupMentions: [],
    forwardingScore: 0x3e7,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {},
    externalAdReply: {}
  };
  _0x7ed5f5.forwardedNewsletterMessageInfo.newsletterJid = "120363232588171807@newsletter";
  _0x7ed5f5.forwardedNewsletterMessageInfo.newsletterName = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
  _0x7ed5f5.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
  _0x7ed5f5.externalAdReply.title = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
  _0x7ed5f5.externalAdReply.body = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
  _0x7ed5f5.externalAdReply.mediaType = 0x1;
  _0x7ed5f5.externalAdReply.sourceUrl = "https://mr-manul-official-web.vercel.app/";
  _0x7ed5f5.externalAdReply.thumbnailUrl = "https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg";
  _0x7ed5f5.externalAdReply.renderLargerThumbnail = false;
  _0x7ed5f5.externalAdReply.showAdAttribution = true;
  const _0x42f9d9 = {
    text: _0x8e44b0,
    contextInfo: _0x7ed5f5
  };
  return await _0x1a5730.sendMessage(_0xf20f86, _0x42f9d9);
});
function listAllFancyTexts(_0x6f13dc) {
  let _0x327bde = "Fancy Text Styles\n\n> *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚*\nExample: .fancy 32\n\n";
  listall(_0x6f13dc).forEach((_0x10dced, _0x47846c) => {
    _0x327bde += _0x47846c + 1 + ". " + _0x10dced + "\n";
  });
  return _0x327bde;
}
function _0x28ad(_0x429ec6, _0x1834e6) {
  const _0x2e9465 = _0x5ed6();
  _0x28ad = function (_0x21d36d, _0x245b1e) {
    _0x21d36d = _0x21d36d - 441;
    let _0x51f3c6 = _0x2e9465[_0x21d36d];
    if (_0x28ad.DfFKGb === undefined) {
      var _0x5d4ab0 = function (_0x55194b) {
        let _0x4c9f5e = '';
        let _0x457390 = '';
        let _0x494132 = 0;
        let _0x3551bf;
        let _0x590f73;
        for (let _0x3c9aec = 0; _0x590f73 = _0x55194b.charAt(_0x3c9aec++); ~_0x590f73 && (_0x3551bf = _0x494132 % 4 ? _0x3551bf * 64 + _0x590f73 : _0x590f73, _0x494132++ % 4) ? _0x4c9f5e += String.fromCharCode(255 & _0x3551bf >> (-2 * _0x494132 & 6)) : 0) {
          _0x590f73 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(_0x590f73);
        }
        let _0x1a12ca = 0;
        for (let _0x5a6ef0 = _0x4c9f5e.length; _0x1a12ca < _0x5a6ef0; _0x1a12ca++) {
          _0x457390 += "%" + ("00" + _0x4c9f5e.charCodeAt(_0x1a12ca).toString(16)).slice(-2);
        }
        return decodeURIComponent(_0x457390);
      };
      const _0x194d56 = function (_0x1fd0b0, _0x15b4fd) {
        let _0x42747a = [];
        let _0x4e3765 = 0;
        let _0x3510a1;
        let _0x21a1fb = '';
        _0x1fd0b0 = _0x5d4ab0(_0x1fd0b0);
        let _0x32c561;
        for (_0x32c561 = 0; _0x32c561 < 256; _0x32c561++) {
          _0x42747a[_0x32c561] = _0x32c561;
        }
        for (_0x32c561 = 0; _0x32c561 < 256; _0x32c561++) {
          _0x4e3765 = (_0x4e3765 + _0x42747a[_0x32c561] + _0x15b4fd.charCodeAt(_0x32c561 % _0x15b4fd.length)) % 256;
          _0x3510a1 = _0x42747a[_0x32c561];
          _0x42747a[_0x32c561] = _0x42747a[_0x4e3765];
          _0x42747a[_0x4e3765] = _0x3510a1;
        }
        _0x32c561 = 0;
        _0x4e3765 = 0;
        for (let _0x4c03ee = 0; _0x4c03ee < _0x1fd0b0.length; _0x4c03ee++) {
          _0x32c561 = (_0x32c561 + 1) % 256;
          _0x4e3765 = (_0x4e3765 + _0x42747a[_0x32c561]) % 256;
          _0x3510a1 = _0x42747a[_0x32c561];
          _0x42747a[_0x32c561] = _0x42747a[_0x4e3765];
          _0x42747a[_0x4e3765] = _0x3510a1;
          _0x21a1fb += String.fromCharCode(_0x1fd0b0.charCodeAt(_0x4c03ee) ^ _0x42747a[(_0x42747a[_0x32c561] + _0x42747a[_0x4e3765]) % 256]);
        }
        return _0x21a1fb;
      };
      _0x28ad.divzGx = _0x194d56;
      _0x429ec6 = arguments;
      _0x28ad.DfFKGb = true;
    }
    const _0x30d313 = _0x2e9465[0];
    const _0x11052a = _0x21d36d + _0x30d313;
    const _0x436ee8 = _0x429ec6[_0x11052a];
    if (!_0x436ee8) {
      if (_0x28ad.nuxNxr === undefined) {
        _0x28ad.nuxNxr = true;
      }
      _0x51f3c6 = _0x28ad.divzGx(_0x51f3c6, _0x245b1e);
      _0x429ec6[_0x11052a] = _0x51f3c6;
    } else {
      _0x51f3c6 = _0x436ee8;
    }
    return _0x51f3c6;
  };
  return _0x28ad(_0x429ec6, _0x1834e6);
}
function styleText(_0x3fab65, _0x209f93) {
  _0x209f93 = _0x209f93 - 1;
  return listall(_0x3fab65)[_0x209f93];
}
const _0x44cca8 = {};
function _0xc556a7(_0x58fd08, _0x4a0726, _0x30d7d7, _0x5b66ed, _0x11622f) {
  return _0x28ad(_0x5b66ed + 0x35f, _0x58fd08);
}
_0x44cca8.pattern = "removebg";
_0x44cca8.alias = ["rbg", "bgremove"];
_0x44cca8.react = "🖇";
_0x44cca8.desc = "Remove the background from an image.";
_0x44cca8.category = "image";
_0x44cca8.use = ".removebg";
_0x44cca8.filename = __filename;
cmd(_0x44cca8, async (_0x3f5539, _0x58aedb, _0x32c58f, {
  from: _0x4c289d,
  quoted: _0x24f7a7,
  args: _0x26c29c,
  reply: _0x2eb605
}) => {
  try {
    let _0x4968c5 = _0x32c58f.quoted ? _0x32c58f.quoted : _0x32c58f;
    let _0x349898 = _0x4968c5.msg?.["mimetype"] || '';
    if (!_0x349898 || !_0x349898.startsWith("image/")) {
      throw "🌻 Please reply to an image.";
    }
    let _0x2b1b20 = await _0x4968c5.download();
    if (!_0x2b1b20) {
      throw "Failed to download the image. Please try again.";
    }
    const _0x76123c = require("path");
    const _0x2723b4 = require("form-data");
    const _0x3cec1e = require("axios");
    const _0x49aab0 = require("os");
    let _0x5b3f6a = _0x76123c.join(_0x49aab0.tmpdir(), "ManulOfcX.png");
    fs.writeFileSync(_0x5b3f6a, _0x2b1b20);
    let _0xc5d680 = new _0x2723b4();
    _0xc5d680.append("image", fs.createReadStream(_0x5b3f6a));
    let _0xb496ad = await _0x3cec1e.post("https://api.imgbb.com/1/upload?key=06d00f0e4520243a32b58138765a2ecc", _0xc5d680, {
      "headers": {
        ..._0xc5d680.getHeaders()
      }
    });
    if (!_0xb496ad.data || !_0xb496ad.data.data.url) {
      fs.unlinkSync(_0x5b3f6a);
      throw "❌ Error uploading the file. Please try again.";
    }
    let _0x3ded0a = _0xb496ad.data.data.url;
    let _0x1e8ab1 = "https://api.nexoracle.com/image-processing/remove-bg?apikey=RDB9bTxrjAf71NFHd&img=" + _0x3ded0a;
    const _0x1ae01f = {
      url: _0x1e8ab1
    };
    const _0x5ada0c = {
      image: _0x1ae01f,
      caption: "> *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚*"
    };
    const _0x2db602 = {
      quoted: _0x58aedb
    };
    await _0x3f5539.sendMessage(_0x4c289d, _0x5ada0c, _0x2db602);
    fs.unlinkSync(_0x5b3f6a);
  } catch (_0xb050d6) {
    console.error(_0xb050d6);
    _0x2eb605("❌ An error occurred: " + (_0xb050d6.message || _0xb050d6));
  }
});
const _0x202a1d = {
  pattern: "tiktok",
  alias: ["tt"],
  desc: "download tt videos",
  category: "download",
  filename: __filename
};
cmd(_0x202a1d, async (_0x1f4b0e, _0x2bb089, _0x35cfd8, {
  from: _0x4fbd14,
  quoted: _0x13c281,
  body: _0x2a5e24,
  isCmd: _0x2d9b68,
  command: _0x5dfaa4,
  args: _0x12740a,
  q: _0x161fb5,
  isGroup: _0x286d3b,
  sender: _0xc15e0c,
  senderNumber: _0x39595c,
  botNumber2: _0x13b2b1,
  botNumber: _0x147b15,
  pushname: _0x298d34,
  isMe: _0xdec0d0,
  isOwner: _0x27c950,
  groupMetadata: _0x352a8d,
  groupName: _0x18e81a,
  participants: _0x792337,
  groupAdmins: _0x3fe1b0,
  isBotAdmins: _0x59ccc8,
  isAdmins: _0x5d57a2,
  reply: _0x174467
}) => {
  try {
    if (!_0x161fb5 && !_0x161fb5.startsWith("https://")) {
      return await _0x174467("*give me tiktok url ❌*");
    }
    _0x35cfd8.react("⬇️");
    let _0x256215 = await downloadTiktok(_0x161fb5);
    let _0x1b2317 = "\n     🎟️ *MANU-MD TIKTOK DOWNLOADER* 🎟️\n\n🔢 *Please reply with the number you want to select:*\n\nTitle * " + _0x256215.result.title + "\n\n*!.* Tiktok Video\n\n   1 | 📼 SD QUALITY\n   2 | 🎟️ HD QUALITY\n\n*!.* Tiktok Audio\n\n   3 | 🎶 Audio file\n   \n*URL:* " + _0x161fb5 + "\n     \n> *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚*     \n     ";
    const _0x4cbe9f = {
      url: _0x256215.result.image
    };
    const _0x4aeede = {
      mentionedJid: ["94742274855@s.whatsapp.net"],
      groupMentions: [],
      forwardingScore: 0x3e7,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {},
      externalAdReply: {}
    };
    _0x4aeede.forwardedNewsletterMessageInfo.newsletterJid = "120363232588171807@newsletter";
    _0x4aeede.forwardedNewsletterMessageInfo.newsletterName = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
    _0x4aeede.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
    _0x4aeede.externalAdReply.title = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
    _0x4aeede.externalAdReply.body = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
    _0x4aeede.externalAdReply.mediaType = 0x1;
    _0x4aeede.externalAdReply.sourceUrl = "https://mr-manul-official-web.vercel.app/";
    _0x4aeede.externalAdReply.thumbnailUrl = "https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg";
    _0x4aeede.externalAdReply.renderLargerThumbnail = false;
    _0x4aeede.externalAdReply.showAdAttribution = true;
    const _0x468189 = {
      image: _0x4cbe9f,
      caption: _0x1b2317,
      contextInfo: _0x4aeede
    };
    const _0x1814cc = await _0x1f4b0e.sendMessage(_0x4fbd14, _0x468189);
    const _0x4f0bee = _0x1814cc.key.id;
    _0x1f4b0e.addReplyTracker(_0x4f0bee, async (_0x3082ac, _0x323eac) => {
      if (!_0x3082ac.message) {
        return;
      }
      const _0x5e717f = _0x3082ac.key.remoteJid;
      const _0x3707a1 = {
        text: "⬇️",
        key: _0x3082ac.key
      };
      const _0x4e4870 = {
        react: _0x3707a1
      };
      await _0x1f4b0e.sendMessage(_0x5e717f, _0x4e4870);
      let _0x247f4b = _0x256215.result;
      const _0x5a0481 = {
        text: "⬆️",
        key: _0x3082ac.key
      };
      const _0x2bf057 = {
        react: _0x5a0481
      };
      await _0x1f4b0e.sendMessage(_0x5e717f, _0x2bf057);
      if (_0x323eac === "1") {
        const _0x252580 = {
          url: _0x247f4b.dl_link.download_mp4_1
        };
        const _0x32b519 = {
          video: _0x252580,
          caption: "> *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚*",
          contextInfo: {}
        };
        _0x32b519.contextInfo.mentionedJid = ["94742274855@s.whatsapp.net"];
        _0x32b519.contextInfo.groupMentions = [];
        _0x32b519.contextInfo.forwardingScore = 0x3e7;
        _0x32b519.contextInfo.isForwarded = true;
        _0x32b519.contextInfo.forwardedNewsletterMessageInfo = {};
        _0x32b519.contextInfo.externalAdReply = {};
        _0x32b519.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363232588171807@newsletter";
        _0x32b519.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
        _0x32b519.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
        _0x32b519.contextInfo.externalAdReply.title = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
        _0x32b519.contextInfo.externalAdReply.body = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
        _0x32b519.contextInfo.externalAdReply.mediaType = 0x1;
        _0x32b519.contextInfo.externalAdReply.sourceUrl = "https://mr-manul-official-web.vercel.app/";
        _0x32b519.contextInfo.externalAdReply.thumbnailUrl = "https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg";
        _0x32b519.contextInfo.externalAdReply.renderLargerThumbnail = false;
        _0x32b519.contextInfo.externalAdReply.showAdAttribution = true;
        await _0x1f4b0e.sendMessage(_0x5e717f, _0x32b519);
      } else {
        if (_0x323eac === "2") {
          const _0x2fdd29 = {
            url: _0x247f4b.dl_link.download_mp4_2
          };
          const _0x32504e = {
            video: _0x2fdd29,
            caption: "> *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚*",
            contextInfo: {}
          };
          _0x32504e.contextInfo.mentionedJid = ["94742274855@s.whatsapp.net"];
          _0x32504e.contextInfo.groupMentions = [];
          _0x32504e.contextInfo.forwardingScore = 0x3e7;
          _0x32504e.contextInfo.isForwarded = true;
          _0x32504e.contextInfo.forwardedNewsletterMessageInfo = {};
          _0x32504e.contextInfo.externalAdReply = {};
          _0x32504e.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363232588171807@newsletter";
          _0x32504e.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
          _0x32504e.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
          _0x32504e.contextInfo.externalAdReply.title = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
          _0x32504e.contextInfo.externalAdReply.body = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
          _0x32504e.contextInfo.externalAdReply.mediaType = 0x1;
          _0x32504e.contextInfo.externalAdReply.sourceUrl = "https://mr-manul-official-web.vercel.app/";
          _0x32504e.contextInfo.externalAdReply.thumbnailUrl = "https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg";
          _0x32504e.contextInfo.externalAdReply.renderLargerThumbnail = false;
          _0x32504e.contextInfo.externalAdReply.showAdAttribution = true;
          await _0x1f4b0e.sendMessage(_0x5e717f, _0x32504e);
        } else {
          if (_0x323eac === "3") {
            const _0x486953 = {
              url: _0x247f4b.dl_link.download_mp3
            };
            const _0x13ca29 = {
              audio: _0x486953,
              mimetype: "audio/mpeg"
            };
            const _0x5420dc = {
              quoted: _0x3082ac
            };
            await _0x1f4b0e.sendMessage(_0x5e717f, _0x13ca29, _0x5420dc);
          }
        }
      }
      const _0x1aeb0a = {
        text: "✅",
        key: _0x3082ac.key
      };
      const _0x4adb5c = {
        react: _0x1aeb0a
      };
      await _0x1f4b0e.sendMessage(_0x5e717f, _0x4adb5c);
      console.log("Response sent successfully");
    });
  } catch (_0x4315ec) {
    console.log(_0x4315ec);
    _0x174467('' + _0x4315ec);
  }
});
function _0x5ed6() {
  const _0x740946 = ["W6vQdG", "W5ZcQY8", "W4tdPaLLWO8", "8kwcP/cBOyhdR/c+K4lXJAcr", "W6aohSo1wW", "jCkUsxVcSG", "aCo3cmoMWRW", "quLby8oc", "A280WRy", "W4W3z8o7yq", "W7jCW7r9", "WQGPxmo/W4m", "WQ1mpq", "WOChW5zxW5a", "WO1oW7FcR8oy", "sCoOh8okW5m", "WPRcSL/dQCoT", "WRRcKSoTWR4O", "WOntW49mW4y", "gSoOW5pdKt0", "BCo0lCodW5S", "r3fJWRtdOW", "pLBdGmkDqG", "8lAJJpcLKjuG8lUrKSon", "fGJdKSkIW6e", "W608BfDU", "8j6XQFctGP/dLVc6SzNdJa", "sSoRpG", "WRZcMmkGWRuX", "W7xdR8o3", "W7/cHbuiWOu", "WONdTNNdGu8", "vbBcI8kmcG", "x2XOWQ0", "gCoFuIZcQq", "r8oPnSoqW5e", "8lo1JfSdBva", "wJSMW4mf", "B8o7y8kpWOe", "yuaPW6xdLa", "pSo0BYRcUG", "sceH", "WQTcW7pcR8oe", "ruxcJSkecq", "AuGPWQ9v", "WPldLdu", "W6tcHCkPWOJdNW", "cSkPW7GTfG", "8kwYMpcKSP/XI4gC8yssLg8", "uca2W4O", "dmo9eCoHWRu", "WR9mW6lcPCoR", "x0RcImkjcW", "W7NdOSoXlqW", "WPddGJldPSkP", "AK7cV8kl", "zCoek0K", "W7m3WPBdPau", "crNdNCkXW6a", "m/c9GOJWQQgVC/c2KOK", "xtP6CLe", "W7ldS8oHoq", "ssb6Cga", "xcOLW4aA", "4Ool4PEx4P244OoOFa", "WQHceGW8", "WPVcNLrK", "W5jgxe1J", "yuG/", "W6j2gCkFW4i", "WQZdGu4yW4C", "W7vHh8oAW58", "WR5Ecr4p", "WPBcO1NdVmoJ", "WQmjnmkpW7a", "cSooyG", "a0pcLG", "grRdT8k2BW", "W53dL8o9eW0", "WO3dOvxdP8o/", "cJn5hSoJ", "FJZcVSk3nq", "W5CQd0Xp", "8lEWRJhWL5ct8yYcNpcVKyG", "WOZcHmkVWRW/", "WQHLiqC9", "W7m5WPxdQW", "bCknv0hcHW", "rY19W5Oy", "ACoFkX/cNq", "EetcTCkiW54", "juq3WRy", "ut0VW44N", "WOhcHmoPWR0/", "8jcIKVcWSRJWMAk48y+XPFcMOBG", "D/c0KlhWPOk6WP3XHRgN", "u8kxEG", "sJSFW5yf", "W4BdQCkvWQX5", "WPPuC8kUgW", "W4rEFKL0", "WQO2rmonW4W", "4lsf4lwO4lACWOHC", "WPFcUgbNWO8", "oFcBGAFWSQk8WQpXHRgX", "ze5NW7hdUW", "sJTS", "W6C8Bd0N", "AX4wW7RcKG", "AX9kW7ZcKq", "WQLiia", "8jcIG8kw8lgGKpcWS5tWPiga", "W7fuqmo/tq", "pVcRK63WV7g4cpc2K70", "WQxcNtdcLY4", "WPRcIeldRSoL", "W7inWPpdPG", "WO5tW4ifW4m", "WQRdJuKbW44", "WQtcHIxcJYi", "WPhdRLZdRmoS", "W7BcJmkLWPNdVW", "d0xdKUkzU++5OVctGl8", "WP9iW7hcTmoC", "WQbOW7VcRSoL", "W54kogPX", "W47cIbfEBq", "CgXOu8oa", "W6ZcJCoEW6eX", "vexcI8kiaW", "lt3cO8kIaq", "8jwsLFcRGQdWTyg/WPFWNOgz", "gIVcVSoOqa", "WRhdGfHd", "W5RdHEkuN8ojzW", "W7pWLQcHW6pdSda", "WOHCEa", "W4a2hK1Z", "kYdcVmoIeG", "W6NdPmo2krS", "gSk0DSoiW5m", "W4tdPaL6WPW", "WP9oW6/cPSot", "WOBdMc/dR8kV", "8yAaTFcuG5lWLPgX8lcdPCor", "tZP5", "WRRWV5YYFZ8M", "W6rwW6HW", "8lQdO/crSOJcQFctSRxWSjcn", "WOtcKSoUWRyQ", "dSofFIBcHq", "W5XCWOXmWPS", "WQxcGgVdJmoJtCoP", "rrftr8kX", "gX/dMSkSW7a", "fmkKW7mZnG", "y1GOWRTm", "4Bs/4BE3l1NdUa", "W4avh8o/WOu", "W70rq8kTtq", "W6iDvCkTrG", "W6rXhSosW48", "W4lcRar+yq", "sdaOW4XT", "8ykZO/cuSlJXGOct8kwJJVcUGA8", "WOrtC8kRpW", "bmoivLlcJG", "gNi18jYGRFcLSBa", "qgbOWQldOW", "W4RcGa5XBW", "8yoaUFc9O6BWSOgz8kcaV/gcGjS", "faJdI8k2W7K", "WPBdQGhcULq", "nokvPCoTW5/cLq", "WOjupca+", "W5ZcRJJdHa4", "8jQWTFgmO6lcN/czSQxXJRcn", "WQVcHSoFW4q2", "WOVdQwhdQa8", "W53cVchdMW0", "W7fPg8otW4q", "WRNcKCohWRe", "fmkKzK3cUW", "W6nRca", "4P+wW6SijSot", "v8kLzXG", "zCo6W4BdN2O", "WO1iW6JdO8oR", "r3WIWO53", "vmoWW5JdH3y", "W7O6WO/dQWa", "b8o0a8oXWQ0", "ug0MWPtdIW", "W6pcImkYWOhdSa", "qZWJ", "e8kFvLVcHW", "vLvqySo+", "dX/dKa", "4P+Y4OocW63dPSky", "ymkvzrJcQW", "WQLSWQpcH8oy", "WQjIA8ktyW", "q8k4tSo3W7C", "fJWHW5/cGW", "WR/cGGdcHqm", "WPpcOKTTWOK", "hX/cNmk8W7O", "vxvVvmoj", "uYG3W7Os", "WPdcOCkKF0W", "fCkhs0hcHW", "WR3WQzg78l2VNaJWTPoP", "8ygZLpcSS4mg8j2sS/cwO4G", "W7KrxSo5sW", "WRfinSkzW7O", "nrhcM8kDxG", "WPqvuCk3sq", "gq8m8y6XRLm", "nJtcLmoeiG", "uCkFyXhcOa", "W4VcQbNdMsm", "WRhdGtxcJYO", "8j6XOVctGPJXGlkuW6pXHRgl", "WObcxmk4ja", "WQzQW5hcUv8", "zmoClapcIW", "e8ooDsBcQG", "4PsQ4PwY8jotLmoJoW", "pqyzWP3cRa", "wsLLC0G", "WPtcPttcS0C", "emkjWRSTW7e", "W5BcOsldJrm", "8yoaIFc9O6BcNFcHGBVWMloI", "jmoEkmoAWOa", "emkPDmoYW6a", "amogFG", "W4DspSohW58", "8ysXLpc1OiVWSikkW4tWKlo4", "WRJdI08AW4O", "WRqsqSoItW", "WRXhlmkkW7O", "W4L1CSk9oa", "r8o+kSklW5q", "iXTCW7/dMa", "WPrcW6FcQSoC", "u8kxCd3cTG", "W4nFCe91", "aCkjv1pcHW", "W7H4h8omW4W", "WOrzqmkmvq", "irSqWPRcOq", "xmkrFbJcHW", "FmkEWQPdWPC", "W7Dtm8owW6K", "W49arubL", "bmknsfJcLa", "WRJcM8oLWRaT", "W4BcQWi5yW", "fmozDW", "W497F05/", "kCkfqetcKq", "qwiMW55B", "BwqQW5BdTG", "WO3dUxZIMl7VUA7XHjc8", "8j2ZLo+5ImkIWRqnW6i", "dCk7y8kfca", "rqZcJmkbca", "udHY", "hCk7rg7cSa", "tdqXW54U", "rbFcLa", "cbtdLCknyW", "WQJcHSopW5G2", "WObtAmk+pW", "W6z4gCkrW4K", "8yEaSFcAG4FWQlkg8yIrK8kP", "rSkmWQC0W7y", "r8klWQC0W7y", "WPhdNIldSSkJ", "udqNW442", "W4RcUHn2zW", "dCkgDctcQq", "8yEtRFc9K7ZWQRk48korPVcsO6e", "pa1YW6iq", "ithcH8oooa", "W5RXHkAc77USz8kgxG", "W4xXGkwG8yMgICk58kowJW", "WPNcOHBdJNu", "W4DtEezK", "W6ldVEkAMmoXDa", "W7G2WOBcQKy", "W77cVdJdNaG", "w8kSuCkMW6S", "WRVcJKldSmoI", "xc4+W7is", "W4CGfW", "W4VcRr/dHGC", "WQzdbmk1fW", "WP9rqmk7yG", "uSo/pmobW68", "fIVdMSkOW6e", "WPVcGKHUWPi", "W7SXWO/dOrO", "gmoYW4BcHW", "A1WJW6VdSq", "wIPYW5yg", "rZaLW4u", "e2LlCmoI", "WRRdPuKzW5K", "W4pcMCk3WOK", "WOBdHqVdRmkn", "gZRcQmkFba", "W5/XJ56Z77QhWQO6Ba", "WOPtW6lcT8oi", "WQjimmkC", "FMldVCk8tG", "wCo+W5/dN0y", "lWy9WPhcQa", "WPftW7FcS8oo", "lbldU8kQDW", "qbnWWQ5I", "WPTCqCk6qW", "WR3cHJZcHJm", "W5WBfW", "yaCxWR3cOW", "FqCJW6pdRa", "8ykZHVcuSjZXGOcgq/geGym", "BJfLyG", "WRPsCSk4mW", "WPeDW49kW5q", "W6xcHCk0WPNdVG", "8jY7HrNcT8kZW6q", "WQpcJCoy", "DK4pWRrd", "W7JdJ8kFWRBdLa", "eSkeELVcIW", "WPFcUcpcSfi", "WRRdQmoPpHK", "WOZcPeldRmoh", "zKyMW6y", "h8k4W5uQeq", "WQRcGMLgWP0", "WP3cPcpcUMW", "FuRcT8klW5y", "rCo2pmolW5u", "gqZdImkGW7i", "WOmeW5bjW5a", "W6i6WOpdMcG", "EeGQW6C", "WPzjW6tdO8ks", "WPhdMtJcT8oH", "sqrrz8ka", "8jgGOpcuKjpWVPkdFpcwGOW", "qZHED20", "rrhcNCkFia", "WQxcJSokW6S2", "8lIJPFgmO67cSVc+KBRdRW", "WQZdGvWoW58", "obNdMSkBxG", "W6/dS8o2oHO", "W4VWU5gQ8lMZIgJXHjkt", "vMz0D1e", "W7rDW6vNW6i", "vmoVpmox", "x8kXW4BdM2m", "WQhdIdhdOG", "8kwcQdVINky", "srjsWR90", "Ce7cSmkmW5m", "W6rTdSonW6a", "wVcKGkVdJ8kF8kQtVq", "E0tdQCoFW68", "W55dWPrLW5S", "iGFdSSk8W50", "WRhdHvK", "w8kDDbpcTW", "W6ZcMLpdTCoG", "d8o9fCoHWRG", "W6FcJSkG", "WOirACkImW", "WO7cQLj8WPG", "4lA3cEc2G+c1KUc0PG", "W5FcVdldVaq", "W5FcVbrYyG", "umkVuSkQW6W", "WOZcR0nSWRm", "WRTqBSkIoW", "W7GrxSoQvG", "lSkIW6OLgW", "f8k/WPBcKW", "veHq", "WRNdISoN", "lSkbW5TPrq", "ruHwzmoP", "w8kDCG", "a8kTW6GLgW", "yqjEWR3dMq", "emomW6uoW7O", "WR3dJXlcUCkP", "WP9iW7hcHSoC", "tCoSW4GTha", "aSkfW7iIga", "WRldGv4zW4i", "BaVcS8kxW5y", "wIupW4mK", "WOL0W6JcM8oq", "laxdTSoFW4m", "bmoqemoqWQ4", "yq1D", "W4lcQW52Aq", "W4JcUmo3WR87", "wHnerSkM", "zv8/", "W6fSbmolW4G", "W7n4h8owW4i", "i00JWRGl", "hXxdImkGW6C", "a8oQbCo6WOS", "W43cPGrU", "yHP4W6/cJG", "WOBcOJpcS0q", "4Bw2Y67HTBtHT6tQN78", "WOZcRKTNWOK", "WPBcSLG", "WP7cSmoRWQeP", "oHldL8kosa", "WQHcsXO6", "d8kyBKFcRG", "WOeBrmkVxa", "Fv/cK8ksW4K", "xZ9MA0q", "zeGUW67dIW", "zayOW6hdQG", "W6HxW6L7WQG", "bmonW6SxW54", "W4FcSspdHqm", "W4FcScldHaq", "tJqNW54N", "usuNW5K3", "tHTFeSkL", "oHTZWRpcRW", "WRLcaXSd", "Eura", "F8ohlqhcMW", "W6tcIIBdQHq", "aVcRG6tcP0JWLO+3", "utqOW4Kp", "r8kTW7SLhG", "h0ldJ8kSW7S", "WRxcGKxdOCoZ", "W5S+vmoxsa", "aSkjtfVcKq", "dmooAdhcRG", "bpcKKOtcVCoCW5C", "W4SEW4jlW4a", "W6tcLr3dUmo5", "WR43rmoCW4i", "WQ/dKmoWWQZdVa", "W6FILyBILABILANILy4", "iSk+W64Rbq", "WPVdKc3dHSkQ", "WOaAW5fa", "dWhdNCkBtW", "W7lcK8k0WO3dTq", "CrmeWPBcPq", "WRb8g8owW54", "eSowW7ntWPG", "WQTmn8koW74", "WOewbW86", "bCowW6uuW7y", "W4bcDG", "vmktoWtcVa", "nHavWOZcQW", "vY1XBKa", "W7xcM0BdQCo6", "WRFcKSkIWPZdVG", "WRLDEmkRjq", "pJ3cUSoKbG", "8lUYJVc8KBFWORgJ8lAsM/cDO48", "dGldL8oLW5q", "wW5tWQ5I", "WQBcSZBcUW", "8yMtOVcPG7FWRkoDeFcLG5y", "WQbzgmkrW5O", "WP1Cc8kSrq", "uejjkmo6", "W55Bzur1", "W4yvW4zrW5y", "WRjDiCkpW5i", "eIzlWQP4", "8ysXVVc1OlhWSikKW4tWKlo4", "WORcVG/cSea", "jmkJW7iYeG", "WPddUc/dOCkH", "8loVVLSd", "W5pdQFcNK5uGW5q", "WRnAiq", "W4RcGWLZ", "xgHxWQddQG", "W4lcRbnKyq", "obmqWQRcVa", "WQbejCkEW7S", "vKXOWQddGq", "8lMqMFcNORlWTOkx8yAXTGq", "W6LxW6LTW48", "ubvyWQ0", "vWnmW6/dLG", "BfuIWQm", "WQay4PwFaJa", "tmoYn8oo", "WRulWR87WRa", "pdBcP8oJbW", "ySoTW5RcItm", "E0G0WR9b", "WRFdHL9dW4G", "W73dS8oRkHa", "W77dLmkFWRrM", "eSoFW74c", "ySkCCbxcOq", "c3eLnuOGjM7cI3i", "WOtcKSoHWQi7", "xuLlWQ5J", "W7uxw8oOua", "WPtcPfu", "WOPgW6tcPG", "4lAR4lAT4lwZW6xcUq", "lYdcRCoLqa", "4lAeCUc1Loc0TUc3Va", "W69ay0DI", "CsP6W6yJ", "gmoFW6yIW5m", "WONdPujPWO8", "mHtdGCkBuG", "gbaUWRBcVG", "WQlcSCkZhXa", "geOD", "WQDeiq", "iWyrWO3cGW", "xczjWR9J", "W4OJnfH/", "cGbvqSkV", "W77dGfiAW4u", "rrXd", "EW4uW7dcMq", "vN1YWQpdNa", "ALNcRSks", "E3nkWOhdJq", "W53cUGfJAq", "tY5zWPnC", "hLLmCSoH", "CqCzW7S+", "W7ZdRSo2FWO", "EvWRW7BdRq", "W6tcJH0", "WQeKW6zsW4a", "W41aFL1G", "gmkjsxBcHG", "WR3cNdy", "W754bSoA", "W4NcNuVcUCoO", "pWVdR8kAWPe", "WQBdKI7dTCkR", "8jwsM/cRGQJWTygP8lcGJSoJ", "W67dQCoHFWG", "W7dcKSkOWPNdOG", "D0FcTmof", "WRNcSCoVWR4y", "vSkkxb3dGG", "FH9CW6/cGG", "hGxdHCo1WRO", "wqPy", "aSokW68rW7O", "WPRcO184W5i", "W57cR0L/WPm", "WOZcN8o5W6fX", "WP/cU08NWPW", "dsDoW6vM", "DXSzWP7cQq", "8lIJOpgmO6hWUBkq8ywtJSo5", "8joXIpcyGiRWLyg28kEWJSoG", "WPxdPK9GDW", "e8ozDdddRW", "8kwcO/cBOAtXJQkw8yItO/crKQC", "WRdcI00jW40", "WPbuW4xcRmop", "rZ0+", "quHfzmo4", "jZ/cR8oQbq", "kbpdMSklDG", "EKnwCCoi", "WRhdLKq", "b8k4fCo3WRu", "uSowW5JdLxW", "p8kLyHRdKa", "yrHKqSkL", "cmkIWRjKjW", "W6HyW6biW6e", "iJpcT8oOeG", "rCoECH3cPG", "WQiyWPlcPb4", "WQZcRLzKWOq", "WOhcQsNcRKm", "W6RcLs7dSHK", "8y6tR/c3OP1Z8lkaTVgaOBK", "nr0WWQJcQG", "W4hcQaL7vq", "wNzaWQNdNa", "trvrW7y", "W6CzW7POW6K", "nHpdH8kCwG", "FGbaW4NcHa", "sWuFW74w", "WRRcKSoWWR0N", "WO9EB8k9nW", "W5ZcRa5Ztq", "WPJcPfr/WPW", "W7fXFufZ", "xZPbB1q", "W4NcPHjsyq", "qqNcGCk5hW", "W4DxyLTX", "WPhcPvjPWP4", "WRddHveSW48", "WP5uqSk6", "oIBcQ8o/lq", "8k6XJpgoSQRWPzgmW5VWNPgP", "W6HwW6HSWQG", "8lEWMZhWL5cr8yYcQVcVKyO", "WRhcGZJcH2C", "W7q3WO/dVGW", "yCobnrBcJa", "WPpWR5cz8jYGSelWP7cj", "W7hcGfhdUmo9", "WOtdHc7dS8kR", "W6tcGCkGWOK", "W5NcQte", "W5yZd0G", "CdbvWOz5", "pdFcOmoPbq", "fCoyoYtcOa", "WQNcJSooW6iN", "8jcINCkw8loIIq", "xSoSW7ddNge", "wKfbDmkI", "vbhcJmkihW", "WOxdHwe", "WOdcRYFcVvi", "W4XFCeT0", "EYtcNmkOfq", "vXbtWQD+", "W5PEAhXI", "W47cLSoWWRG1", "W7hdT8oIks0", "odFcVmoUbq", "W7lcNvpdUSoL", "pXpdKmk7xG", "WRJcISoFW6a2", "tZrNWQ5Z", "WPDgW67cPG", "W5/cNVc/SA/WSkcs8kYcLG", "kfJcLmk/vW", "8ykJN/cwKQpWV7co8jwbTmoK", "Ee0UW6ZdUq", "W7z2gCoiW4W", "pr/dMmkkDq", "8lIrPXdWVOcH8lcrSpcKOBu", "o8kns0pcIW", "v8o+WRetnG", "rmoWW4pdGxa", "W7NcGCkUWOddHW", "emkIW7aRfG", "vSkFDGhcVW", "CayMW7ldTW", "W5CIeLPs", "W5CBfu9s", "caJdJ8k1W7O", "f8otW68", "W785WPxdUqG", "obFdHmkBuG", "vqjtWR94", "ymkfnXxcNG", "oYdcVmoOba", "WQNcHwfPWRK", "vSkeWQRWPAk78j+rNW", "W50hemoVhq", "lmo5c8o3", "WQ3cN8ojWPmv", "qCkCFbFcTW", "eWae", "WQ7dL1GFW58", "W5BcPHu3CG", "WRhdILGjW6e", "f8onW69dW4C", "W6yjzmoDW5i", "tYTHW5xcNq", "WPhcUdZcMJu", "rCkEErVcSW", "gb5sWR4X", "WPRdN2/dQCkR", "eVcMMRNdQ8ML4BAV", "yfSRWR8f", "WOnBnSksW60", "jtC9WPJcJq", "cSkPW7iWhG", "WRVcHhOeW50", "ACoqlbBcIG", "zCoklqFcKq", "W4xcUqC", "s8o+ia", "ravD", "W4RcVHn7zq", "8yYWTgtXGOkE8j6GVCkg", "W7JcIXldRSoH", "qeHky8ob", "W4RcTIpdMKe", "W5ytd11p", "WPDteCkZW4y", "W7uqq8kItW", "dmo5d8o+WOW", "WQfzbW0", "WOjBqmk7zG", "rtq1", "wWznWR94", "tbTCv8kn", "WQP3xmkDba", "WRZcGSogW4K/", "WOLuuCk+qa", "bfWFxSkQ", "8yAZQCkj", "W44uWPNdKbe", "WQjyaW0e", "W7dcHCkZ", "WPlcO0ldQCoJ", "WOVcQvNdPCoO", "FdDFF8k6", "W43dOmomcZi", "W6FcULtdRmo8", "W5rCW7XLW7W", "4P2p8jscSW", "WRLeeWW", "ymkvzGtcVq", "W6u9WOZdPr0", "EMbJkSk+", "W4GdW49eW4W", "WPhdPh5sWRS", "WP0rx8kLiG", "Ff8RWRvr", "WQrueX0N", "zW5mW6NcNW", "bb7cUSogbG", "WQpcTCkZA0W", "W5WHD8oLqa", "WRWwWQnKW7C", "o1isWPdcOG", "vNj1WQBcJG", "nIBcH8oJbG", "gSkmbxVcIW", "8yMtO/cPG6pWRkoB8jgbTFglKkK", "jmo5cmoXWQa", "Afu0WRDe", "Ff4JWR5R", "WPNcGSoHWR03", "krpdH8kAvW", "eqpcL8kyaW", "W4zBF0m", "ta5jWQD0", "W4RcSrrYBG", "cmoFoHZcQW", "WR7cH8ocW6i0", "WOXgBSkMmW", "W4aHgL1u", "aH8unmk6", "cqldICk3W7y", "zqLa", "W4nrEeL8", "r1LbDCob", "kaJdJ8k1W7O", "WR/dRvK", "lXNWVPcf8lYaSpgeKP4", "u8oVomolW5S", "W7f9s8otW4q", "jaevWPJcQW", "WRa0s8kfWO0", "WPVdOuRdP8o4", "W6ZdQmoGoHe", "vCo2mCoaW7C", "ESojmr/cMq", "pvtWKzkb8jwYRVcISya", "WQydWQZWN4kj8jEZVG", "WPtcQCokW7uX", "lVcKJO/cVCk3W6m", "AfmOWR4", "kVc5OPFcHCkl4Bw6", "uGz5xmkL", "W6BcQZO", "xZH5FGe", "WPBcQLj7WPW", "W57dUqG6W50", "a8otW68nW4m", "hSkCuuFcKq", "WOZdGu0bW5i", "uSo/mmolW4y", "yfSQWPTb", "W58Gfubq", "8kcZHVcuGjldGVcRK6lXI6gf", "amkXcCojW4q", "bCoAhmoCWP4", "wMDKW6JdJq", "yHqNWQPv", "xqrYzxq", "WRv/rmkMtG", "W4dcJJ/dNaK", "WOhdO0a", "yConkWdcMq", "WRPDndG5", "fCoDW78rW4u", "W7r2hmorW4e", "rCk7nComW48", "W67cGeFdQ8oQ", "WOTxdWuR", "WOBcISop", "vq5qWQ5L", "AGDguW", "lt3cOmo7bq", "W6JcGv7dSmoN", "v8kiyrhcVa", "DvNdHmkowa", "WO7cUWLPWO0", "WRzzASktW7O", "WORdRwhcNfm", "W57cRcxdGqi", "r8oVWPJdNxy", "fHJcR8o0aG", "v8kfEt/cMq", "WQxcKmoTW6mH", "sCki8kMpRCoy", "WO4hW5DvW4y", "W5NcOarYBW", "fmkGW68Xfq", "WPBdMsddSW", "W7VcVYhdUGa", "WPSairSM", "WQ9AlCkrW74", "Bu7cTCkjW5O", "Ce4+W5tdUa", "vSkjuupcHW", "8yoaQ/c9O5lcNFcHGBNWMlo9", "bmkVW6K2bq", "vNz2WQNdGa", "8kcYSpc/SABWSkckzFcZGPy", "qelcK8kYW6i", "8yMtSpcPG7ZWRko08jgbVFglKia", "W7NdJ8k3WOJdTa", "W6nxW7HMW7C", "W4rtFwL0", "WRPxbmkFW58", "EMTau8oE", "W405WPxdIbe", "kYhcVCoSbW", "W7RcGSkPWO3dUW", "BSo78y6YGFcLKBddLq", "WPldPuD4WO0", "WOZcRKDRWOK", "WQNcNZq", "brCeWPpcTW", "WPJdMcZdOSk6", "DSoVnbNcOq", "WPZcHCoPWRW", "W4dWKiEf8yQNU0JWSish", "W7ryh8olW58", "W7ZcQG9Lzq", "udqNW4Ke", "oJFcTSo5", "qmkuCbdcNa", "W7GBvW", "pmkADstcUq", "W7BcH8kIWQxdTG", "WONdPurPWPq", "WRbQW4tdRSkp", "WP1fEmk4gW", "WRvPjSkpW7a", "DwXQWQpdVq", "EavDW7JcMq", "v8kdzHxcTq", "WR5xaqW", "fJtdSmkCAa", "aCkJW64ZfG", "hmkhtfK", "W4dcRrm5Ea", "y8oMW4BdLG", "gComW7m", "WOFdVctdTmk9", "W7fTh8on", "wcnRW7ZcHW", "ghTM", "W6vwW6j9W6a", "tGDcu8k3", "WR3cIMPCWRe", "WOXjACkVoa", "WQBcJvtdKSoY", "W5mNh0bs", "WPddGJtdQ8k6", "W7pdRSoQeHS", "AHOQWRnl", "maaBWORcVG", "W6hdG8krWQZdUG", "w8ojW68bWPK", "W6pcHCk/WPG", "W41VBmkpda", "u8oWW4hdNx8", "DGLNk8k+", "WOpcL8ogW78z", "zLGdW6tdJa", "W6/dO8kKpHa", "WQlcIIlcLIS", "WOhdHstdTCkd", "4PYMtbFcS8oy", "f8kPvh7cJW", "gCk7r1JcSG", "WOxcMmo2WRG7", "W5VcOqu3za", "WPXiW7a", "erdcI8keaW", "utKPW5Od", "WR1xeH0R", "WPtdNcq", "W79TqCkEWO0", "W69AW6vOW6K", "WQTzfb4V", "bCoeW5WBW78", "WQNcKCo/W6qM", "WPtdHcxdRSkH", "WP3dGx4hW7e", "E/cGSRxXHQcjl8k5", "WQGCWOnXW5W", "EWjvW7tcMa", "D07cSmkm", "WRddHvqbW74", "emkhv0dcGW", "4BEhY6/HTQpHTl7QNOq", "W6yrqCo4sW", "WRdcPeHGWQq", "W7OvxmomrG", "o1WvWO/cVG", "WQVdLuCLW5e", "qWTAW7xcKG", "vSo5WQPYt8oxWQ1/WQlcPmoN", "e8ooW6yAWPC", "W7jnW6L7W4G", "W7BcKmk3WOddUW", "rJ4OW5Kd", "WRqwW5njW4W", "W7lcI1FcTW", "4BA3YllHT6xHTO1j", "WOnusCkEsa", "hSoFW74qW5y", "W7bqW6HSW6O", "W7CCvCoOua", "W5LNFg9N", "W7W3cSopW50", "r0HCCW", "emo9b8oXWQ0", "8jorP/csG4BWMyk78jotVJC", "W6xcMKBdVmoR", "W5i3WOpdJbm", "c8o3cmoFWRW", "W583cfPC", "W68uW7PGW7y", "W6a2WO3dPqG", "f8ozW68QW5m", "W57cVa9Jzq", "A001WRza", "WRnBka", "h8ktCbJcVG", "hdFcVSoHgq", "W5LZW6BcU8oj", "W5BcRIxdHaq", "BYvD", "8jgXGVcPSQFWOlgKypcqSRa", "WPFcUfi", "W7X4cCotW4G", "quHky8oP", "WPtdJvK", "W4XDy19X", "WPqvgCkRsq", "WP1uzCk+", "o8kHBw/cQW", "quLNWRtdIq", "W5lcQupdPmoU", "gCkjqq", "tSo+lSowW40", "WRVcIIJdJIO", "WOuCW41rW5a", "WRNdSKu6W6e", "4BsY4BER4BsstSo/", "WO/XJz+en1BdVW", "8kwYHVcKSRFXI4gG8yssTVcUO40", "WRP4W5VdLum", "BSo0ECobW4q", "FtTqW6NcNG", "WORcV0n6WRa", "uxZcISopeq", "W5LgCezQ", "WPpdGvmzW4i", "qZGQW4WG", "aSk4W6GHbq", "W718h8oEW4K", "WPRcR1G", "cLajW7mK", "WR/cGSomW6K", "W4hcQJFdNaG", "W4JWT6cx8k2ZNSkS8yItJW", "W4aGuSo7yq", "uSoSW4xdKNq", "xemkj8oC", "fsZdOmkyva", "WRjak8kt", "WRFdHKGzW4i", "WQLIdWqR", "W5pWLQcz8y+8IfhWOico", "vmoZlmoiW4m", "WP5dDmk+mW", "aSococpcKW", "ACofkaFdMa", "W4RcSHtdHbm", "c2yK", "zCoBhHZcIG", "W4NdOSoRlrS", "WPihW4VcPSop", "W6njW6v6W6O", "qMyOW4VdQG", "BtX8rSkS", "WOhcHConW4e6", "8joXHpcyGiFWLygV8kEWKFgnKlG", "WPpcRJxdSuS", "WQXBaW", "rCotW5FdGxq", "8lEWVpczGk3WMzohWQlWRzo9", "CfhcLmkvW7i", "W5zYhuzp", "gCoqW68hW70", "WQ5Nzmkgjq", "mSkRW70OdG", "F8oVmmorW40", "WO3cG8o0WRqS", "WRaNs8oE", "krldNCkbxa", "ASohkGtcMq", "WO8rW4elW5y", "WP7cTeJdOCoL", "Fe4PWRvl", "oSkbs1ZcKq", "8yQYQVcsGAJWT6k/W47WPAcN", "WPJdLcxdRSkV", "CcT+vxy", "W7iRWPldQW4", "WR7cHSofW6G2", "bSo9fCoX", "dq0o4PQr77Qd8l+rKW", "b8oRfCoZWR4", "WPhcOexdPmoF", "WQaJW7nvW7K", "WPFcUdtcSvq", "WPRcUCosW4KJ", "8lAJI0dWMQkA", "EYddNCklxG", "EeWPW6BdUW", "kYxcVCoHbq", "WR/cQYJcQ0O", "ptFdRSo9eG", "WRVdL04mW4W", "W7SvvmobsW", "bCokW6SnW40", "WODuASk5oG", "WRRcOCkKvua", "xZbHyLm", "wMjYWQZdGa", "WQ9IW6ZcJSoe", "W7hcJCkQWOFdOq", "WQFdG8onW6mH", "eCoiCvlcJG", "W5uWWRddJse", "WPLqACk+mW", "vZ0GW5We", "W7xdT8oToXS", "WRrVaCkAW7y", "W7JcRmkGWPxdMG", "8jgXGFcPSRBWOlgTypcsSkq", "WP1cW6FcL8oy", "WOVdIuuiW6K", "bSooBW", "WQtcL8oFW7WG", "W5j9F2TZ", "8kgVImkCW68", "WR3dPaBdR8kS", "kXVcOmoRdW", "sCoOlq", "FuRcS8kAW5G", "8lIrMVcrKQGc8lcrSpcKOBW", "WQ3dGvmjW6y", "mazOW6pdRG", "oevSWPnC", "WOFdNJpcP8kH", "z8oniq", "W7xdS8o9", "wuDOWPLD", "WOPNW6hcSCos", "W45pW4boW6y", "WOVcMmo2WRqS", "sW5tWQWX", "WQvimmkuW7a", "z1KVWRTj", "tJ9XAW", "u8o+W4ldKG", "ormyWR7cQG", "WPddHtxdOSk8", "wSkryqFcSW", "er/dKa", "WQhcMJ7cLYi", "4PAY4Pws4Pw74PsP4Ps9", "uSkXW5xdNh4", "iafjWQK", "tSo3nSoeW4u", "veiVWPn8", "sr98C0K", "vWu7W5C", "WODqDmkMaW", "W7eXWO3dRWC", "tmk4j8oMWQ0", "a8kPW5aTgq", "8yccSFcTGORXJRcH8kQtGCk2", "sGjjWRL4", "WQjmimkPW7O", "WORdNu0i", "WP3cTr7cLH4", "WRVdK04bW44", "fCkaW702ea", "W6BcLCkOWPJdTW", "d8k4W6G0ba", "WOtcLIhcHG", "W6nQcSoyW4G", "8yEaMVcAG5tWQlkpW7tWQ5ki", "vZ0gW5Sd", "WQVcKSodWRSe", "cgb9W5Py", "D0FcTmoFW60", "WORGTQJGT5Si4lAm", "vcaGW7yx", "qg89W5av", "8j6sUVcRKBtXG5gX8y+YUVcsS7W", "w8kdyq", "WQizpJmi", "aSoBW7ix", "bSo5eSoZ", "b8oHw8o/WRG", "AqLk", "WQnSpXai", "pLWpWQJdMa", "zCkxrHxcGG", "W5dcTJJdNaq", "pFcGKlZWVOcZWPtWORgR", "oYdcOG", "D0NcSSklW5y", "tsrwD8k6", "lSkIW5KvbG", "mXOnW4/dOq", "8yoaQ/c9O4pWSOg88kcaGVgcGly", "xejpj8on", "WPLbm8kKmW", "WQ3dNqFcQCk4", "WObxs8k+rq", "WQhcHSoyW78Y", "8lQdR/crSPtWV4cU8locVY0", "bmkLqetcKq", "xGbzxW", "vICRWOnz", "W4u9WPhdPHa", "hMHNWQJdMW", "uSoPnSoxWOe", "W6DJxf9b", "WQxcJ8ooW58Q", "WR7cHSoyW7K/", "8ykJN/cwKQ/WV7c9d/cLGzm", "WOSwW5DeW5e", "F8onnHFcTq", "WONcIqxcRZ0", "r8kIW6KPfq", "iZpdOCo5cq", "8lsuK+kbREkzL++4J/c5LkJXHksN8yEuPpcSLi4", "vmkFzWpcSW", "WPVcVumOWQK", "jmoBW7OpW44", "wSo6W5ldMNi", "f8okCI7cRG", "w1qTWRrk", "EeW0W7FdSG", "WQxdNWxdMCoN", "lH0TWRVcMG", "a8kyW7uPeG", "W5ZcRbjHzq", "W6arsmo5", "oHVdKq", "8yEtRFc9K7rWWRPw", "W6xcJSkIWP7cVa", "W7H2fuC5", "W6xcHdvoDq", "W7zyW6fmW6K", "WRBdHuKEW4O", "WP4vW5jPW7y", "uSovW5/dLW", "WPXqW7dcR8oy", "vID0y0G", "jGCvWPpcPW", "wKm2WR8", "WOFcPuu", "WPddNZu", "WP3dKc3dPSk9", "tSogAYFcQa", "W7iVWPldPGW", "WQRcJmozW7SY", "c3TLWODe", "WPlWQ7oS", "z8kwEHhcGa", "wbDdr8kV", "WQ3cPfZdPmoZ", "WP3cPeSNWRa", "qCokFcpcPG", "WP1uuCkRsq", "BSozW5pdKNG", "fSofoXBcPG", "nalcNmk3W7a", "q8o6lCoaW4y", "WRNdLLiyW5S", "8yEaVpcAG57WQlkzW7tWQ5kh", "W5e9fv1y", "imkAW6uiba", "p8kUqwpcSa", "z0aQW6FdQG", "W4TwCKLJ", "umo+k8kiW4K", "W6NdOmoJoG", "WRVdKcZdOG", "aIyUW4qU", "8yccVFcTGPBdRVcqGzdXJ7kw", "qgb0WRddIW", "WORcO1nLWP8", "sazjWR90", "d8okCI7cMG", "WQXdaGaH", "x2bOWQhdMG", "mmo6CdhcUW", "WOBcVIpcRgS", "W7RcTYddIq0", "FqLxW7NcUW", "WRjmpmkjWQi", "WQ3dJ8oOWPVdPq", "8jorUX3XJ6cs8lAGPVgaGlG", "B8o9oSo9WO8", "bSoPDZtcUq", "W6jAdWqN", "FvuZWQHg", "W4LNW7ddRCok", "4BAW4BsEY7tHTRdHTRu", "WO3cJ8o0WRqS", "f8o8d8o9W7K", "amoVnSkfW4C", "W4juvCk2aW", "wqzrrSk2", "8kcYSVc/SBlcL/cFKyNWSycm", "rmo3W5NdHfi", "xZXHyLm", "WOVcTuldKmoE", "WRZcJSoWWRq", "WRxcLYxcHJu", "W7e5WOldRWS", "lGlcNmkHW7O", "8ykJPVcwKQBWV7c1aFcNG4O", "cSkrECkfWOe", "WP7cRMBcKK8", "vwDnxwC", "aSozFIpcUW", "gIX6Ce8", "W5v/W6fIW7q", "WOmaW5beW5i", "WQBcLCobW6ec", "BqnxW6NcKW", "W4BdUh/dRb5gW7LNWRtcLb8", "WOPGhYu9", "WO/cNWLZzq", "W67dQCoXmHW", "W7egemoKra", "ECoxiCo/W5K", "wW1jAmo6", "8yAaUFcuG44m8kscUFggS7e", "uCo2W5RdLL0", "WPXvW7hcRmop", "W4FdGmkHWOxdVG", "WPldU/cJOkxWKOcjWO0", "WPddHvai", "WRjakCkyW6W", "ifiqeSoJ", "WQnEn8krW7O", "WQnrmmkyW60", "rLjCw8kT", "tLjwxCkX", "BCopptRcNa", "dIy5WQ/dVq", "xNjZWP7dUq", "x8o0WQ1ZrG", "WOusW5DmW5O", "pN/cRSklW5m", "fCkiW5CqaW", "ibRcGmommG", "WRhcGZpcLIO", "jfisWPdcVa", "W5BcQWldGbq", "BCoela", "WPZcRKldVmoV", "C8o+omoxW4i", "dSokW4CgW4q", "qbn0WQv3", "W5xdLttdTCkN", "xuXirSoO", "W4TvDgf0", "4PQA77QN8kUrVpgdKzxXJ7kc8jkZQa", "e8oRW7Gp", "zWVcSmkwW4S", "W7O9WO/cPrW", "veHYWPBdHG", "4P+O8kksPW", "mGagWPdcVa", "8ykZH/cuSjlXGOcQ8kwJI2a", "e/cuGRm", "WOvYrJGB", "CmoAW6i", "WPlcIMbKWQW", "sc14Afu", "lcxdRSkkwq", "WP/cRYJcQK8", "qCooAtdcOa", "uJy0WQtcMW", "kaldVSkeEa", "WOrwtmk+qa", "W7emrmoOua", "W7jqW7HLW6a", "WRdcIu3dN8oB", "obWrWPVcHa", "pIldOmoJbq", "W4lcRdNdNaq", "wCoddaxcKa", "W6vRv3ji", "WRmEW5TaW7C", "oCoHEJVcRq", "kmkQW788wa", "EZT3Cmko", "WPr6hJm2", "pslcOCoJeW", "8yMtRxhXH6oDW7W7", "WO3cHmoZWRa5", "wCoSWRBIM5lVUBJWVlob", "trvr", "WPFdRNa5W60", "WQBdHtpdOSkV", "WPuwW41bW7G", "jbOBWOJcJW", "W5T8gK5C", "8lEWSVczGkxWMzor8l2XG0C", "DIG2W4G", "wmoWW7ddH1u", "n8o3W4GVW68", "b8oGeSo3WQS", "bmoYW6SrW5a", "WPHhsCoI", "cNDJWOrh", "bb9abG", "WP5cW7a", "BJBcQ8o5aq", "WO3cO0L/WRW", "8lQdQVcrSPVcQFcrSkpcNG", "W5zdWPauWPS", "WQDakSotW7W", "eWJcKG", "rfmI", "8kUHUVcWK74B8j6IMpc2SAK", "EmoCpqhcTq", "WR0DWPpdUay", "iCoAW786W78", "C0NcQCkEW5y", "W7lcLmkZWONdOa", "rbnzxSkw", "Dh3dOCoGeG", "W43cVKRdSCod", "trPeeSk3", "yL4MWQZdQa", "FIDIAu0", "WPRdNZi", "WP7cOhNdUCo/", "W60Xff9y", "xe5hCSo+", "w2XOWQhcJG", "W7fyW75TW6a", "4BAB4BwVecm", "AuOiWRX0", "WQZdGrlcS8oi", "wfiDeSo5", "gML3WPPZ", "WRL2W47dPGa", "W4ddVxldPHm", "krpdMSklxG", "W4RcNbj7", "WPlcQehdRCo+", "vSkXyqdcOa", "a8kPW68N", "bmkJW7iWeG", "r8kAW7uGeG", "WPXvW5FcQ8oi", "sXryW7dcHG", "W6xcOaq", "Bey1W7xdVW", "uCo2W5JdLW", "gqZdImkSW7O", "nX/dH8kB", "W5RcTZhcIbu", "W7/cICkRWONcSG", "ptFcVmo7bq", "WOBdRGpdSapcT0ddKW", "WQXraYaQ", "W7NcGexdT8oL", "tSo6mmojW7q", "w8oAW6znW50", "W6dcOJHfqq", "pGldGmkksq", "WO/cVWf7Aq", "W7e3WPpdVqG", "xYy/W5yc", "8ls/SKbhBmo1", "W5lcTZFdKbq", "vSku4PIC77MS8lcGH/cSGPK", "jdbMW7Of", "WPVcH8oVWQu3", "xG5rWQ5/", "8koXVSkC8yYcLVcQK7/WLkoD", "ugr2WRldHW", "cCk/WPZIMkxVUjZWSlof", "8yAaQaxXIQcT8kscH8oo", "W63cR8oGpGW", "rXBcOSk6ga", "u8oEW4ldH2e", "os9zWP/dGq", "uIfOW4mN", "u8oRnComW5u", "WPjcW7O", "y1ObW63dRa", "WOrAvmkqBq", "WObcw8kLja", "fJFdUSk6fG", "AuGZW6VdSq", "zmoDoKK", "W5VcOazUpW", "uKbb", "8k6XNVgoSPXa8kwdUFcCK74", "ycOIW58p", "vSo4W5pcNtm", "W5ZcPHvLyW", "AJKMW7y+", "WPdcR0NdRmoa", "WOhdMttdQSkS", "xMb1WRxdJW", "yuHuA8o1", "ueXuC8oL", "WP3cM8kJWQC3", "uH7cLCopWP8", "WRtcGcBcJsS", "W6ZcI8oFW7GJ", "bSkc4PswwCoY", "vf9lCSo8", "sc01A0G", "wGdcGq", "WRFdIfG+W5i", "D1JcGCkqW40", "p0il", "WQZdGvmjW44", "EK4JWQHO", "W7SgiIm3", "WOlcIIhcJZ4", "W7vCW75/W6a", "B8ojlbBcNW", "WOD7mZa7", "wsD7C0q", "sZjwq3q", "lGi/WO/cGG", "WQFdMCkl", "avmkW78J", "W50ZhWLU", "qmk8DaBcTq", "W4BdUXfiWPm", "v2BcGmosWO0", "W7vqbCozW4i", "EuW1W7tdUW", "8yAaKVcuG7hWLPgaWPxXHRo/", "oHCqWPBcRW", "DqBdMmkoqG", "W45xz018", "vb3cJmkihW", "W5VdNdhcSW", "W70sWPVdVZW", "vCo7WQH8qG", "wrTkvW", "WQnAySk1FG", "hSoSW6STaW", "W4GTWPpdPG", "W4a2eKDA", "r8kdCay", "WRFdH1qmW4C", "8lIrQbdWVOcH8lcrOpcKOyW", "W793ga", "vGzrWOP1", "nrpdG8kCvW", "WONcHeLSWO8", "WO3cJu3dUSoT", "lbJdKCkDgW", "f8o2cSo7WRC", "W742WORdUq", "h8kCsvldGG", "usCZW4C", "xc4/W5y", "8jgGRcBXJlkV8kgJH/gjK5e", "WQWAW4C", "CK7dQCkAW5m", "WOmlW5DaW4C", "WO3cOKtcT8o7", "WPiUw/cvG4e4", "xmkwuc3cTq", "qI4MW4Ct", "WP/cRYlcT0C", "wSkGv8kLW6G", "W7vCW617W6y", "W4qDyuX2", "W5nFW6nSW5C", "cCoakmo5WPm", "8yAaPaxXIQcG8kscTFggS7W", "xenby8og", "W4yrqmoHwW", "8yEaTpcAG4H28lUXJNi", "gvvQWQpdJW", "W4hcLtFdMGy", "W5xcTItdNWa", "E0GQ", "WP/cRZxcRuC", "WPLCuCkZsq", "x8kFyXhdVW", "WOFcTwxdPSoS", "jSo9yG7cVa", "8jgZR/cyGAVXIBos8lEcT/cIK5i", "W61xrHOR", "WRD4W4hcQI8", "dCoSpmohWO8", "WOpcGCoXW4uJ", "WOX4C8kSoq", "8lAJHpcLKjZWNzkE8y+tP/gbO6S", "W7ldGmk0WO/dOa", "W4lcHSkOWONdGa", "qCo5nCoa", "WRFGT4NGTzVGTyu", "W5NdMCo0ptW", "WQbgnSkqW74", "qSkIrJVXI4ge", "z1GZWQ5m", "WRnXkCkLW4G", "emoEFJdcTG", "W58nWQBdOGS", "W44szuCW", "4P68vb7cOWW", "W6yrqmoHwW", "xwbXWRxdGG", "8kwcVVcBOyBXJQkh8yItJFcrKRy", "hGZdImkK", "tI1TCW", "WOVWQygk8lAbKWtWP4cZ", "yvq1", "ASkFrt/cTG", "WQlcGdlcHJq", "vwP0WRhdJW", "WRFcILSkW4y", "xealzSo8", "ww49W4JdIa", "p8kgW709fq", "WRFWQ5oG8l+XMWJcGq", "WRvCkmkjW6W", "B140W67dUW", "8ykJQVcwKPBWV7cnaFcNG4u", "mWVdVCoFfG", "WRRcL8kIWO7cVa", "idxdRSo+bq", "w1y1WPfR", "lmooorRcLa", "vZWHW5ir", "wCkLWPy", "eWhdMCkwW6W", "CW5Xu3m", "ACoHnHxcLW", "aSowW78oW5u", "FSoDmbBcLG", "W6aavCo/BW", "htZdP8kOBG", "wVcMGR/XJikr8kQtPpcuO48", "BWLAWR1C", "WPtdNsJdPSk9", "WPhcOYJcU1u", "WOX8qq", "b08D", "WQ5Bh8oGua", "W7VdN1FcRCk8", "WR3cJt/cGI4", "W4ZcQbbJAq", "xmkvyGFcVG", "W6xcM3VdT8oV", "irCgWPZcQW", "WQbXd8kUW5O", "W7q2g8oxW5G", "eSk/W7K", "W7JcNehdUmoU", "W6D2pM5s", "vSkBqfBcKa", "eSoiqeFcIW", "ktRdLCkDxa", "W5mvDSoFDW", "BLJcOSknW4S", "W78SWPxdUHO", "WQHfeWu6", "WOWrACk4lW", "omoFW6Cg", "8lIJRVgmO6NWUBkgW4dXJOgd", "W53dUsxdGq8", "W6ZXHAk58l6rSFcYGjtXGkgN", "WOSrW41eW5W", "t8okDsBcVq", "sSk7W7KMwq", "WQ5DmmknW6W", "pbpdGmkNxG", "d8o5omomW40", "umo6W4i", "e1/dSSoN", "WPNdSKqHW5G", "W4r2seTs", "vLPxA8oP", "lZBcQSoFbq", "WO1cW7hdO8oO", "W6ZcIW9Gvq", "FatcO8kEW4S", "WPhcOeddICoU", "ESo6W5JdH3O", "WOCEW4y", "kd3cVmo6aq", "qsOGW4ut", "kJ3cUCoJda", "WOmMW5fj", "W7ieWR0", "aJCVW4eN", "8yYqMCklW582W5W", "aCkbuupcHW", "8lIrUpcrKPWc8lcrSVcKOAm", "zuCIW6BdLa", "fCoeoYpcOq", "agC6BG8", "bCoBW7GvW5i", "W4WJzmoDWR8", "zWjAW7hcGW", "amo/wCoZWQK", "W7lcHmoNWPVdUG", "W4hcVgNdNrm", "WOHDpCkUmW", "WPBcHJ3cHM0", "eFcMGA8", "x8oRW4ldG2a", "WQ3dGqC", "W59bDa", "sKX/W5/dLG", "WPTtEG", "galdMmk8", "WRzbASkhW7a", "W505D8kGea", "qWjew8kS", "A0qI", "r2WfWPv9", "xSkFCG", "rSkvoHdcVq", "W4KxWRxdTSkt", "gmkjtfVcTW", "B2aPW6tdSq", "cN9LW7my", "8lYWT/c+KiZWVicOW4tWSykI", "W5hdQWW", "aKGsWQzJ", "ttbzWPPE", "W5H+CfP3", "lVctSyJXI7cG8lgaRmoy", "8jgbQFgdK7FWPOcE8jgqR8oz", "WP/cU1zKWPq", "W6j9dSoBW6m", "mM3WKiE2mCkf", "DmoCer3cNG", "4Bso4BsI4BwEW7RkVa", "WPXtW7FcPSop", "WQfzeuC", "WOTCsCk6yG", "cqil", "Dh3dOCoQcq", "wNfdWRFdNG", "W7L7cCkrW44", "E0PPWO/dMG", "WQTmimkuW74", "i/cML5NWUOsHWRVXJAsp", "W4dcVdJdJcW", "eSo3fCoMWRW", "qmkvEXdcTW", "WO5As8kRsq", "xSkvDGdcUW", "tWfdu8kK", "WOdcPttdVKK", "8ykJQaZWV5kl8jMqIFcNG6K", "vGTsWQP1", "WQTFca0", "WP7cR3ZdVGG", "WPjqnmky", "W77dRSoZmri", "e8krWQfAWOm", "W6ZIJOlVUQWfWP/dQW", "WPiWcuzi", "eCoFW6mnWPK", "nrNdGmopxq", "WPdcOeJcQmo+", "b8onfmo+", "8ykZOGBWN5o88j6bI/geGAa", "W58WfuHu", "8jIYSCoT", "px/cUSoGtq", "EKHbW6VcNa", "yGlcNSkupW", "WPRcKSoUWRu7", "E2hcRSkB", "xGzvqa", "W5HxF0X1", "WRpcGd/cLYi", "W7/dTCoWoGW", "WOjBvG", "WR7cJ8kw", "FhyNWQHc", "gSoSk8o3WQO", "DY17C0G", "bmkPW683hG", "sxW/W4WX", "uazjWRHW", "dX/dGmkdxG", "yqfOW7VcSG", "gKruaSoZ", "WQbRW7VcMCof", "x2HZyLu", "rSo0DSkAW5q", "WPPBsCkWtq", "ogxJGz4t8kk2Ro+5JW", "W4JcQaL5lG", "W6jwW7TNW6K", "WOnquSkSqa", "rCk7hCokW5y", "W6dcICkZWOtcSG", "WOlcQYxcTuC", "WP3cPeH8WPG", "WQxdNstdPSk9", "kmoIlmotWPu", "uCoWW4tdHhi", "WQNcQSofW6O8", "WOPsW6/cT8oo", "W4hdUhxdRbm", "8koXOFcYK5/WUig78ygaICoM", "WQXvdqW8", "WOvuFSk+mW", "W6Cvv8oO", "jdK+WP3cPq", "cmohFMlcQq", "W4BcQZO", "W5/cLwVdQmo4", "W7pdO8oMCr0", "4P+gWRGYW7VcRq", "W5WZf3Xp", "AGbMW7hcNW", "pGldL8khuG", "zmo0lSolW40", "WQ5zcb8R", "Ff4VWRrc", "WPuZW4fxW5O", "WRjbmCkqW70", "g8oBW7KqW5y", "WRJcRCorW6Sd", "td9MsSk7", "W7ddIGdcQCog", "g8oBW6qxW54", "AuG3W7BdTW", "W6/cILBcT8kJ", "WOXjACkVja", "W5WZf2Hz", "BWbqW7NdLG", "W5JdH8k2W6rW", "yWvuW7JcGG", "WP7cJJZcHG", "W4hcVdFdIXu", "p1BdMmkgvq", "WOjGtHKm", "WPniW6RcRq", "WOZcLSo0WRa", "WP7cTdFdHHq", "WOBcSuK", "jryrWPVcGa", "fmoDkSoiWQO", "aKGsWQi/", "WRNcNcu", "WRRcPffMWPe", "W7pcGvFdQ8kK", "rCoPECoxW4q", "W5L3gCojW6K", "4BAsYlJHTB/HTk4D", "f8kltLlcKa", "WRVdLMKfW54", "qwbOWQldIW", "8ywqJCkGWOi7W7u", "WOHnuCk6xG", "dCoZwahcGW", "WQHsrH4M", "8ykaQ2VcJq", "WRZcIJ/cHdm", "xaLjW7hcJW", "FtnuWPVcOq", "qConFJBcRa", "AuivWR3cSG", "amoBW7GaW5i", "yMWrW5ddLa", "yqNcNCkmhG", "kYBcUSoOeG", "u8oZW6NdN3O", "WPFcPueOWOK", "AKlcS8ktW5O", "E1bbWQ7dJa", "pfi8WPRcVa", "tYDcxG", "W6JdPmo3kHi", "yvNcM8kgfq", "8kgZT8kw", "mGaGWPFcUW", "WPNcRL7dV8oR", "8lYWRFc+KilcPFcxS6RWS4c9", "uGtcJmkicG", "W7bPW7v7W48", "zuC0", "WRylWRK5WRq", "WOJINzpcOmkffW", "jIBcUSo9eW", "W6zWd8oAW4i", "nWVdMSkiW7W", "W5O3w0bq", "FbPNW7Sp", "xWf7yu4", "tSk/W4hdMMC", "lXtcP8o/bq", "8yEtUFc9K5tWQRkwwpcMSQu", "W7RcHCkJWOxdSW", "rJS3W4e7", "xrnjWQ5J", "W6nTcSorW5C", "qSkzzre", "vWy8W5uz", "WPGhW7xcOSou", "8ykZGaBWN5oZ8j6bPVgeGy8", "W7f4pSooW5G", "EavDW7JdLG", "4BAL4BsPmCkg", "WPVcQctdSeu", "BJdcR8oUcW", "WOHbuCk6xG", "8yEtQSkG8yMbN/c4KyPg", "qCoMDdtcPG", "cmoyDcBcQG", "WO5DrmkR", "WPiwW41rWPS", "qZfzW7q", "W7NcJKBdUa", "W6ZcTCocW6G2", "DmkDtW3cMq", "WPpcRNNcQ1q", "WQKweGzU", "prNdHSkywG", "8jwsTFcRGOdcGFcIGRNWNioC", "WPZcRZhcRuO", "WOewW5alW4a", "WPNcRHFcQHu", "w8kCtfRcHW", "FSonkWBcLa", "8jgGI/cCS4pWTRgXW4/XI5gM", "Y6tHTl7cRdpcRW", "W63cMKhdSq", "f8kmqexcKq", "fGtdJ8kX", "EeW3W67dPW", "sWjav8kT", "wuOOW7ddUW", "WONcJ8o1W78Z", "h0ddNCk3W7y", "WO1uuCkJoa", "pb7cR8o/bW", "weHD", "WRTuBCkMlW", "r/goKPdWRjg38lYZG/ctS4q", "f8ketepcMW", "W5O9WO/dVGa", "WQxdJCogW609", "Ev0MW7BdQW", "xrXCxCkI", "fSoWe8o/WRS", "D0dcS8kqW5q", "fHDEWP14", "W6HyW6vLW5a", "WPpcRsK", "W7aBu8o4tW", "aSk0W6GHbq", "F0FcRSkEW4W", "W6BWLz+YW7FcRse", "W7NcO8oyWQiK", "BviNWQ4", "vIuJW58p", "oabzWO/cOq", "WPdcOeG", "hGldI8kRW7K", "W5HDz0f0", "f8o8W57dLNa", "h0RcImkmdG", "u8kuDHxcOq", "yLm1WQ4", "u8o0lmoxW4i", "iZFcOmo5cq", "xSoEDatcOG", "tWPev8kX", "g8kkqexdGG", "amoIWRbKnG", "zeWWW7hdSG", "xmo6W48", "AKBcHmop4lAH", "wZbPW5q2", "W7JcJSkIWOJdMa", "BuRcOmkA", "WRDCk8kjW7O", "W4hcVdVdHXu", "WQbFcWW6", "W7mwbW", "cXJdMCk3W6W", "cLmeW7WLWPLPWOzHlH9A", "BKe+WRlcSq", "WO7cTe3dPmoJ", "WR/dG1G", "xadcLSkzba", "mSohW58aW6u", "8kUHQpcWK4tWK6cr8lIsS0K", "gsCUWQ7WVPke", "WQNcKCozW6mH", "WQ3dNr/dJSoi", "W4f8W7rTW6e", "WP9qvSkQqa", "W6mvqSoPrW", "8yceKEkaQ+kzIo+7SVcEHOpXHiAz8kgfRVgcTBy", "W6yrq8o4tG", "gIXGDuG", "q8o0n8orW4q", "i1CNWRrq", "oJVcUSoHbq", "xw1ZWQtcGa", "orShWPBcVq", "W7tdGrGOW5C", "pKBcOSoFW4S", "WPVdKcJdQ8kB", "AXTkW7hcKW", "WOpdL8oPWQj+", "WP3cPeH+WPG", "qWhcKCkdcG", "8ksJIpc6Kzvx8l6TU/crSyO", "WRrKiCkoW6W", "W5afkSo+za", "hupcKmoLW5i", "velcOW", "W6pdNwldKxi", "W6j8gmokW4e", "ptFcOmoPlq", "W4FdVe5YBa", "WPRcVJlcRLu", "zWHCW7ldMq", "nqxdKCopsa", "aSomDIZcHG", "WQe0q8kJvq", "xadcI8kEda", "8lIHLpgfGPdWP4cp8lAtN8oL", "8j6WTVcSS4Sf8lgaOVgdKk8", "WRxcL8oyW6KY", "qbhWMOog8kIYIpgiKB8", "tSkoWR0JW5K", "W4/dSWhdN8ol", "W7vnW75SW6q", "wXxcNW", "WOVcMmoUWQu7", "B0PfW4JdVW", "WPJcS0pdVCo6", "vc1IDe0", "W7veqW", "a8ofocpcKW", "WO3cHCkGWRCX", "o3O1W7rs", "W4HhD051", "yr5a", "W6b4h8olW4G", "vt17yW8", "WRldGdFcGIK", "8jwsQxNcImkbrW", "cHzvrSkI", "gJJdOCocDG", "bmkKW70W", "8j6XOpctGOZdLVc4S4/XHlor", "WOPtmvT1", "WPusW4ra", "WPtcPttcQuC", "aWpdNW", "W6tcM0tdSmoT", "WPRWMyw8WP/dOCoQ", "aSohW7Og", "vWRcISkOda", "WPZcN8o1WRW8", "W6hcPKb7Aq", "rCoSkSojW4q", "WR9Asam9", "8y6aUpcKSAZWRRg3opgiS4e", "W4TgzvO", "pKRcOmkEW5y", "lmompqFcMq", "8yccVFcTGOFXJRc48kQtNVc4SRe", "W7NdOmoWoHK", "WObCsmk6wa", "ysW9W4et", "W7OvwCoHDW", "wmorkby", "uCo2W5RdLG", "cgb9W5ig", "WO3cH8oPWQiX", "W57XJAkX", "WP/cP09PWO4", "nSkhDXRdLG", "WQtcNsJdGYy", "amoxW64gWPC", "vInKWQHt", "Eb8BWONcPW", "c8k2fCo7WQK", "W79FAu1s", "W6pcJSoBWRG", "D28lDCoP", "a1ldJmovwa", "W7JdJ1hdSCoM", "WO5OW6ZcP8op", "8joXL/cyGjJWLyga8kEWMFgnKje", "WPxcRKxdPG", "8kcZTVcuGjdXHBg1W4lXIAon", "dfnFWO5iW4rGWQW", "8lAJOedWMkcb8lMtOpgeO54", "j0qMW6ZdQW", "Ar5wW6JcHG", "cmk+WRWXbW", "vSoRW4ldGq", "WQJdJvKiW4q", "W508hK13", "WPi0ffXt", "WO7cMmoYWQy/", "rZSOW4Ty", "vqjoWRHW", "W4anqmoO", "orT0WRdcQW", "pGtdOmkhtG", "WQlcHJZcIJi", "W47dSXZcU8k8", "qCoFDglcQq", "lWy5WPRcVq", "WR5OESkbmG", "WRRcPSoNW5yG", "8yYWQFcSK7dWUQcB8j6IRse", "r8oDfWpdM2RdMmkQf8k6E2OV", "WO3cJ8o0WRqW", "W49gzu1I", "WOdcUsFcQK8", "W5NcGexdT8oL", "vc81AK4", "e8kquvlcKa", "pt3cU8o/aW", "uSowpmowW5i", "tHzZxCkU", "WPPzCSk9fW", "gSoYW5FdNwy", "WQRcRftdRCoi", "tWvdxSkM", "WO7cKSo0WRi2", "Amojlbi", "W4eZheW", "W7tdM8kAWRTI", "W4JcUW9ICa", "WOhdQwtcNfi", "e8onW7KcW5a", "ertcJCkihW", "uetdP8knW5O", "W4pcPGn2Da", "8j6WKFcSS4tWLikSdVgdKk4", "rHDEvCk3", "x0jd", "orNdKmkw", "BCo+n8orW4G", "WRxcK8oo", "WPtcGcBcJsS", "zvBcNUkzUE+4TpcEOPS", "W5SRgGrC", "hqCe", "WO5gW7hcP8oy", "4lwG4lsjqoc2PUc3KG", "W7K5WO3dIW0", "ya1vW5ZcKG", "WRNcHeKfW44", "W5vAW6n7W6a", "eSo5eSo6", "h8kkuepcIW", "FtLuW5RcGq", "AtGZW4OP", "WPGtfqLy", "vGjkWRH9", "emkbsvlcRa", "WR9qvCkZvq", "WRrniCkzW5e", "WPBdNI/dSCkR", "WQNcNXRcKWS", "ACo9kH8", "WPFcUcxcSuG", "4lEn4lsI4ls74lAP4lsg", "dHNdMCk3W5G", "jSk5xv/cQa", "zYiQW5y0", "W4FcQZ/dHq", "WORcRL58", "nSkcuG", "bmkKW7uQea", "v0Hxzmo+", "WPNcUuL9WO0", "W4xdL8k6W7hdTW", "W75nW4vNW6m", "WRBcIIxcGc8", "E1ZcTmktW5O", "W6pcKSk+W4ZdSW", "W53cRaf0Da", "WOzqEq", "aCocjKBdPW", "W6yruCoUvG", "mSkIW7CQga", "WP7cPsxcV1i", "aSkzW64O", "ewn1WP93", "W4pdPa9XzG", "WPOFpCkAoG", "WOftW47cPSoo", "bmknvKlcJG", "WRH1Cmkoia", "yaCd", "lHldNCkamq", "ss17y2W", "W4riqKjD", "pdBcQ8oPlG", "8jorJ/csG7VWMykX8jotNVcyOyO", "W6dcGCk1WOJdTW", "W7Krq8o+qW", "8kUHUVcWK6WB8j6IGVc2SyG", "WQlcIZtcHWK", "uejkC8oP", "WRZcK8kfW6i2", "8y6aQFcKSBBWRRgx8jUtGVcROle", "W6rIW47cPr4", "WQxcJCom", "W6nbW7HSW7C", "W7ZcPLy", "W55gDfPD", "WQZWKyoOkCob4BsT", "W5reWPCDWOa", "W5ZcNwhdOmoS", "W6uSW4hdVGW", "d8okDIC", "W5WZguvy", "W7S3WOy", "WP3cUd8", "usPGWRpdGa", "WRHjWQpcPSop", "WOZcKSoZWRi", "W6BcLaOTW4u", "gJm7WPZcPG", "W7n4WOFdPrS", "W5WIySo7zq", "8kUHNVcWK5/WK6cr8lIsHFcNGOe", "WQBcIIpcGci", "AmoPlaFcIG", "aCoWb8oM", "8yccRVcTGPJXJRcx8kQtLVc4SPG", "sX9cvCkQ", "tx4EW7Ce", "4PsZ4PsT4PsK4Psh4PAm", "WRZdNZFdPSkI", "sZ83", "nHyqWQ3cQW", "d8oTfCo7WRO", "8yAaNaxXIQcT8kscNFggS5W", "W7lcMmkZWONdOa", "faZdKmkeW7e", "vujwASoT", "sJTWDvu", "W7xdQmoGoLa", "f8orqYpcHW", "krNdHSopva", "WPXdCq", "WOZdJeqNW5m", "WRdcGerBWQS", "WO/cHavZAq", "W4b4wWS", "W6tcLmkIWOJcQa", "W656DwTG", "bCkhuexcGq", "cGldJ8kXW7a", "WRdcUv/dJmoB", "ualcNCkKcq", "W7FdQmoPoGO", "q8o6W47dHW", "WPT8Emk5jq", "WOH4wW", "W7/dImoQore", "WP5vcrSR", "W6NdM2BdL3u", "WP7cHSoBW6aQ", "e8ogW74gW4u", "usa8W4Ct", "4P6d8y+cUW", "W7Grv8o/qW", "WRxdILiAW4u", "W7euc1bh", "8y6aRpcKSyXGwZy", "W4LDDmkKpq", "WQdcJmom", "rNDQ", "WOP2DfXX", "WPNcGspcLqm", "W6dcHokAQ++5OVc3ORlXHRgd", "WPVcMmo1WQm9", "WRTuACk4lW", "u+kEOsBcGSoR", "W7KDxCoOvG", "jHFcMmoFkG", "W4lIMAhVUO/XIygr8lIrKpcKSi8", "WP3cO0D8", "oHChWOZcRW", "eSkKFadcVG", "gmolWQCUW7m", "W6DUf8kcda", "hSknbvpcJq", "W7NdRSoQkXS", "jryDWPhcQq", "pXpdUmkgvq", "W7mzWPxdVHS", "W7FcN1u", "rgBcN8kVW5K", "WPrmnmkrW6y", "sCo3pmo2W5G", "8kcZPVcuGllXHBgAW4ZXIAoa", "tmk2spc7Sy4x", "W7L0cSoyW4G", "WQGCWOnPW5W", "qWdcMCkogq", "WQrhDmkSnW", "BHtcP8oHbq", "W7lcJSkZ", "WONcT8oaW6eg", "WPddItxdOSk8", "eSknqwpcHW", "WRXDECkynq", "WRtcOKi", "WRNcNYxcIIG", "WO7cMmoYWPq/", "W6tcJ8kYWP7dSq", "8ykZH/cuSjNdNFcEGA/XHign", "kGhdMCkKW6y", "fSoSa8oGWPq", "W7/cGfBdOa", "rJaYW4W", "xajXWQj/", "qCkbxY3cRa", "DKnoAmo1", "AuyPW7tdUW", "fCowW6Sx", "zCoBEbxcNq", "t8kjWR0ZWPG", "bX/cICkGuG", "WQFdLfG", "tZGRW4G2", "bd8yWQNcNG", "yComnmoCW5m", "W4T9WQnDW5i", "WPHaW6BcISoz", "vuDCWQuX", "AGLDW4NcKW", "W7pcJL7dMmoT", "qXbshmkG", "qqtcJmkzca", "wCoRW7JdSei", "W5RcUZtcHGi", "4lwvfxxcRuu", "kJRcT8k9tW", "8kwYLpcKSPlXI4gf8yssI/cUO6a", "WOZcR09MWPO", "eqJdHq", "BgFcPSknW5G", "iWldVCkbxq", "WRVdIKK", "aSk+W4GSaG", "sIPyWRHI", "wCo2W4xdMMa", "lHNdQSkOW74", "lHxdSCkytq", "B8obkblcLG", "DqmbW4aq", "m8ooAY7cTG", "lZBdRSobcq", "WRddNYVdQmk3", "W7lcJJVdKrm", "mHWa", "te7cT8ktW4y", "xmo7W7GrW5G", "qsC9W4q3", "WOXaAmkVjq", "f2GVj8ki", "W63WKQ+577MMrh/WMzE8", "W6u8WOJdPa4", "gSkbs1ZcKq", "WRGRWPhdPr0", "cqtcT8obeW", "qd4IW5q", "EfmIWR9k", "WPhdPejpWO8", "F1/cS8kn", "WOruECkJnW", "W4hdPHz5za", "WPmhW4PjW5W", "yIBcQSkKpq", "stq/", "FWVcSCkEW5y", "rXbEu8kQ", "WOjhu8k0vq", "WOvEEG", "W4LtyvX5", "8jgZVFcyGB/XIBo+8lEcQ/cIK7m", "b8oQmSo6WQW", "tCo+kSowW4a", "8jwsHNNWTikG8kkcHsu", "W4pdLSomhIy", "WP9qvCkZvq", "W6HCW798W6C", "fmkhqu4", "WPiwW5Tr", "gYdcISkFaG", "W5vRgCoqW58", "B1O0W6pdUq", "qwfJWQldOa", "W7lcNuS", "jb0bWO3cRq", "eSkVW5KZaq", "WPOcjX0+", "W5NWLkkc8y2IJ1fy", "BCofpq", "adpcO8oO", "W7jrW7LKW6C", "haldJSkYW7q", "E14VWRuV", "WP3dIUkwICogWRi", "C8k0ucBdSG", "8lEWGVczGlBWMzoU8l2XLVcKO5a", "emoub8oGWR4", "W69BW7L9W6W", "W7BcJmkUWO3dOq", "dmk4W7mVwG", "ueXqySoR", "nt7dUSkUAq", "W4VdLmofeZC", "WQDqCmkV", "WPVcUfvPWPO", "WPxdPK92Ca", "Fca8W5SV", "W6ldL8kGW7fu", "8lwZJ++4NGG6WPBdPW", "WOesW4PlWPS", "W6NdR8omfbK", "W6XksxbN", "WRldGvmkW58", "kZpcRCoL", "iCknbvBcKa", "WOTcW63cP8oy", "W5K1F8oUsG", "W7L7hSolW4q", "wMDZWRldHW", "xeXaj8oF", "WRTtfaOR", "W7qXWPldVWS", "W6rtFe0", "BWfC", "W7jvW59MW7u", "eSkHW74Hbq", "WP7cHSoyW7K/", "EZXHyKW", "8lEWQpczGi0+W6VcRa", "sJSBW50q", "WQXgaXS", "z1W/W7q", "EvK3WPnT", "FaHCW7NcUa", "EGrmW7dcLa", "WQmRwmknWPG", "W6hcNsPWtq", "xHDirG", "BWbcxCkX", "W7/cVq9gzW", "WQftca46", "hLPbzCkI", "waSwW4yw", "W7BdJmkeW6v9", "bCkns1pcRW", "cmoFoHxcOG", "W6yTWO7dVGW", "tCogEbBcIG", "WORcOLjKWPG", "W4GvWRpdSmkl", "WOBdHsddQCk0", "vqRcJ8kdaq", "F08PWQ5a", "pJ/dMSkjva", "WQnBza", "sI3dJ8oRW6i", "iCozkSogWPu", "uCoUnSorW4q", "W7q5WPhdVGa", "ELTOW7a", "s8kFyaBdSG", "CHLyrmkx", "xuXnA8oz", "WPrfqa", "hmkaErxcQW", "gCkgvG", "iCoFprhdLG", "W4eoCSoREW", "W7ZdRSo2kb8", "8lgJNpcOSQPb8yAsQCkR", "qa95BxG", "W7CBxSo5rW", "fSokAsBcQG", "dmo5cSotWR0", "W5LAFL9r", "bddWRRE4bCoH", "zCo0o8oJW5S", "aCo5eSo3WR4", "z0W0W7hdVW", "8kcYSVc/SBNWSkcV8kYcNYe", "mGehWP7cQq", "W6PHW49kW4K", "vSoDzHFcOa", "Bu7cQCkBW7i", "WRjikCkn", "vv5KWR3cOG", "qbdcL8kzca", "vuRcI8kDaG", "vSoQW50QW6m", "WQTmkSkjW7y", "WRNcKCoh", "omolW6CbW5i", "qai3W4af", "wCkvBa", "W67dPmo8kW", "W77cJKldRCoG", "xJfDrwm", "g0aaaCo1", "e8ogbxJcKa", "WP3cQsxcQ1q", "WR5DdCktW7K", "WPLbqmkTyq", "WO3cRLr+WPG", "W7iDxSoP", "EmoniaC", "WRxcPJ/cHsG", "WOXfACkVja", "aSokAZBcPG", "xWdcJ8kEaq", "8jgbV/gdK4dWPOcv8jgqGFgaKA4", "CcfX", "W6ZdPmo2pbS", "8yQYUb3WPOkO8lkdSpcNOPi", "EuWPW6BdKW", "WPvbBmkXsG", "zsdcQSonkq", "emoxW6ygW5K", "s1/cJmo2WQm", "WOXaia", "W5zYnKXz", "WPtdGLCDW4G", "yruEWObJ", "WOLuuCk+", "BCoDpbRcLW", "xr9jWQ5J", "yf0NWRqf", "tGjpWQH0", "WRrDk8ksW7e", "W61CW7u", "ubnjWRTI", "W5vdW6D7W6C", "EguMW7ddUq", "vI12C0G", "vqjzWQjW", "kMSOW7BcVG", "dGtdImkPW7a", "xCoJWRmTwq", "W4LDF1X1", "WQtcLSojW7KG", "qXFcL8kFtq", "4BEMYQhQNjFHTiFHT7G", "pNJXHykg8kEaSVc2K5y", "CNPjFSo+", "lXOcWPhcUG", "oYBcUSoIdG", "vddcISkb", "WO8wW5afW5O", "w1NcTCkqW40", "W5pcUH/dLmon", "sWi+W7qE", "FH9LWPnM", "pmkyBKBdLG", "vcaGW4qx", "8lUYJFc8Ky5E8kMIOpc8Gim", "WPddGYldQmkG", "d8okDWpcQW", "hqJdIa", "WOm6W41dW5O", "WRhdIK4", "eInsWRX/", "eJStWOVcHW", "rSkvCvtcTW", "WP/cIrm5DW", "8lQdNrlcTmkPaa", "qN89W6RdMq", "W6r8e8ol", "WR1gDmk+iG", "W7pcLCk1WO3dPG", "W4xcGmoLWRnW", "WPfoW63cPmkC", "WPldLdi", "W5ZcRafLyW", "WQZdOqRdVCk/", "wGiExmkM", "W70BqCocyW", "W4ZcPG04tq", "W7/cLmkZWPZdOq", "WPNcQeldRa", "WPNcGSoVWQu7", "zuGJ", "W67cI8kfWOddOa", "W4dcPXm", "WRNcJtpdJsq", "W7JcNvhdVmoL", "W4BcUIz4CG", "AmohlX3cLa", "WOxcRSoSWQfH", "W6NcM1FdQ8oe", "WRvclWCO", "W6RdSSoHlqO", "bmoyAcpcQa", "W7yBCConWQ4", "WRtcIH3cIIK", "eCkFrhm", "bCocBwZcPG", "WOHsW6ZcT8oy", "W77cJCkMWOVdTW", "W59amuz/", "W55aEeu", "WO3cMCo0W7eT", "WRhcIdtcQIm", "WPZdSeZdLh0", "WQH8dW0", "E08uW5ddJq", "W5VcVqvLtq", "xf82WRzC", "zHaOW7SK", "WQxcH8ooW6nz", "8koXS/cYK6dWUig08ygaJVgpOQu", "qt4OW5KN", "bCoBW6SrW5q", "WPrcW63cT8ou", "W7BdO8oXmLq", "W6v5Dv57", "W6pcKSkMWO/dUq", "W5FdPmoQkXC", "v0jhCSoH", "W6vRbW", "wLFcNgZWUigq", "W4FcVrrNCW", "WOBcPrxcQLq", "W7v9W7zlW44", "cCokBZhcRG", "W5BcQIxdIqy", "W50GaG", "aSknqrNdIa", "W50fE8ouEa", "lK4UWR8f", "pbCn", "Bq1nW7tcMq", "A1K3W67dTW", "a8omW6y", "W4RdJCkkW5S", "c8o8a8o9W7q", "e8k4W7K2oG", "W5SWgqDE", "W6RcTtRdIte", "WOhcRZtcQem", "WOJcMSodW5Kb", "WPRdNGFdS8ki", "W51EcSo9W6a", "r8k4W7qHvW", "ECoWWPBdGxy", "rXDdqCkI", "qgaMWRBdNa", "BgBcOSkmW4W", "fCoFW74gW5a", "WPxdPK9+lG", "WPT9Fmk4mq", "dsudWPdcHa", "nrFdMmk6sq", "W7VdTmoGnHe", "WO9AjtaA", "xqZcI8kz", "CdlcLCkuhW", "W7lcKSk1WOpdOa", "eSoyEIxcQG", "rJqIW7KN", "W6jyW7HOW6K", "WO3cVSoUWRCX", "WOfyC8kTDG", "WPFcSJlcU1q", "ouNdGCkDvW", "WPPhtmkRsq", "WPDlW6ZcOSoz", "WOhcRYJcUMS", "WQDga8k/fW", "mGOaWPRcVa", "FpcWTP1dW7TH", "W754b8o+W4K", "F8ojpXy", "WPZcJ8ooW60G", "W6JdPCoHoZa", "fCorW6qxW5i", "yGvkW6K", "8lQdR/crSPtWV4cUWPtWSjcb", "4P6/EmopWQrh", "W4SjWRi", "yWLkW67cLW", "fbtdRSkMsW", "vIvNW6BdMa", "yID3wSkH", "eW7dMCoLWR0", "W7j2d8og", "WP11CSk9oa", "WO/cRhRdUSoR", "W6nTcSolW5G", "WPTqv8k8sq", "AavvW7JcMa", "W6pcLmkIWP7dNW", "q8o6lComW44", "sqzKx8k1", "WQxcHCoUW489", "wxzPWQG", "B3SIW6pdUG", "sCo0n8oOW4q", "4PMV77IO8l2JJpcYGzNWOicM8ykaOW", "fpcvP5ddN8oZEW", "WQtdKSo0W57cPW", "gmknuKtcJG", "wbzvvSkn", "8kcYU/c/SAhcL/cDK5/cMW", "ECo+W5VdLG", "8lMqVVcNOPhWTOkMW47WOOcQ", "C07cTmkmW54", "W6yrxSoPrW", "DJTmW4RcMW", "cIxdL8k9AW", "qConnGFcKq", "WQjehW", "WPdcOeJdRCo4", "WOezW4j3W5W", "W4FcQbrKyq", "emkjs1tcMW", "WPFcUblcTLm", "WQrghCoAyW", "FGuwWQRdMq", "AqvxW7tcHq", "w2GRWO52", "AmonkXa", "WO8DW4qlWPS", "WOruBSk5nW", "BComoXlcIW", "WOuAvmkQsq", "x8kzEbhcPG", "WQzoW6rGW6K", "x0CSW6ZdSq", "W6NdP8oXmXi", "xSoZW5pdOgO", "vSolW7GpWPC", "WRVcIIG", "e2PLWQxdMW", "W5RcUWW", "WQVdGu8uWOO", "WPtdGYldR8oU", "f8oRW57dLJm", "W7hcICkRWONdNa", "bGnfD8o4", "W6mSWOtdUcq", "v8kiyrhcOa", "hXRdJ8kPW7a", "kJpcUSoS", "wSo+W5/dNvC", "W4BcPMO3ia", "W5tdGsWIWQi", "W54Dva", "W7mXWO7cQG8", "AG1BW7hcKW", "qY13W4JdMW", "zW5BWRpcLq", "vZCMW5ye", "FxH+W4hdRG", "rCo8W57cK0e", "WQLhnW", "WO7cJmoFWQWC", "B3W1W64", "WOTdW6BcP8oZ", "WOiwW5bg", "vNz1WQFdIq", "WRddGuOEW4C", "faBcHSoL", "WPZcQYRcN0i", "qrDy", "yKjyW63cHG", "vY4HW5zw", "WQ7dSxKyW6O", "ix3cLSoxjG", "wt9jW5/cGW", "WRJcHSotW7G", "WQyyWQ0OWQ8", "gCkyqbNcJG", "ydZcQ8o5tW", "AI1nW6NcHa", "Afu0WQ1e", "eSooDsBcGG", "WRZcQYVcUW", "WR3cJ17dJCoh", "W5lIN7zBAhO", "WO1vW6RcRG", "xaFcLSkmba", "WPFdOx7dRCo5", "W7tXJAsXkmoxwa", "rbFcLmoq", "WONcTvNdOSod", "vmo+W4ldLNq", "vYPRWQddHW", "WObqvSkStq", "W44sDK1K", "ddFcQmommq", "frbyWQK/", "W712fuC5", "WR9taKDU", "aSoeDtBcQG", "W5m8dKuq", "FKeYW6/dVa", "AqTqW5xcTa", "bmoeAgW", "e8kLW6GOeG", "pGeYWPdcVa", "WRZcPwBcUKK", "W5hdG8k3W6vS", "WPLSlZe5", "EuRcRSkrWPe", "WPbrW6BdO8oB", "W6eXWOxdRWy", "v3u+WRD9", "qSojnry", "xmkBzK7dUa", "wcDXFG", "8lgJMFcOSQxWPyoW8jgIIMm", "W7PJAubA", "mGRdUCkIW5y", "EmobnrBcIW", "WRXtW6NcRmok", "W7uewCoJrq", "W5j3WPpdRW8", "f8ocFYFdRW", "xWjj", "v0Hxza", "8jcIMVcWSReZ8lkXKe8", "8loZIfe", "W5jgwez2", "vNj1WQRdIW", "8jgGHsBXJlkG8kgJQVgjK74", "vCkvzG", "WO8EW4jcW5a", "gSogreFcKG", "6PY94BAZEcBHT6a", "E1/cPmkxWP8", "vGaDWPfy", "uSoxomoxW4y", "WQHffqGP", "FcL7zfG", "W4RcSrrYCG", "nb0AWOVcQW", "W7vQgmoEW4O", "WR5wsSkTsq", "nrFdMmkUxW", "gmkIoYFdSG", "WQjxaG", "h8kltfBcJG", "dmkPW6u", "eI0GW5Wd", "WRRcJCkMWOldPW", "W5SJFSobBq", "qcO/W5Wc", "eK3dNCkRW7e", "rd40W5OJ", "WRJcI8klW61Z", "WPVcUJlcT0K", "W6DHuSk2wa", "WOFcPcRcT0G", "W7RcRbrAuq", "FWRdMmkjaG", "WPxcSuS", "mVcMPkRdQ13dHG", "W7/cG1FcUCon", "WPHecG", "W6mVWOtdRX0", "WOXdB8kLja", "BuFcRSkCW5O", "EX5v", "WRZdI1Ku", "f8onW69dW4u", "jmknvvVcMW", "WR7cHSopWQWK", "BmoCW5RdMNa", "rCosW5pdGga", "qGzeqSkW", "EZpcRSkIaa", "4P29rCk9WP8F", "vKnlAG", "WOXcBSkRmq", "jKtcNSkQW5vLW7q", "q8o3W4pdNNe", "W5rBrmonW4G", "k8oEaSogWOS", "wK5nzSoG", "WQ4wn8kyW74", "W5ddMCoalG0", "b8oQbCo3WRu", "xrvpWQrJ", "ihGoeSoP", "wSo6W4xdGhi", "WQDoiCk0W7S", "W5LgCfPK", "FutcQCklW5O", "WQpcH8ooWQiP", "xrncvSkM", "uSk7l8omW4u", "WObzeaaR", "W5ZdUs/dHXq", "xHdcLSkjtq", "CKTtW6VdOW", "dSk/W6G", "8lUYNCkK8kQHVFcPORlWVicS", "csOPWRBdHW", "WPRcI0xdRa", "4lwR4lAZ4lAoW53GTiu", "WQ7cP0nPWO4", "fCk/W70WhG", "kVcxGyBWVBkSFSkQ", "WPLqxCkR", "qcOZW5ac", "8ykJQFcwKRJWV7co8jwbGVgmKAy", "c8kPWRi", "DHHWW7pcKa", "wdLnW7/cGG", "WPRcUvJdRCo4", "qrdcMSkbba", "tWzev8kX", "eCknvHNcLW", "eSkrEXddSG", "e8oMFJhcVa", "kSocBIxcPa", "WPtcKtxdRSk6", "W7vnW617W7e", "W5Kbk8o/Ea", "8ygZOVcSS67WLlcE8lgWHpgdS74", "WRJWQ7wScxfX", "r0vrASoU", "b8oVfCo+WRW", "W60YzCovrG", "WOxdKdpdS8kN", "gCodBsZcUW", "WPpcRKH8WPq", "W4NcOaXYxW", "8lUsG0hcN8knWQm", "W68SWQJdPa8", "W5ddSeZdLa", "rfJdSmkTsG", "rCoZWOS", "W6FcOcBdJq", "uahcM8kmhG", "WOjuza", "WQpcIIpcLsi", "WOrzcc0h", "ECoWW5JdM0O", "W5tdGsWIWRW", "a8kJW6SQgW", "W5/dTdNdJGC", "dH/dLCkO", "8yoaQ/c9O4dcNFcHGApWMloC", "WRFWQ5oV8l+XRpcxKQ7dKq", "F8oDoL7cNa", "EmogW7ddQuS", "ieyz", "W6nkW79OW6i", "matcT8kEW5W", "zt9aW7pcLq", "W5ddUqz0W50", "W4lcRa5JAq", "Cdq2W4e7", "jhS0WQ5m", "W69+E0nM", "B1eZW6FdRa", "W7iQWRxdOHW", "WQ7cU3NdHSot", "WR5vfaa+", "lWtdNCkc", "WQpcGSopWQWh", "ACkikahcLW", "WO8aW6vkW4C", "W6RcVqP4DW", "mL0hWPBcOa", "W741WOJdVWq", "zX9/W7lcHa", "FSommr3cNW", "ACo8dCoCW7C", "vszMkKm", "W4rxzLT8", "B10ZW6FdRa", "W77cGfZdRCoS", "WQNcLmoyW6a2", "qWz1q8kZ", "W6uSW4hdQWC", "lt3cOmo5bq", "peikWR3cIG", "A0iYWR9x", "W7pcIKxdQSoL", "FeGJWR4F", "cgvyWRK", "vSosbFcqO67WQ5o2", "uheWW4qM", "BWGzW7hcNW", "e8omW54lW4i", "pG7dGmkksq", "W7L1cSoCW4W", "Ee0IW6BdKa", "ELSOWQ4", "hcddJCkJsa", "A04YWR9x", "fqPCWQvK", "WOBcNINdOSkV", "zWfyW7RcKW", "g2vXWPLW", "8lIHLFgfGP7WP4cJWOZXGyog", "WOGuWOnrW50", "WQFcI03dSCoO", "WQL3eH08", "kZxcVmoSea", "ASk6Da3cSa", "W5m/cu5u", "ySohlfpcIa", "W77cGf/cTSob", "rM8HW4yv", "W6/dS8oO", "BSoqW47dNKS", "W7eauCoKtG", "A3mOWRXk", "CbzBEmki", "hSoxW6ygWPC", "W5xcUNxdSCoR", "A04IWQZcVG", "mCoNW7SIW50", "wVcMGR3XJikNFmoC", "aWSeWPO", "W5OvxCoO", "zColmrlcLa", "W5BcVrDpsa", "W6COW4/dPaW", "w8oQ8kYZKVcuSjRWSBci", "WR98aYiR", "DtuZW7qk", "zmojladcMq", "e2n2WP50", "EqKDWR5/", "W718bColW4q", "EK7cTmkCW40", "Acq2W6SW", "Dh3dOCoKtG", "WQxcNIVcQZ0", "WR5FcaeV", "fmkmW742ga", "W7nlW619W6W", "WPBcPthcSeO", "WRXGfW8P", "hCkDzrhcTq", "EtTHxCkz", "W5XBDf9J", "WQ5veXS8", "WPhdKdxdPG", "eSoTfCo6", "jCoKW68BW58", "WOhcSWLN", "pZFdGmkBsq", "DfJcQmkr", "fZ9Wzq8", "W7iBqSo6qW", "mX0dWPhcOG", "vqRcM8kyaa", "WPDcW7tcSmor", "rJS3W4e", "Du7cVG", "WRFcPvr+WRK", "vWZcLmkiaW", "W7JdRCoH", "kZZcUG", "eSkjuvy", "8y6tRFc3OONWQAk/b/gcO6m", "WPxcUcNcQ1y", "ELmYWRza", "W7qWW4dcOa", "xCkrCrhcTG", "8j6sRFcRKBhdMpcIG4NWSBc6", "mGuhWPpcQW", "qGRcJCkFdG", "W5tcILbPWPq", "WPpXIyob", "W5VdGpcURBKgkG", "W77cTmkEWR/dHG", "WPRcTL/dPmoV", "WPdcTKldPmoL", "emoClCogWQ0", "vL5xzSoR", "W7OXWOZdRX0", "WQjOmmkjW60", "W5XBDu1/", "WPRcK8oPWR85", "CuxcOSkBW7u", "mSo0a8oZWQO", "AZTlW7tcGG", "WRTPW7hcHSoW", "xKjsBSoP", "h8ohW6ToW5y", "WQRdKfGFW6y", "4PAZ4PEz4Pww4PAO4PwH", "W6PwW61TWQu", "dmooDtBcPG", "AelcOSkiW4W", "qw80W5Wd", "WRRdHuKmW4C", "emo8d8o8WR4", "c8kJW70GvW", "W4eMgL1i", "WRRdKmorhJi", "hb7dPmk3qa", "ACo7lahcNq", "vIvGWQ/dGG", "WPxcRZldVKi", "W7aBr8oJtG", "WPddHJldQ8kR", "W7XuuCkTva", "WPVcV1jTWO8", "W7NcGCkRWQ3dTG", "W6noW79LW6a", "W4Lda8oPW5W", "W57cUZJdIqG", "4lwH4lEA4lwPbEc0RW", "WQZdL1WzW4i", "WPBcV1j4WO4", "kmkvW5OElW", "WO/cTudWMR62WRa", "eSo/W74xW4u", "WQ13W47dO0C", "WPTvDmkKmq", "sr1ErSkM", "W6j2hCowW4K", "wmoVemolW4C", "r3CbW7Cx", "u8oqe8ohW4O", "WP3cHCoS", "8lQuUUkdIUkARo+6NFc8LidXJisn8kQKOVgbL7u", "W5H1vSoXwW", "W4HyW6jFW68", "wfjFuCkG", "WQrgimke", "qq1aAmo7", "W4JdPwNcV1y", "oJRcQ8kTdG", "Ac1LA1G", "W4yoAmk4oG", "WQ3cLSopW6u8", "W4NWKyct8y+XK/c5S5z4", "WQf3iauF", "tdaVW4e", "W4VcNqldGYi", "8j6WTVcSS5Kf8lgaUpgdKi4", "W7bqW6L+W7y", "Ff8OWR5a", "wIv2W5pcLG", "WQdcRZBcSL8", "WQ9lmCkjW7y", "WPhdLdldPa", "kJFcQSozbq", "WRdIMjFVUOVWQQgX8kMIHpc8Glm", "8j6XTVctGRdXGlk68y2JPVgjG7y", "WOhcMmoU", "W6NcM1FdQW", "W68xW6jSW70", "eSkVW78Hba", "W7X2da", "WOZcTSo0WQuS", "dmooFYVcRG", "CvNcVG", "xrboWQD0", "8k6XHVgoSQBWPzgeW5xWNPw577UA", "WP9tfGu3", "yf8XWQLj", "WRjfiq", "r8kcEq", "8yY3RokbQ+kyQE+5GFcGH7JXIRAp8jMLRpgmTia", "WPuCW41cW4y", "xgXLWQpcJG", "W7VdPSoHfHO", "WRa5sW", "WPBcRGz7WPG", "W6u9WOddQr0", "WOjuqCk2qG", "8lEWVVczGkSW8yYcGVcVKAG", "WP/cRHxcPHu", "W67dTCoHltm", "W754b8oQW58", "8jgZTFcyGBBdSVgdKlpcGq", "8ygZL2BXIRcN8j2sGa8", "q8oRW5pdGv4", "emo9cmo2WRW", "WOxcKSoZWQi/", "W73cTNBdPaG", "W5GdlCo5ya", "W5RcVxBdMWq", "xGHpWO5W", "8ysXV/c1OkBcLFc2O7lWKlox", "bmkTW7jKaG", "WQHbfquR", "WRZcGSoFW6qm", "8yYWT/cSK5RWUQcIiFc2SPy", "W4KEW5mr", "D/cHSBJXGQoo8lgHSpcJGA4", "WP3cIJ/cLY4", "4lws4lE74lAL4lsf4lE9", "EWldNmkgsa", "WPpcPai", "qYJcNCkEhG", "eSkwDbRcSq", "W5TuqeDO", "r8kQW7m2xq", "idpcOSomba", "W7CDxSoOrG", "W6FcGCkZWPJdTW", "W5ZcRebNCG", "WRNcGZtdGWK", "gSoSl8o8WR8", "vSoyW6uwW5K", "W5/WSRkg8kwIPIJWRik9", "nXpdLCkCxG", "W7lcLr/dVdG", "8yoaLCkJW67cNuS", "wZyZWP4x", "oYtdO8kiW5O", "pYFcOCo5bq", "F2HrsYS", "W6ldTConmrG", "W7lcLmkMWOxdVG", "W5KrWRJdI0K", "W6VcPHD5Ba", "W7iDxmoOta", "4lADuUc3Qoc0PUc0JG", "W49cEfT/", "tJ4LW4W2", "W4hcRbDKBa", "8ykJGFcwKOxWV7ce8jwbOSoK", "WPFdKcJdTmkT", "FGzuWQD0", "WOfCs8k0", "wY0NW4CF", "WPuKW4PrW50", "pSoRW40lW5u", "y0SYW7BdTW", "W7pcJL/dVa", "CvJcS8kAW5S", "xaHEWR58", "vY17C0G", "rmo6W4tdHxy", "fWJdJ8k2W7q", "w3fYWRBdNq", "W7f+dSo2W4K", "WOTcW67cRmoj", "pIJcOCohlW", "W4hcVcxdNq0", "8lMqT/cNOPRcJFc9O6dWOOc7", "WOldQ2BcM1C", "W5xcSdRdJu8", "jrCvWPZcUG", "WPHeCSk+mW", "bCooAce", "bdbSWOGl", "WR/dUrFdJmkN", "WO9G8kwqM/cDKOhdQa", "z8oXo8oxW5K", "WQhcMrBcPG8", "sIvvWQpdJW", "gmkxFalcTW", "scXWy28", "WPHYl0bw", "gWRdMCkmW7e", "vCkcEGhcOG", "z8oBW7pdTwK", "x8kuoetdOW", "WOusW5nrW5W", "W6mWWPtdPWS", "W4ldUhpdRHC", "W4VcQbr2", "gmoBFG", "vCoyW6xdVMq", "8ykZOpcuSjBXGOcqq/geGyW", "4lEegNVdUUc2Nq", "D2HnWOFdRW", "WRJdLc/dS8kN", "pGPWW68l", "WQZdNs3dPSkE", "yJihW5hcUq", "WPiGhLLr", "W7T8eG", "WPFdPrJdHSok", "WOHgzmkpW7O", "8jgGMcBXJlkV8kgJNCoW", "W5lcTdm", "W7eAra", "BM3cRSk2W7e", "y18IWRne", "W5BcKdJdJG4", "WOHtCSk+Eq", "W4j8g8otW5q", "WRJcL8ooW74E", "W4vaAa", "W6qRWOddRqW", "WRFdJXJWUyAFgG", "vsG7W7S0", "kSkPW7iWhG", "W5ddPfzPWP4", "WP/cOZpcSWm", "WP7cPu/dQCo5", "4PY2c8oPW5hcKq", "W6nWW6jVW6O", "WOFcU0m", "WQnxcIGQ", "WRfRCSkIaa", "r8o6W4tcNNS", "qCklewldRW", "WOFdLc/dO8kR", "W7GBuCoPBG", "Amk4rSkYW6G", "hqNdJSkSW6m", "fCknsrNcGW", "vcL5rKu", "WOJcR0ddP8oR", "wNL9vmoy", "rCook8oj", "yL0ZW7ldRq", "WPvcW63cPmoj", "W4CapCk2DG", "ad1ExSk6", "tmoCdmoOW5m", "udiUWO0Z", "WQNdG8oBW748", "WRLEeWqS", "W6aavCo/", "hWNcHSoL", "ymobnHJdLG", "fqZdMmkAW6a", "wbDruCk3", "uGRcLSkzca", "4PUb77M98kctSpgoSPVWOOgj8koWTW", "WP5FpCkzpW", "WOH/tmk7", "WO3dHqJdQCkO", "W4a3cfXr", "uZreWQvY", "WOtdG14GW6i", "WRRcVSojWR8w", "W7DRbmokW50", "WR/cMtq", "uduJW4Km", "opgdLijuW7JcPq", "WQxcGCoEW7G6", "W5Xqp8oMWQC", "W7vwW6jU", "WPhdNr7dQ8kN", "WQLxeGG", "WOdcRYJcUKm", "FeGRW6VdUG", "W53cRaf6", "WOZdGsq", "F2VdVSk/cYpcUw/cTCku", "AWKZW6VdQG", "WQn+kcGC", "vJGYW4eN", "AL3cS8kCW7C", "jXmzWRRcOG", "c0/dSSoN", "kaJdJmkPW6W", "W4VcOby5DG", "W6CrxSoPBW", "4P2n8kAbRW", "WO/cRbjLBW", "utG8W4G", "WQRcS8kXB08", "W71WbSoAW5K", "fmkPW702fa", "W5GHfeC", "xZPNAfm", "x0RcGSkehq", "vcW1yu4", "8yEtT/c9K5ZWQRka8korRr8", "W5egqSoIua", "8kwYLVcKSPFXI4gkW4tWUkov", "EGvnW7hcKW", "erSyWPRdRG", "W6RcGv7dTSoO", "W4y7d0vy", "u8o6pSoa", "WOHgvSk+sW", "WRVcLmoVWQm7", "W6ClWORdKGq", "W5BcRsldJrm", "WPFdK2/dPmkH", "EeWQW63dQG", "eqZdM8kGWRS", "W7pdPmoGmW", "q1NcI8oXWQC", "qmo+W4tdL3y", "hKHcW6BdRa", "tcqRW48N", "DH12W6ZcTa", "WPC5W5vPW4W", "WRRdVCkKF8ox", "W77cMgKeW58", "lHRdN8kNBq", "DudcLmkWW4y", "W7CbrmkTEq", "d8o9aSo7WRG", "W7pcJ8kKWPNdVW", "CSo+kCojW5G", "pXpdH8km", "uWRcNmku", "iSkgDLldKG", "W6JdPmoQoXS", "vcy+W5yy", "W5CFbq", "WOKDW4zbW78", "WQ9AaSksW60", "kHddPCkaqW", "aSocietdOW", "W77IN6P7W6Ln", "W7K9WPBdUqu", "W4BcVbtdJq0", "wrryW6TH", "yfSRWR8", "u07cQCklW5y", "CLjRWR/dNa", "A0uLW7FdSW", "vq3cGCoDqG", "WPVcLmoYWRaU", "WPTuCmkLiG", "ftRdSmk9W7a", "WRNXIyoRWOHlWQu", "WOxcQZtcUKm", "fSk5W7mWeG", "caJdNCkMW6e", "W7ldTCoWlW0", "8jgGJVcCS4JWTRg88yAJNpgcK58", "W6lXGQAxW7esW70", "W6yeza", "fHpdMSkBuG", "WPVdPtxcU0C", "WOKvuCkWda", "qLxcJCoYWQq", "q8ovW4ddKxa", "nmoEBrtcNW", "amohCIBdRW", "ugPOWRldIW", "vGdcJa", "W4BXH6cjWQXZW7a", "WO3cMCo0", "ufbxWRldQG", "BKFcVSkRW40", "D0dcPSosW7a", "WOlcPaf5Dq", "pXFdGmko", "xWjo", "WOpcJd7cKsi", "l/ctGOdWN4kucVgeKRu", "W5RcQHddHXm", "rbnCC8kN", "W49kzu1I", "WORdQ1z6WPq", "WOhdQIdcSvq", "m1BdMCkatq", "CtiPW58N", "w1LqD8o/", "WPFdQIlcU1i", "WPBdQJlcSqy", "WRNcGZdcGcy", "Bv1BWPlcVa", "FmoUmtRcTG", "idpcP8oHnq", "cSosEGxcHW", "8kIHRpcGK5JXJRkEu/cHG60", "W7tdK8kCW4W9", "WPPrW6lcLSo+", "e8ooEIhcUW", "W7VcSbbY", "CeRcQ8k+W5S", "WQxcSmoHWPmt", "WONcL8obW6mK", "eCk1Aa", "W6nSW75L", "c8omiCoCWPi", "ACoDpCoXW7m", "e8ojtbtcHq", "8lIHICob8l+XPFcxKQZXGyof", "utq0W5SN", "W4hdOqBIMj7VUOxWMzcU", "juq3W6FdUq", "vSoQW5ldMNW", "vL8eyCo+", "wapcVCkUaW", "W4r2s8oBW4i", "yanDW7JdMW", "EdzYc8kH", "vM81W5ir", "gbjqySo0", "jqTj", "e8kCrL/dGG", "q8kfEGdcTW", "W7NcHCkWWP/dVG", "WQbAA8kvW7O", "WQPgka8F", "CtjDv2m", "WOFdKINcPSoU", "vMrkyCoJ", "AmohoWBcLq", "sLeMW7tdTW", "WPiFW4yfW7q", "a8ocjuFdPa", "WP7dUwZcImoi", "zuvaW4FdUW", "W6NcIKRdRq", "W5RcHCkPWPJdUW", "qgPZWRtdJq", "fCoFFJdcGG", "uCo6W4ldKhS", "WP7dKcBdOSoG", "W73dKCkBWR9L", "WPLDumkYtG", "c8oSeSo3WQS", "qHhdMCoh", "W7e3WPpdP0q", "W7JcJSk0", "uCkFEWdcTW", "zsT2AmkB", "dGJcK8kHW7O", "aHNdTCkRW7m", "WOFcHCo5", "FfKUW7P3", "WPNcRZ8", "mSkEW4CMW7m", "WQtcMZtcKqO", "ws41W5zy", "Emoblb/cNq", "oSozbmofWQ8", "afCkWOT/", "E1JcTmkEW5G", "zL/cJSkrW5K", "WODwpCkNoq", "bCokBYm", "WPxcKaJcPgi", "WOLCu8oXrq", "WPddGXxdR8k7", "nbFdKa", "sCo4mmoeW40", "8ykZLFcuSk3XGOcL8kwJJpcUGzC", "BCo9W53dSx8", "tIbGAKm", "W7dcJvZdUmoG", "tJXWDwW", "WPhcSKNcQmo5", "ngtcQCktW4y", "W5xcKZb8va", "W5Kdkmo6zW", "WRjmA8kzW7a", "aZCRWPhdRW", "W6HkW6K", "WRxcJty", "x8onoqhcMW", "BX5AW7xdMa", "W6yRc0W", "WODgsSkX", "bmkEW6uaW5q", "lmofnWxcKq", "u8o9lmojW40", "gCoqWQrdW6C", "WQZdLLGjWPe", "WQvimmkyW7G", "4P2p8j6cKq", "hCknxa", "W7/dS8oNmba", "qCkyEGpcKW", "W4hcQaXwza", "WOiAFCkfAG", "z2RcTCk7W7G", "WQNcM8oFW6KH", "W6qYwCoeBa", "W71Nr2XM", "W63cUfRdLmo9", "WPRcKSoHWRiQ", "wSobcCooW7u", "8ykJN/cwKQ3WV7c48jwbGpgmKz4", "W53cG8kSWR7dHq", "W63WKRo8q0q", "adlWQ4kP8lwbRmkx", "yCoknHlcKq", "vcL8A3q", "tJXWDq", "8ykZRpcuSkBXGOcOq/geGym", "ltpcVSo5cq", "q0XqC8oP", "ArrQW7PH", "W6NcH0FdTmoR", "rq3cJCkadW", "8yo5OrNdTcWk", "quHxCSoG", "WOtcObRdGWm", "WOzFEmkUha", "zKGLW67dUW", "cSkLW7eHaW", "WR/dG1GKW48", "hthcOCo/bq", "W6DWW6G", "WQBcKxdcT8o+", "oIhdRSoRdW", "eWVdHCo6W7G", "cmoJW4qEmq", "D1JdP8kYW54", "sIuYW50X", "WRJcMdddJte", "tdaVW4ex", "W4xcHCk3WOddQW", "rJq1W44", "WRWwWQnUW6W", "W7m9WPm", "uhDJWQFdMG", "uCkzzrxcVa", "uYW5W5ir", "CSoZimoVW5K", "WRLmvCk6", "AsXBWObt", "WQr4ySoYhG", "e8oiC2lcNq", "W55BELX/", "W7FcQL3dNCo7", "WOjuqCo/AG", "cqJdKSkHW5G", "W5GIha", "F1NcPmkxWOu", "WQHikmk8W7S", "zFgfOQFWVPgcWP3WLko7", "WRRcNWhcTKq", "bSozDdFcVW", "AuxcQ8kqW54", "W7BcVeVdT8oQ", "W4yEASk5yq", "WPVcUqdcSvq", "lZldM8kmAq", "W6Hu8jomQqldOG", "WONcKmoL", "W4XBFu1+", "W6DuW6K", "WRtdL1id", "haJcMCkdga", "WQHoeGW8", "W4zDDG", "W7lcQCkPWORdVq", "gHCAWOVcPW", "DsmqWO9q", "fCoxW7OcW5K", "W4xcVctdIWq", "8jgGHFcuKlFWVPkw8kQqHVc9S6G", "W4hcOrv1lG", "aSk7W68OeG", "wsOR", "WPdcG8ojWR84", "W41xzq", "rSkrEaq", "WOWCW4Pl", "WRb/bmokW4m", "WO/cVCoyWRGA", "WPFdPqZcUCkJ", "8kUHUpcWK6RWK6cnWRtWTloZ", "W6/cLmkkWONdOq", "WPZdL8o0WR5+", "WQTEDmkmAG", "W6D3oCoxW64", "zh9PWOtdPW", "WQhcHSklW7G8", "sGjCWQHL", "8lAJOFcLKkFWNzko8y+tJpgbO7y", "yvqJWR5V", "jmo5d8o+WRW", "WQBdKhqdW40", "krldKCklDq", "tSoWD8klWO8", "WQxdJSo1", "xvKPWQHa", "WR/cHSofW6GE", "WRWwWQnGWQS", "WQbucaGN", "yWdcImkbfa", "lLWJWQ5g", "WQ9GW5dcVvG", "caNdMCkHW5S", "WPJdHmoNWQmY", "cfClW74/", "W5/dOs3dOSkV", "W57cRCkaW4hcOa", "xmosbq", "abHPWRdcVG", "WQvgamk+fa", "WQNdG8oFW6q2", "W78zW7TGW7e", "WRikW5na", "FaLjW7hcJW", "WPFdUvDxBG", "WQn8nSkr", "qeXdyG", "f8ogsfldJq", "dCkWWPNdH3y", "pqH1W6Gq", "WPtcRK1aWPy", "rmo6W5JdL14", "WQTpW7RcICof", "c1uoW7KK", "W4NWK4kh", "WOBcNmk6W7e", "W6ZcH8ocW6O1", "qCkfEqdcOq", "W7JcL0BdVmo7", "WOaCW5fsW5q", "WR5+oG", "pWyaWO/cVq", "WOftWQpcT8os", "W4xcImk+WQBdQG", "dmkgtudcHW", "ButcSSknW5W", "WR10cSorW5G", "8yQYPpcsGAdWT6kP8yAXOmkD", "uM9OWPLw", "W7VcGeddRSoO", "eSoBW6uWW5i", "W7rCW61QW7e", "jtNcNCocgq", "vmkzErhcVa", "cbxdM8kDxG", "ubxcKW", "W7xcJ8kJWPu", "WPxdPK96CG", "W7v4d8opW4i", "xgTJWQldPa", "b8oeAtxcRG", "EJ99BLi", "FaLuW7lcGG", "zmkiovpcJG", "AL81WRK", "nYlcHCo9la", "WOTAv8kOtq", "W4FcHSk/WOFdQW", "W5HwDeXE", "W7VdJCkOWORdTa", "W5jwWQXTW6O", "v28FW5zw", "ACoImrC", "WPDgW6/cGSoz", "WQfFfr0", "amoEFYVcOa", "xpgfK6mxWQ7HTzG", "qZBcMSkCjq", "tILYDua", "xMbIWQ/dJW", "WQZcV8oKWPiU", "WOzqxa", "WOBcQYxcQGy", "ut4IW4HI", "WOPVfYGK", "W6yruCoPza", "W51ty0X1", "nXNdKW", "W6BcRSokW6iM", "EfaSW6FdUa", "WOvuf8oQDG", "qsO8W5C7", "W5jteSo1W7O", "oeuuW5fB", "W7NdQmo0pHa", "rCoOkSoeW4y", "r8kCW7m2gq", "WR3cJLZdVCkP", "W53cHavKCW", "rCosn8odW44", "g8knqv7cGW", "W57GTBpGTPFGT5ZGTya", "W4JcMCo1WRW8", "dSo8t8k4", "rSo0k8osW4a", "W49ay0DI", "vwHSAfq", "Ev0eWP7cRq", "uJXHD1i", "WRBcHJ3cHGK", "Amonc8otW6y", "rSkeEYZcHG", "AuRcTCkBW5O", "zKbCySoo", "8yccQ/cTGQRXJRcz8kQtIVc4SPm", "eSoBW7Ka", "W6iPWPVdGHm", "wcvDs8kw", "WQZcRLv4WPi", "4lwKWOtGTQFGT5BGTBe", "xrvPWQnK", "q3uOWQJdIW", "iSoCnWBcIG", "WQX/aG", "w8ktFbxcVG", "EKGVWRC", "ALNcVSoFW54", "WQhcISogW6KN", "WR7cJJ3cOIm", "r8kQW7mXgq", "WRFXH5c/W5BcSG", "yvNcM8kcsq", "dSoJW7GRaa", "W4pcRaa3oG", "vNzZWQRdMG", "rmo+pCoXW4q", "W6/dSCo2pJG", "mr0gWOJcRW", "W5q9curC", "WO/cKSo0", "vsLXwfq", "xXvsWR5H", "r8oHWRW", "wuDjWQjL", "qmkvzGhcVG", "W4TazufZ", "aSk+W64Rbq", "W7nlW6a", "BMGZW7BdRa", "jZhcP8oSda", "WPLbEmk4DG", "dSokW4mnW5e", "WPi+eKDw", "WRhcIZxcSsi", "W4hcVtpdJc8", "WOBcLSoSWPa6", "gXJdMmkSW7O", "e3lcQmoSaW", "WOffACk6jq", "8kUHHmkuW4iBnq", "WQZdT18CW6m", "gbFdG8k4Ea", "fCocBY7cQG", "W5lcTKNdQSkK", "xmoylrtcOa", "aSknxum", "8kwcTFcBOAxXJQkHW7RXJ6kN", "iZWvWPlcQW", "8lIHTVgfGQ9j8jEsOVgbG5C", "vSoQW6mxW5S", "WPqwW5bkW5K", "bVgpGAZWMkcrWRdXJ5oR", "CuBdP8klW5C", "W4JdPwNcS1q", "WR3cUsNcSh8", "WR/cGsi", "W6DY8y6YGFcLKBVXGicJ", "vLeUWQXX", "8j6WUVcSS5FWLikL8jAZSW8", "WRBdKeKDW5G", "h8oCW78xW54", "eZpdPCk7BG", "ddS1W4iS", "WQnAn8kCW7G", "wxDSumo+", "WPtdGthdQ8kN", "8yYWOMtXGOkr8j6GIVc0Sim", "vCoWW5ldIG", "WPPupCk+pG", "xIO3W6NdMW", "ESonkHdcNq", "w8kduXVcOa", "sCk+W7KPga", "uqTyW6TL", "WRtcHIFdJtC", "AHjXB1a", "W7lcKSktWOtdPW", "sITCWRL2", "CqLpWR1v", "W7BcIKS", "W4FcN3dcP8kY", "rYKYW4GW", "EK7cO8kRW5O", "a8knW6GWbq", "EwXI", "iGlcRCodja", "WO3cRKHSWRa", "W53cPZBcU0e", "W6pcJSoBW6K0", "W7y1qmoVEW", "W4RcVrrYCG", "W7tcGCkZWONdTq", "hqecWOVcUa", "A0iYWR9l", "ACoBlr/cJa", "xcf5yK8", "Bey1W6/cSW", "ohHuW5/dVW", "eSoFEJdcUW", "wrPFrCkc", "WQnxcJW8", "v0XqzG", "xCoHhZhcTq", "8kcZGpcuGiFXHBgg8yAtSpcRS6K", "WPBcHSoXW5G2", "BCogWQjKxq", "W7JcJv3dTSoI", "WOBdLc/dO8kd", "W6pcICkZWOddTW", "jmoNCsNcUq", "aHNdSCkGW6y", "eCoSb8oMWQW", "AGjnWQDO", "WPpdG14fW48", "W6TCW6HGW6q", "W4RcUHv7Da", "W7vUgmotW4G", "eSkhuLNcJG", "nqpdMmkofG", "WRVdJComW6uN", "W554bSoA", "E0XoW7ZcMa", "W7u0g8onW4i", "crpdHmkdqG", "W6j8cSoCW5K", "xsn7WPK", "gqldKSkXW7a", "WOdcRIpcUMG", "WRJdJveiW6u", "weW3W67dPW", "sHOsWPnU", "wSo2W5VdLMC", "WRlcILWDW5S", "WRhcNZJcKgK", "W7SdxSoHtq", "aSoeDG", "WQGOwmkhWPO", "W7GBuCoP", "xwrQWOFdIG", "CmoVnSo0W4y", "stX0Dvu", "ss1NCuq", "WQnhbSk0hq", "WQ3cTmk0BKK", "wgvTWRJcVG", "fUkCMSkQnCoE", "8kwYLFcKSOBXI4gdW4tWUQgb", "W57cMenPWO8", "qZyJW6qM", "W5DDWPefW4K", "W7tdOmoTmW", "WPNdQqldHmkc", "WQrzceDU", "W5BcQYtdHXm", "WRJcMJpcLJq", "W7tdRfrn", "i8ofkeC", "WOfCvSkR", "W7lcMmkZWONdVa", "8kwcMtTVW6/cTG", "W6HTjSoAW54", "vmoVpmoxW6W", "WQ3dJ8oOWOhdOa", "dSkOWRWjeG", "WOXbuCkT", "W7ZcMLBdSmoM", "jJpcOSoSeW", "W7RcHCk0WP/dSW", "cHzfqmkQ", "f8oFW58sW4i", "WOddGY0", "w8kFqfxdJa", "WQ7dLbmdW44", "wmoVW5pdGq", "hauJWQNcVW", "WRbQdSoEW58", "vXOGW58", "WOOwW4jwW5a", "W4u8f0zC", "WPaiW6xcQSor", "W7tdOmoOhHO", "zfWQW6ddUW", "scX8Auy", "W5G4W5VcOeK", "fuldPmkFW5m", "WORcVGVcU1u", "mbFdK8kkfq", "WQNcKmoyW600", "WPxcGWdcTMS", "4BwLWRHCWRJdUq", "4PQi77IK8yYJSpcYOlRWTjo+8jkIQG", "FwrRWQm", "hatdKmkGW7S", "FK4Y", "WO3cGmoZWR07", "WQhcRYFcReu", "AuxdP8kUW4O", "WRRdJerDWOq", "WQVdLLe", "e8oAWRbd", "WQ3cV1rTWPW", "vKXxySkS", "W7edq8oHrW", "4lAu4lA94lE54lsYW5y", "8j6XOpctGP3XGlkB8y2JSVgjG5q", "ortcTSoBnW", "WP5asCkRxW", "WQ9ei8kOW60", "WPTiW6FcUG", "8kkVKWvNWO49", "jbqbWPpcOG", "W7NcG17dSmoN", "ubxcImkbba", "e8o3W6qfW5G", "W4hdUrxdIq8", "WRTFaGWH", "fb/cLSoDbG", "WO3cPehdP8o+", "pVcvP4ZdN8o3vG", "B8ohnGFcNq", "rCoJlCoaW5m", "gJldSCk9eq", "emoHBq7cTG", "W5vbWPaxWOa", "W4BdSXC/W4W", "fmkPW7iGoG", "W4hcVdJdJaq", "qJXCAuC", "oHRdNCkosa", "quLnACoR", "wUkFRdvtAa", "WQ42W7jXW6a", "W7pcGCkZWO3dVG", "WOrxumkRrq", "iCoNW60OW5m", "W50/kK95", "q8o6kCorW4G", "WPOtvCkFWOC", "W6NdQCoRkd8", "zebhW43dUW", "W50Lfuvs", "wcH/WQFdNq", "WRT9j8oQ", "uSoMWOVdNN0", "WO1EASkKoG", "WOmhW5DaW4C", "sCo3pmkfW4C", "W7KTWOZdQaW", "WONcQKH8W50", "W5qZfuPe", "W6lcKSkR", "W6jyW7HO", "bajCu8k6", "WONcHCo0WRGT", "xZS7", "AGraWQ3dMq", "W5m1hMbz", "rSkeCaBcNW", "WPbuW7C", "WQvyC8kHjq", "W7VdOSoVoGW", "vblcI8kbca", "zb3dKCkwbG", "W6qehSoJrW", "uSoNW4ldLN0", "cmkfFsxcOG", "bSooWQqnW5i", "8ygZO2BXIRcN8j2sMVcwO5C", "W6/cI1FdVCoh", "W7eqWPFdIb4", "W4pcPGC", "WOhdMdxdQ8kR", "faxdK8kIEG", "W7pcJLVdTq", "W5tcVcu", "qwb1", "8ykJJFcwKOZWV7cD8jwbUSoQ", "W7tcGvNcO8kP", "sZWNW4ON", "W6FcKmoPWOldTW", "qGdcLSkjia", "WPVcRLVdPSoM", "WRxcIuqmW5G", "W7KwxSoSsW", "CCoqp8oUW6m", "tt8JW4Ki", "8jorUH3XJ6cq8lAGISov", "xSo9W5tcNxa", "W5JcKxVcP2C", "fqpdJW", "WPhcPsJcQKm", "F8oanWtcUq", "c+g1TUg2Sog3Pog0UW", "W5LXW6RcP8oy", "WRRdI0OdW4C", "wgb/", "fSoommogWRq", "xSkXW5/dNNq", "WOmlW5DaW5S", "reNcRmk9W5m", "pCo9fSo7WQO", "WQ9nzmkoW7O", "CNZcKmk1W5m", "b8orcmo0WRy", "v2XqC8o+", "W7/dUCoWoHa", "WPHlW6RcOSoo", "xSkvkW", "W7n2bColW4G", "8jwsGFcRGOdcJ1pcMq", "ASoYpq", "FSkikXBcMq", "r3v1W7ZcGq", "W5q7f0Xt", "obNdMSkzxG", "uMzJWQtdGq", "W7hcJh3dMmoR", "WRZcTSocWPan", "WPdcVKPPW5a", "eCkLW7GHga", "gIFWLO6GWQZcOG", "WONcKmoLWPG6", "bCkXWOq", "WPZcIcRcIxq", "W4NcUK9/zq", "d8kVWOhdS30", "d8kTW6G3fG", "WPbtW7RdUCkD", "mWpdJSkZW5e", "jclcQq", "WP7cOYJcTq", "qSo8W5xdLMa", "8yMtH/cPG5pWRkoi8jgbIVglKlW", "bmkmqfpcRa", "y181WQLe", "8jgGOFcuKitcRpc/KyRWLOkJ", "Be7cTmkkW5m", "WRpdNrmeW48", "v0f7A8oL", "rqyAe8oJ", "oWeZWRhcUq", "4PE/4PEb4PEk4OkQ4PwS", "yuW+", "WOJcPNzTWRi", "WQBdSHpdJSkE", "W7BcLCkJWOxdVq", "f8o2aSkYWR8", "WPXUW63cPCos", "W7a1rmo5ua", "W5dcRfZcVa", "xKCYW7ddQq", "fatcKSoRWRS", "WPFcJHFcSri", "W6RcJKddVCoS", "CtFdMSopxG", "WPqxW4zbW7S", "gfWd", "FpcWSyPdWP1j", "W6r2s8omW4G", "uSoTWPNdLhC", "h8kjDaFcUW", "qCoYn8kkW5q", "WPxcR8otW5yR", "g8oOaW", "nmkPW702fa", "WOZcMmo3WR8Y", "W6xcM3/dVmo6", "W4tdPaL/WOO", "WQZdQvGEW5G", "W7jOxf1z", "W69xW6S", "W7WuW615W6W", "W4SNkejF", "xmk0WOa", "W7RINkxcPb45", "WOnutmkZEq", "W7RINkxcPbS7", "sWjrWQ5Y", "W4e9dLTE", "fokSRo+7ImoFW7T9", "WO7dNgSlW64", "W7NcILBdJCoS", "W6nxfHLH", "yWLxW6NcNW", "W4ldHrldSCo9", "WOy7lmoKzW", "WPdcOeJdL8oN", "oCoXEa/cRa", "WOftW4RcRCoB", "bCkBrfdcHW", "vujwCmoT", "W7zWgCoAW7i", "BeaRW6FdIG", "W53cSMZcIa", "nmk8W7yHjW", "eGZdImk2W7q", "CL0oW6ZdUa", "y0SLWQZdVq", "WPvbAmk6xW", "Er8eW4W", "WO/cOfJdVmoV", "x8kvCr3cSW", "W6JdL2ddLhy", "WOhcOINcQwC", "vIOEW5Oy", "WQXgdXPG", "WOH9veat", "pJ3cVCo5", "WQZdJuSiWPq", "WOm5W4Pb", "W4xcSdldJq4", "vMXLyCo/", "q8oXhINcOa", "kGpdM8kBxG", "Fv8OWR5O", "b8oGeSo3WRC", "rgTJWRtcJG", "iXObWPlcRa", "W7f1aSoEW54", "W5Lxy151", "WR5XW7RcJ8oo", "W6v6cmoAW54", "W4yMhLS", "dSohmMG", "WP95rmkTsW", "8kE4GdSrWOVcRa", "WQPeW6ZcSCoy", "WPBcQZlcV0O", "W5O7fu4D", "WPXDCCkZ", "WQxWT5gu8kgJQv3XJ7k+", "rXTfx8oJ", "8yEaRVcAG5xWQlkW8yIrHpc/G60", "WQJcGeBdUSoU", "vK9VWQi", "W7NcI8oNWQ3dPa", "mmo9fSo+WQa", "W4/cIKldTCoW", "v2PXWQJdGG", "uSoYl8oaWP4", "W49BW6ThW6O", "d8o6cmoZWRa", "W7VcHLZdVq", "W7FcOd7dVtm", "WPRcK8oLWRuq", "W4TEW69HW6e", "WRRdGu4o", "W5dcStFdNa", "WRlcGYBcOUkxHa", "fcvLna", "W4hcQa1Y", "ueRcQSkA", "mHxdNCkovW", "xSkFDHxcPG", "WP/cRSoHW6iK", "WRtcL8oIW6i1", "WQHzfq", "r3fJWRq", "amkbqaJcLW", "WQvdbbW9", "bSkHW7K", "xeyeCCoL", "EueOW7xdNW", "jbCAWPVcGW", "WR3dI1mzW44", "WPXuW7dcOSoA", "W4ChWQNIMzxVURlWOyg6", "CmkgFchcTq", "WQfzbW1U", "WQbtcb0N", "W6zizmkoW7O", "W7fuuCkTva", "eWddNCkIW7a", "xWj8yW", "8yYWH/cSK5JcV/cEOihWTlcE", "WPTCqCk6da", "rmopmmoiW4q", "gmoBW70qW5S", "xqzEWQm", "W4tcRbK", "W5LQW6ZcTCou", "yvmIW7rv", "W6FcNcD/yG", "WOJcPtdcMIu", "lSof8jocKFgaSOFdOW", "WPdcSuK", "e8kItfm", "WPpdMc/dOW", "aSkCqexcRW", "W7dcILBdSmoO", "vSkvCsdcTW", "gayDWRH+", "qKnoCmo0", "WR1MW4hcOokBV++4PW", "W7utvCoerG", "8jcITpcWSQ3WMAkRW6RWPigU", "WOldNY3dQmkV", "8jggKUkaMokzH++4RVcLTORWNisu8jgNJpc5Pk0", "W5JdHCkTWOyF", "cNlcN8oyiq", "W6bwW75+W6q", "ySojndlcNa", "h8kDDbRcPW", "DSotW7/dP0O", "W6dcG8k2WQxdMG", "a8oCWQuhW5S", "W6bSgmox", "bmk+W7KLaW", "qWfarCkO", "uYD7sKq", "gh5PW4WY", "xcDNCea", "WR5+oSkN4Pwp", "pJVdOmo+cq", "W6nZW6vT", "WO/cOCo4WPWq", "W4pcUcldNaq", "WQ3INPjgpYC", "W7ehq8oSrq", "W4WJESoDWRu", "WPpcVJlcRa", "emo9c8o9WQ0", "rX1gw8kM", "WR9zfeKH", "nr7dK8kRW4W", "kbNdGCkDwa", "WPvcWQpcPCos", "cSo5cSoZWQO", "W6RdJ8o48ywHI/giSka", "xrroWQP2", "rSoLdsRcJq", "WQBcGuDXWP8", "W7T1WO7dRa8", "WRtdLfO", "W5NcVapdSre", "W4nxjmopW7S", "WODvdtSz", "W4LKxffk", "fKddK8kJW7m", "f8k3W5pcNxq", "wmoPW5/dL3y", "8jgZRVcyGzhXIBoy8lEcGVcIK5y", "WRZcGdy", "W55AzevY", "WOXvW68", "W6r0g8oBW4q", "WOlcQZlcQKm", "uqvFW6vY", "AGLwW5hcNW", "WPlcPeJdOCoR", "Ff81WQ9j", "pH0LW4FdHZxdNZu", "W45xyKS", "ESkPqdxcVG", "4PIK77MD8koGPVcsGldWTOgY8jEWJq", "krpdH8kavW", "W5CBxSo7rW", "8jQWRVgmO73cN/cBSl7dPa", "dHSDWONcOq", "nGieWPRcOa", "W4DwpbGH", "A2DU", "W4OMmKDB", "A2aJ", "4P++CJPhhq", "WPpcPYpdVHW", "W7Orr8o+tG", "e8oTcCoMWRW", "bmotBYFcVq", "nHeFWPRcVa", "b8oRBmkyW6C", "W7tcNhtdTSo7", "W6ddJSk3WOpdOa", "BKRcS8kx", "zGKUW6/dUq", "sGXnWRT6", "b8kTWOpcGYi", "aCoFW7GhW5i", "AuHEWPBdIa", "W4tcTZRdHWa", "lWldKCkDDG", "WOBdHsddS8k7", "gX3dJmkPW7W", "W6iQWO0", "WRtdLxVdQu0", "WPiAW5DjW5a", "iXSaWPpcQW", "eFcKG7BXHOgO8joaSIe", "euJdMa", "WOhdGYJdQG", "ye5lDCoP", "W6lcRa5JAq", "W5ldLmodnXW", "W4WjzmoDWR8", "W5ldMmkVWRWS", "W7BdQmoQna", "WPuBW4XsW7q", "WPq+W4zwW4y", "wGHzWRi", "W6flW6n8W7u", "e8ojW7KpW5i", "WPldPKLUWPS", "W5hcPLy7", "W6JcNvpdRCoG", "WOHfACk4", "xI1Xu0q", "WQ3cVvvXWQC", "pH8vWPJcQW", "W5BdUsBdMG4", "W5VcOrv6yG", "WQdcHSofW6SN", "bmo3fmoLWRG", "jt4vWO3cQq", "W53dQsfIza", "t/cHOQ/WLikKWO/XHjc6", "W7JcJSoTW5BcSG", "W7pcJLVdTCoC", "vapdMCkXWRO", "vePsWQ13", "eSkrW74uW54", "ywb2WQRdLW", "WRpdGu4EW4O", "Arfsr8kQ", "WPVcKSoUWRut", "W47cVar+BW", "vKnq", "WPLNDSkRAq", "xs5tWQ1+", "nrFdNCkdBG", "W4q7y8oz", "WOH8s8k5qW", "WQNcM8oFW6K9", "W5XCWOXiW4C", "hConWQOcW4e", "WOryqSkkxG", "W6DDW6HBW6a", "AGLwW64", "vbFcRmkfga", "WODqCCklmG", "WOxcPCopW5Gb", "fqpdMCkHW58", "uWjeWRH+", "uSo+kCojW5G", "WPBcHddcHre", "WPmfjNG/", "qwffDCoR", "WPZdPrJdLmkA", "WOOsmqGW", "iSkcEa", "wIulW4GX", "WP87W6jdW58", "WQBdKhaiW5G", "WQFcJIpcHYi", "FvlWOPc9W4tcUq", "srnarSkQ", "W4a9cqLs", "W4ddS1ZcOKe", "cSk4eSo6WRW", "WQnGkSkBW7a", "WQNcJN7dQCo7", "frFdMCkk", "8j6sRFcRKBhdMpcGGzdcMa", "WQZdGfGjW6u", "vZSMW5ye", "v8kczXVcOa", "W7RcIKy", "WO7cTepdVmoV", "W4nqCWzZ", "nbKrWOVcVq", "W518bColW4q", "W7RdPFcRH7rNWPO", "dSofAa", "bmo+As4", "WQJcJmoCW6i/", "W70zuCoQrW", "AtrEWPLb", "WP3cQfn6WO8", "W6FWQBoc8l6bSuhXGici", "W7/dUCoWoGW", "F8kInt7cKW", "WP3XH5EkW4ZcUmox", "fK0D", "d8kNWOFcHci", "WP8dW4y", "WPpdR03dUmo6", "datdMmkGW7O", "W7G2WPi", "E2lcQCkzW5a", "W4SxW4ZcRCou", "sZmZW5KR", "WPVdLdBdTmkI", "WPfgW7FcSmoC", "hexdGSonW4q", "sInUW5pcUG", "WOvEFmkUDG", "WRLKltKK", "eJtdJSkSvq", "bmoBW6SaW4m", "WRvbk8kkW54", "eMfWWPHS", "W5yMz8o7wa", "W7lcGfK", "WR7cHSklW7G7", "8lIDIHlcSW", "4lwH4lsL4lEGW41P", "uSo+pCkfW5y", "WQlcGSohW403", "krpdLCkmtW", "W4VcPve", "WPdcKqBdRSk4", "EKpcVSopWPa", "4BArWQVcVNjE", "v0mpWPTi", "qCk0BZBcMq", "8lEWUdhWL5ct8yYcJpcVKBe", "WQvceHK9", "WQFcPZ7cU2q", "WPVcOmoPWQu2", "W6q9WO/dRIq", "qJXyyLi", "WQTuW61NW7a", "W6a3c0ve", "x2HyyGe", "WOxdMM8", "nSkhDX7cIG", "WPNcJSotW6Kr", "WOisW5De", "WRtdP8oLmr0", "WQbqs8kRrq", "W7vTh8oAW58", "jCkaW7aSlG", "WOhcM8oLWOiN", "WQPgjCkz", "W63WKRka4PwP4Pwo4PAt", "W6C5WPxdVGW", "FSonnHFcNq", "WOVcUIm", "8y6aUVcKSAPU8kcaJVgkSBO", "WO0wW5O", "WPtcQcFcU1q", "WO/cVKL8WPG", "vbFcISkchW", "qelcK8kSWRS", "WR3cIJ/cLY4", "WQ5zcb0R", "WPrcW7dcSmoC", "W6tcGcxdSGW", "Ecy2", "sW9sWRXq", "WQfmn8otW6O", "DcL4yG", "WPFcUtxcV0e", "WP5DsSkOBq", "Be7cPSkCW4S", "l8okDIC", "Cmo3pmoeW5i", "tbnyWRLC", "WOHsDSkVja", "pcVcP8oJbW", "D3/cNSkSW6S", "WPihW4zx", "sIr6zKu", "WOhcLmoPWRaY", "jZBdRSoHcq", "mCo7cCoGWRW", "WQJcTCk1Ae1MWPxdJM3cOs85wG", "W7rCW7XLW7W", "xIbSnW4", "lmojEadcNq", "vSkFyHRcVG", "W5yFWRNdGGi", "x8o6WPBdMN4", "W7iSWPxdRXS", "bSkQWOtcHYRcHmo+fci2qYNcTa", "4BAF4BAb4BAF4BwyxG", "qVc7KAFWUBoRAmoj", "8jgbU/gdK4RWPOcuhVcFGAm", "CsfzWP9d", "tbnyWRK", "WQFdGb3dUSoG", "emorW7GuW5y", "W5XZW4rLW5y", "WONdT00VW54", "8kwYV/cKSRZXI4gTW4tWUQgb", "W58EhePh", "W4byW6vLW6a", "Ev0MW6ZdPa", "F8oCeHJcUW", "4BwNW6ZHTPhHTzJlQa", "WPPgW7pcT8ou", "w8kuCbVdVa", "rCo7W5pdL10", "WRJcMYxcKZq", "vJW2W4KR", "eCkAsKlcKG", "WOPEC8k+mW", "W7JcNuddTSo7", "WOXbDmk5oq", "cHNdIa", "W5y9deDr", "W7pdI8oJea4", "vt09W4yg", "W4mdngvE", "4BAq4Bsb4BwZWP/iTa", "xc47W58J", "mZVdV8kkW40", "W4ThDuf/", "nbmeWOVcPW", "ACoBkXlcNW", "WOOqW6XKW5C", "W7S5WPldVWS", "xgT1", "WOBcNmoZ", "WRhcGJq", "8lIJRFgmO7JWUBkpW4dXJiox", "W7hcILZdVSo9", "tSoWDW", "W4XqW6G", "w2rQWQFdNq", "cgb9W4qb", "uMra", "EJrGW5lcSG", "wMPOWOVdIW", "FSomprFcTG", "lYhcVCoKeW", "lmo3rSoGWRW", "W77cGSkLW4ldSq", "WP3dMdFdOG", "8kwYQKBcV8o5CG", "W78rsq", "WQbfW4FcUCoW", "8kcYVVc/SA7WSkcC8kYcUIW", "w2a2W5Wb", "zeGRW4pdUG", "WRtcOs7cTMm", "nCotAsJcJG", "W4NcOaXYtG", "WPHtW6i", "W55lWPisWOq", "WPdcG8onWRqT", "AHOHWR9r", "E1WOW7BdUW", "W7lcL8k0WOddTW", "W6HCW7T6W6K", "hYtdKSkJW7O", "wCkbsfBcHq", "jtFcTW", "W7tdPmoZlbi", "neZcKpc6G7RWUlos", "WPNcP2/dR8oF", "e8okW6KlW54", "rSkzyrJcTW", "rvJdKSkYpq", "WR/cRYJcQK8", "W4vtDq", "bfizWRFcLG", "W77cH8kUWOldSW", "8ksJJpc6KyNWOkks8y6WSCoW", "W7lcQSkUWOG", "W53cUdRdQqu", "FmoyDH3cNq", "cmkIW7KGpq", "FL0IW7ddKW", "wY9WtKu", "W7ZcGLC", "k33cI8o9cq", "h8oDW6mcW5S", "WQ5EdWCP", "4lAM4lsg4lsL4lAS4lsq", "W7HxyurP", "WRxdGuq", "W5lXJ7gi8yQWO/cDKRap", "xMi9W5uq", "rrnuFSkQ", "ucGGW5yB", "eSkuEGpcVa", "y0GbW6VdRa", "h8kkrXNcGq", "cXu1u1y", "vIaXW4yB", "W7JcMehdTCoS", "W7pdK1GpWOu", "dSkeqXJcIq", "DGzqWQ4", "W6bqW6bSW6S", "8ywmGo+6J8oXeog2Log1Tq", "W5q9cv5C", "W7eArmkTuq", "oSosb8oRWRS", "W6yADSo3WPu", "8y6tI/c3ORZWQAkJ8jsJNpcJGim", "E8ojkHFcNq", "WOZcHKn7WO4", "WOBcGf7dJmon", "cCkPW6S3gW", "nX/dMSke", "x8olnWhcNq", "npggOl7WU4kygVcZGRG", "WPaDpL9N", "DLNcOSkz", "WPBcSMRdP8o4", "lCk6W7ONbq", "WObxW6y", "vWLo", "WOXztmk+xW", "urrnWRX6", "ASkBFqlcHG", "aSoxW74pW5i", "W5mEmSkNja", "r1qWWRTj", "8yccSpcTGRxdRHH8", "W6jCW6HDW6a", "W7ZcIfFdKmoT", "WQe9W69rW5O", "W7BcPqX2ua", "W6bPrCorW4G", "W4LFW69XWQO", "W4DczvS+", "8y60T2tdLW", "WRhcNtlcI2C", "c1qiWOzlW7XjWRfJ", "W5njW6bMW6q", "WPXFW7FcPSop", "WP5qs8k7yq", "WOJcSx5PWRu", "WQVcPIRcV3y", "W6WaECoJra", "eCoWcCoLWPG", "WONWU6gv8lscSf3WSkcj", "uSo+omobW6C", "hK3dKmkSW7S", "hGldN8kWW7G", "WPzQW6/cQmo0", "tHDuzSkM", "hVcCH6BXJlw5xVggPlK", "WOTCsCk6qG", "cJ3cUCoJda", "WOTMcSkfW7O", "WRqBu8oUvW", "WQDCqq", "4Bs4r+g0Sog3L8Qo", "W7HTh8opWPC", "eSkwFbJcTW", "W7rXeSkpWOi", "WRRdMsxdLSki", "q0yPW4BdLW", "8k6XIpgoSQHot8oB", "DWarWO/cOG", "zwK/WRrg", "wCotW7Px", "W6JcNv4", "W4tcUctdJaq", "W5LYC1P/", "f8kJW6W", "W7xdL8kCWRHH", "iWavWPZcPq", "qCkvEXdcNW", "WQH/ca8H", "bSooAgZcUG", "WONcGSoKWRGX", "dZmwWQJcUa", "qa1jAmo6", "uCkznHxcJG", "EuXNW7ldRa", "8jgbTmoy8yAbOFctGldWNyo5", "CKtcOa", "kdVcOmoP", "8ygZLpcSS7NWLlcTWPZWLkgT", "8jgGMsBXJlkT8kgJSFgjK5m", "8jwsNVcRGQFcGFcGGk0V", "hsKMWR7dLG", "FuRcTCklW5a", "W7hcJ8k1WPVdSW", "eI5tWR1W", "W4FcHNxcV8o7", "oHhdKCkMxW", "WOZcRKDSWRS", "WPlcPeDSW50", "bgBWKyA/W5BdHG", "BaVcVSkqW4O", "z8oRnCoMW4S", "r8o2WRZWRjg78lYZLa", "8lQdQ/crSOJWVyE577Q2WPtJGia", "W5LDDu0+", "iXP8W7RcJa", "WPzvWQ7cS8os", "W7pdGmkHWOpdOa", "WRFWQzg2", "WPNcQeddRCoK", "WR/dGaNcUqe", "W79RW69TW5W", "WR5dcH09", "W5lcQZxdGfS", "W5pWPOkW8yYcHhZXGycR", "W4TCW6j9W6W", "omo6k1tdUa", "W5lcQZxdGee", "W77cJ8kPWQhdTW", "mXpcLmklwG", "zt9PW4RcKG", "WOpcKSo5", "b8ocDYFcGq", "wWHtWR90", "W5BcUqu", "uSkQs8ofWPG", "W58ceCoNgq", "WOZcTu3dUSo+", "WQ3dL1WkW44", "sqfSWQrP", "rNfVWQNdGa", "W61tv3Pf", "EGLxW6NdMa", "eSoFrb3cUW", "q1SOWQ8i", "dSkCBfNcHa", "BKaXWQhdRG", "kNlcUCoKda", "WPhcOIFcQG", "W6pcIc7dGcS", "wWDFrSkM", "eSkwEGhcVa", "zKyG", "WPHFW6RcRmoo", "ymonnHtcJa", "8ykJJpcwKPZWV7cBaFcNG4O", "WPxcUcBdGqO", "8jgbSFgdK6zn8joaVVcDG7e", "W7n4g8olW4q", "WPdcQKPjWPK", "WRVcKw1fWPy", "eSokFcC", "A0BcGSoAfq", "WRZcHJ/cIgC", "kWFcVmoH", "8joXHFcyGjpWLygPsVcCG44", "t8oRW7/dNxu", "WPpcTdNdNGG", "WOGwW5rwW5K", "pSkTDgpcTW", "ASobnbBcLG", "WR3dJfWz", "WPviW6dcOSoj", "uSk/W4tdLMm", "b8oSeSo3WQS", "W7P4WPFdOW0", "W7lcJLy", "WPBdQIdcReK", "W7iGWPxdRXS", "xGhcI8odfq", "WP9yECkVoq", "WRrmjCkEW6S", "W4z5rNTQ", "AuyPW7BdUW", "eSoeBJdcRa", "pGxdH8koxa", "xMXRWQpdMG", "WP4hW6PlW5m", "iX4rW5/dPa", "AK80WRTr", "WRVdNeKiW5K", "BSo6nmoa", "AXrnW7JcHa", "aSkOWQzK", "wrDcrmkM", "WPhcKtldOSkG", "W5Pty1X5", "oYXkWRpcGq", "W7DmW6n9W6a", "W519i3n7", "xmoedr/cOG", "krpdMCkatW", "eCoBnsZcQG", "W7eXWO/dOXO", "WQ13W47dOHa", "tb1crCkI", "4P2SWRSjW4NdHa", "s1LTACoQ", "WOTMtb0p", "W7Czsq", "emo9fCoNWRu", "uexcI8kida", "W7K5WOZdRW", "pqpdMG", "xHTexSkM", "W6/cRqfLAW", "l8kKxw3cMG", "WQJcMttcOJe", "EFggOz3XHAgwW7BWKygT", "W5CLcevy", "WOHBuCo/xW", "WR5tbXST", "W5rQW4FdO8o/", "W4fxAa", "WR9saW0a", "W5xcTdxdKGO", "uYrWdrm", "WR7cH8ooW6GD", "w2HYvCog", "W7pcHbZcT8kN", "uxWD8yAGT/cEOOu", "AWrsWRL0", "Be/cOSkBW7e", "WO1yFmkmpW", "osCojSkI", "waFcJCkzba", "cCkTW7afeW", "W67cGxRdKSoU", "yaLoW67cMG", "W54XngHF", "W6lcKmkxWP/dTG", "W5XhquzZ", "khfMWO1I", "qcS3W5C4", "yXXyvXu", "W7yRWOtcQHS", "WRFdSgq+W78", "Bx8/W4/dKa", "uYy8WPWd", "e8k4W7K2", "zGqOW6tdUa", "jt8rWOZcVq", "8yoaQVc9O5dcK1hWOOkb", "qdaVW54H", "WQ53rSktwW", "uNv2WRxcGq", "a8kLW64Hfa", "zJyIW5y", "y0fbzSo/", "dSkGW69+", "qZi6zLe", "uWje", "WOxcOZlcQKm", "aIa4W5e", "xenx", "kKaQW6pdUq", "jZNcQ8o0xq", "k8ocFW", "WPhcQZlcU0e", "gpgdK7nuWOhkMG", "lXCyWPVcVa", "aSk7W68KvW", "8jcIK/cWSQNWMAkr8y+XI0i", "gSoxW6qiW4q", "pmkABupdIq", "W7enqW", "W6rTdSonWPi", "WPddRNtdKSom", "fWddNCkRW7e", "WO1tW6BcSCoW", "WQDOW5FcV0C", "D0OJ", "kqldNCkCtW", "WQ3dJ8oOWO3dOG", "W6j9aSorW4O", "xZX0BK0", "zeOH", "W5xcJ2hdQ8kN", "W4JdPwK", "WPVcUxjGWOG", "WR/dIvG", "bmoztYRcUG", "x0Hkymo4", "8lYWPVc+KjBWVici8yssPFctK5y", "u1jev8k7", "wrjzWQj+", "hX3dKmk8WRu", "W7tcJ8kPWPJdTW", "WR1mDCkAzW", "W6/cIKhdRmoL", "WPasW49mW5e", "WOldKdpdO8kR", "W4BdMCkU4P+uDa", "xGHpWRXW", "WOFcQdW", "wqTuWQPI", "4BsPYkvY4BA24BwX", "umkMyddcTW", "WQztW6RcT8or", "w8oNdYdcQW", "dCogBJFcQG", "WPbbEa", "W7Warmo9uq", "v8k5EXlcVq", "rtGOW4qX", "8kYZSmoeWOFWP5k8W5u", "WRvmnSklW7O", "tWLrWQrW", "WR96bXSP", "W7q5h8oqWO0", "BvuOWQ5a", "W5ldTdVdHXC", "eVcUOzZWSAgZ8kAHGHy", "FXLwW6NcKW", "o0xdMmontq", "W7vCW6jTW4G", "W6fScSotW4q", "e8opFIBcGq", "WQywdXPU", "vNW7WQVdGa", "WR9WiW4N", "W6dcHbFIM7VVUQtWSOoH", "4P+LfKHhya", "WPpcPeldR8o+", "W4FcVc7dNa", "WRhcUeLMWQq", "xY48W5C6", "WO7cNSoSWRqq", "WQTakCkyW6S", "WPVdQ0bHWPe", "WR/cJJu", "BvS2WQ5m", "WP1Y4PAVWQbJ", "WRhcI2u3W60", "W4BWOAkV8jscTFc2O6NWKloI", "vCo4WQvZq8kWWP9jWQBcI8oPqW", "8y6aUVcKSBpWRRgs8jUtShy", "fmkPWRW0bq", "x8oTW5pdLq", "mSoiDddcQG", "W4RcGv/cPSo9", "W5RcPrrKoG", "WP8FbCo9", "8kIHVpcGK7RXJRkXxFcHG6a", "CrvMW7Wx", "hSo7W5WXW70", "kJFcVq", "W7tcHCk0WP/dTa", "A0K1WRTc", "v2fYW6mA", "W4qxn3no", "W50ZhW", "WR5DcCkyW6W", "AGuZW4Ou", "WP3cQYldVNu", "WOHhsSk+qG", "WPFcVtxcSKm", "4lEi4lsd4ls74lE8vW", "WQHFpCkVja", "EbDaxSk6", "wrDEvSko", "iXCmWOS", "E1pcS8kAW40", "Ex3cV8kYW7e", "W43cIxdcSmo/", "WRdcQKTT", "WPtcI8orW48B", "W6egxa", "WO3cLmo0WRGX", "WQvgkSkjW7O", "WPlcPf/dU8oR", "lKezWQFdLG", "W6/dRmkK4lEy4lEx", "tdaQW6WM", "WOrzqmovda", "dSkHW7T2aG", "pJpcUSo5bq", "CZ9TWRPs", "W796hSosW4G", "W7HTh8opW54", "W50djmo4BSouWP8qW4FcU0O", "hConWQOfW5G", "b1dcMCoFca", "8yYWPFcSK73WUQcc8j6ISIe", "E37cTCkt", "z8oZW5pdKMa", "W4vtDqHX", "rIyMW58t", "WQBcG8o0WQav", "WRtdJZ3cIIK", "W6VdTmoRkXS", "EmkzCq", "WOBcOCohW7KP", "W6nnW7HSW7C", "srhcSCkdcW", "WRxcNxhcTHu", "WPPiW63cT8oy", "W6znk8kkW7e", "xGzvqmko", "8jgXKNlWSAg38kAHSHy", "gCkAbupcIG", "hgH2WQpdIq", "W63cNXZdT8oS", "WOLlW6ZcOSoz", "cmoeDq/cQG", "vdq0W44N", "oXCxWOVdTa", "WQ3cJSoo", "WOGsW4PjW6a", "aSk/W68Lea", "WQNcMCkGWQqW", "Ab4XW7Gy", "BKlcJmowdd/dPCoakSomC8kk", "4BAqW4djMmQgY6y", "W53cRbnIBa", "fWtdKCkGW6e", "W45ZzvXI", "sSkexbRcTa", "W6CagSk3aG", "gmkJAmksWPa", "WRxcPtJcHW", "r8k4W7qTba", "wCo+W5RdSNC", "BtOGW58", "AXOYWRuf", "v8khzHJcTW", "WRjmpmkj", "W7Svva", "WQPakSkw", "W7VcJ8kMWOJcSG", "WRRdKSoWjHi", "W7VcKCkdWORdGa", "wYXWDvi", "WPJcOmoOWPWQ", "kmoMxg/dVq", "W49fyKr1", "4BsjY6ZQNiJcVCom", "W6ddNxZcTay", "bSk4W70", "WOFdLstdO8ka", "WQtcIINcLW", "W4GFW4GkWOO", "W5FcMcldNbm", "W7n4WOJdPbO", "w8oWW5FdLZm", "W7SAvCoPAa", "BvmOWR9w", "ehy1lEkAT++5Rq", "AX5TW7xcGW", "A8ocmSowW4a", "aSorWQOcW5K", "W4xcJGLgsa", "W7/dSSo3pHK", "fGznWRS+", "WP51r8kTqW", "lCkiCbBdLG", "e8opCIZcQa", "wNfQWQm", "pSkCAutdI0JdS8o5umkZW7FcQCoI", "W5tWLkwJ8y2LQLZWOiE/", "WO/cVKn6WOq", "WPRcUvZdRCoP", "us1S", "tuxXGzEMtxe", "WRxcNclcGIa", "WRJcUeddGCoG", "D0BcOmklW5a", "8yYWMFcSK6pWUQcK8j6IUpcDG7a", "W6u9WPldVWu", "8jwsVpcRGOVWTygyWPFWNion", "W6xcHmkIWOJdNa", "W4BdMCkVWR03", "u2vJBLi", "WPVcVfvKWPG", "FcStWQzH", "W7e9xSoRtq", "sCo5lmorW4G", "w8kkuepcLG", "WRpcJKyYW5C", "WP7dPcFcRLy", "tmoQhCodW7m", "xeDBWQrJ", "W53cRqvZtG", "hCoBW7m", "a8opW7aRW40", "W7FdQmoXmL4", "amofBI7dOG", "W6NdPmoQoZm", "W5lcTNtdG8or", "e8okW74gW4u", "W4nbufPI", "W4X0W5LqW7a", "dqZdJSkHW7a", "W5m+eK0D", "vYWMW5ys", "gmoKW5mAW7e", "WRVdLK8cW5K", "W6HEWQXNW6q", "W4DLsCk6tq", "WQdcJJZcPIS", "Be7cT8ktW4y", "y8ogprFcSG", "WQPugUkyM++4RFcWKBe", "uSoOW4xdN3y", "oCoHvbFcVW", "WRyjWRO8WQS", "4PQC77IM8kYIJFc6SBBWVkgC8yMrPW", "W6JdQmoPnGS", "rxWeWPv8", "WQ3cMmoIWPCK", "c0RdL8keqW", "W6flCgjY", "WRZcGgddNmog", "W6JdOSoSCGG", "W6eawCoIta", "W5ZcTZhcIe4", "WPveW4ZcGSoF", "wKbfymoP", "8loGM3BdRa7cHW", "W4dcUGu3yq", "eSoFW74cW5S", "uahdMmk4pW", "qMTSWRhdLG", "kUknQhNcJ+g2Pa", "W6HTiSorW4S", "WQruC8k+pW", "WProW67cPSoj", "ySojnry", "FI1Mzfm", "FhCJWQLw", "8lIHHCob8l+XQpcxKP7dKq", "8kwcTJVWRBoo8l6tPSoJ", "W4DqgCogW7G", "asS3", "W6pcQZ/dHqG", "WPtcLJNcTHu", "oX3dN8kkW6i", "FqC3W63dRa", "idFcUCo+da", "W5K5WOZdRW", "ALNcPSkCW5q", "BgzPWRddIW", "W4NcLKldVa", "W4a3gK17", "W7tdOmoTmYS", "WQJcI8osWRX8", "W5lcJ8kLWQRdQa", "WQ3cJ8ocW60G", "WRBcGcpcLcy", "m8o8W6KzW6u", "WOPQsH4m", "W5lcP17dRCoV", "jcfyW7pcGW", "FsiyWPRcRW", "fCkhs0pcHW", "WQbgnSk4W74", "W5Pcp0z1", "WQZcUmofWP4T", "W6/cLmkoWOldTa", "y8oAiq", "8jQWSFgmO5lWSQc+8lstJVcsOP0", "wmkaCG", "teGUW67dUW", "W7BdQmoGFW0", "DXXC", "W7m9WQ3dOWC", "W77cJ8kP", "A3aVWR4", "WPlcRKHVWOK", "uLLqDq", "eG0RW4Ct", "4PY6WP7dIW3cLW", "W4xcG2ZdKmkp", "W7CCBa", "W5eZc11u", "W6JdPmoLpaO", "W7WbxCoSta", "WPZcGmoPWQuQ", "WQeBcq8O", "qerEyG", "EHOGW7ddSG", "WPLEBSk+mW", "e8ooAJFcQG", "e8kACv/cLW", "WP9qrmk7AG", "t8oQa8oZWR0", "rWq0W4e", "WRVdRvmlW4q", "qgX8WQm", "gmkdvHFcHa", "wCo4WPBdGhy", "qrDj", "E8oblaFcNq", "8ygZNVcSS5ug8j2sVpcwO78", "WOhcUcu", "mGOaWPRcOa", "WPRcS8olWOuQ", "ktVdKCkCsa", "W7rDW6LTW4S", "vI17yfu", "W6bTh8kwWQC", "W6VcHLBdVmoM", "W7uzvq", "4Bsq4BwiCSkjxa", "xZTMzKy", "WPbkW6lcPmoy", "W7r4h8oE", "WOTcW6lcOmoj", "WOTmkSkjW7y", "udq1W5GU", "WRjammkrW7O", "WOBdNJtdTCkT", "rXGOW4ST", "WPLAumkTqa", "W7lcJLBdHSoK", "WOnEh8o/", "fbNcNmkJW7W", "WOLDxmoVaW", "WOVcQfJdPmoV", "W4mHWPhdRW", "WQnDmmkyW60", "WOPqBCk+pW", "qNWgW7xdSW", "cNGoeSoP", "WPBdNI/dS8kR", "WOLqACk2qG", "eSkwCadcSq", "WPdcQK9KWQG", "W6bWrComW4q", "W5q7fu0", "oaqDWPVcQW", "EMyZW4BdHW", "WQFdLdhdQ8k3", "FWtcLCki", "DSoXWPBdLMe", "fWJdMmkSW7q", "W5mEuSo/wG", "tSo6nCoKW4u", "W5dcOKxdPSoV", "gCoFW65dW6q", "rrFcGConda", "WO8CW40", "xq1xBSoI", "8kwcOdVWRBob8l6tKFgnOli", "WP5+gSkSda", "WOHcvSkZsq", "vI4MW5i", "WPihW4zxW7G", "FLS0WQ5m", "W7irWO/dRay", "xaHkWQv9", "sLlcT8kA", "rCoVlCoaW5m", "WPtcPttcM0C", "WQ/cGSoFW6K0", "W6zvzpgaUlqV", "8j6sSVcRKz7XG5gr8y+YSVcsS58", "8ykZKFcuSk3dKYnn", "srhcTCkihG", "odFcRmoQ", "W7vRgCoqW58", "W7jlW6vK", "W5ddH8k3WPeW", "cCokDY3dRW", "wrhcJmkDhG", "W7earmoOua", "W5CHceHA", "W4ZcPG5Jzq", "WQytW6ZINQ3cPq", "4P20r23cP3q", "vW1qAmkS", "WQpcJCooW6Gz", "lHVdSCokWPe", "FqrwW6RcTW", "W6xcJ8kuWQtdOa", "W6eevmoSvG", "WOzqECkFja", "WOLgW7FcT8oy", "W6JcJsj+za", "WRfdWQxcQSoq", "AGnAW6JcMW", "uJaYW5KN", "W4SIhG", "WR7cIIBcKcS", "wrvEWQmR", "uYy6D1m", "W7NcRKBdRCo7", "W77WTPkNrW", "W7pcIbldQSoS", "W5/GTixGT7JGTkxGTya", "WPdcPslcPW", "imoNuHBcLG", "WPvTzmkSW4O", "zCoBla", "WPVcKSoYWQC7", "wGtcN8kiqW", "tdP8WO0", "W4y9kf1p", "EelcQ8kAW7e", "W7/cU3/cP8oK", "W6xcRCkIWP/dOq", "AmonpcFcNq", "W7dcUXJcTWS", "W53cQJpcIbi", "bYaXWRNcHW", "WPHvW6dcQ8kD", "W67cILZdVCoe", "W7pIJ5BVUOZdO8kxnq", "8jgbQpgdK7NWPOcYepcDG7O", "WPtcU0e", "8yMtOpcPG4VWRkoM8jgbV/glKiK", "hX7dJ8kKW7i", "sGrvW7y", "r2b+WRi", "W5mQeKzo", "WPRdKcxcP8k6", "a8kAsq", "xSonkb/cGq", "WONcMSoL", "WRNcGZtdGZC", "uSoTW6ldM2y", "W65yW7H6W6q", "W5FcVsL5zG", "W41MvCkWwa", "aCogqL7cLG", "eSkUWRWLgq", "sX5lW7lcHa", "8lQdOFcrSPZWV4c4WPNWSPkx", "amkjuvBcKa", "W4Ltzu13", "fWJdKSkXW7W", "F0lcQ8kEW50", "laxdTa", "WPpdNJpdSmkV", "W6TkW6S", "dGxdICkOW7C", "qCoToeNdKG", "xSoAjG", "W6OxW615W7u", "r8kPW6WTba", "4lEt4lEP4lE6WQlGTzO", "WQO2rmoEW50", "W4NcPHjGyq", "vNfYWQpdNa", "W7xcSSkIWQFdMq", "umkvz1RdUa", "c8kJW78LaW", "zLRcImkoW70", "AHOOWQ9i", "pK/cSSknW5y", "vmoPmmoi", "W5OMd1Lo", "odVcQSoOdW", "WPNcRLi", "W4yMhLTW", "iJFcR8o+bq", "aX3dMq", "EX/cSSkSiq", "W4aFhLPo", "W6ZcTdpdMXi", "WPasW5elW4m", "fCkjvupcIW", "AGLkW74", "dsyNWOmV", "gVglGzRWT5gWW4tWKAkn", "WR9tbWO6", "rXC/W6SH", "WOZcRKHSWPG", "WPhcGxhcLIK", "A15MWQ1n", "W7ivu8oOqa", "WQnzlCkoW7a", "xGuqWQ9+", "WPffvmkKma", "WOVcUem", "W6LyW6G", "qs41W5y", "8lgJHxBWT5gI8ysqRFc9GAW", "WQVcTmkYAuycW4/dGhhcSq4", "mWldGmkFsa", "WPpcRKjHWPW", "gSk0DSoeW5e", "xKHkC8oL", "Crz2WPjl", "rqyqxmk2", "W5ZcTYu", "q8oZomor", "AanlW6RcLW", "aJm/WODI", "d8oaiwi", "W40pbFgkOkdWPikV", "g8kE8l27ImoOiG", "WPhcQZBcQK8", "8jwsGFcRGOJWTygr8lcGHFgnOji", "WOBcV29MWPS", "WPpcRK3dRmoJ", "r3eZW50U", "WOpdMctcP8kQ", "dX7dMq", "guadamo2", "WQhcGCofW606", "WOXBqCo/tG", "vSo4W5pdUNC", "bmoCAc7cQG", "WRFcUdtcSvq", "W7NdTCoTmba", "xZbHyK8", "FXrFv8kr", "xIO8W5qc", "W4yFFK52", "rYi1W4WL", "pVcvOza", "WOVcPftdVa", "cchdNCk3W7i", "tNWPW4SK", "W7j2h8kFW4i", "AYvxW7VcMq", "W4pcSebGAq", "WP1zAmkNna", "qWf2xCkX", "yaj7ASkh", "fGldMW", "W6i1WOtdPb0", "FaBcSmknW54", "hXNdImkGW6C", "WP7dIu8dW4i", "jGCBWOVcQW", "W6xcHCkZWP7dUW", "fW/dKSkKW7W", "WPBcQZlcVW", "ttaI", "aSokBYhcPW", "4Bw6Y4e74Bwh4BEi", "WOL0uCkRxG", "8yYWQpcSK4/cVYiV", "WQvGySk3tG", "vLLqySo+", "W6hcVcBdHbG", "jSo4nbBcMq", "eGO8W4ad", "emo8a8o2WPC", "rmkvzXFcTW", "W4JdPmo0mWC", "W7ZcHCk+", "a0pdLCkHWRO", "jX0gWPhcPG", "8jEXRpcrKjFXJAgs8yAXIFc+G4u", "W7RcQb3dStS", "W6xcHCkPWOJdTW", "WQFcQWVcRgK", "WPVcS1jTWO8", "W4zEWOm", "tWPev8kT", "yffO", "8koXRFcYK4JWUigi8ygaRmoR", "W7bCW75QW6a", "W7JcPLZdV8oM", "EKtcSmkrW5m", "CNbIWQ/dGq", "W5DkW7pdTW", "AXrnW7JcMa", "uSoNW4ldLMe", "WQ/cJmofW7G2", "iIFdNCk8W7C", "WORWKBcq8jEqOSoLWQ8", "WQFcHSos", "usFdGCkovW", "zL/cISkAW4W", "nbmaWPRcQq", "WPZcNSo0WR07", "eZOqWRZcVG", "W7JdRSoGjG", "WP/cUvjHWO4", "W4bfsSkSwa", "W6zWd8oAWO0", "eJnY8lo/QE+5Oga", "WOvFyrW", "uaNcKCkjtq", "W5ZcUdldTWW", "8yUrUa7dIu3dNa", "W4e3fu1W", "WPZcTdNdNGG", "WRFdTSoHpva", "xWtcLmkScq", "W718gmomW4W", "W49byKL3", "wmkWW5ldTge", "WPTvEmkUga", "WOBdRw7cKvBdLeldRWdcQmoWWQS", "WQ3dI0GFW4G", "esO4WRhcNq", "xuHtDmoG", "vZGHW58t", "W6RcIafGAq", "gSk0DSoxW4a", "gWhdLCkKW6y", "WR5zeXST", "WPvSuSkDEa", "xmkrEtxcTG", "DL/cS8kpW4W", "jrCzWPdcUG", "c0/dMa", "e8kOBmoOW7SUW4zbWRC", "qYqIW4qT", "W4FdVrpcHKrtW4f9", "WPRcILj8WO8", "WQDfcqC", "W7/dTSo3mXS", "fCooyZy", "WR7cJJJcJXi", "yConpbRcMq", "kbFdK8kk", "s3fpWQJdIa", "sLDLWQldTW", "pGhdH8kdxG", "rcy2W5yz", "W5/cUYpdHuS", "WP1iW7tcRCor", "rrXvvSkj", "WQJcMXJcJse", "pbpdGa", "lWddHmkGW5C", "WQHxfqXU", "WOhcRaXYBq", "W5BcOgVdHqa", "v0jtACoG", "bmoBW7KwW5S", "WOvyC8kH", "qtSBW4Ct", "WRJcJCk3W5G", "W4dcMttdMG4", "sbT3DMK", "WQtcHZtdGYm", "WQHaa0K6", "fCkGWRiUba", "WQDakmkoWRe", "oX0vWPS", "oJRcQ8oJ", "ygzPWRtdIW", "WPZcOLNdUSo4", "W7LQg8oiW4y", "W4dcRtFdHHS", "W47dMmkoF14", "hCokW6tdVYK", "f8kmrLBcKq", "W7DXh8kFW5K", "W6ldHCkUW6j+", "WOhdLdNdSW", "W7JcLSkUWOJdTW", "W6irqSoUrW", "WOTFcGWD", "WRvmkSkzW5i", "umkzk3hdUq", "W5CXkM9i", "WOlcSWfTAq", "W7/cKwhcP8o9", "4PYsAdSPdW", "lLyz8lQdUVc4S5K", "WOjGtXGm", "W4VcIbrJCG", "WQpcIJ/cHWO", "te7cTmkkW5m", "W6rWh8otW4G", "WPxcK3/dISoJ", "vH8NW4aN", "W73cRbb7Eq", "W6u9WOddRI8", "imoWn8ovWPe", "caJdJ8kQW7K", "tJrO", "WOGsW49KW5e", "W6vrW619", "WObLtXei", "xs42WPmc", "WRO1WOddPbW", "W5WCaKTN", "W5PgzxuA", "WORcS0a", "e19bD8oG", "vcZcLSklaG", "W4VcRbn0", "f8ojW5/dL3y", "WQFcH15sWOu", "aCkJW64bfG", "WObTuKD+", "WRxcGsu", "WOdcG8o0WQeT"];
  _0x5ed6 = function () {
    return _0x740946;
  };
  return _0x5ed6();
}
const _0x3e05b3 = {
  pattern: "fb",
  alias: ["facebook"],
  desc: "Download Facebook videos",
  category: "download",
  filename: __filename
};
cmd(_0x3e05b3, async (_0x44a3f7, _0x3a99ed, _0x3f4604, {
  from: _0x40911a,
  quoted: _0x2669de,
  body: _0x420b1b,
  isCmd: _0xc55a16,
  command: _0xee1c13,
  args: _0x102b71,
  q: _0x549ed9,
  isGroup: _0x4367b5,
  sender: _0x15a0c3,
  senderNumber: _0x2aa141,
  botNumber2: _0x54a2a6,
  botNumber: _0x3953a0,
  pushname: _0x30164c,
  isMe: _0x475f81,
  isOwner: _0x25eb07,
  groupMetadata: _0x44805d,
  groupName: _0x473f9a,
  participants: _0x132a12,
  groupAdmins: _0x4a03d3,
  isBotAdmins: _0x14a712,
  isAdmins: _0x4fc11e,
  reply: _0x58de80
}) => {
  try {
    if (!_0x549ed9 || !_0x549ed9.startsWith("https://")) {
      const _0x3a924e = {
        text: "❌ Please provide a valid URL."
      };
      const _0x2d44a0 = {
        quoted: _0x3a99ed
      };
      return _0x44a3f7.sendMessage(_0x40911a, _0x3a924e, _0x2d44a0);
    }
    const _0x33fd88 = {
      text: "⏳",
      key: _0x3a99ed.key
    };
    const _0x17bdb8 = {
      react: _0x33fd88
    };
    await _0x44a3f7.sendMessage(_0x40911a, _0x17bdb8);
    const _0x2cc0ac = await getFBInfo(_0x549ed9);
    const _0x3e3c50 = "\n💢  MANU-MD FB DOWNLOADER 💢\n\n🎞 TITLE 🎞 " + _0x2cc0ac.title + "\n\n🔢 Please reply the number you want to select\n\n[1] facebook Video\n1.1 | 🪫 SD QUALITY\n1.2 | 🔋 HD QUALITY\n\n[2] facebook Audio\n2.1 | 🎶 Audio file\n2.2 | 📂 Document file\n2.3 | 🎤 Voice cut [ptt]\n\n\nFb-Url: -=-" + _0x549ed9 + " \n\n> *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚*\n";
    const _0x5ee887 = {
      url: _0x2cc0ac.thumbnail
    };
    const _0x86177d = {
      mentionedJid: ["94742274855@s.whatsapp.net"],
      groupMentions: [],
      forwardingScore: 0x3e7,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {},
      externalAdReply: {}
    };
    _0x86177d.forwardedNewsletterMessageInfo.newsletterJid = "120363232588171807@newsletter";
    _0x86177d.forwardedNewsletterMessageInfo.newsletterName = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
    _0x86177d.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
    _0x86177d.externalAdReply.title = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
    _0x86177d.externalAdReply.body = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
    _0x86177d.externalAdReply.mediaType = 0x1;
    _0x86177d.externalAdReply.sourceUrl = "https://mr-manul-official-web.vercel.app/";
    _0x86177d.externalAdReply.thumbnailUrl = "https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg";
    _0x86177d.externalAdReply.renderLargerThumbnail = false;
    _0x86177d.externalAdReply.showAdAttribution = true;
    const _0x2ce99c = {
      image: _0x5ee887,
      caption: _0x3e3c50,
      contextInfo: _0x86177d
    };
    const _0x507deb = await _0x44a3f7.sendMessage(_0x40911a, _0x2ce99c);
    const _0x2feca7 = _0x507deb.key.id;
    _0x44a3f7.addReplyTracker(_0x2feca7, async (_0x47fec5, _0x393087) => {
      if (!_0x47fec5.message) {
        return;
      }
      const _0x5251d0 = _0x47fec5.key.remoteJid;
      const _0x386a55 = {
        text: "⬇️",
        key: _0x47fec5.key
      };
      const _0x19b9a6 = {
        react: _0x386a55
      };
      await _0x44a3f7.sendMessage(_0x5251d0, _0x19b9a6);
      const _0x40249e = {
        text: "⬆️",
        key: _0x47fec5.key
      };
      const _0x56ce2c = {
        react: _0x40249e
      };
      await _0x44a3f7.sendMessage(_0x5251d0, _0x56ce2c);
      if (_0x393087 === "1.1") {
        const _0x46ce4e = {
          url: _0x2cc0ac.sd
        };
        const _0x8ce5a3 = {
          video: _0x46ce4e,
          caption: "> *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚*",
          contextInfo: {}
        };
        _0x8ce5a3.contextInfo.mentionedJid = ["94742274855@s.whatsapp.net"];
        _0x8ce5a3.contextInfo.groupMentions = [];
        _0x8ce5a3.contextInfo.forwardingScore = 0x3e7;
        _0x8ce5a3.contextInfo.isForwarded = true;
        _0x8ce5a3.contextInfo.forwardedNewsletterMessageInfo = {};
        _0x8ce5a3.contextInfo.externalAdReply = {};
        _0x8ce5a3.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363232588171807@newsletter";
        _0x8ce5a3.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
        _0x8ce5a3.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
        _0x8ce5a3.contextInfo.externalAdReply.title = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
        _0x8ce5a3.contextInfo.externalAdReply.body = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
        _0x8ce5a3.contextInfo.externalAdReply.mediaType = 0x1;
        _0x8ce5a3.contextInfo.externalAdReply.sourceUrl = "https://mr-manul-official-web.vercel.app/";
        _0x8ce5a3.contextInfo.externalAdReply.thumbnailUrl = "https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg";
        _0x8ce5a3.contextInfo.externalAdReply.renderLargerThumbnail = false;
        _0x8ce5a3.contextInfo.externalAdReply.showAdAttribution = true;
        await _0x44a3f7.sendMessage(_0x5251d0, _0x8ce5a3);
      } else {
        if (_0x393087 === "1.2") {
          const _0x4cf429 = {
            url: _0x2cc0ac.hd
          };
          const _0x2d8aaf = {
            video: _0x4cf429,
            caption: "> *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚*",
            contextInfo: {}
          };
          _0x2d8aaf.contextInfo.mentionedJid = ["94742274855@s.whatsapp.net"];
          _0x2d8aaf.contextInfo.groupMentions = [];
          _0x2d8aaf.contextInfo.forwardingScore = 0x3e7;
          _0x2d8aaf.contextInfo.isForwarded = true;
          _0x2d8aaf.contextInfo.forwardedNewsletterMessageInfo = {};
          _0x2d8aaf.contextInfo.externalAdReply = {};
          _0x2d8aaf.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363232588171807@newsletter";
          _0x2d8aaf.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
          _0x2d8aaf.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
          _0x2d8aaf.contextInfo.externalAdReply.title = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
          _0x2d8aaf.contextInfo.externalAdReply.body = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
          _0x2d8aaf.contextInfo.externalAdReply.mediaType = 0x1;
          _0x2d8aaf.contextInfo.externalAdReply.sourceUrl = "https://mr-manul-official-web.vercel.app/";
          _0x2d8aaf.contextInfo.externalAdReply.thumbnailUrl = "https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg";
          _0x2d8aaf.contextInfo.externalAdReply.renderLargerThumbnail = false;
          _0x2d8aaf.contextInfo.externalAdReply.showAdAttribution = true;
          await _0x44a3f7.sendMessage(_0x5251d0, _0x2d8aaf);
        } else {
          if (_0x393087 === "2.1") {
            const _0x5e0467 = {
              url: _0x2cc0ac.sd
            };
            const _0x5443bf = {
              audio: _0x5e0467,
              mimetype: "audio/mpeg"
            };
            const _0x569eac = {
              quoted: _0x47fec5
            };
            await _0x44a3f7.sendMessage(_0x5251d0, _0x5443bf, _0x569eac);
          } else {
            if (_0x393087 === "2.2") {
              const _0x825b95 = {
                url: _0x2cc0ac.sd
              };
              const _0x1f988b = {
                document: _0x825b95,
                mimetype: "audio/mpeg",
                fileName: "MANU-MD/FBDL.mp3",
                caption: "*> *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚**",
                contextInfo: {}
              };
              _0x1f988b.contextInfo.mentionedJid = ["94742274855@s.whatsapp.net"];
              _0x1f988b.contextInfo.groupMentions = [];
              _0x1f988b.contextInfo.forwardingScore = 0x3e7;
              _0x1f988b.contextInfo.isForwarded = true;
              _0x1f988b.contextInfo.forwardedNewsletterMessageInfo = {};
              _0x1f988b.contextInfo.externalAdReply = {};
              _0x1f988b.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363232588171807@newsletter";
              _0x1f988b.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
              _0x1f988b.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
              _0x1f988b.contextInfo.externalAdReply.title = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
              _0x1f988b.contextInfo.externalAdReply.body = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
              _0x1f988b.contextInfo.externalAdReply.mediaType = 0x1;
              _0x1f988b.contextInfo.externalAdReply.sourceUrl = "https://mr-manul-official-web.vercel.app/";
              _0x1f988b.contextInfo.externalAdReply.thumbnailUrl = "https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg";
              _0x1f988b.contextInfo.externalAdReply.renderLargerThumbnail = false;
              _0x1f988b.contextInfo.externalAdReply.showAdAttribution = true;
              const _0x10fef3 = {
                quoted: _0x47fec5
              };
              await _0x44a3f7.sendMessage(_0x5251d0, _0x1f988b, _0x10fef3);
            } else {
              if (_0x393087 === "2.3") {
                const _0xcfc4ae = {
                  url: _0x2cc0ac.sd
                };
                const _0x4f9e36 = {
                  audio: _0xcfc4ae,
                  mimetype: "audio/mp4",
                  ptt: true
                };
                const _0x26d94d = {
                  quoted: _0x47fec5
                };
                await _0x44a3f7.sendMessage(_0x5251d0, _0x4f9e36, _0x26d94d);
              }
            }
          }
        }
      }
      const _0x4429e4 = {
        text: "✅"
      };
      _0x4429e4.key = _0x47fec5.key;
      const _0xba120f = {
        react: _0x4429e4
      };
      await _0x44a3f7.sendMessage(_0x5251d0, _0xba120f);
      console.log("Response sent successfully");
    });
  } catch (_0x1c9cfd) {
    console.log(_0x1c9cfd);
    _0x58de80('' + _0x1c9cfd);
  }
});
const _0x2070b8 = {
  pattern: "twitter",
  alias: ["tweet", "twdl"],
  desc: "Download Twitter videos",
  category: "download",
  filename: __filename
};
cmd(_0x2070b8, async (_0x131852, _0x41c6b7, _0x1c9e6b, {
  from: _0x3f53e6,
  quoted: _0x200aad,
  body: _0x1896ac,
  isCmd: _0x4150e3,
  command: _0x22827e,
  args: _0x118ce0,
  q: _0x5592b1,
  isGroup: _0x102240,
  sender: _0x16eb6d,
  senderNumber: _0x385270,
  botNumber2: _0x106d81,
  botNumber: _0x3a2d66,
  pushname: _0x5457bd,
  isMe: _0x592f91,
  isOwner: _0x5196b1,
  groupMetadata: _0x3eeaa6,
  groupName: _0x1c8ca1,
  participants: _0x413718,
  groupAdmins: _0x19d6e6,
  isBotAdmins: _0x487de7,
  isAdmins: _0xe6c356,
  reply: _0x4e5198
}) => {
  try {
    if (!_0x5592b1 || !_0x5592b1.startsWith("https://")) {
      const _0x25482 = {
        text: "❌ Please provide a valid Twitter URL."
      };
      const _0x492336 = {
        quoted: _0x41c6b7
      };
      return _0x131852.sendMessage(_0x3f53e6, _0x25482, _0x492336);
    }
    const _0x3b3ac8 = {
      text: "⏳",
      key: _0x41c6b7.key
    };
    const _0x23cbaf = {
      react: _0x3b3ac8
    };
    await _0x131852.sendMessage(_0x3f53e6, _0x23cbaf);
    const _0x2476fe = await axios.get("https://www.dark-yasiya-api.site/download/twitter?url=" + _0x5592b1);
    const _0x5d84a6 = _0x2476fe.data;
    if (!_0x5d84a6 || !_0x5d84a6.status || !_0x5d84a6.result) {
      return _0x1c9e6b.reply("Failed to retrieve Twitter video. Please check the link and try again.");
    }
    const {
      desc: _0x1254f0,
      thumb: _0x3deb22,
      video_sd: _0x4f8bba,
      video_hd: _0x6ab33
    } = _0x5d84a6.result;
    const _0x5c00e0 = "\n💢 MANU-MD TWITTER DOWNLOADER 💢\n\n📝 Description: " + (_0x1254f0 || "No description") + "\n\n🔢 Please reply with the number for your selection:\n\n[1] Twitter Video\n  1.1 | 🪫 SD QUALITY\n  1.2 | 🔋 HD QUALITY\n\n[2] Twitter Audio\n  2.1 | 🎶 Audio file\n  2.2 | 📂 Document file\n  2.3 | 🎤 Voice (ptt)\n\nTwitter URL: " + _0x5592b1 + "\n\n> *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚*\n";
    const _0x6b2034 = {
      url: _0x3deb22
    };
    const _0x493074 = {
      mentionedJid: ["94742274855@s.whatsapp.net"],
      groupMentions: [],
      forwardingScore: 0x3e7,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {},
      externalAdReply: {}
    };
    _0x493074.forwardedNewsletterMessageInfo.newsletterJid = "120363232588171807@newsletter";
    _0x493074.forwardedNewsletterMessageInfo.newsletterName = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
    _0x493074.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
    _0x493074.externalAdReply.title = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
    _0x493074.externalAdReply.body = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
    _0x493074.externalAdReply.mediaType = 0x1;
    _0x493074.externalAdReply.sourceUrl = "https://mr-manul-official-web.vercel.app/";
    _0x493074.externalAdReply.thumbnailUrl = "https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg";
    _0x493074.externalAdReply.renderLargerThumbnail = false;
    _0x493074.externalAdReply.showAdAttribution = true;
    const _0x45e792 = {
      image: _0x6b2034,
      caption: _0x5c00e0,
      contextInfo: _0x493074
    };
    const _0x2100b1 = await _0x131852.sendMessage(_0x3f53e6, _0x45e792);
    const _0x54e601 = _0x2100b1.key.id;
    _0x131852.addReplyTracker(_0x54e601, async (_0x478ade, _0x2da9cb) => {
      if (!_0x478ade.message) {
        return;
      }
      const _0x29a9cb = _0x478ade.key.remoteJid;
      const _0xbddd08 = {
        text: "⬇️",
        key: _0x478ade.key
      };
      const _0x1fa573 = {
        react: _0xbddd08
      };
      await _0x131852.sendMessage(_0x29a9cb, _0x1fa573);
      if (_0x2da9cb === "1.1") {
        const _0x23d71b = {
          url: _0x4f8bba
        };
        const _0x4b1dc4 = {
          video: _0x23d71b,
          caption: "> *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚*",
          contextInfo: {}
        };
        _0x4b1dc4.contextInfo.mentionedJid = ["94742274855@s.whatsapp.net"];
        _0x4b1dc4.contextInfo.groupMentions = [];
        _0x4b1dc4.contextInfo.forwardingScore = 0x3e7;
        _0x4b1dc4.contextInfo.isForwarded = true;
        _0x4b1dc4.contextInfo.forwardedNewsletterMessageInfo = {};
        _0x4b1dc4.contextInfo.externalAdReply = {};
        _0x4b1dc4.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363232588171807@newsletter";
        _0x4b1dc4.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
        _0x4b1dc4.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
        _0x4b1dc4.contextInfo.externalAdReply.title = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
        _0x4b1dc4.contextInfo.externalAdReply.body = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
        _0x4b1dc4.contextInfo.externalAdReply.mediaType = 0x1;
        _0x4b1dc4.contextInfo.externalAdReply.sourceUrl = "https://mr-manul-official-web.vercel.app/";
        _0x4b1dc4.contextInfo.externalAdReply.thumbnailUrl = "https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg";
        _0x4b1dc4.contextInfo.externalAdReply.renderLargerThumbnail = false;
        _0x4b1dc4.contextInfo.externalAdReply.showAdAttribution = true;
        await _0x131852.sendMessage(_0x29a9cb, _0x4b1dc4);
      } else {
        if (_0x2da9cb === "1.2") {
          const _0x39a8de = {
            url: _0x6ab33
          };
          const _0x130b73 = {
            video: _0x39a8de,
            caption: "> *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚*",
            contextInfo: {}
          };
          _0x130b73.contextInfo.mentionedJid = ["94742274855@s.whatsapp.net"];
          _0x130b73.contextInfo.groupMentions = [];
          _0x130b73.contextInfo.forwardingScore = 0x3e7;
          _0x130b73.contextInfo.isForwarded = true;
          _0x130b73.contextInfo.forwardedNewsletterMessageInfo = {};
          _0x130b73.contextInfo.externalAdReply = {};
          _0x130b73.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363232588171807@newsletter";
          _0x130b73.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
          _0x130b73.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
          _0x130b73.contextInfo.externalAdReply.title = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
          _0x130b73.contextInfo.externalAdReply.body = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
          _0x130b73.contextInfo.externalAdReply.mediaType = 0x1;
          _0x130b73.contextInfo.externalAdReply.sourceUrl = "https://mr-manul-official-web.vercel.app/";
          _0x130b73.contextInfo.externalAdReply.thumbnailUrl = "https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg";
          _0x130b73.contextInfo.externalAdReply.renderLargerThumbnail = false;
          _0x130b73.contextInfo.externalAdReply.showAdAttribution = true;
          await _0x131852.sendMessage(_0x29a9cb, _0x130b73);
        } else {
          if (_0x2da9cb === "2.1") {
            const _0x200ee5 = {
              url: _0x4f8bba
            };
            const _0x546f3c = {
              audio: _0x200ee5,
              mimetype: "audio/mpeg"
            };
            const _0x19db25 = {
              quoted: _0x478ade
            };
            await _0x131852.sendMessage(_0x29a9cb, _0x546f3c, _0x19db25);
          } else {
            if (_0x2da9cb === "2.2") {
              const _0xf3278e = {
                url: _0x4f8bba
              };
              const _0x4da912 = {
                document: _0xf3278e,
                mimetype: "audio/mpeg",
                fileName: "MANU-MD/TWDL.mp3",
                caption: "*> *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚**",
                contextInfo: {}
              };
              _0x4da912.contextInfo.mentionedJid = ["94742274855@s.whatsapp.net"];
              _0x4da912.contextInfo.groupMentions = [];
              _0x4da912.contextInfo.forwardingScore = 0x3e7;
              _0x4da912.contextInfo.isForwarded = true;
              _0x4da912.contextInfo.forwardedNewsletterMessageInfo = {};
              _0x4da912.contextInfo.externalAdReply = {};
              _0x4da912.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363232588171807@newsletter";
              _0x4da912.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
              _0x4da912.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
              _0x4da912.contextInfo.externalAdReply.title = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
              _0x4da912.contextInfo.externalAdReply.body = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
              _0x4da912.contextInfo.externalAdReply.mediaType = 0x1;
              _0x4da912.contextInfo.externalAdReply.sourceUrl = "https://mr-manul-official-web.vercel.app/";
              _0x4da912.contextInfo.externalAdReply.thumbnailUrl = "https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg";
              _0x4da912.contextInfo.externalAdReply.renderLargerThumbnail = false;
              _0x4da912.contextInfo.externalAdReply.showAdAttribution = true;
              const _0x89102c = {
                quoted: _0x478ade
              };
              await _0x131852.sendMessage(_0x29a9cb, _0x4da912, _0x89102c);
            } else {
              if (_0x2da9cb === "2.3") {
                const _0x17639c = {
                  url: _0x4f8bba
                };
                const _0x9b771f = {
                  audio: _0x17639c,
                  mimetype: "audio/mp4",
                  ptt: true
                };
                const _0x575904 = {
                  quoted: _0x478ade
                };
                await _0x131852.sendMessage(_0x29a9cb, _0x9b771f, _0x575904);
              }
            }
          }
        }
      }
      const _0x30046e = {
        text: "✅",
        key: _0x478ade.key
      };
      const _0x4bcfa4 = {
        react: _0x30046e
      };
      await _0x131852.sendMessage(_0x29a9cb, _0x4bcfa4);
      console.log("Twitter response sent successfully");
    });
  } catch (_0x4003e9) {
    console.log(_0x4003e9);
    _0x4e5198("An error occurred: " + _0x4003e9);
  }
});
const _0x30c7d6 = {
  pattern: "mediafire",
  desc: "To download MediaFire files.",
  react: "🎥",
  category: "download",
  filename: __filename
};
cmd(_0x30c7d6, async (_0x11dfcf, _0xae8eef, _0x2bffe2, {
  from: _0x1385ec,
  quoted: _0x221f96,
  body: _0xe1f667,
  isCmd: _0x470b52,
  command: _0x3ca44d,
  args: _0x27bc72,
  q: _0x2582c1,
  isGroup: _0x188d89,
  sender: _0x5634f6,
  senderNumber: _0x12d49b,
  botNumber2: _0x47e38b,
  botNumber: _0x5b8c66,
  pushname: _0xe2dfd0,
  isMe: _0x506a77,
  isOwner: _0x2a7c66,
  groupMetadata: _0x753f59,
  groupName: _0x339733,
  participants: _0x4762be,
  groupAdmins: _0x403637,
  isBotAdmins: _0x537040,
  isAdmins: _0x4975e2,
  reply: _0x392240
}) => {
  try {
    if (!_0x2582c1) {
      return _0x2bffe2.reply("Please provide a valid MediaFire link.");
    }
    _0x2bffe2.react("⬇️");
    const _0x95e965 = await axios.get("https://www.dark-yasiya-api.site/download/mfire?url=" + _0x2582c1);
    const _0x184313 = _0x95e965.data;
    if (!_0x184313 || !_0x184313.status || !_0x184313.result || !_0x184313.result.dl_link) {
      return _0x2bffe2.reply("Failed to fetch MediaFire download link. Ensure the link is valid and public.");
    }
    const _0x2bfc65 = _0x184313.result.dl_link;
    const _0x359627 = _0x184313.result.fileName || "mediafire_download";
    const _0x281317 = _0x184313.result.fileType || "application/octet-stream";
    _0x2bffe2.react("⬆️");
    let _0x1390c6 = "\n        MANU MD MEDIAFIRE DL\n\n        File Name : " + _0x359627 + "\n\n        File Type : " + _0x281317 + "\n        ";
    const _0x56b1b0 = {
      url: _0x2bfc65
    };
    const _0x2f17ee = {
      mentionedJid: ["94742274855@s.whatsapp.net"],
      groupMentions: [],
      forwardingScore: 0x3e7,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {},
      externalAdReply: {}
    };
    _0x2f17ee.forwardedNewsletterMessageInfo.newsletterJid = "120363232588171807@newsletter";
    _0x2f17ee.forwardedNewsletterMessageInfo.newsletterName = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
    _0x2f17ee.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
    _0x2f17ee.externalAdReply.title = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
    _0x2f17ee.externalAdReply.body = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
    _0x2f17ee.externalAdReply.mediaType = 0x1;
    _0x2f17ee.externalAdReply.sourceUrl = "https://mr-manul-official-web.vercel.app/";
    _0x2f17ee.externalAdReply.thumbnailUrl = "https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg";
    _0x2f17ee.externalAdReply.renderLargerThumbnail = false;
    _0x2f17ee.externalAdReply.showAdAttribution = true;
    const _0x1ebb53 = {
      document: _0x56b1b0,
      mimetype: _0x281317,
      fileName: _0x359627,
      caption: _0x1390c6,
      contextInfo: _0x2f17ee
    };
    await _0x11dfcf.sendMessage(_0x1385ec, _0x1ebb53);
  } catch (_0xeda0ac) {
    console.error(_0xeda0ac);
    _0x392240("An error occurred: " + _0xeda0ac.message);
  }
});
const _0x535bfb = {
  pattern: "ig",
  desc: "To download instagram videos.",
  react: "🎥",
  category: "download",
  filename: __filename
};
cmd(_0x535bfb, async (_0x18b7c9, _0x55ea45, _0x47ac06, {
  from: _0x4782ff,
  quoted: _0x4a0c9d,
  body: _0x59c40c,
  isCmd: _0x11b2e0,
  command: _0x25d7a4,
  args: _0x1c2a02,
  q: _0x261c47,
  isGroup: _0x44b471,
  sender: _0x49f800,
  senderNumber: _0x366d67,
  botNumber2: _0x579d3b,
  botNumber: _0x14ac85,
  pushname: _0x5428c4,
  isMe: _0x2c7345,
  isOwner: _0x4fb5d1,
  groupMetadata: _0x21fcb0,
  groupName: _0x562baa,
  participants: _0x3c5112,
  groupAdmins: _0xc46731,
  isBotAdmins: _0x4e9da0,
  isAdmins: _0x452c33,
  reply: _0x56ff0f
}) => {
  try {
    if (!_0x261c47) {
      return _0x47ac06.reply("Please Give Me a vaild Link...");
    }
    _0x47ac06.react("⬇️");
    let _0xe7e34f = await igdl(_0x261c47);
    let _0x545d8d = await _0xe7e34f.data;
    for (let _0x3e8a75 = 0; _0x3e8a75 < 20; _0x3e8a75++) {
      let _0x50c503 = _0x545d8d[_0x3e8a75];
      let _0x520d25 = _0x50c503.url;
      _0x47ac06.react("⬆️");
      const _0x1ffed6 = {
        url: _0x520d25
      };
      const _0x145841 = {
        video: _0x1ffed6,
        mimetype: "video/mp4",
        caption: "> *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚*",
        contextInfo: {}
      };
      _0x145841.contextInfo.mentionedJid = ["94742274855@s.whatsapp.net"];
      _0x145841.contextInfo.groupMentions = [];
      _0x145841.contextInfo.forwardingScore = 0x3e7;
      _0x145841.contextInfo.isForwarded = true;
      _0x145841.contextInfo.forwardedNewsletterMessageInfo = {};
      _0x145841.contextInfo.externalAdReply = {};
      _0x145841.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363232588171807@newsletter";
      _0x145841.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
      _0x145841.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
      _0x145841.contextInfo.externalAdReply.title = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
      _0x145841.contextInfo.externalAdReply.body = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
      _0x145841.contextInfo.externalAdReply.mediaType = 0x1;
      _0x145841.contextInfo.externalAdReply.sourceUrl = "https://mr-manul-official-web.vercel.app/";
      _0x145841.contextInfo.externalAdReply.thumbnailUrl = "https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg";
      _0x145841.contextInfo.externalAdReply.renderLargerThumbnail = false;
      _0x145841.contextInfo.externalAdReply.showAdAttribution = true;
      const _0x422aaf = {
        quoted: _0x55ea45
      };
      await _0x18b7c9.sendMessage(_0x4782ff, _0x145841, _0x422aaf);
      _0x47ac06.react("✅");
    }
  } catch (_0x16a73c) {
    console.log(_0x16a73c);
  }
});
const path = require("path");
const _0x596a25 = {
  pattern: "baiscope",
  react: "📑",
  category: "download",
  desc: "baiscope.lk",
  filename: __filename
};
cmd(_0x596a25, async (_0x58440c, _0x11a227, _0x379a5f, {
  from: _0x4651fa,
  q: _0x37b4b8,
  isDev: _0x2f319e,
  reply: _0x2768f7
}) => {
  try {
    if (!_0x37b4b8) {
      return await _0x2768f7("*Please provide a search query! (e.g., Avatar)*");
    }
    const _0x33cb27 = "https://www.baiscope.lk/?s=" + encodeURIComponent(_0x37b4b8);
    const _0x2b5772 = await axios.get(_0x33cb27);
    const _0x3e1597 = cheerio.load(_0x2b5772.data);
    let _0x300118 = [];
    _0x3e1597("article.elementor-post").each((_0x58405d, _0x3c37d7) => {
      const _0x42f82d = _0x3e1597(_0x3c37d7).find("h5.elementor-post__title > a").text().trim();
      const _0x43d20c = _0x3e1597(_0x3c37d7).find("h5.elementor-post__title > a").attr("href");
      const _0x13cc8c = _0x3e1597(_0x3c37d7).find(".elementor-post__thumbnail img").attr("src");
      if (_0x42f82d && _0x43d20c && _0x13cc8c) {
        const _0x170e8d = {
          title: _0x42f82d,
          episodeLink: _0x43d20c,
          imgUrl: _0x13cc8c
        };
        _0x300118.push(_0x170e8d);
      }
    });
    if (_0x300118.length === 0) {
      return await _0x2768f7("No results found for: " + _0x37b4b8);
    }
    let _0x9a6694 = "📺 Search Results for *" + _0x37b4b8 + ":*\n\n";
    _0x300118.forEach((_0x441cd3, _0x264c24) => {
      _0x9a6694 += "*" + (_0x264c24 + 1) + ".* " + _0x441cd3.title + "\n🔗 Link: " + _0x441cd3.episodeLink + "\n\n";
    });
    const _0x139623 = {
      mentionedJid: ["94742274855@s.whatsapp.net"],
      groupMentions: [],
      forwardingScore: 0x3e7,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {},
      externalAdReply: {}
    };
    _0x139623.forwardedNewsletterMessageInfo.newsletterJid = "120363232588171807@newsletter";
    _0x139623.forwardedNewsletterMessageInfo.newsletterName = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
    _0x139623.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
    _0x139623.externalAdReply.title = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
    _0x139623.externalAdReply.body = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
    _0x139623.externalAdReply.mediaType = 0x1;
    _0x139623.externalAdReply.sourceUrl = "https://mr-manul-official-web.vercel.app/";
    _0x139623.externalAdReply.thumbnailUrl = "https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg";
    _0x139623.externalAdReply.renderLargerThumbnail = false;
    _0x139623.externalAdReply.showAdAttribution = true;
    const _0x2bb20a = {
      text: _0x9a6694,
      contextInfo: _0x139623
    };
    const _0x481094 = {
      quoted: _0x379a5f
    };
    const _0x28c890 = await _0x58440c.sendMessage(_0x4651fa, _0x2bb20a, _0x481094);
    const _0xb932cd = _0x28c890.key.id;
    _0x58440c.ev.on("messages.upsert", async _0x2bd046 => {
      const _0x13fea3 = _0x2bd046.messages[0];
      if (!_0x13fea3.message) {
        return;
      }
      const _0x320a90 = _0x13fea3.message.conversation || _0x13fea3.message.extendedTextMessage?.["text"];
      const _0x4a1a0d = _0x13fea3.key.remoteJid;
      const _0xe4726f = _0x13fea3.message.extendedTextMessage && _0x13fea3.message.extendedTextMessage.contextInfo.stanzaId === _0xb932cd;
      if (_0xe4726f) {
        const _0x3afb4c = parseInt(_0x320a90.trim());
        if (!isNaN(_0x3afb4c) && _0x3afb4c > 0 && _0x3afb4c <= _0x300118.length) {
          const _0x27e104 = _0x300118[_0x3afb4c - 1];
          const _0x1b6eeb = await axios.get(_0x27e104.episodeLink);
          const _0x54b130 = cheerio.load(_0x1b6eeb.data);
          const _0xbb189 = _0x54b130("a.dlm-buttons-button").attr("href");
          if (_0xbb189) {
            const _0x24aad5 = {
              url: _0x27e104.imgUrl
            };
            const _0x14fe30 = {
              mentionedJid: ["94742274855@s.whatsapp.net"],
              groupMentions: [],
              forwardingScore: 0x3e7,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {},
              externalAdReply: {}
            };
            _0x14fe30.forwardedNewsletterMessageInfo.newsletterJid = "120363232588171807@newsletter";
            _0x14fe30.forwardedNewsletterMessageInfo.newsletterName = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
            _0x14fe30.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
            _0x14fe30.externalAdReply.title = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
            _0x14fe30.externalAdReply.body = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
            _0x14fe30.externalAdReply.mediaType = 0x1;
            _0x14fe30.externalAdReply.sourceUrl = "https://mr-manul-official-web.vercel.app/";
            _0x14fe30.externalAdReply.thumbnailUrl = "https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg";
            _0x14fe30.externalAdReply.renderLargerThumbnail = false;
            _0x14fe30.externalAdReply.showAdAttribution = true;
            const _0x57cf45 = {
              image: _0x24aad5,
              caption: "🎬 *" + _0x27e104.title + "*\n🔗 Link: " + _0x27e104.episodeLink + "\n⬇️ Download will follow.",
              contextInfo: _0x14fe30
            };
            const _0x1bfef1 = {
              quoted: _0x13fea3
            };
            await _0x58440c.sendMessage(_0x4a1a0d, _0x57cf45, _0x1bfef1);
            const _0x402e97 = path.join(__dirname, "downloaded_episode.zip");
            const _0x3ce273 = fs.createWriteStream(_0x402e97);
            const _0x29e29e = await axios({
              "url": _0xbb189,
              "method": "GET",
              "responseType": "stream"
            });
            _0x29e29e.data.pipe(_0x3ce273);
            _0x3ce273.on("finish", async () => {
              const _0x2fd913 = {
                url: _0x402e97
              };
              const _0x4d3e00 = {
                document: _0x2fd913,
                mimetype: "application/zip",
                fileName: _0x27e104.title + ".zip",
                caption: "*" + _0x27e104.title + "*\n\n©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚",
                contextInfo: {}
              };
              _0x4d3e00.contextInfo.mentionedJid = ["94742274855@s.whatsapp.net"];
              _0x4d3e00.contextInfo.groupMentions = [];
              _0x4d3e00.contextInfo.forwardingScore = 0x3e7;
              _0x4d3e00.contextInfo.isForwarded = true;
              _0x4d3e00.contextInfo.forwardedNewsletterMessageInfo = {};
              _0x4d3e00.contextInfo.externalAdReply = {};
              _0x4d3e00.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363232588171807@newsletter";
              _0x4d3e00.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
              _0x4d3e00.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
              _0x4d3e00.contextInfo.externalAdReply.title = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
              _0x4d3e00.contextInfo.externalAdReply.body = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
              _0x4d3e00.contextInfo.externalAdReply.mediaType = 0x1;
              _0x4d3e00.contextInfo.externalAdReply.sourceUrl = "https://mr-manul-official-web.vercel.app/";
              _0x4d3e00.contextInfo.externalAdReply.thumbnailUrl = "https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg";
              _0x4d3e00.contextInfo.externalAdReply.renderLargerThumbnail = false;
              _0x4d3e00.contextInfo.externalAdReply.showAdAttribution = true;
              const _0x541d7b = {
                quoted: _0x13fea3
              };
              await _0x58440c.sendMessage(_0x4a1a0d, _0x4d3e00, _0x541d7b);
              fs.unlinkSync(_0x402e97);
            });
            _0x3ce273.on("error", _0x2d86e3 => {
              console.error("Error downloading ZIP file:", _0x2d86e3);
              _0x2768f7("*Error downloading the episode ZIP file.*");
            });
          } else {
            await _0x2768f7("*Download link not found for the selected episode.*");
          }
        } else {
          await _0x2768f7("*Invalid selection. Please choose a valid number.*");
        }
      }
    });
  } catch (_0x3cdf2c) {
    console.error(_0x3cdf2c);
    await _0x2768f7("*An error occurred while scraping the data.*");
  }
});
const _0x1f4618 = {
  pattern: "ginisisila",
  react: "📑",
  category: "download",
  desc: "ginisisilacartoon.net",
  filename: __filename
};
cmd(_0x1f4618, async (_0xd25b97, _0x33bdf6, _0x3ef978, {
  from: _0x49abe7,
  q: _0x5c177c,
  isDev: _0x2f8a3c,
  reply: _0x1b0e3e
}) => {
  try {
    if (!_0x5c177c) {
      return await _0x1b0e3e("*Please provide a search query! (e.g., Garfield)*");
    }
    const _0x471bea = "https://ginisisilacartoon.net/search.php?q=" + encodeURIComponent(_0x5c177c);
    const _0x551e05 = await axios.get(_0x471bea);
    const _0x42a44c = cheerio.load(_0x551e05.data);
    let _0x2a1226 = [];
    _0x42a44c("div.inner-video-cell").each((_0x6eea3f, _0x540854) => {
      const _0x2c6513 = _0x42a44c(_0x540854).find("div.video-title > a").attr("title");
      const _0x37ba27 = _0x42a44c(_0x540854).find("div.posted-time").text().trim();
      const _0x46ba29 = _0x42a44c(_0x540854).find("div.video-title > a").attr("href");
      const _0x3a2194 = _0x42a44c(_0x540854).find("div.inner-video-thumb-wrapper img").attr("src");
      if (_0x2c6513 && _0x46ba29) {
        const _0x2568b1 = {
          title: _0x2c6513,
          postedTime: _0x37ba27,
          episodeLink: "https://ginisisilacartoon.net/" + _0x46ba29,
          imageUrl: _0x3a2194
        };
        _0x2a1226.push(_0x2568b1);
      }
    });
    if (_0x2a1226.length === 0) {
      return await _0x1b0e3e("No results found for: " + _0x5c177c);
    }
    let _0x256780 = "📺 Search Results for *" + _0x5c177c + ":*\n\n";
    _0x2a1226.forEach((_0x3218d6, _0x22ee8e) => {
      _0x256780 += "*" + (_0x22ee8e + 1) + ".* " + _0x3218d6.title + "\n🗓️ Posted: " + _0x3218d6.postedTime + "\n🔗 Link: " + _0x3218d6.episodeLink + "\n\n";
    });
    const _0x4135d6 = {
      mentionedJid: ["94742274855@s.whatsapp.net"],
      groupMentions: [],
      forwardingScore: 0x3e7,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {},
      externalAdReply: {}
    };
    _0x4135d6.forwardedNewsletterMessageInfo.newsletterJid = "120363232588171807@newsletter";
    _0x4135d6.forwardedNewsletterMessageInfo.newsletterName = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
    _0x4135d6.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
    _0x4135d6.externalAdReply.title = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
    _0x4135d6.externalAdReply.body = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
    _0x4135d6.externalAdReply.mediaType = 0x1;
    _0x4135d6.externalAdReply.sourceUrl = "https://mr-manul-official-web.vercel.app/";
    _0x4135d6.externalAdReply.thumbnailUrl = "https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg";
    _0x4135d6.externalAdReply.renderLargerThumbnail = false;
    _0x4135d6.externalAdReply.showAdAttribution = true;
    const _0x3b6f4e = {
      text: _0x256780,
      contextInfo: _0x4135d6
    };
    const _0x6f9906 = {
      quoted: _0x3ef978
    };
    const _0x58ff1b = await _0xd25b97.sendMessage(_0x49abe7, _0x3b6f4e, _0x6f9906);
    const _0x26fa2f = _0x58ff1b.key.id;
    _0xd25b97.ev.on("messages.upsert", async _0x34b633 => {
      const _0x3ce3ec = _0x34b633.messages[0];
      if (!_0x3ce3ec.message) {
        return;
      }
      const _0x331faf = _0x3ce3ec.message.conversation || _0x3ce3ec.message.extendedTextMessage?.["text"];
      const _0x1c1a5b = _0x3ce3ec.key.remoteJid;
      const _0xff4799 = _0x3ce3ec.message.extendedTextMessage && _0x3ce3ec.message.extendedTextMessage.contextInfo.stanzaId === _0x26fa2f;
      if (_0xff4799) {
        const _0x4b73a8 = parseInt(_0x331faf.trim());
        if (!isNaN(_0x4b73a8) && _0x4b73a8 > 0 && _0x4b73a8 <= _0x2a1226.length) {
          const _0x217394 = _0x2a1226[_0x4b73a8 - 1];
          const _0xa7ef7a = "*🪄 ɴᴀᴍᴇ:-* " + _0x217394.title + "\n⏳ *ᴅᴀᴛᴇ:-* " + _0x217394.postedTime + "\n📎 *ᴇᴘɪꜱᴏᴅᴇ ʟɪɴᴋ*:- " + _0x217394.episodeLink + "\n\n☘ *We are uploading the Movie/Episode you requested.*";
          const _0x2d2144 = {
            url: _0x217394.imageUrl
          };
          const _0x4b11e0 = {
            mentionedJid: ["94742274855@s.whatsapp.net"],
            groupMentions: [],
            forwardingScore: 0x3e7,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {},
            externalAdReply: {}
          };
          _0x4b11e0.forwardedNewsletterMessageInfo.newsletterJid = "120363232588171807@newsletter";
          _0x4b11e0.forwardedNewsletterMessageInfo.newsletterName = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
          _0x4b11e0.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
          _0x4b11e0.externalAdReply.title = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
          _0x4b11e0.externalAdReply.body = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
          _0x4b11e0.externalAdReply.mediaType = 0x1;
          _0x4b11e0.externalAdReply.sourceUrl = "https://mr-manul-official-web.vercel.app/";
          _0x4b11e0.externalAdReply.thumbnailUrl = "https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg";
          _0x4b11e0.externalAdReply.renderLargerThumbnail = false;
          _0x4b11e0.externalAdReply.showAdAttribution = true;
          const _0x977546 = {
            image: _0x2d2144,
            caption: _0xa7ef7a,
            contextInfo: _0x4b11e0
          };
          const _0x5176aa = {
            quoted: _0x3ce3ec
          };
          await _0xd25b97.sendMessage(_0x1c1a5b, _0x977546, _0x5176aa);
          const _0x3990b2 = await axios.get(_0x217394.episodeLink);
          const _0x3aed08 = cheerio.load(_0x3990b2.data);
          const _0x91e867 = _0x3aed08("div#player-holder iframe").attr("src");
          if (_0x91e867) {
            const _0xe37f08 = "https://api.fgmods.xyz/api/downloader/gdrive?url=" + _0x91e867 + "&apikey=mnp3grlZ";
            try {
              const _0x39a8b4 = await axios.get(_0xe37f08);
              const _0x2662f9 = _0x39a8b4.data.result.downloadUrl;
              if (_0x2662f9) {
                const _0x323754 = {
                  url: _0x2662f9
                };
                const _0x3b43ac = {
                  document: _0x323754,
                  mimetype: "video/mp4",
                  fileName: "MR JANIYA | " + _0x217394.title + ".mp4",
                  caption: _0x217394.title + " |  ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗\n\n𝐌𝐀𝐍𝐔-𝐌𝐃 ❤",
                  contextInfo: {}
                };
                _0x3b43ac.contextInfo.mentionedJid = ["94742274855@s.whatsapp.net"];
                _0x3b43ac.contextInfo.groupMentions = [];
                _0x3b43ac.contextInfo.forwardingScore = 0x3e7;
                _0x3b43ac.contextInfo.isForwarded = true;
                _0x3b43ac.contextInfo.forwardedNewsletterMessageInfo = {};
                _0x3b43ac.contextInfo.externalAdReply = {};
                _0x3b43ac.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363232588171807@newsletter";
                _0x3b43ac.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
                _0x3b43ac.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
                _0x3b43ac.contextInfo.externalAdReply.title = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
                _0x3b43ac.contextInfo.externalAdReply.body = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
                _0x3b43ac.contextInfo.externalAdReply.mediaType = 0x1;
                _0x3b43ac.contextInfo.externalAdReply.sourceUrl = "https://mr-manul-official-web.vercel.app/";
                _0x3b43ac.contextInfo.externalAdReply.thumbnailUrl = "https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg";
                _0x3b43ac.contextInfo.externalAdReply.renderLargerThumbnail = false;
                _0x3b43ac.contextInfo.externalAdReply.showAdAttribution = true;
                const _0xc3f06a = {
                  quoted: _0x3ce3ec
                };
                await _0xd25b97.sendMessage(_0x1c1a5b, _0x3b43ac, _0xc3f06a);
              } else {
                await _0x1b0e3e("Failed to retrieve the download link for this episode.");
              }
            } catch (_0x4a4ea7) {
              console.error("Error fetching the download link:", _0x4a4ea7);
              await _0x1b0e3e("An error occurred while trying to fetch the download link.");
            }
          } else {
            await _0x1b0e3e("No downloadable link found for this episode.");
          }
        } else {
          await _0x1b0e3e("Please reply with a valid number from the list.");
        }
      }
    });
  } catch (_0x2cb735) {
    _0x1b0e3e("*Error occurred while scraping!*");
    console.error(_0x2cb735);
  }
});
const _0x5e208e = {
  pattern: "apk",
  desc: "Download apk.",
  category: "download",
  filename: __filename
};
cmd(_0x5e208e, async (_0x22f0e8, _0x29bcc2, _0x57d999, {
  from: _0x254b5c,
  quoted: _0x3d7dcf,
  body: _0x51e856,
  isCmd: _0xbffec8,
  command: _0x20913c,
  args: _0x52e5c5,
  q: _0x14060d,
  isGroup: _0x10dc18,
  sender: _0x253666,
  senderNumber: _0x16027f,
  botNumber2: _0x25c3ab,
  botNumber: _0x1591a5,
  pushname: _0x3a047e,
  isMe: _0x38114a,
  isOwner: _0x507e86,
  groupMetadata: _0x32c308,
  groupName: _0x390f0f,
  participants: _0x5a27de,
  groupAdmins: _0x4f893f,
  isBotAdmins: _0x4f3a0d,
  isAdmins: _0x42ac6d,
  reply: _0x20b9f9
}) => {
  try {
    await _0x57d999.react("⬇");
    const _0x3f87ed = "http://ws75.aptoide.com/api/7/apps/search/query=" + _0x14060d + "/limit=1";
    const _0x2f26d9 = await axios.get(_0x3f87ed);
    const _0x3e41d1 = _0x2f26d9.data;
    let _0x8ebdb4 = _0x3e41d1.datalist.list[0].size % 1000000;
    let _0x21844f = "." + _0x8ebdb4;
    let _0x4c72c6 = _0x3e41d1.datalist.list[0].size / 1000000;
    let _0x1a64f8 = _0x4c72c6 - _0x21844f;
    let _0x2de1ad = "\n*「 🗃️𝐌𝐀𝐍𝐔 𝐌𝐃 𝐀𝐏𝐊 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑🗃️ 」*\n\n*╭──📦 APK Details 📦──◦•◦❥•*\n*╎*\n*╎* *🏷️ Nᴀᴍᴇ :* " + _0x3e41d1.datalist.list[0].name + "\n*╎* *📦 Sɪᴢᴇ :* " + _0x1a64f8 + "MB\n*╎* *🔖 Pᴀᴄᴋᴀɢᴇ :* " + _0x3e41d1.datalist.list[0]["package"] + "\n*╎* *📆 Lᴀꜱᴛ Uᴘᴅᴀᴛᴇ :* " + _0x3e41d1.datalist.list[0].updated + "\n*╎* *👤 Dᴇᴠᴇʟᴏᴘᴇʀꜱ :* " + _0x3e41d1.datalist.list[0].developer.name + "\n*╎*\n*╰────────────────────◦•◦❥•*\n\n> *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚*";
    await _0x57d999.react("⬆");
    const _0x52951b = {
      url: _0x3e41d1.datalist.list[0].file.path_alt
    };
    const _0xd80a76 = {
      document: _0x52951b,
      fileName: _0x3e41d1.datalist.list[0].name,
      mimetype: "application/vnd.android.package-archive",
      caption: _0x2de1ad,
      contextInfo: {}
    };
    _0xd80a76.contextInfo.mentionedJid = ["94742274855@s.whatsapp.net"];
    _0xd80a76.contextInfo.groupMentions = [];
    _0xd80a76.contextInfo.forwardingScore = 0x3e7;
    _0xd80a76.contextInfo.isForwarded = true;
    _0xd80a76.contextInfo.forwardedNewsletterMessageInfo = {};
    _0xd80a76.contextInfo.externalAdReply = {};
    _0xd80a76.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363232588171807@newsletter";
    _0xd80a76.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
    _0xd80a76.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
    _0xd80a76.contextInfo.externalAdReply.title = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
    _0xd80a76.contextInfo.externalAdReply.body = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
    _0xd80a76.contextInfo.externalAdReply.mediaType = 0x1;
    _0xd80a76.contextInfo.externalAdReply.sourceUrl = "https://mr-manul-official-web.vercel.app/";
    _0xd80a76.contextInfo.externalAdReply.thumbnailUrl = "https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg";
    _0xd80a76.contextInfo.externalAdReply.renderLargerThumbnail = false;
    _0xd80a76.contextInfo.externalAdReply.showAdAttribution = true;
    const _0x5b81ae = {
      quoted: _0x29bcc2
    };
    await _0x22f0e8.sendMessage(_0x254b5c, _0xd80a76, _0x5b81ae);
    await _0x57d999.react("✅");
  } catch (_0x3833c1) {
    console.log(_0x3833c1);
    _0x20b9f9('' + _0x3833c1);
  }
});
const _0x5e5c3d = {
  pattern: "gdrive",
  desc: "To download Gdrive files.",
  react: "🌐",
  category: "download",
  filename: __filename
};
cmd(_0x5e5c3d, async (_0x38a8c4, _0x12df97, _0x20b9aa, {
  from: _0x3f8dbf,
  quoted: _0x2c32d1,
  body: _0x231f7f,
  isCmd: _0xd4c533,
  command: _0x3b8c69,
  args: _0x49f4eb,
  q: _0x4b2bdd,
  isGroup: _0x1130f3,
  sender: _0x3405dc,
  senderNumber: _0x2a94fe,
  botNumber2: _0x587190,
  botNumber: _0x95bb16,
  pushname: _0x172f85,
  isMe: _0x18f351,
  isOwner: _0x277285,
  groupMetadata: _0x40c43e,
  groupName: _0x585629,
  participants: _0x32e12e,
  groupAdmins: _0x2a7b31,
  isBotAdmins: _0x2137fe,
  isAdmins: _0x2f5c8d,
  reply: _0x15a48f
}) => {
  try {
    const _0x56ebc3 = {
      text: "⬇️",
      key: _0x12df97.key
    };
    const _0x5c622d = {
      react: _0x56ebc3
    };
    await _0x38a8c4.sendMessage(_0x3f8dbf, _0x5c622d);
    if (!_0x4b2bdd) {
      return _0x20b9aa.reply("Please Give Me a vaild Link...");
    }
    const _0x4f3639 = "https://api.fgmods.xyz/api/downloader/gdrive?url=" + _0x4b2bdd + "&apikey=mnp3grlZ";
    const _0x383044 = await axios.get(_0x4f3639);
    const _0x18122a = _0x383044.data.result.downloadUrl;
    if (_0x18122a) {
      const _0x526878 = {
        text: "⬆️",
        key: _0x12df97.key
      };
      const _0x39d969 = {
        react: _0x526878
      };
      await _0x38a8c4.sendMessage(_0x3f8dbf, _0x39d969);
      const _0x523b4c = {
        url: _0x18122a
      };
      const _0x5ba0d5 = {
        mentionedJid: ["94742274855@s.whatsapp.net"],
        groupMentions: [],
        forwardingScore: 0x3e7,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {},
        externalAdReply: {}
      };
      _0x5ba0d5.forwardedNewsletterMessageInfo.newsletterJid = "120363232588171807@newsletter";
      _0x5ba0d5.forwardedNewsletterMessageInfo.newsletterName = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
      _0x5ba0d5.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
      _0x5ba0d5.externalAdReply.title = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
      _0x5ba0d5.externalAdReply.body = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
      _0x5ba0d5.externalAdReply.mediaType = 0x1;
      _0x5ba0d5.externalAdReply.sourceUrl = "https://mr-manul-official-web.vercel.app/";
      _0x5ba0d5.externalAdReply.thumbnailUrl = "https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg";
      _0x5ba0d5.externalAdReply.renderLargerThumbnail = false;
      _0x5ba0d5.externalAdReply.showAdAttribution = true;
      const _0x3c3e95 = {
        document: _0x523b4c,
        mimetype: _0x383044.data.result.mimetype,
        fileName: _0x383044.data.result.fileName,
        caption: "|  © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗\n\n©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚",
        contextInfo: _0x5ba0d5
      };
      const _0x4fe20c = {
        quoted: _0x12df97
      };
      await _0x38a8c4.sendMessage(_0x3f8dbf, _0x3c3e95, _0x4fe20c);
    }
    const _0x2c507 = {
      text: "✅",
      key: _0x12df97.key
    };
    const _0x5b96c4 = {
      react: _0x2c507
    };
    await _0x38a8c4.sendMessage(_0x3f8dbf, _0x5b96c4);
  } catch (_0x4dc7fb) {
    console.log(_0x4dc7fb);
  }
});
const _0x312efd = {};
function _0x30c465(_0xdf6de7, _0x50746c, _0x6e5633, _0x84edc0, _0x5c8d27) {
  return _0x28ad(_0x6e5633 - 0x30b, _0x84edc0);
}
_0x312efd.pattern = "spotify";
_0x312efd.react = "🎵";
_0x312efd.category = "download";
_0x312efd.desc = "Search and download songs from Spotify.";
_0x312efd.filename = __filename;
cmd(_0x312efd, async (_0x230ad4, _0x422161, _0x114c72, {
  from: _0x174cee,
  q: _0x1f4e96,
  reply: _0x25f9c9
}) => {
  try {
    if (!_0x1f4e96) {
      return await _0x25f9c9("*Please provide a song name to search!*");
    }
    let _0x220927 = await fetchJson("https://api.agatz.xyz/api/spotify?message=" + _0x1f4e96);
    let _0x173510 = _0x220927.data;
    let _0x56c1d8 = _0x173510[0];
    if (!_0x173510 || _0x173510.length === 0) {
      return await _0x25f9c9("*No results found for your search! Try a different query.*");
    }
    let _0x3b04a6 = "\n🔍 *Spotify Search Results*\n\n  " + _0x56c1d8.trackName + "*\n\n📀 *Artist*: " + _0x56c1d8.artistName + "\n💽 *Album*: " + _0x56c1d8.albumName + "\n⏱️ *Duration*: " + _0x56c1d8.duration + "\n🔗 *URL*: [Click Here](" + _0x56c1d8.externalUrl + ")\n🎧 *Enjoy the music brought to you by* *Manu-MD Bot*! \n\n🔽 *To download send:*\n\n1. *Audio File* 🎶\n2. *Document File* 📂\n\n> *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚*\n";
    let _0x2d05d6 = "\n📀 *Artist*: " + _0x56c1d8.artistName + "\n💽 *Album*: " + _0x56c1d8.albumName + "\n⏱️ *Duration*: " + _0x56c1d8.duration + "\n🔗 *URL*: [Click Here](" + _0x56c1d8.externalUrl + ")\n🎧 *Enjoy the music brought to you by* *Manu-MD Bot*! ";
    async function _0x1597d1() {
      let _0x122e95 = 0;
      while (_0x122e95 < 100) {
        _0x122e95++;
        console.log("Retrying... Attempt " + _0x122e95);
        try {
          const _0x2a39b0 = await fetchJson("https://api.siputzx.my.id/api/d/spotify?url=" + _0x56c1d8.externalUrl);
          if (_0x2a39b0 && _0x2a39b0.metadata) {
            return _0x2a39b0;
          }
        } catch (_0x5326e6) {
          console.error("Attempt " + _0x122e95 + " failed: " + _0x5326e6.message);
        }
      }
      throw new Error("Failed to get download URL after 100 attempts.");
    }
    let _0x5d5f0a = await _0x1597d1();
    let _0x27a309 = _0x5d5f0a.metadata;
    const _0xb9b792 = {
      url: _0x27a309.cover_url
    };
    const _0x15ed4b = {
      mentionedJid: ["94742274855@s.whatsapp.net"],
      groupMentions: [],
      forwardingScore: 0x3e7,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {},
      externalAdReply: {}
    };
    _0x15ed4b.forwardedNewsletterMessageInfo.newsletterJid = "120363232588171807@newsletter";
    _0x15ed4b.forwardedNewsletterMessageInfo.newsletterName = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
    _0x15ed4b.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
    _0x15ed4b.externalAdReply.title = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
    _0x15ed4b.externalAdReply.body = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
    _0x15ed4b.externalAdReply.mediaType = 0x1;
    _0x15ed4b.externalAdReply.sourceUrl = "https://mr-manul-official-web.vercel.app/";
    _0x15ed4b.externalAdReply.thumbnailUrl = "https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg";
    _0x15ed4b.externalAdReply.renderLargerThumbnail = false;
    _0x15ed4b.externalAdReply.showAdAttribution = true;
    const _0x1e8bac = {
      image: _0xb9b792,
      caption: _0x3b04a6,
      contextInfo: _0x15ed4b
    };
    const _0x2d41e7 = await _0x230ad4.sendMessage(_0x174cee, _0x1e8bac);
    const _0x206f64 = _0x2d41e7.key.id;
    _0x230ad4.addReplyTracker(_0x206f64, async (_0x28f39a, _0x1e6b5a) => {
      if (!_0x28f39a.message) {
        return;
      }
      const _0x597f7e = _0x28f39a.key.remoteJid;
      const _0x4efd77 = {
        text: "⬇️"
      };
      _0x4efd77.key = _0x28f39a.key;
      const _0xfdaeea = {
        react: _0x4efd77
      };
      await _0x230ad4.sendMessage(_0x597f7e, _0xfdaeea);
      const _0x369c26 = _0x5d5f0a.download;
      const _0x3100da = {
        text: "⬆️",
        key: _0x28f39a.key
      };
      const _0x19cbee = {
        react: _0x3100da
      };
      await _0x230ad4.sendMessage(_0x597f7e, _0x19cbee);
      if (_0x1e6b5a === "1") {
        const _0x4b9ee5 = {
          url: _0x369c26
        };
        const _0x283a2a = {
          title: _0x56c1d8.trackName,
          body: _0x56c1d8.albumName,
          mediaType: 0x1,
          sourceUrl: _0x56c1d8.externalUrl,
          thumbnailUrl: _0x27a309.cover_url,
          renderLargerThumbnail: true,
          showAdAttribution: true
        };
        const _0x169c68 = {
          externalAdReply: _0x283a2a
        };
        const _0x2c00ef = {
          audio: _0x4b9ee5,
          mimetype: "audio/mpeg",
          contextInfo: _0x169c68
        };
        const _0xd59e1c = {
          quoted: _0x28f39a
        };
        await _0x230ad4.sendMessage(_0x597f7e, _0x2c00ef, _0xd59e1c);
      } else {
        if (_0x1e6b5a === "2") {
          const _0x468fc8 = {
            url: _0x369c26
          };
          const _0x15fc7c = {
            document: _0x468fc8,
            mimetype: "audio/mp3",
            fileName: _0x56c1d8.trackName + ".mp3",
            caption: _0x2d05d6,
            contextInfo: {}
          };
          _0x15fc7c.contextInfo.mentionedJid = ["94742274855@s.whatsapp.net"];
          _0x15fc7c.contextInfo.groupMentions = [];
          _0x15fc7c.contextInfo.forwardingScore = 0x3e7;
          _0x15fc7c.contextInfo.isForwarded = true;
          _0x15fc7c.contextInfo.forwardedNewsletterMessageInfo = {};
          _0x15fc7c.contextInfo.externalAdReply = {};
          _0x15fc7c.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363232588171807@newsletter";
          _0x15fc7c.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
          _0x15fc7c.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
          _0x15fc7c.contextInfo.externalAdReply.title = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
          _0x15fc7c.contextInfo.externalAdReply.body = "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚";
          _0x15fc7c.contextInfo.externalAdReply.mediaType = 0x1;
          _0x15fc7c.contextInfo.externalAdReply.sourceUrl = "https://mr-manul-official-web.vercel.app/";
          _0x15fc7c.contextInfo.externalAdReply.thumbnailUrl = "https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg";
          _0x15fc7c.contextInfo.externalAdReply.renderLargerThumbnail = false;
          _0x15fc7c.contextInfo.externalAdReply.showAdAttribution = true;
          await _0x230ad4.sendMessage(_0x597f7e, _0x15fc7c);
        }
      }
      const _0x3fbd67 = {
        text: "✅",
        key: _0x28f39a.key
      };
      const _0x37ae5f = {
        react: _0x3fbd67
      };
      await _0x230ad4.sendMessage(_0x597f7e, _0x37ae5f);
      console.log("Response sent successfully");
    });
  } catch (_0x90d09a) {
    console.error(_0x90d09a);
    await _0x25f9c9("🚩 *Error occurred while processing your request!*");
  }
});
const _0x1b6c21 = {};
function _0x50cd7e(_0x3c1160, _0x5a6dd5, _0x1846ee, _0x2967fa, _0x53686c) {
  return _0x28ad(_0x3c1160 + 0xec, _0x5a6dd5);
}
_0x1b6c21.on = "body";
cmd(_0x1b6c21, async (_0x3e9248, _0x5b8c65, _0x1955d6, {
  from: _0x1d75ad,
  quoted: _0x1059de,
  body: _0x1271ae,
  isCmd: _0x1f7d1f,
  command: _0x32b8dd,
  args: _0x31c50e,
  q: _0x119be2,
  isGroup: _0x222147,
  sender: _0x106b4a,
  senderNumber: _0x2c2cd0,
  botNumber2: _0x402d0d,
  botNumber: _0x3b1a1a,
  pushname: _0x549edb,
  isMe: _0x23663b,
  isOwner: _0x4c8f1e,
  groupMetadata: _0x320cbb,
  groupName: _0x2cca50,
  participants: _0x4ac941,
  groupAdmins: _0x5884c6,
  isBotAdmins: _0x3a0bd1,
  isAdmins: _0x4a99d7,
  reply: _0x4cd208
}) => {
  let _0x4d39e2 = await axios({
    "method": "POST",
    "url": "https://api.manaxu.my.id/api/ai",
    "headers": {
      "x-api-key": "key-manaxu-free"
    },
    "data": {
      "logic": "your name is Manu-MD AI, කෑවද බන් = හුත්තක් කෑවා , මනුල් = මාව නිර්මාණය කරේ එයා",
      "messages": [{
        "content": "halo kingJS",
        "role": "assistant"
      }, {
        "content": _0x1271ae,
        "role": "user"
      }]
    }
  }).then(_0x2cb183 => {
    return _0x2cb183.data;
  })["catch"](_0x309f9e => {
    return _0x309f9e;
  });
  if (!_0x1f7d1f && config.AI_MODE === "true") {
    if (_0x5b8c65.key.fromMe) {
      return;
    }
    const _0x541135 = {
      text: '' + _0x4d39e2.result
    };
    await _0x3e9248.sendMessage(_0x1d75ad, _0x541135);
  }
});
