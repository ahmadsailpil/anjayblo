let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'BUY PREMIUM')).buffer(), `
( *BUY PREMIUM* )
Rp. 10.000: 1 minggu
Rp. 15.000: 2 minggu
Rp. 20.000: 1 bulan
Rp. 30.000: 2 bulan
Rp. 45.000: 3 bulan
Rp. 50.000: unlimited

JIKA MINAT SILAHKAN KLIK BUTTON DI BAWAH INI
`.trim(), footer, 'OWNER BOT', '.owner')
handler.tags = ['main']
handler.command = /^buypremium$/i
handler.help = ['buypremium']
module.exports = handler
//bagus ganz