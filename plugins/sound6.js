let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sound/dj tante.mp3')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*sound6*', 'status@broadcast')
}

handler.help = ['sound6']
handler.tags = ['audio']
handler.command = /^sound6$/i

module.exports = handler