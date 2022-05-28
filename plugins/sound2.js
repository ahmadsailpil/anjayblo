let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sound/dj komangmontage.mp3')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*sound2*', 'status@broadcast')
}

handler.help = ['sound2']
handler.tags = ['audio']
handler.command = /^sound2$/i

module.exports = handler