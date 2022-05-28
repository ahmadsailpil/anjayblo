let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./audio/woahh.mp3')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*WOOW?*', 'status@broadcast')
}

handler.customPrefix = /^(ouh|ooh|o|oo)$/i
handler.command = new RegExp

module.exports = handler