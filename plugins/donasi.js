let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'DONASIBOT')).buffer(), `
┌〔 Donasi • Emoney 〕
├ PULSA : 083848128003
├ DANA : 083848128003
├ AXIS  : 083848128003
└────
JIKA MINAT SILAHKAN👇👌👍
https://wa.me/6283160327945?text=Assalamu'alaikum+Bang+mau+donasi+nih
`.trim(), footer, 'sewabotgroup', '.sewabotgc', 'buypremium', '.buypremium', 'donasibot', '.donasi')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler