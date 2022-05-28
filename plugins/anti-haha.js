let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./audio/haha.m4a')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*HAHA*', 'status@broadcast')
}

handler.customPrefix = /^haha$/i
handler.command = new RegExp

module.exports = handler