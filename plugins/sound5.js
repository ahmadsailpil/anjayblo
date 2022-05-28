let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sound/dj papamuda.mp3')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*sound5*', 'status@broadcast')
}

handler.help = ['sound5']
handler.tags = ['audio']
handler.command = /^sound5$/i

module.exports = handler