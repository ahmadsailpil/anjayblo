let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./audio/sholawat.m4a')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*SHOLAWAT*', 'status@broadcast')
}

handler.customPrefix = /^sholawat$/i
handler.command = new RegExp

module.exports = handler