let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./audio/gmao.m4a')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*GAK MAU😔*', 'status@broadcast')
}

handler.customPrefix = /^(mau gak|mau gk|mau)$/i
handler.command = new RegExp

module.exports = handler