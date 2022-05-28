let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sound/dj zama udah beda.mp3')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*sound8*', 'status@broadcast')
}

handler.help = ['sound8']
handler.tags = ['audio']
handler.command = /^sound8$/i

module.exports = handler