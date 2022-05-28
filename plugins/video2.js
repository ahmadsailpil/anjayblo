let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./tmp/dj2.mp4')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*dj2*', 'status@broadcast')
}

handler.help = ['djvideo2']
handler.tags = ['audio']
handler.command = /^djvideo2$/i
handler.limit = 6

module.exports = handler