let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.send2ButtonLoc(m.chat, await (await fetch(image + '')).buffer(), `
yu join group ku 
Linkgc: 
GRUB FAXT BOT: ${gc1}


JB OHLX STORE: ${gc2}

Link https://chat.whatsapp.com/GOE2OrRRxWSCkE9yHGkTKG
kalo loh ngebot join silahkan
🤖📁
`.trim(), footer, 'MENU BOT', '.menu', 'OWNER BOT', '.owner')
handler.help = ['gcbot', 'groupbot']
handler.tags = ['info']
handler.command = /^gcbot|groupbot$/i

module.exports = handler