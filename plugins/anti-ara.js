let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./audio/araara.m4a')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*ARA ARA*', 'status@broadcast')
}

handler.customPrefix = /^(ara|arara|ara ara)$/i
handler.command = new RegExp

module.exports = handler