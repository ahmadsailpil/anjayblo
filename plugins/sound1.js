let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sound/dj gani-gani.mp3')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*sound1*', 'status@broadcast')
}

handler.help = ['sound1']
handler.tags = ['audio']
handler.command = /^sound1$/i

module.exports = handler