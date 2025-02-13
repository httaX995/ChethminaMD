const {
  sinhalaSub
} = require("mrnima-moviedl");
cmd({
  'pattern': "ckcm",
  'alias': ['movie'],
  'react': '📑',
  'category': "download",
  'desc': "Search movies on sinhalasub and get download links",
  'filename': __filename
}, async (_0x57388a, _0x25908f, _0x5a7bbb, {
  from: _0x5f00ab,
  q: _0x522a3c,
  reply: _0x371d5f
}) => {
  try {
    if (!_0x522a3c) {
      return await _0x371d5f("*Please provide a search query! (e.g., Deadpool)*");
    }
    var _0x24d368 = await sinhalaSub();
    const _0x5c5824 = await _0x24d368.search(_0x522a3c);
    const _0x5959f9 = _0x5c5824.result.slice(0x0, 0xa);
    if (!_0x5959f9 || _0x5959f9.length === 0x0) {
      return await _0x371d5f("No results found for: " + _0x522a3c);
    }
    let _0x5a71c6 = "*🎬CK CineMAX Movie Downloader🎬*\n> 👨🏻‍💻 ᴍᴀᴅᴇ ʙʏ *ᴄʜᴇᴛʜᴍɪɴᴀ ᴋᴀᴠɪꜱʜᴀɴ*\n\n";
    _0x5959f9.forEach((_0x203df6, _0x1152d7) => {
      _0x5a71c6 += '*' + (_0x1152d7 + 0x1) + " | ❭❭◦ 🔮 " + _0x203df6.title + "*\n";
    });
    const _0x3469d1 = await _0x57388a.sendMessage(_0x5f00ab, {
      'text': _0x5a71c6
    }, {
      'quoted': _0x5a7bbb
    });
    const _0x2c39e3 = _0x3469d1.key.id;
    _0x57388a.ev.on('messages.upsert', async _0xf4885f => {
      const _0x5703e1 = _0xf4885f.messages[0x0];
      if (!_0x5703e1.message) {
        return;
      }
      const _0x1508b9 = _0x5703e1.message.conversation || _0x5703e1.message.extendedTextMessage?.["text"];
      const _0x55d809 = _0x5703e1.message.extendedTextMessage && _0x5703e1.message.extendedTextMessage.contextInfo.stanzaId === _0x2c39e3;
      if (_0x55d809) {
        const _0x3df263 = parseInt(_0x1508b9.trim());
        if (!isNaN(_0x3df263) && _0x3df263 > 0x0 && _0x3df263 <= _0x5959f9.length) {
          const _0xa22e01 = _0x5959f9[_0x3df263 - 0x1];
          const _0x51f8f0 = 'https://api-site-2.vercel.app/api/sinhalasub/movie?url=' + encodeURIComponent(_0xa22e01.link);
          try {
            const _0x64ea0c = await axios.get(_0x51f8f0);
            const _0x5469b6 = _0x64ea0c.data.result;
            const _0x291aac = _0x5469b6.dl_links || [];
            if (_0x291aac.length === 0x0) {
              return await _0x371d5f("No PixelDrain links found.");
            }
            let _0x4ccef6 = "*🌟 ᴀᴠᴀɪʟᴀʙʟᴇ Qᴜᴀʟɪᴛɪᴇꜱ 🌟*\n\n";
            _0x291aac.forEach((_0x66c253, _0x299595) => {
              _0x4ccef6 += '*' + (_0x299595 + 0x1) + " | ❭❭◦ 🍀 " + _0x66c253.quality + " [" + _0x66c253.size + "]*\n";
            });
            const _0xb3a0bf = await _0x57388a.sendMessage(_0x5f00ab, {
              'text': _0x4ccef6
            }, {
              'quoted': _0x5703e1
            });
            const _0x50fb94 = _0xb3a0bf.key.id;
            _0x57388a.ev.on("messages.upsert", async _0x59cf50 => {
              const _0x267b62 = _0x59cf50.messages[0x0];
              if (!_0x267b62.message) {
                return;
              }
              const _0x2dcf80 = _0x267b62.message.conversation || _0x267b62.message.extendedTextMessage?.["text"];
              const _0x2a3361 = _0x267b62.message.extendedTextMessage && _0x267b62.message.extendedTextMessage.contextInfo.stanzaId === _0x50fb94;
              if (_0x2a3361) {
                const _0x48bb68 = parseInt(_0x2dcf80.trim());
                if (!isNaN(_0x48bb68) && _0x48bb68 > 0x0 && _0x48bb68 <= _0x291aac.length) {
                  const _0x21b2a8 = _0x291aac[_0x48bb68 - 0x1];
                  const _0x207ee5 = _0x21b2a8.link.split('/').pop();
                  await _0x57388a.sendMessage(_0x5f00ab, {
                    'react': {
                      'text': '⬇️',
                      'key': _0x5a7bbb.key
                    }
                  });
                  const _0x56e5a4 = "https://pixeldrain.com/api/file/" + _0x207ee5;
                  await _0x57388a.sendMessage(_0x5f00ab, {
                    'react': {
                      'text': '⬆',
                      'key': _0x5a7bbb.key
                    }
                  });
                  await _0x57388a.sendMessage(_0x5f00ab, {
                    'document': {
                      'url': _0x56e5a4
                    },
                    'mimetype': "video/mkv",
                    'fileName': "🎬CK CineMAX🎬 -" + _0x5469b6.title + " - " + _0x21b2a8.quality + ".mkv",
                    'caption': "*🍀ᴛɪᴛʟᴇ ➠* " + _0x5469b6.title + "\n*🌟Qᴜᴀʟɪᴛʏ ➠* " + _0x21b2a8.quality + "\n\n> 👨🏻‍💻 *ᴄʜᴇᴛʜᴍɪɴᴀ ᴋᴀᴠɪꜱʜᴀɴ*",
                    'contextInfo': {
                      'mentionedJid': [],
                      'externalAdReply': {
                        'title': _0x5469b6.title,
                        'body': "👨🏻‍💻 ᴄʜᴇᴛʜᴍɪɴᴀ ᴋᴀᴠɪꜱʜᴀɴ",
                        'mediaType': 0x1,
                        'sourceUrl': _0xa22e01.link,
                        'thumbnailUrl': _0x5469b6.image
                      }
                    }
                  }, {
                    'quoted': _0x267b62
                  });
                  await _0x57388a.sendMessage(_0x5f00ab, {
                    'react': {
                      'text': '✅',
                      'key': _0x5a7bbb.key
                    }
                  });
                } else {
                  await _0x371d5f("Invalid selection. Please reply with a valid number.");
                }
              }
            });
          } catch (_0x105a5c) {
            console.error("Error fetching movie details:", _0x105a5c);
            await _0x371d5f("An error occurred while fetching movie details. Please try again.");
          }
        } else {
          await _0x371d5f("Invalid selection. Please reply with a valid number.");
        }
      }
    });
  } catch (_0x29d828) {
    console.error("Error during search:", _0x29d828);
    _0x371d5f("*An error occurred while searching!*");
  }
});
