let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./audio/adaapa.m4a')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*ADA APA*', 'status@broadcast')
}

handler.customPrefix = /^ada apa$/i
handler.command = new RegExp

module.exports = handler