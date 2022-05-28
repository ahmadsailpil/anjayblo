let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./audio/yagktau.m4a')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*YA GAK TAU 😒🤦*', 'status@broadcast')
}

handler.customPrefix = /^(tau gak|tau|siapa yang tau|yang tau|loh tau gak|tau gak sih)$/i
handler.command = new RegExp

module.exports = handler