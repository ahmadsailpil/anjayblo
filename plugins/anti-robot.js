let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./audio/robot.m4a')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*ASTRO BOT*', 'status@broadcast')
}

handler.customPrefix = /^(robot|bot|astro|astrobot|astro bot)$/i
handler.command = new RegExp

module.exports = handler