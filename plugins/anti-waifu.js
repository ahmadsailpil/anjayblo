let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./audio/wibu.m4a')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*IH WAIFU YA*', 'status@broadcast')
}

handler.customPrefix = /^waifu/i
handler.command = new RegExp

module.exports = handler