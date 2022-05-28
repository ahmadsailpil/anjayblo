let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sound/dj lolay.mp3')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*sound3*', 'status@broadcast')
}

handler.help = ['sound3']
handler.tags = ['audio']
handler.command = /^sound3$/i

module.exports = handler