let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./src/Nya.mp3')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*nyak ari gato*', 'status@broadcast')
}

handler.customPrefix = /^ari gato$/i
handler.command = new RegExp

module.exports = handler