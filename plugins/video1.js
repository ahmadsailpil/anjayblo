let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./tmp/dj1.mp4')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*dj1*', 'status@broadcast')
}

handler.help = ['djvideo1']
handler.tags = ['audio']
handler.command = /^djvideo1$/i
handler.limit = 6

module.exports = handler