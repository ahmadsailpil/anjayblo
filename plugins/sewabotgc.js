let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'SEWA BOT GROUP')).buffer(), `
( *SEWA BOT GROUP* )
Rp. 5.000: 5 hari
Rp. 10.000: 1 minggu
Rp. 20.000: 1 bulan
Rp. 25.000: 2 bulan
Rp. 30.000: 3 bulan
Rp. 40.000: unlimited

JIKA MINAT SILAHKAN KLIK BUTTON DI BAWAH INI
`.trim(), footer, 'ownerbot', '.owner', 'donasibot', '.donasi', 'buypremium', '.buypremium')
handler.tags = ['main']
handler.command = /^(sewabotgc|sewabotgroup)$/i
handler.help = ['sewabotgc', 'sewabotgroup']
module.exports = handler
//ridho