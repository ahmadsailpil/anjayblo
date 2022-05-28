let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sound/dj tau tau.mp3')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*sound7*', 'status@broadcast')
}

handler.help = ['sound7']
handler.tags = ['audio']
handler.command = /^sound7$/i

module.exports = handler