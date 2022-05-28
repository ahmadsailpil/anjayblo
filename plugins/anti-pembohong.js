let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./audio/pembohong.mp3')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*PEMBOHONG*', 'status@broadcast')
}

handler.customPrefix = /^(bohong|asli)$/i
handler.command = new RegExp

module.exports = handler