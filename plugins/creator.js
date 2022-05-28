let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'owner bot')).buffer(), `
mau donasi ya kak?
-> mau tanya owner ku jangan spam ya kak
dan jangan lupa yang sopan

nih owner ku=> *@${global.kontak1[0].split`@`[0]}*
Nih owner ku => *@${global.kontak2[0].split`@`[0]}*
`.trim(), footer, 'groupbot', '.gcbot', 'donasi', '.donasi')
handler.help = ['creator', 'owner']
handler.tags = ['info']
handler.command = /^creator|owner$/i

module.exports = handler