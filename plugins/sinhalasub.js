const {
  cmd
} = require("../command");
const {
  SinhalaSub
} = require("@sl-code-lords/movie-api");
const {
  PixaldrainDL
} = require("pixaldrain-sinhalasub");
cmd({
  'pattern': 'ckdl2',
  'desc': "Search for a movie and get details and download options.",
  'category': "movie",
  'react': '🔍',
  'filename': __filename
}, async (_0x395d16, _0x2e82df, _0x12cac3, {
  from: _0x444fa8,
  q: _0x171c6a,
  reply: _0x427824
}) => {
  try {
    const _0x42b529 = _0x171c6a.trim();
    if (!_0x42b529) {
      return _0x427824("Please provide a movie or TV show name to search.");
    }
    const _0x1a57d3 = await SinhalaSub.get_list.by_search(_0x42b529);
    if (!_0x1a57d3.status || _0x1a57d3.results.length === 0x0) {
      return _0x427824("No results found.");
    }
    let _0x4986b6 = "Search Results:\n\n";
    _0x1a57d3.results.forEach((_0x41c32f, _0x213d21) => {
      _0x4986b6 += _0x213d21 + 0x1 + ". " + _0x41c32f.title + "\nType: " + _0x41c32f.type + "\nLink: " + _0x41c32f.link + "\n\n";
    });
    const _0x5ad086 = async _0x50d200 => {
      const _0xc089c2 = _0x50d200.messages[0x0];
      if (!_0xc089c2.message || !_0xc089c2.message.extendedTextMessage) {
        return;
      }
      const _0x17ed98 = _0xc089c2.message.extendedTextMessage.text.trim();
      const _0x425c05 = parseInt(_0x17ed98) - 0x1;
      if (_0x425c05 < 0x0 || _0x425c05 >= _0x1a57d3.results.length) {
        await _0x395d16.sendMessage(_0x444fa8, {
          'react': {
            'text': '❌',
            'key': _0x2e82df.key
          }
        });
        return _0x427824("❗ Invalid selection. Please choose a valid number from the search results.");
      }
      const _0x4c83a9 = _0x1a57d3.results[_0x425c05];
      const _0x14fb8f = _0x4c83a9.link;
      const _0x58460b = await SinhalaSub.movie(_0x14fb8f);
      if (!_0x58460b || !_0x58460b.status || !_0x58460b.result) {
        return _0x427824("❗ Movie details not found.");
      }
      const _0x5b9efc = _0x58460b.result;
      let _0x55a9e8 = _0x5b9efc.title + "\n\n";
      _0x55a9e8 += "📅 𝖱𝖾𝗅𝖾𝖺𝗌𝖾 𝖣𝖺𝗍𝖾: " + _0x5b9efc.release_date + "\n";
      _0x55a9e8 += "🗺 𝖢𝗈𝗎𝗇𝗍𝗋𝗒: " + _0x5b9efc.country + "\n";
      _0x55a9e8 += "⏰ 𝖣𝗎𝗋𝖺𝗍𝗂𝗈𝗇: " + _0x5b9efc.duration + "\n";
      const _0x2bc79d = Array.isArray(_0x5b9efc.genres) ? _0x5b9efc.genres.join(", ") : _0x5b9efc.genres;
      _0x55a9e8 += "🎭 𝖦𝖾𝗇𝖾𝗋𝖾𝗌: " + _0x2bc79d + "\n";
      _0x55a9e8 += "⭐ 𝖨𝗆𝖽𝖻 𝖱𝖺𝗍𝗂𝗇𝗀: " + _0x5b9efc.IMDb_Rating + "\n";
      _0x55a9e8 += "🎬 𝖣𝗂𝗋𝖾𝖼𝗍𝗈𝗋: " + _0x5b9efc.director.name + "\n\n";
      _0x55a9e8 += "乂 REPLY BELOW NUMBER\n\n";
      _0x55a9e8 += "1 | 𝖲𝖣 - 480𝗉\n";
      _0x55a9e8 += "2 | 𝖧𝖣 - 720p\n";
      _0x55a9e8 += "3 | 𝖥𝖧𝖣 - 1080p\n\n";
      _0x55a9e8 += "> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ Avishka_X-MD ";
      const _0x1abe31 = _0x5b9efc.images && _0x5b9efc.images.length > 0x0 ? _0x5b9efc.images[0x0] : null;
      const _0x20a92a = await _0x395d16.sendMessage(_0x444fa8, {
        'image': {
          'url': _0x1abe31
        },
        'caption': _0x55a9e8,
        'contextInfo': {
          'forwardingScore': 0x3e7,
          'isForwarded': true
        }
      }, {
        'quoted': _0x2e82df
      });
      const _0x28e60e = async _0x8d5ca0 => {
        const _0x181f5c = _0x8d5ca0.messages[0x0];
        if (!_0x181f5c.message || !_0x181f5c.message.extendedTextMessage) {
          return;
        }
        const _0x18c176 = _0x181f5c.message.extendedTextMessage.text.trim();
        if (_0x181f5c.message.extendedTextMessage.contextInfo.stanzaId === _0x20a92a.key.id) {
          let _0x5c33ed;
          switch (_0x18c176) {
            case 'SD':
              _0x5c33ed = "SD 480p";
              break;
            case 'HD':
              _0x5c33ed = "HD 720p";
              break;
            case 'FHD':
              _0x5c33ed = "FHD 1080p";
              break;
            default:
              await _0x395d16.sendMessage(_0x444fa8, {
                'react': {
                  'text': '❌',
                  'key': _0x2e82df.key
                }
              });
              return _0x427824("❗ Invalid option. Please select from SD, HD, or FHD.");
          }
          try {
            const _0x4abf1a = await PixaldrainDL(_0x14fb8f, _0x5c33ed, "direct");
            if (_0x4abf1a) {
              await _0x395d16.sendMessage(_0x444fa8, {
                'document': {
                  'url': _0x4abf1a
                },
                'mimetype': "video/mp4",
                'fileName': "🎬Avishka_X-MD ᴍᴏᴠɪᴇꜱ🎬(" + _0x5b9efc.title + ").mp4",
                'caption': _0x5b9efc.title + " - " + _0x5c33ed + "\n\n> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ Avishka_X-MD "
              }, {
                'quoted': _0x2e82df
              });
              await _0x395d16.sendMessage(_0x444fa8, {
                'react': {
                  'text': '✅',
                  'key': _0x2e82df.key
                }
              });
            } else {
              await _0x395d16.sendMessage(_0x444fa8, {
                'react': {
                  'text': '❌',
                  'key': _0x2e82df.key
                }
              });
              return _0x427824("❗ Could not find the " + _0x5c33ed + " download link. Please check the URL or try another quality.");
            }
          } catch (_0x282919) {
            console.error("Error in PixaldrainDL function:", _0x282919);
            await _0x395d16.sendMessage(_0x444fa8, {
              'react': {
                'text': '❌',
                'key': _0x2e82df.key
              }
            });
            return _0x427824("❗ An error occurred while processing your download request.");
          }
        }
      };
      _0x395d16.ev.on('messages.upsert', _0x28e60e);
      setTimeout(() => {
        _0x395d16.ev.off("messages.upsert", _0x28e60e);
      }, 0xea60);
    };
    _0x395d16.ev.on("messages.upsert", _0x5ad086);
    setTimeout(() => {
      _0x395d16.ev.off("messages.upsert", _0x5ad086);
    }, 0xea60);
  } catch (_0x381fa5) {
    console.log(_0x381fa5);
    await _0x395d16.sendMessage(_0x444fa8, {
      'react': {
        'text': '❌',
        'key': _0x2e82df.key
      }
    });
    return _0x427824("❗ Error: " + _0x381fa5.message);
  }
});
