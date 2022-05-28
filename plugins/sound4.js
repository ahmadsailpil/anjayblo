let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sound/dj papali.mp3')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*sound4*', 'status@broadcast')
}

handler.help = ['sound4']
handler.tags = ['audio']
handler.command = /^sound4$/i

module.exports = handler